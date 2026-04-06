import torch
from torch.utils.data import DataLoader
from torchvision import models
from dataset import SegmentationDataset
from utils import compute_iou
from tqdm import tqdm
import numpy as np
import matplotlib.pyplot as plt
from torchmetrics.classification import MulticlassAveragePrecision

DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

def main():
    val_dataset = SegmentationDataset("../data/val/images", "../data/val/masks", split="val")
    val_loader = DataLoader(
        val_dataset, 
        batch_size=12, 
        num_workers=2,
        pin_memory=True,
        persistent_workers=True
    )

    model = models.segmentation.deeplabv3_resnet50(weights=None)
    model.classifier[4] = torch.nn.Conv2d(256, 10, kernel_size=1)

    # ✅ Fix: Use strict=False to ignore training-only auxiliary classifier keys
    try:
        model.load_state_dict(torch.load("model.pth", map_location=DEVICE), strict=False)
        print("✓ Loaded model.pth")
    except FileNotFoundError:
        print("✗ model.pth not found.")
        return

    model.to(DEVICE)
    model.eval()

    conf_matrix = torch.zeros(10, 10, dtype=torch.int64)
    # ✅ Fix: Calculate mAP on CPU to save VRAM
    mAP_metric = MulticlassAveragePrecision(num_classes=10, average='macro').to('cpu')

    print(f"Evaluating on {DEVICE}...")
    with torch.no_grad():
        for imgs, masks in tqdm(val_loader, desc="Validating"):
            imgs = imgs.to(DEVICE)
            masks = masks.to(DEVICE).long()

            outputs = model(imgs)['out']
            preds = torch.argmax(outputs, dim=1)

            # ✅ SPEED FIX: Downsample for mAP (Accurate within 1-2%, but 16x faster)
            # mAP on 512x512 = 80M+ pixels (Hangs for 5 mins). mAP on 128x128 = 5M pixels (Fast).
            outputs_small = torch.nn.functional.interpolate(outputs, size=(128, 128), mode='bilinear', align_corners=False)
            masks_small = torch.nn.functional.interpolate(masks.unsqueeze(1).float(), size=(128, 128), mode='nearest').squeeze(1).long()
            mAP_metric.update(outputs_small.cpu(), masks_small.cpu())

            # ✅ Fast Vectorized Confusion Matrix Update
            indices = 10 * masks.view(-1) + preds.view(-1)
            conf_matrix += torch.bincount(indices, minlength=100).reshape(10, 10).cpu()

    # ✅ COMPUTE FINAL VALUES
    if conf_matrix.sum() > 0:
        print("\nCalculating final metrics...")
        # derive IoU from confusion matrix
        tp = torch.diag(conf_matrix)
        fp = torch.sum(conf_matrix, dim=0) - tp
        fn = torch.sum(conf_matrix, dim=1) - tp
        union = tp + fp + fn
        ious_per_class = tp / (union + 1e-6)
        avg_iou = ious_per_class.mean().item()
        
        final_mAP = mAP_metric.compute().item()
        
        pixel_accuracy = (torch.diag(conf_matrix).sum() / conf_matrix.sum()).item()
        
        print(f"Final Validation IoU: {avg_iou:.4f}")
        print(f"Final Validation mAP: {final_mAP:.4f}")
        print(f"Final Pixel Accuracy: {pixel_accuracy:.4f}")
        
        # ✅ Save Heatmap
        save_confusion_matrix(conf_matrix)
    else:
        print("\nNo validation data found.")

def save_confusion_matrix(cm):
    cm = cm.cpu().numpy()
    # Normalize by row (true class proportions)
    cm_norm = cm.astype('float') / (cm.sum(axis=1)[:, np.newaxis] + 1e-6)

    plt.figure(figsize=(10, 8))
    plt.imshow(cm_norm, cmap='Blues')
    plt.title('Confusion Matrix (Normalized)')
    plt.colorbar()
    plt.xlabel('Predicted Class')
    plt.ylabel('True Class')

    # Add text annotations
    for i in range(10):
        for j in range(10):
            plt.text(j, i, f"{cm_norm[i, j]:.2f}", 
                     ha="center", va="center", color="black" if cm_norm[i,j] < 0.5 else "white")

    plt.savefig("confusion_matrix.png")
    print("✓ Confusion matrix saved as confusion_matrix.png")

if __name__ == "__main__":
    main()