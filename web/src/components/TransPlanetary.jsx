import React from "react";

export default function TransPlanetary() {
  return (
    <>
      <section className="py-40 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="font-headline text-5xl font-bold tracking-tight mb-6">
              TRANS-PLANETARY ANALYSIS
            </h2>
            <p className="text-zinc-500 leading-relaxed font-light">
              Cross-platform validation ensuring our models remain resilient
              regardless of the atmosphere or illumination. Geography is just
              data.
            </p>
            <div className="w-16 h-1 bg-primary-container mx-auto mt-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:grid-rows-[284px_284px_284px] auto-rows-[284px]">
            {/* Earth Card Large */}
            <div className="md:col-span-2 md:row-span-2 relative h-full rounded-sm overflow-hidden group">
              <img
                className="w-full h-full object-cover transition-all duration-1000"
                data-alt="Dense green forest with sunlight filtering through leaves"
                src="https://images.pexels.com/photos/6335964/pexels-photo-6335964.jpeg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <div className="font-mono text-[9px] text-primary uppercase tracking-[0.4em] mb-3">
                  Origin // Earth
                </div>
                <h3 className="font-headline text-3xl font-bold uppercase tracking-tight">
                  Dense Biome Logic
                </h3>
                <p className="font-mono text-[10px] text-zinc-500 mt-4 leading-loose">
                  VARIABLE_VEGETATION // HYDRO_FLUIDITY // CANOPY_NOISE
                </p>
              </div>
            </div>
            {/* Martian Card Small 1 */}
            <div className="md:col-span-1 md:row-span-1 relative h-full rounded-sm overflow-hidden group">
              <img
                className="w-full h-full object-cover transition-all duration-1000"
                data-alt="Deep red martian soil"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAILJn3X4a8uyxQQHwemVkdmHPH49Hj4cTsHxiRDfeeY04NweOEpLu4I7H0r7f5FRhyhDUMnMTilnR8NeXaTCsxHyhnD_f_tviBhTS2RsS_79orXYsNNNkOFsZg7_QG4QcfNcrKBEL9tHDVQN1VOcQkKYDu0CRZbQ506XHJAE2OZqz-WeoaAJtxEJ0QHRhcg6-XIpC0rOYSkPnmNqYD4XQied2SKzRt0gFZqpTL4fGETy-oYNq9F4gsjIlRYMLTQuK96KSNWpzYdg"
              />
              <div className="absolute inset-0 bg-primary-container/10 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="font-headline text-lg font-bold uppercase tracking-widest text-primary">
                  Red Dust
                </h3>
              </div>
            </div>
            {/* Martian Card Small 2 */}
            <div className="md:col-span-1 md:row-span-1 relative h-full rounded-sm overflow-hidden group">
              <img
                className="w-full h-full object-cover transition-all duration-1000"
                data-alt="Close up of rocky martian basin"
                src="https://static.vecteezy.com/system/resources/thumbnails/071/377/844/small/red-planet-landscape-shows-rocky-ground-and-distant-mountains-photo.jpg"
              />
              <div className="absolute inset-0 bg-primary-container/10 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="font-headline text-lg font-bold uppercase tracking-widest text-primary">
                  Rocky Basins
                </h3>
              </div>
            </div>
            {/* Mars Card Large */}
            <div className="md:col-span-2 md:row-span-2 relative h-full rounded-sm overflow-hidden group">
              <img
                className="w-full h-full object-cover transition-all duration-1000"
                data-alt="Panoramic view of a martian crater"
                src="https://res.cloudinary.com/tbmg/c_scale,w_400,f_auto,q_auto/v1709223557/sites/tb/articles/2023/features/TB-0723-p22-fig1.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#310a00] via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-10 left-10">
                <div className="font-mono text-[9px] text-primary uppercase tracking-[0.4em] mb-3">
                  Destination // Mars
                </div>
                <h3 className="font-headline text-3xl font-bold uppercase tracking-tight">
                  Regolith Dynamics
                </h3>
                <p className="font-mono text-[10px] text-zinc-400 mt-4 leading-loose">
                  ZERO_ATMOS_VISIBILITY // LITHIC_FRAGMENTS // THERMAL_DRIFT
                </p>
              </div>
            </div>
            {/* Earth Card Small */}
            <div className="md:col-span-2 md:row-span-1 relative h-full rounded-sm overflow-hidden group">
              <img
                className="w-full h-full object-cover transition-all duration-1000"
                data-alt="High altitude view of earth forest"
                src="https://cdn1.epicgames.com/ue/product/Screenshot/Untitled-10010RealBiomesDesertShotMedium06Sunset4k.jpg-1920x1080-ed8c8da7740ef97b029e8f074c310b12.jpg?resize=1&w=1920"
              />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-headline text-lg font-bold uppercase tracking-widest">
                  Global Mapping
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
