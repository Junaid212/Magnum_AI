"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const projects = [
  {
    id: "01",
    title: "NeuroChat Enterprise",
    category: "Conversational AI",
    desc: "A fully customizable enterprise chatbot trained on proprietary data, deployed across 200+ customer touchpoints with 94% CSAT scores.",
    tags: ["LLM", "RAG", "GPT-4", "Vector DB"],
    accent: "#00e699",
    stat: { value: "94%", label: "Customer Satisfaction" },
    year: "2025",
  },
  {
    id: "02",
    title: "VisionGuard Security",
    category: "Computer Vision",
    desc: "Real-time threat detection across 50 enterprise campuses using CCTV feeds with 99.3% accuracy and zero-latency alerting.",
    tags: ["YOLO v8", "Edge AI", "Real-time", "CV"],
    accent: "#00f0ff",
    stat: { value: "99.3%", label: "Detection Accuracy" },
    year: "2025",
  },
  {
    id: "03",
    title: "PredictFlow Analytics",
    category: "Predictive AI",
    desc: "Demand forecasting engine reducing inventory waste by 34% for a global retail chain across 2,000+ SKUs and 18-month horizon.",
    tags: ["Time-Series", "XGBoost", "LSTM", "BI"],
    accent: "#8b5cf6",
    stat: { value: "34%", label: "Waste Reduction" },
    year: "2024",
  },
  {
    id: "04",
    title: "AutoProcess Hub",
    category: "AI Automation",
    desc: "End-to-end intelligent document processing pipeline automating 85% of manual data entry, saving 12,000+ hours annually.",
    tags: ["OCR", "NLP", "RPA", "Workflow"],
    accent: "#f59e0b",
    stat: { value: "12K+", label: "Hours Saved/Year" },
    year: "2024",
  },
];

export default function ProjectsStack() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + projects.length) % projects.length);
  const next = () => setActive((a) => (a + 1) % projects.length);
  const project = projects[active];

  return (
    <section id="projects" className="relative section-pad overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[700px] orb orb-indigo opacity-10" />

      <div className="relative container">
        <ScrollReveal className="mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <SectionHeader
              badge="Our Work"
              title={<>Featured <span className="text-gradient">Projects</span></>}
              subtitle="Real-world AI delivering measurable impact."
              align="left"
              titleClassName="text-5xl lg:text-6xl"
            />
            <div className="flex items-center gap-3">
              {/* Project index */}
              <span className="text-slate-600 text-sm font-medium">
                {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-slate-400 hover:text-white hover:border-[#00e699]/30 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full bg-[#00e699] flex items-center justify-center text-[#02040a] hover:shadow-[0_0_25px_rgba(0,230,153,0.5)] transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Card Deck */}
        <div className="relative h-[480px] sm:h-[420px]">
          {projects.map((p, i) => {
            const offset = (i - active + projects.length) % projects.length;
            const isActive = offset === 0;
            const isNext = offset === 1;
            const isNextNext = offset === 2;

            if (offset > 2) return null;

            return (
              <motion.div
                key={p.id}
                animate={{
                  x: isActive ? 0 : isNext ? "3%" : "6%",
                  y: isActive ? 0 : isNext ? -8 : -16,
                  scale: isActive ? 1 : isNext ? 0.97 : 0.94,
                  opacity: isActive ? 1 : isNext ? 0.7 : 0.4,
                  zIndex: isActive ? 3 : isNext ? 2 : 1,
                }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => !isActive && next()}
                className="absolute inset-0 cursor-pointer"
              >
                <div
                  className="w-full h-full glass overflow-hidden"
                  style={{ borderColor: isActive ? `${p.accent}25` : "rgba(255,255,255,0.06)" }}
                >
                  {/* Top accent bar */}
                  <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${p.accent} 0%, ${p.accent}40 60%, transparent 100%)` }} />

                  <div className="p-8 md:p-10 h-full flex flex-col md:flex-row md:items-center gap-8">
                    {/* Left */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="font-syne font-black text-6xl opacity-[0.08] text-white leading-none">{p.id}</span>
                        <div className="px-3 py-1.5 rounded-full text-xs font-bold"
                          style={{ background: `${p.accent}12`, color: p.accent, border: `1px solid ${p.accent}20` }}>
                          {p.category}
                        </div>
                        <span className="ml-auto text-xs text-slate-600">{p.year}</span>
                      </div>
                      <h3 className="font-syne font-bold text-2xl md:text-3xl text-white mb-4 leading-tight">{p.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md">{p.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {p.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-lg text-xs text-slate-400 border border-white/[0.07] bg-white/[0.02]">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {isActive && (
                        <a href="#" className="btn-outline inline-flex text-sm px-5 py-2.5 gap-2">
                          View Case Study <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    {/* Right — metric */}
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl flex flex-col items-center justify-center gap-2"
                        style={{ background: `${p.accent}08`, border: `1px solid ${p.accent}18`, boxShadow: `0 0 50px ${p.accent}12` }}>
                        <span className="font-syne font-black text-4xl md:text-5xl" style={{ color: p.accent }}>{p.stat.value}</span>
                        <span className="text-slate-500 text-xs text-center px-4">{p.stat.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300"
              style={{
                width: i === active ? 24 : 8,
                height: 8,
                borderRadius: 100,
                background: i === active ? "#00e699" : "rgba(255,255,255,0.12)",
                boxShadow: i === active ? "0 0 10px rgba(0,230,153,0.6)" : "none",
              }}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <a href="#" className="btn-outline flex items-center gap-2">
            View All Projects <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
