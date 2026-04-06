import os
import gc
import torch
import cv2
import matplotlib.pyplot as plt
import numpy as np
from torchvision import models, transforms

# ── Config ────────────────────────────────────────────────────────────────────
DEVICE      = "cuda" if torch.cuda.is_available() else "cpu"
TRIAL_PATH  = "../data/test/images/Trial"
INPUT_SIZE  = 512
USE_FP32    = True
USE_TTA     = True
MAX_IMAGES  = 20

# ── Palette (10 classes) ──────────────────────────────────────────────────────
PALETTE = np.array([
    [ 54, 162, 235],   # 0  sky
    [255, 127,  14],   # 1  ground
    [ 44, 160,  44],   # 2  vegetation
    [214,  39,  40],   # 3  red
    [148, 103, 189],   # 4  purple
    [140,  86,  75],   # 5  brown
    [227, 119, 194],   # 6  pink
    [127, 127, 127],   # 7  grey
    [188, 189,  34],   # 8  olive
    [ 23, 190, 207],   # 9  cyan
], dtype=np.uint8)


# ── Helpers ───────────────────────────────────────────────────────────────────

def mask_to_color(pred_mask: np.ndarray) -> np.ndarray:
    """Convert class index mask to colored RGB image."""
    color_mask = np.zeros((*pred_mask.shape, 3), dtype=np.uint8)
    for cls_idx, color in enumerate(PALETTE):
        color_mask[pred_mask == cls_idx] = color
    return color_mask


def build_model(num_classes: int = 10) -> torch.nn.Module:
    """Build DeepLabV3-ResNet50 with exact number of classes."""
    model = models.segmentation.deeplabv3_resnet50(
        weights=None,
        aux_loss=True
    )

    # Replace heads with correct num_classes
    model.classifier[4] = torch.nn.Conv2d(256, num_classes, kernel_size=1)
    model.aux_classifier[4] = torch.nn.Conv2d(256, num_classes, kernel_size=1)

    return model


def load_checkpoint(model: torch.nn.Module, checkpoint_path: str, device: str):
    """Safely load checkpoint with class mismatch handling."""
    if not os.path.exists(checkpoint_path):
        raise FileNotFoundError(f"Model file not found: {checkpoint_path}")

    state = torch.load(checkpoint_path, map_location=device, weights_only=True)

    # Filter out mismatched classifier weights (old 21-class head)
    filtered_state = {}
    for k, v in state.items():
        if "classifier.4" in k or "aux_classifier.4" in k:
            continue  # Skip old 21-class layers
        filtered_state[k] = v

    # Load the backbone + compatible parts
    model.load_state_dict(filtered_state, strict=False)
    print("✓  Checkpoint loaded successfully (old classifier heads skipped)")


normalize = transforms.Normalize(
    mean=[0.485, 0.456, 0.406],
    std=[0.229, 0.224, 0.225],
)


def preprocess(rgb: np.ndarray) -> torch.Tensor:
    """Convert image to normalized tensor."""
    t = torch.from_numpy(rgb).permute(2, 0, 1).float() / 255.0
    return normalize(t)


def infer(model: torch.nn.Module, tensor: torch.Tensor, use_tta: bool = True) -> np.ndarray:
    """Inference with optional TTA."""
    inp = tensor.unsqueeze(0).to(DEVICE)

    with torch.no_grad():
        logits = model(inp)['out']

        if use_tta:
            inp_flip = torch.flip(inp, dims=[3])
            logits_f = model(inp_flip)['out']
            logits_f = torch.flip(logits_f, dims=[3])
            logits = (logits + logits_f) * 0.5

    preds = torch.argmax(logits, dim=1).squeeze(0).cpu().numpy()

    # Memory cleanup
    del inp, logits
    if use_tta:
        del inp_flip, logits_f
    torch.cuda.empty_cache()
    gc.collect()

    return preds


# ── Main ──────────────────────────────────────────────────────────────────────

def predict():
    # Build model with 10 classes
    model = build_model(num_classes=10)

    # Load checkpoint safely
    load_checkpoint(model, "model.pth", DEVICE)

    model.to(DEVICE)
    model.eval()

    # FP16 for GTX 1650
    if USE_FP32 and DEVICE == "cuda":
        model = model.half()
        print("✓  FP16 enabled")

    print(f"✓  Model ready on {DEVICE} | Input Size: {INPUT_SIZE} | TTA: {USE_TTA} | FP16: {USE_FP32}")

    # Get images
    if not os.path.isdir(TRIAL_PATH):
        print(f"✗  Directory not found: {TRIAL_PATH}")
        return

    images = sorted(
        f for f in os.listdir(TRIAL_PATH)
        if f.lower().endswith(('.png', '.jpg', '.jpeg'))
    )[:MAX_IMAGES]

    if not images:
        print(f"✗  No images found in {TRIAL_PATH}")
        return

    print(f"✓  Processing {len(images)} images...\n")

    # Visualization
    fig, axes = plt.subplots(
        nrows=len(images),
        ncols=2,
        figsize=(12, 6 * len(images)),
        squeeze=False
    )

    for i, img_name in enumerate(images):
        img_path = os.path.join(TRIAL_PATH, img_name)
        bgr = cv2.imread(img_path)

        if bgr is None:
            print(f"  ⚠  Could not read {img_name}")
            continue

        rgb = cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB)
        resized = cv2.resize(rgb, (INPUT_SIZE, INPUT_SIZE), interpolation=cv2.INTER_LINEAR)

        tensor = preprocess(resized)
        if USE_FP32 and DEVICE == "cuda":
            tensor = tensor.half()

        preds = infer(model, tensor, use_tta=USE_TTA)
        color_pred = mask_to_color(preds)

        # Plot
        axes[i][0].imshow(resized)
        axes[i][0].set_title(f"Original: {img_name}", fontsize=11)
        axes[i][0].axis('off')

        axes[i][1].imshow(color_pred)
        axes[i][1].set_title("Prediction", fontsize=11)
        axes[i][1].axis('off')

        print(f"  [{i+1:2d}/{len(images)}] {img_name} → Done")

    # Save results
    plt.tight_layout()
    out_path = "trial_results.png"
    plt.savefig(out_path, dpi=180, bbox_inches='tight')
    print(f"\n✓  All done! Results saved to: {out_path}")
    plt.show()


if __name__ == "__main__":
    predict()