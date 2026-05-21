"use client";

import { motion } from "framer-motion";
import { Cpu, BarChart3, Lock, Gauge, Globe2, RefreshCw } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const cornerCards = [
  { icon: Cpu, title: "WhatsApp-first infrastructure", desc: "Built around the platform your customers already use every day.", color: "#00e699", pos: "top-left" },
  { icon: BarChart3, title: "Fast deployment", desc: "Go live with your automation system in as little as 7 days.", color: "#00f0ff", pos: "top-right" },
  { icon: Lock, title: "Tailored to your operations", desc: "Every workflow, menu, flow, and system is customized to your business.", color: "#8b5cf6", pos: "bottom-left" },
  { icon: Gauge, title: "Real operational support", desc: "A team that stays involved before, during, and after launch.", color: "#3b6cf4", pos: "bottom-right" },
  { icon: Gauge, title: "One connected ecosystem", desc: "Orders, invoicing, analytics, broadcasts, and operations — all in one place.", color: "#3b6cf4", pos: "bottom-right" },
  { icon: Gauge, title: "Built to scale", desc: "Designed for growing businesses across restaurants, clinics, retail, and service industries.", color: "#3b6cf4", pos: "bottom-right" },
];

const centerStats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "10×", label: "Faster Models" },
  { value: "40+", label: "Countries" },
];

export default function WhyChooseUs() {
  return (
    <section className="relative section-pad overflow-hidden">
      <div className="absolute inset-0 canvas-grid opacity-50" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] orb orb-green opacity-08" />

      <div className="relative container">
        <ScrollReveal className="mb-20">
          <SectionHeader
            badge="Why Choose Magnum AI"
            title={<>Built for businesses <span className="text-gradient">that mean business.</span></>}
            // subtitle="Everything you need to build, deploy, and scale AI — with the performance, security, and expertise that enterprise demands."
            titleClassName="text-5xl lg:text-6xl"
          />
        </ScrollReveal>

        {/* Main layout */}
        <div className="relative grid lg:grid-cols-3 gap-8 items-center">

          {/* Left cards */}
          <div className="flex flex-col gap-5">
            {cornerCards.slice(0, 3).map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ x: 4 }}
                className="glass glass-hover p-5 flex gap-4"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${card.color}12`, border: `1px solid ${card.color}25` }}>
                  <card.icon className="w-5 h-5" style={{ color: card.color }} />
                </div>
                <div>
                  <h4 className="font-syne font-bold text-white text-sm mb-1.5">{card.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center — Overlapping Venn circles */}
          <div className="relative flex items-center justify-center py-10 lg:py-0">
            <div className="relative w-72 h-72">
              {/* Outer glow */}
              <div className="absolute inset-[-20px] rounded-full orb-green opacity-15 orb" />

              {/* Circle 1 — top-left (teal/green) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute"
                style={{
                  width: 200, height: 200,
                  top: 0, left: 0,
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 60% 60%, rgba(0,230,153,0.25) 0%, rgba(0,230,153,0.08) 50%, rgba(0,240,255,0.05) 100%)",
                  border: "1px solid rgba(0,230,153,0.2)",
                  backdropFilter: "blur(4px)",
                }}
              />

              {/* Circle 2 — bottom-right (blue/indigo) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute"
                style={{
                  width: 200, height: 200,
                  bottom: 0, right: 0,
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 40% 40%, rgba(59,108,244,0.25) 0%, rgba(99,102,241,0.1) 50%, rgba(59,108,244,0.04) 100%)",
                  border: "1px solid rgba(59,108,244,0.2)",
                  backdropFilter: "blur(4px)",
                }}
              />

              {/* Circle 3 — center (cyan) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute"
                style={{
                  width: 160, height: 160,
                  top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(0,240,255,0.2) 0%, rgba(0,240,255,0.06) 60%, transparent 100%)",
                  border: "1px solid rgba(0,240,255,0.15)",
                  backdropFilter: "blur(8px)",
                }}
              />

              {/* Center intersection — stats */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3"
              >
                {centerStats.map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="font-syne font-black text-lg text-white leading-none">{value}</div>
                    <div className="text-[9px] text-[#00e699]/70 uppercase tracking-wider">{label}</div>
                  </div>
                ))}
              </motion.div> */}

              {/* Spinning ring around circles */}
              <div className="absolute inset-[-10px] rounded-full border border-[#00e699]/08 animate-[spin-slow_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00e699] shadow-[0_0_8px_rgba(0,230,153,0.9)]" />
              </div>
              <div className="absolute inset-[-30px] rounded-full border border-[#3b6cf4]/06 animate-[spin-reverse_30s_linear_infinite]" />
            </div>
          </div>

          {/* Right cards */}
          <div className="flex flex-col gap-5">
            {cornerCards.slice(3, 6).map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ x: -4 }}
                className="glass glass-hover p-5 flex gap-4"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${card.color}12`, border: `1px solid ${card.color}25` }}>
                  <card.icon className="w-5 h-5" style={{ color: card.color }} />
                </div>
                <div>
                  <h4 className="font-syne font-bold text-white text-sm mb-1.5">{card.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden"
        >
          {[
            { icon: Globe2, label: "Global Reach", val: "40+ countries" },
            { icon: RefreshCw, label: "Auto-Learning", val: "Continuous AI" },
            { icon: Gauge, label: "Performance", val: "Sub-50ms" },
            { icon: Lock, label: "Compliance", val: "SOC2 · GDPR" },
          ].map(({ icon: Icon, label, val }) => (
            <div key={label} className="bg-[#060a14] p-6 flex flex-col items-center gap-2 text-center hover:bg-[#0a0f1e] transition-colors">
              <Icon className="w-5 h-5 text-[#00e699] mb-1" />
              <div className="font-syne font-bold text-white text-sm">{val}</div>
              <div className="text-slate-500 text-xs">{label}</div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
