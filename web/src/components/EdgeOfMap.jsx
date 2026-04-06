import React from "react";

export default function EdgeOfMap() {
  return (
    <>
      <section id="problem" className="py-40 bg-[#080808] relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/3 h-full bg-primary-container/5 blur-[120px] rounded-full -translate-y-1/2"></div>
<div className="container mx-auto px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
<div className="sticky top-32">
<div className="font-mono text-primary text-xs tracking-[0.4em] uppercase mb-6">Strategy // Phase 01</div>
<h2 className="font-headline text-5xl font-bold tracking-tight mb-8">THE EDGE OF <br/> THE MAP</h2>
<div className="space-y-6 text-on-surface-variant text-lg leading-relaxed max-w-lg">
<p>Conventional navigation fails where GPS ends. Our 'Surgical Precision' approach replaces broad estimation with granular, semantic environmental awareness.</p>
<p className="opacity-60">We define the frontier not by its boundaries, but by the density of the data we can extract from its chaos.</p>
</div>
</div>
<div className="space-y-32">
{/* Step 1 */}
<div className="relative pl-16 border-l border-primary-container/30">
<div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary-container flex items-center justify-center font-mono text-[10px] text-white font-bold">1</div>
<h3 className="font-headline text-2xl font-bold mb-4">Data Acquisition</h3>
<p className="text-zinc-400 mb-8 leading-relaxed">Fusing synthetic simulation with high-fidelity real-world captures. We utilize the 'Duality AI Challenge' framework to generate millions of edge-case scenarios—from dust storms to canopy occlusions—ensuring 100% terrain coverage before physical deployment.</p>
<div className="grid grid-cols-2 gap-4">
<div className="glass-panel p-4 rounded">
<div className="text-[10px] font-mono text-primary uppercase mb-2">Synthetic</div>
<div className="text-xs text-zinc-500">14.2M Samples</div>
</div>
<div className="glass-panel p-4 rounded">
<div className="text-[10px] font-mono text-primary uppercase mb-2">In-Situ</div>
<div className="text-xs text-zinc-500">850k Terrain Logs</div>
</div>
</div>
</div>
{/* Step 2 */}
<div className="relative pl-16 border-l border-primary-container/30">
<div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary-container flex items-center justify-center font-mono text-[10px] text-white font-bold">2</div>
<h3 className="font-headline text-2xl font-bold mb-4">Model Training</h3>
<p className="text-zinc-400 mb-6 leading-relaxed">Our models undergo rigorous optimization cycles using distributed GPU clusters. We prioritize semantic segmentation accuracy over raw throughput, achieving surgical pixel-level precision for critical pathfinding.</p>
<ul className="space-y-3 font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary"></span> Cross-Entropy Loss Optimization</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary"></span> Jaccard Index Refinement</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary"></span> Gradient Descent Tuning</li>
</ul>
</div>
{/* Step 3 */}
<div className="relative pl-16 border-l border-primary-container/30">
<div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary-container flex items-center justify-center font-mono text-[10px] text-white font-bold">3</div>
<h3 className="font-headline text-2xl font-bold mb-4">Edge Deployment</h3>
<p className="text-zinc-400 leading-relaxed">Compressed weights optimized for RISC-V and ARM-based aerospace processors. Zero-latency inference allows rovers to make split-second decisions without earth-relay dependency.</p>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}
