import React from "react";
import {
  MdAgriculture,
  MdSpaceDashboard,
  MdPrecisionManufacturing,
} from "react-icons/md";

export default function Markets() {
  return (
    <>
      <section id="markets" className="py-40 bg-surface-dim relative border-y border-white/5">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="font-mono text-primary text-[10px] tracking-[0.5em] uppercase mb-4">
                Strategic Roadmap
              </div>
              <h2 className="font-headline text-5xl font-bold tracking-tight mb-8">
                GLOBAL TO <br /> GALACTIC SCALE
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-12 opacity-80">
                Segmentia isn't just for Mars. Our autonomous vision systems are
                already disrupting Earth-based industries, providing the
                blueprint for future interplanetary logistics.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="border-t border-primary-container/30 pt-6">
                  <div className="text-3xl font-mono text-white mb-2">
                    $420B
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    Autonomous Mining TAM
                  </div>
                </div>
                <div className="border-t border-primary-container/30 pt-6">
                  <div className="text-3xl font-mono text-white mb-2">12M+</div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    Hectares Mapped p.a.
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {/* Market Card 1 */}
              <div className="glass-panel p-8 hover:bg-white/[0.05] transition-all cursor-default">
                <div className="flex justify-between items-start mb-6">
                  <MdAgriculture className="text-primary text-3xl" />
                  <div className="text-[9px] font-mono text-zinc-500 uppercase">
                    Sector 01
                  </div>
                </div>
                <h4 className="font-headline text-xl font-bold mb-3 uppercase">
                  Autonomous Agriculture
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Precision crop segmentation and terrain-aware irrigation in
                  rural Earth environments.
                </p>
              </div>
              {/* Market Card 2 */}
              <div className="glass-panel p-8 hover:bg-white/[0.05] transition-all cursor-default">
                <div className="flex justify-between items-start mb-6">
                  <MdPrecisionManufacturing className="text-primary text-3xl" />
                  <div className="text-[9px] font-mono text-zinc-500 uppercase">
                    Sector 02
                  </div>
                </div>
                <h4 className="font-headline text-xl font-bold mb-3 uppercase">
                  Resource Extraction
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Navigating complex mine-shafts and hazardous terrain for
                  mineral recovery on Earth &amp; Asteroids.
                </p>
              </div>
              {/* Market Card 3 */}
              <div className="glass-panel p-8 hover:bg-white/[0.05] transition-all cursor-default border-primary-container/20">
                <div className="flex justify-between items-start mb-6">
                  <MdSpaceDashboard className="text-primary text-3xl" />
                  <div className="text-[9px] font-mono text-zinc-500 uppercase">
                    Sector 03
                  </div>
                </div>
                <h4 className="font-headline text-xl font-bold mb-3 uppercase">
                  Interplanetary Logistics
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  The backbone of future Martian logistics—autonomous fleet
                  vision for the High Frontier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
