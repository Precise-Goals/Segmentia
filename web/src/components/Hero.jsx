import React from "react";
import { MdKeyboardDoubleArrowDown, MdRocketLaunch } from "react-icons/md";

export default function Hero() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden topo-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF450008] via-transparent to-transparent"></div>
        <div className="container mx-auto px-8 text-center relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/20 mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-tertiary">
              Interplanetary Expansion Active // V.04
            </span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-10 text-on-surface">
            NAVIGATING THE <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-primary italic">
              UNCHARTED
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-on-surface-variant font-light text-xl mb-14 leading-relaxed opacity-80">
            Precision semantic autonomy for the next frontier. From terrestrial
            wilderness to the Martian regolith, we provide the vision for
            autonomous expansion.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#model"
              onClick={(e) => handleScroll(e, "model")}
              className="w-full sm:w-auto bg-primary-container hover:bg-primary-container/90 text-on-primary-container px-12 py-5 rounded-sm font-headline font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-4 group"
            >
              Deploy Payload
              <MdRocketLaunch className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#architecture"
              onClick={(e) => handleScroll(e, "architecture")}
              className="w-full sm:w-auto border border-outline-variant/30 hover:bg-white/5 text-on-surface px-12 py-5 rounded-sm font-headline font-bold uppercase tracking-widest transition-all flex items-center justify-center"
            >
              System Specs
            </a>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <MdKeyboardDoubleArrowDown className="text-4xl" />
        </div>
      </section>
    </>
  );
}
