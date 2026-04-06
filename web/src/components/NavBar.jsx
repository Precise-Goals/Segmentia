import React from "react";
import { MdTerminal } from "react-icons/md";

export default function NavBar() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/60 backdrop-blur-md border-b border-white/5">
        <div className="flex justify-between items-center max-w-[1440px] mx-auto px-8 h-16">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-2xl font-black tracking-tighter text-[#FF4500] font-headline"
          >
            Segmentia
          </a>
          <div className="hidden md:flex items-center gap-10">
            <a
              className="font-mono tracking-widest uppercase text-[10px] font-bold text-[#FF4500] hover:text-white transition-colors"
              href="#problem"
              onClick={(e) => handleScroll(e, "problem")}
            >
              Problem
            </a>
            <a
              className="font-mono tracking-widest uppercase text-[10px] font-bold text-zinc-500 hover:text-white transition-colors"
              href="#innovation"
              onClick={(e) => handleScroll(e, "innovation")}
            >
              Innovation
            </a>
            <a
              className="font-mono tracking-widest uppercase text-[10px] font-bold text-zinc-500 hover:text-white transition-colors"
              href="#model"
              onClick={(e) => handleScroll(e, "model")}
            >
              Model
            </a>
            <a
              className="font-mono tracking-widest uppercase text-[10px] font-bold text-zinc-500 hover:text-white transition-colors"
              href="#architecture"
              onClick={(e) => handleScroll(e, "architecture")}
            >
              Architecture
            </a>
            <a
              className="font-mono tracking-widest uppercase text-[10px] font-bold text-zinc-500 hover:text-white transition-colors"
              href="#team"
              onClick={(e) => handleScroll(e, "team")}
            >
              Team
            </a>
          </div>
          <a
            href="https://github.com/Precise-Goals/Segmentia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-container text-on-primary-container px-5 py-2 rounded-sm font-headline text-[10px] font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all inline-block"
          >
            Launch Console
          </a>
        </div>
      </nav>
    </>
  );
}
