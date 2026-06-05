"use client";

import { motion } from "framer-motion";
import {
  Banknote,
  Stethoscope,
  ShoppingBag,
  ShoppingCart,
  Store,
  Building2,
  GraduationCap,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    icon: Banknote,
    label: "Restaurants",
    desc: "AI-powered menu optimization, demand forecasting & customer loyalty engines.",
    color: "#00e699",
    bg: "#f0fdf8",
    tag: "F&B",
  },
  {
    icon: Stethoscope,
    label: "Clinics & Healthcare",
    desc: "Diagnostic AI, patient analytics & intelligent scheduling solutions.",
    color: "#0ea5e9",
    bg: "#f0f9ff",
    tag: "Health",
  },
  {
    icon: ShoppingBag,
    label: "Retail & Cosmetics",
    desc: "Personalized recommendations, visual search & inventory intelligence.",
    color: "#8b5cf6",
    bg: "#faf5ff",
    tag: "Retail",
  },
  {
    icon: ShoppingCart,
    label: "E-commerce",
    desc: "Conversion optimization, smart search & automated customer support.",
    color: "#3b6cf4",
    bg: "#eff6ff",
    tag: "D2C",
  },
  {
    icon: Store,
    label: "Supermarkets",
    desc: "Shelf analytics, wastage reduction & predictive stock replenishment.",
    color: "#f59e0b",
    bg: "#fffbeb",
    tag: "FMCG",
  },
  {
    icon: Building2,
    label: "Hotels & Hospitality",
    desc: "Dynamic pricing, guest experience AI & revenue management.",
    color: "#ec4899",
    bg: "#fdf2f8",
    tag: "HoReCa",
  },
  {
    icon: GraduationCap,
    label: "Schools & Training",
    desc: "Adaptive learning paths, performance tracking & content generation.",
    color: "#10b981",
    bg: "#f0fdf4",
    tag: "EdTech",
  },
  {
    icon: Briefcase,
    label: "Service Businesses",
    desc: "Workflow automation, lead scoring & intelligent CRM integration.",
    color: "#f97316",
    bg: "#fff7ed",
    tag: "B2B",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Industries() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "100px 0", backgroundImage: "url(/images/114.webp)" }}>
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Accent blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-120px",
          right: "-80px",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,230,153,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-100px",
          left: "-60px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,108,244,0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container relative">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{
              background: "rgba(0,230,153,0.1)",
              border: "1px solid rgba(0,230,153,0.25)",
              color: "#082383",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#00e699",
                boxShadow: "0 0 6px rgba(0,230,153,0.8)",
                display: "inline-block",
                animation: "pulse-glow 2s ease-in-out infinite",
              }}
            />
            Industries We Serve
          </span>

          <h2
            className="font-syne font-extrabold leading-tight tracking-tight mb-4"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              color: "#0f172a",
            }}
          >
            Built for businesses{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #003ae6ff 0%, #00b0ff 60%, #3b6cf4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              across every industry
            </span>
          </h2>
          <p
            className="mx-auto text-base leading-relaxed"
            style={{ color: "#64748b", maxWidth: 520 }}
          >
            Our modular AI platform adapts to the unique complexity and
            demands of every sector — from food to finance.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {industries.map(({ icon: Icon, label, desc, color, bg, tag }) => (
            <motion.div
              key={label}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
              className="group relative rounded-2xl p-6 cursor-default"
              style={{
                background: "#f2f2f25b",
                border: "1px solid #e2e8f0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px rgba(0,0,0,0.10), 0 0 0 1.5px ${color}40`;
                (e.currentTarget as HTMLElement).style.borderColor = `${color}60`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
              }}
            >
              {/* Top row: icon + tag */}
              <div className="flex items-start justify-between mb-5">
                {/* Icon chip */}
                <div
                  className="flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    width: 52,
                    height: 52,
                    background: bg,
                    border: `1.5px solid ${color}30`,
                  }}
                >
                  <Icon style={{ color, width: 22, height: 22 }} />
                </div>

                {/* Pill tag */}
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{
                    background: `${color}12`,
                    color: color,
                    border: `1px solid ${color}25`,
                  }}
                >
                  {tag}
                </span>
              </div>

              {/* Label */}
              <h3
                className="font-syne font-bold text-sm mb-2 leading-snug"
                style={{ color: "#0f172a" }}
              >
                {label}
              </h3>

              {/* Description */}
              <p className="text-xs leading-relaxed mb-5" style={{ color: "#64748b" }}>
                {desc}
              </p>

              {/* Bottom CTA line */}
              <div className="flex items-center gap-1.5 overflow-hidden">
                <div
                  className="h-[2px] rounded-full transition-all duration-500"
                  style={{
                    width: 0,
                    background: `linear-gradient(90deg, ${color}, transparent)`,
                  }}
                  ref={(el) => {
                    if (!el) return;
                    const parent = el.closest(".group") as HTMLElement | null;
                    if (!parent) return;
                    const enter = () => { el.style.width = "36px"; };
                    const leave = () => { el.style.width = "0px"; };
                    parent.addEventListener("mouseenter", enter);
                    parent.addEventListener("mouseleave", leave);
                  }}
                />
                <span
                  className="text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1"
                  style={{ color }}
                >
                  Learn more <ArrowUpRight size={11} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stats strip */}
        {/* <motion.div
          className="mt-14 rounded-2xl p-6 flex flex-wrap gap-6 items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#94a3b8" }}>
              Industries covered
            </span>
            <span className="text-3xl font-extrabold font-syne" style={{ color: "#00e699" }}>
              8+
            </span>
          </div>
          <div className="h-8 w-px hidden sm:block" style={{ background: "rgba(255,255,255,0.1)" }} />
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#94a3b8" }}>
              Clients served
            </span>
            <span className="text-3xl font-extrabold font-syne text-white">50+</span>
          </div>
          <div className="h-8 w-px hidden sm:block" style={{ background: "rgba(255,255,255,0.1)" }} />
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#94a3b8" }}>
              Avg. ROI uplift
            </span>
            <span className="text-3xl font-extrabold font-syne" style={{ color: "#00f0ff" }}>
              3.2×
            </span>
          </div>
          <div className="h-8 w-px hidden sm:block" style={{ background: "rgba(255,255,255,0.1)" }} />
          <div className="ml-auto">
            <button className="btn-primary text-sm px-6 py-3">
              Explore all solutions
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
