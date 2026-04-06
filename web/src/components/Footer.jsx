import React from "react";

export default function Footer() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <footer className="bg-[#050505] w-full py-20 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div>
              <div
                onClick={(e) => handleScroll(e)}
                className="text-3xl font-black text-white font-headline uppercase tracking-tighter mb-6 cursor-pointer"
              >
                Segmentia
              </div>
              <p className="text-zinc-500 font-mono text-[10px] max-w-xs leading-relaxed uppercase tracking-widest">
                Precision Autonomy for the High Frontier. Redefining the limits
                of autonomous vision.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div className="space-y-6">
                <div className="font-mono text-[11px] text-white uppercase tracking-[0.2em] mb-8">
                  Technical
                </div>
                <a
                  className="block font-mono text-[10px] uppercase tracking-widest text-zinc-500 hover:text-primary transition-colors"
                  href="#architecture"
                  onClick={(e) => handleScroll(e, "architecture")}
                >
                  Architecture
                </a>
                <a
                  className="block font-mono text-[10px] uppercase tracking-widest text-zinc-500 hover:text-primary transition-colors"
                  href="#innovation"
                  onClick={(e) => handleScroll(e, "innovation")}
                >
                  Innovation
                </a>
                <a
                  className="block font-mono text-[10px] uppercase tracking-widest text-zinc-500 hover:text-primary transition-colors"
                  href="https://github.com/Precise-Goals/Segmentia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="space-y-6">
                <div className="font-mono text-[11px] text-white uppercase tracking-[0.2em] mb-8">
                  Markets
                </div>
                <a
                  className="block font-mono text-[10px] uppercase tracking-widest text-zinc-500 hover:text-primary transition-colors"
                  href="#markets"
                  onClick={(e) => handleScroll(e, "markets")}
                >
                  Agriculture
                </a>
                <a
                  className="block font-mono text-[10px] uppercase tracking-widest text-zinc-500 hover:text-primary transition-colors"
                  href="#markets"
                  onClick={(e) => handleScroll(e, "markets")}
                >
                  Aerospace
                </a>
                <a
                  className="block font-mono text-[10px] uppercase tracking-widest text-zinc-500 hover:text-primary transition-colors"
                  href="#markets"
                  onClick={(e) => handleScroll(e, "markets")}
                >
                  Logistics
                </a>
              </div>
              <div className="space-y-6">
                <div className="font-mono text-[11px] text-white uppercase tracking-[0.2em] mb-8">
                  Company
                </div>
                <a
                  className="block font-mono text-[10px] uppercase tracking-widest text-zinc-500 hover:text-primary transition-colors"
                  href="#"
                  onClick={(e) => handleScroll(e)}
                >
                  Mission
                </a>
                <a
                  className="block font-mono text-[10px] uppercase tracking-widest text-zinc-500 hover:text-primary transition-colors"
                  href="#privacy"
                >
                  Privacy
                </a>
                <a
                  className="block font-mono text-[10px] uppercase tracking-widest text-zinc-500 hover:text-primary transition-colors"
                  href="#hq"
                >
                  HQ
                </a>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-zinc-600">
              © 2024 Segmentia Aerospace. All Telemetry Data Encrypted.
            </p>
            <div className="flex gap-8">
              <span className="w-1 h-1 bg-primary-container rounded-full"></span>
              <span className="w-1 h-1 bg-primary-container rounded-full"></span>
              <span className="w-1 h-1 bg-primary-container rounded-full"></span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
