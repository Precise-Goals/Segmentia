import React from "react";
import { MdOutput, MdViewInAr, MdLayers } from "react-icons/md";

export default function Architecture() {
  return (
    <>
      <section id="architecture" className="py-40 bg-surface-container-lowest topo-bg">
<div className="container mx-auto px-8">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-24">
<div className="font-mono text-primary text-[10px] tracking-[0.5em] uppercase mb-4">Core Engine</div>
<h2 className="font-headline text-5xl font-bold mb-6">DEEPLABV3+ OPTIMIZED</h2>
<p className="text-zinc-500 max-w-2xl mx-auto leading-relaxed">Our implementation of the DeepLabV3+ architecture is custom-tuned for aerospace edge deployment, balancing multi-scale contextual awareness with compute efficiency.</p>
</div>
<div className="relative space-y-16">
{/* Diagram Visualizer */}
<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-container/40 via-primary-container/20 to-transparent hidden lg:block"></div>
{/* ResNet Card */}
<div className="flex flex-col lg:flex-row items-center gap-12 group">
<div className="flex-1 text-right order-2 lg:order-1">
<h3 className="font-headline text-2xl font-bold text-primary mb-3">ResNet-50 Backbone</h3>
<p className="text-zinc-400 text-sm leading-relaxed max-w-md ml-auto">Feature extractor with deep residual connections. We've implemented 'Weight Quantization' to reduce memory footprint by 75% without sacrificing high-fidelity terrain mapping.</p>
<div className="mt-4 flex justify-end gap-3">
<span className="text-[9px] font-mono border border-zinc-700 px-2 py-0.5 text-zinc-500">RESIDUAL_FLOW</span>
<span className="text-[9px] font-mono border border-zinc-700 px-2 py-0.5 text-zinc-500">INT8_QUANTIZED</span>
</div>
</div>
<div className="z-10 w-12 h-12 rounded-full bg-surface-container-high border-4 border-primary-container/30 flex items-center justify-center font-mono text-xs font-bold order-1 lg:order-2">01</div>
<div className="flex-1 order-3 hidden lg:block">
<div className="w-full h-24 glass-panel border-dashed flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
<MdLayers className="text-4xl" />
</div>
</div>
</div>
{/* ASPP Card */}
<div className="flex flex-col lg:flex-row items-center gap-12 group">
<div className="flex-1 hidden lg:block order-1">
<div className="w-full h-24 glass-panel border-dashed flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
<MdViewInAr className="text-4xl" />
</div>
</div>
<div className="z-10 w-12 h-12 rounded-full bg-surface-container-high border-4 border-primary-container/30 flex items-center justify-center font-mono text-xs font-bold order-2">02</div>
<div className="flex-1 order-3">
<h3 className="font-headline text-2xl font-bold text-on-surface mb-3">ASPP Sampler</h3>
<p className="text-zinc-400 text-sm leading-relaxed max-w-md">Atrous Spatial Pyramid Pooling for multi-scale context sensing. Essential for identifying small rock hazards alongside massive geologic formations simultaneously.</p>
<div className="mt-4 flex gap-3">
<span className="text-[9px] font-mono border border-zinc-700 px-2 py-0.5 text-zinc-500">MULTI_SCALE</span>
<span className="text-[9px] font-mono border border-zinc-700 px-2 py-0.5 text-zinc-500">DILATED_CONV</span>
</div>
</div>
</div>
{/* Decoder Card */}
<div className="flex flex-col lg:flex-row items-center gap-12 group">
<div className="flex-1 text-right order-2 lg:order-1">
<h3 className="font-headline text-2xl font-bold text-primary mb-3">Precision Decoder</h3>
<p className="text-zinc-400 text-sm leading-relaxed max-w-md ml-auto">Final refinement layer producing pixel-perfect boundaries. Our custom skip-connection logic preserves spatial information through the upsampling process.</p>
<div className="mt-4 flex justify-end gap-3">
<span className="text-[9px] font-mono border border-zinc-700 px-2 py-0.5 text-zinc-500">BILINEAR_REFINE</span>
<span className="text-[9px] font-mono border border-zinc-700 px-2 py-0.5 text-zinc-500">LATENCY_ZERO</span>
</div>
</div>
<div className="z-10 w-12 h-12 rounded-full bg-surface-container-high border-4 border-primary-container/30 flex items-center justify-center font-mono text-xs font-bold order-1 lg:order-2">03</div>
<div className="flex-1 order-3 hidden lg:block">
<div className="w-full h-24 glass-panel border-dashed flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
<MdOutput className="text-4xl" />
</div>
</div>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}
