"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutHero() {
  return (
    <section className="w-full overflow-hidden">
      <div
        className="w-full py-28 flex items-center justify-center relative"
        style={{
          backgroundImage:
            `linear-gradient(rgba(2,4,10,0.9), rgba(2,4,10,0.9)), repeating-linear-gradient(90deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 2px, transparent 2px, transparent 48px), radial-gradient(ellipse at center, rgba(12,45,85,0.35), rgba(2,6,20,0.75))`,
          backgroundSize: "auto, 48px 100%, cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center">
          <div className="mb-6 text-sm text-slate-300 flex items-center justify-center gap-3">
            <span className="block w-2.5 h-2.5 rounded-full bg-[#00e699] shadow-[0_0_8px_rgba(0,230,153,0.9)]" />
            <span>Home // About Us</span>
            <span className="block w-2.5 h-2.5 rounded-full bg-[#00e699] shadow-[0_0_8px_rgba(0,230,153,0.9)]" />
          </div>

          <h1 className="font-syne font-extrabold text-white text-[5.5rem] md:text-[8rem] leading-tight">
            About Us
          </h1>
        </div>
      </div>
    </section>
  );
}
