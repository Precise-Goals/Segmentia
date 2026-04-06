import React from "react";
import TelemetryModel from "./TelemetryModel";

export default function TelemetryArea() {
  return (
    <>
      <section id="model" className="py-40 bg-surface-dim grid-bg">
        <div className="container mx-auto px-8">
          <div className="mb-20 border-l-2 border-primary-container pl-10 max-w-2xl">
            <h2 className="font-headline text-4xl font-bold tracking-tight">
              REAL-TIME TELEMETRY
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-tertiary mt-4">
              Instrument 04 // Martian Surface Probe // Latency: 14ms
            </p>
          </div>
          <div className="relative rounded-sm overflow-hidden aspect-[21/9] bg-surface-container-lowest border border-outline-variant/10 shadow-[0_0_100px_rgba(255,69,0,0.1)]">
            <TelemetryModel />
            {/* HUD Overlays */}
            <div className="absolute inset-0 pointer-events-none p-12 font-mono">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-2">
                  <div className="bg-primary-container text-white px-3 py-1 text-[9px] font-bold tracking-widest">
                    SCANNING_LASER_ACTIVE
                  </div>
                  <div className="text-[10px] text-zinc-400 bg-black/40 px-2 py-1">
                    COORD_V: 18.4429 // COORD_H: -77.4510
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-primary font-bold animate-pulse">
                    SIGNAL LOCK: 100%
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-1 uppercase">
                    Relay: MRO-ALPHA-NINER
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 border border-primary-container/20 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-primary-container"></div>
                  <div className="absolute w-12 h-px bg-primary-container/40 -left-6"></div>
                  <div className="absolute w-12 h-px bg-primary-container/40 -right-6"></div>
                  <div className="absolute h-12 w-px bg-primary-container/40 -top-6"></div>
                  <div className="absolute h-12 w-px bg-primary-container/40 -bottom-6"></div>
                </div>
              </div>
              <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                <div className="flex gap-6">
                  <div className="glass-panel p-5 min-w-[120px]">
                    <div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-1">
                      Incline
                    </div>
                    <div className="text-2xl text-on-surface">12.4°</div>
                  </div>
                  <div className="glass-panel p-5 min-w-[200px] border-l-4 border-l-[#FF4500]">
                    <div className="text-[9px] text-[#FF4500] uppercase tracking-widest mb-1">
                      Status
                    </div>
                    <div className="text-xl text-on-surface">
                      OBSTACLE_AVOIDED
                    </div>
                  </div>
                </div>
                <div className="glass-panel p-5 text-right">
                  <div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-1">
                    Location
                  </div>
                  <div className="text-sm text-on-surface">
                    JEZERO CRATER BASIN
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
