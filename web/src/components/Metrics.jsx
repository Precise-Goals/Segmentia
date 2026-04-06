import React from "react";

export default function Metrics() {
  return (
    <>
      <section
        id="innovation"
        className="py-40 bg-[#050505] relative overflow-hidden"
      >
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6 text-center border-b md:border-b-0 md:border-r border-white/5 pb-16 md:pb-0">
              <div className="font-mono text-7xl font-bold text-primary">
                0.6006
              </div>
              <div className="font-headline uppercase tracking-[0.3em] text-[10px] font-bold text-zinc-500">
                Mean intersection over union
              </div>
              <p className="text-[10px] font-mono text-zinc-600 max-w-[200px] mx-auto">
                Industry-leading segmentation accuracy in high-clutter
                environments.
              </p>
            </div>
            <div className="space-y-6 text-center border-b md:border-b-0 md:border-r border-white/5 pb-16 md:pb-0">
              <div className="font-mono text-7xl font-bold text-on-surface">
                0.8444
              </div>
              <div className="font-headline uppercase tracking-[0.3em] text-[10px] font-bold text-zinc-500">
                Mean Average Precision
              </div>
              <p className="text-[10px] font-mono text-zinc-600 max-w-[200px] mx-auto">
                Reliable detection across 10+ distinct terrain classes.
              </p>
            </div>
            <div className="space-y-6 text-center">
              <div className="font-mono text-7xl font-bold text-primary">
                14ms
              </div>
              <div className="font-headline uppercase tracking-[0.3em] text-[10px] font-bold text-zinc-500">
                Edge Inference Latency
              </div>
              <p className="text-[10px] font-mono text-zinc-600 max-w-[200px] mx-auto">
                Real-time processing on radiation-hardened hardware.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
