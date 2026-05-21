"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket, Users } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const pillars = [
  { icon: Target,    title: "Precision-Driven",   desc: "Every solution built with surgical accuracy and measurable, repeatable outcomes.",    color: "#00e699" },
  { icon: Lightbulb, title: "Innovation First",   desc: "We stay ahead by embedding cutting-edge research directly into client solutions.",    color: "#00f0ff" },
  { icon: Rocket,    title: "Rapid Deployment",   desc: "From concept to production in record time — without compromising on quality.",        color: "#8b5cf6" },
  { icon: Users,     title: "Human-Centered",     desc: "AI that amplifies human potential and keeps people meaningfully in the loop.",        color: "#3b6cf4" },
];

export default function WhoWeAre() {
  return (
    <section id="about" className="relative section-pad overflow-hidden">
      <div className="absolute inset-0 canvas-grid opacity-40" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] orb orb-blue opacity-07" />

      <div className="relative container">
        {/* <ScrollReveal className="mb-16">
          <SectionHeader
            badge="Who We Are"
            title={<>Pioneering AI For A<br /><span className="text-gradient">Smarter World</span></>}
            subtitle="We are a team of AI researchers, engineers, and strategists dedicated to building transformative technology that reshapes how businesses compete and grow."
            titleClassName="text-5xl lg:text-6xl"
          />
        </ScrollReveal> */}

        {/* Decorative line */}
        {/* <ScrollReveal delay={0.15} className="flex items-center justify-center gap-3 mb-16">
          <div className="h-px flex-1 max-w-[200px] bg-gradient-to-r from-transparent to-white/[0.06]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#00e699] shadow-[0_0_8px_rgba(0,230,153,0.9)]" />
          <div className="h-px w-16 bg-white/[0.06]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_8px_rgba(0,240,255,0.9)]" />
          <div className="h-px flex-1 max-w-[200px] bg-gradient-to-l from-transparent to-white/[0.06]" />
        </ScrollReveal> */}

        {/* Pillars */}
        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {pillars.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass glass-hover p-6 flex flex-col gap-4 cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: `${color}10`, border: `1px solid ${color}20`, boxShadow: `0 0 20px ${color}15` }}>
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <div>
                <h3 className="font-syne font-bold text-white text-base mb-2">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
              <div className="h-[2px] w-8 rounded-full mt-auto" style={{ background: color }} />
            </motion.div>
          ))}
        </div> */}

        {/* Quote block */}
        <ScrollReveal delay={0.2}>
          <div className="relative glass gradient-border p-10 text-center overflow-hidden">
            <div className="absolute inset-0 canvas-grid opacity-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] orb orb-green opacity-15 -translate-y-1/2" />
            <div className="relative">
              <div className="font-syne font-black text-8xl text-white/[0.03] absolute -top-6 left-1/2 -translate-x-1/2 select-none leading-none">&ldquo;</div>
              <blockquote className="font-syne font-bold text-2xl sm:text-3xl text-white leading-snug max-w-3xl mx-auto">
                We help businesses automate operations, capture more customers, {" "}
                <span className="text-gradient">and scale through intelligent WhatsApp-first systems.</span>
              </blockquote>
              {/* <p className="text-slate-600 text-sm mt-6">— Aivora Founding Vision</p> */}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
