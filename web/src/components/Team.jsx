import React from "react";

export default function Team() {
  return (
    <>
      <section id="team" className="py-40 bg-surface-dim">
        <div className="container mx-auto px-8">
          <h2 className="font-headline text-3xl font-bold mb-20 text-zinc-500 uppercase tracking-[0.3em] text-center">
            Mission Architects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {/* Architect 1 */}
            <div className="group">
              <div className="aspect-square bg-surface-container-high rounded-sm overflow-hidden mb-8 relative border border-white/5">
                <img
                  className="w-full h-full object-cover transition-all duration-700"
                  data-alt="Sarthak Patil"
                  src="/1.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="font-headline font-bold text-xl mb-1">
                Sarthak Patil
              </div>
              <div className="font-mono text-[10px] text-primary uppercase tracking-[0.2em]">
                Architect Engineer
              </div>
            </div>
            {/* Architect 2 */}
            <div className="group">
              <div className="aspect-square bg-surface-container-high rounded-sm overflow-hidden mb-8 relative border border-white/5">
                <img
                  className="w-full h-full object-cover transition-all duration-700"
                  data-alt="Abdullah Khan"
                  src="/2.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="font-headline font-bold text-xl mb-1">
                Abdullah Khan
              </div>
              <div className="font-mono text-[10px] text-primary uppercase tracking-[0.2em]">
                ML Engineer
              </div>
            </div>
            {/* Architect 3 */}
            <div className="group">
              <div className="aspect-square bg-surface-container-high rounded-sm overflow-hidden mb-8 relative border border-white/5">
                <img
                  className="w-full h-full object-cover transition-all duration-700"
                  data-alt="Ganesh Beldar"
                  src="/3.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="font-headline font-bold text-xl mb-1">
                Ganesh Beldar
              </div>
              <div className="font-mono text-[10px] text-primary uppercase tracking-[0.2em]">
                Data Scientist
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
