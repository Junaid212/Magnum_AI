"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Shield, Globe2, BarChart3, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const items = [
  {
    id: "ai-platform", span: "lg:col-span-2 lg:row-span-2",
    icon: Brain, title: "AI-First Platform",
    desc: "Train, deploy, monitor, and scale every model from one unified control plane. No glue code, no vendor lock-in.",
    color: "#00e699", size: "lg",
    extra: "explore",
  },
  {
    id: "speed", span: "lg:col-span-1",
    icon: Zap, title: "Sub-50ms Latency",
    desc: "Edge-optimized inference with global CDN routing.",
    color: "#f59e0b", size: "sm",
    extra: "progress",
  },
  {
    id: "security", span: "lg:col-span-1",
    icon: Shield, title: "Zero-Trust Security",
    desc: "SOC 2 Type II · GDPR · HIPAA compliance built-in.",
    color: "#00f0ff", size: "sm",
    extra: "badges",
  },
  {
    id: "global", span: "lg:col-span-1",
    icon: Globe2, title: "40+ Global Regions",
    desc: "Edge nodes deployed worldwide for low-latency AI.",
    color: "#8b5cf6", size: "sm",
    extra: "globe",
  },
  {
    id: "analytics", span: "lg:col-span-2",
    icon: BarChart3, title: "Real-Time Model Analytics",
    desc: "Live dashboards tracking performance, drift, latency, and cost across all your AI deployments.",
    color: "#00e699", size: "wide",
    extra: "chart",
  },
];

function MiniChart({ color }: { color: string }) {
  const bars = [40,65,45,80,60,90,70,85,55,75,95,65];
  return (
    <div className="flex items-end gap-1 h-14 mt-4">
      {bars.map((h, i) => (
        <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.04 }}
          className="flex-1 rounded-t-sm" style={{ background: `linear-gradient(to top, ${color}, ${color}40)`, opacity: 0.7 }} />
      ))}
    </div>
  );
}

export default function BentoGrid() {
  return (
    <section className="relative section-pad overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060a14]/20 to-transparent" />
      <div className="relative container">
        <ScrollReveal className="mb-16">
          <SectionHeader
            badge="Platform"
            title={<>Everything In One <span className="text-gradient">Place</span></>}
            subtitle="All the infrastructure, tooling, and expertise you need — unified in a single intelligent platform."
            titleClassName="text-5xl lg:text-6xl"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:auto-rows-[190px]">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`glass glass-hover relative overflow-hidden flex flex-col p-6 cursor-default min-h-[190px] ${item.span}`}
                style={{ borderColor: `${item.color}10` }}
              >
                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-[0.07] group-hover:opacity-15 transition-opacity pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${item.color} 0%, transparent 70%)` }} />

                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ background: `${item.color}12`, border: `1px solid ${item.color}22` }}>
                  <Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>

                <h3 className={`font-syne font-bold text-white mb-2 ${item.size === "lg" ? "text-2xl" : "text-base"}`}>
                  {item.title}
                </h3>
                <p className={`text-slate-500 leading-relaxed ${item.size === "lg" ? "text-sm" : "text-xs"}`}>
                  {item.desc}
                </p>

                <div className="mt-auto">
                  {item.extra === "explore" && (
                    <button className="flex items-center gap-2 text-sm font-semibold mt-4 group/b" style={{ color: item.color }}>
                      Explore Platform <ArrowRight className="w-4 h-4 group-hover/b:translate-x-1 transition-transform" />
                    </button>
                  )}
                  {item.extra === "progress" && (
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex-1 h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "92%" }} viewport={{ once: true }} transition={{ duration: 1.2 }}
                          className="h-full rounded-full" style={{ background: item.color }} />
                      </div>
                      <span className="text-xs font-bold" style={{ color: item.color }}>92%</span>
                    </div>
                  )}
                  {item.extra === "badges" && (
                    <div className="mt-4 flex gap-1.5">
                      {["SOC2", "GDPR", "HIPAA"].map((b) => (
                        <span key={b} className="text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-wide"
                          style={{ background: `${item.color}10`, color: item.color, border: `1px solid ${item.color}20` }}>{b}</span>
                      ))}
                    </div>
                  )}
                  {item.extra === "chart" && <MiniChart color={item.color} />}
                  {item.extra === "globe" && (
                    <div className="mt-3 relative w-14 h-14">
                      <div className="w-full h-full rounded-full border border-[#8b5cf6]/25 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full border border-[#8b5cf6]/15" />
                      </div>
                      {[{ t: "25%", l: "35%" }, { t: "55%", l: "65%" }, { t: "70%", l: "30%" }].map((p, j) => (
                        <motion.div key={j} className="absolute w-1.5 h-1.5 rounded-full"
                          style={{ top: p.t, left: p.l, background: "#8b5cf6", boxShadow: "0 0 6px #8b5cf6" }}
                          animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, delay: j * 0.6, repeat: Infinity }} />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
