"use client";

import { useEffect, useRef } from "react";
import React from "react";
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

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const industries = [
  {
    icon: Banknote,
    label: "Restaurants",
    desc: "AI-powered menu optimization, demand forecasting & customer loyalty engines.",
    color: "#6c72ff",
    phase: "discovery",
  },
  {
    icon: Stethoscope,
    label: "Clinics & Healthcare",
    desc: "Diagnostic AI, patient analytics & intelligent scheduling solutions.",
    color: "#6c72ff",
    phase: "start",
  },
  {
    icon: ShoppingBag,
    label: "Retail & Cosmetics",
    desc: "Personalized recommendations, visual search & inventory intelligence.",
    color: "#6c72ff",
    phase: null,
  },
  {
    icon: ShoppingCart,
    label: "E-commerce",
    desc: "Conversion optimization, smart search & automated customer support.",
    color: "#6c72ff",
    phase: null,
  },
  {
    icon: Store,
    label: "Supermarkets",
    desc: "Shelf analytics, wastage reduction & predictive stock replenishment.",
    color: "#6c72ff",
    phase: null,
  },
  {
    icon: Building2,
    label: "Hotels & Hospitality",
    desc: "Dynamic pricing, guest experience AI & revenue management.",
    color: "#6c72ff",
    phase: null,
  },
  {
    icon: GraduationCap,
    label: "Schools & Training",
    desc: "Adaptive learning paths, performance tracking & content generation.",
    color: "#6c72ff",
    phase: null,
  },
  {
    icon: Briefcase,
    label: "Service Businesses",
    desc: "Workflow automation, lead scoring & intelligent CRM integration.",
    color: "#6c72ff",
    phase: "finish",
  },
];

const row1 = industries.slice(0, 4);
const row2 = industries.slice(4, 8);

/* phases shown above row-1 cards */
const row1Phases = ["preparation", "start", null, null];
/* phases shown above row-2 cards (displayed in reversed order visually) */
const row2Phases = [null, null, null, "finish"];

/* ─────────────────────────────────────────────
   Arrow SVG — thin line with arrowhead
───────────────────────────────────────────── */
function Arrow({ direction = "right" }: { direction?: "right" | "left" }) {
  return (
    <svg
      width="72"
      height="16"
      viewBox="0 0 72 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      {direction === "right" ? (
        <>
          <line x1="0" y1="8" x2="60" y2="8" stroke="#3a4155" strokeWidth="1.5" />
          <polyline
            points="54,2 66,8 54,14"
            fill="none"
            stroke="#3a4155"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <line x1="72" y1="8" x2="12" y2="8" stroke="#3a4155" strokeWidth="1.5" />
          <polyline
            points="18,2 6,8 18,14"
            fill="none"
            stroke="#3a4155"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Card
───────────────────────────────────────────── */
function IndustryCard({
  icon: Icon,
  label,
  desc,
  color,
}: (typeof industries)[number]) {
  return (
    <div
      className="group relative flex flex-col h-full cursor-default"
      style={{
        background: "#151b2e",
        border: "1px solid #232b42",
        borderRadius: "10px",
        padding: "20px 18px 18px",
        transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#6c72ff55";
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 12px 40px rgba(108,114,255,0.12)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#232b42";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Colored circle dot */}
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6c72ff 0%, #9b6cff 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 14,
          flexShrink: 0,
          transition: "transform 0.3s ease",
        }}
        className="group-hover:scale-110"
      >
        <Icon style={{ color: "#fff", width: 18, height: 18 }} strokeWidth={1.8} />
      </div>

      {/* Title */}
      <h3
        className="font-syne font-bold leading-snug mb-2"
        style={{ color: "#ffffff", fontSize: "15px" }}
      >
        {label}
      </h3>

      {/* Description */}
      <p
        className="leading-relaxed flex-1"
        style={{ color: "#7a859e", fontSize: "12.5px" }}
      >
        {desc}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */
export default function Industries() {
  const trackRef = useRef<HTMLDivElement>(null);

  /* Auto-scroll on mobile */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animId: number;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const start = track.scrollLeft;
          const end = track.scrollWidth - track.clientWidth;
          const duration = 2800;
          let t0: number | null = null;

          const step = (ts: number) => {
            if (!t0) t0 = ts;
            const elapsed = ts - t0;
            const progress = Math.min(elapsed / duration, 1);
            const eased =
              progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            track.scrollLeft = start + (end - start) * eased;
            if (progress < 1) animId = requestAnimationFrame(step);
          };

          animId = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(track);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#0d1120",
        padding: "90px 0 80px",
      }}
    >
      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-160px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(108,114,255,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container relative">
        {/* ── Title ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 64 }}
        >
          <h2
            className="font-syne font-black uppercase"
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              letterSpacing: "-0.01em",
              color: "#ffffff",
              lineHeight: 1.05,
            }}
          >
            Industries We Serve
          </h2>
          <p
            className="mt-4"
            style={{ color: "#5a6680", fontSize: "14.5px", maxWidth: 440 }}
          >
            Our modular AI platform adapts to the unique complexity and demands
            of every sector — from food to finance.
          </p>
        </motion.div>

        {/* ── Mobile carousel ── */}
        <div className="sm:hidden relative">
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-4 w-10 z-10"
            style={{ background: "linear-gradient(to right, #0d1120, transparent)" }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-4 w-10 z-10"
            style={{ background: "linear-gradient(to left, #0d1120, transparent)" }}
          />
          <div
            ref={trackRef}
            className="flex gap-3 overflow-x-auto pb-4 no-scrollbar"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          >
            {industries.map((industry, i) => (
              <motion.div
                key={industry.label}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex-shrink-0"
                style={{ scrollSnapAlign: "center", width: "clamp(220px, 72vw, 270px)" }}
              >
                <IndustryCard {...industry} />
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[10px] tracking-widest uppercase mt-2 select-none" style={{ color: "#3a4155" }}>
            swipe to explore →
          </p>
        </div>

        {/* ── Desktop: two-row timeline ── */}
        <div className="hidden sm:flex flex-col" style={{ gap: 48 }}>

          {/* ── ROW 1 ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          >
            {/* Phase labels row */}
            <div className="grid" style={{ gridTemplateColumns: "1fr 72px 1fr 72px 1fr 72px 1fr", marginBottom: 8 }}>
              {row1.map((_, i) => (
                <React.Fragment key={i}>
                  <div style={{ paddingLeft: 2 }}>
                    {row1Phases[i] && (
                      <span
                        style={{
                          fontSize: "11px",
                          color: "#4a5568",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {row1Phases[i]}
                      </span>
                    )}
                  </div>
                  {i < 3 && <div />}
                </React.Fragment>
              ))}
            </div>

            {/* Cards + arrows */}
            <div
              className="grid items-center"
              style={{ gridTemplateColumns: "1fr 72px 1fr 72px 1fr 72px 1fr" }}
            >
              {row1.map((industry, i) => (
                <React.Fragment key={industry.label}>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 24, scale: 0.97 },
                      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                    }}
                  >
                    <IndustryCard {...industry} />
                  </motion.div>
                  {i < 3 && (
                    <motion.div
                      className="flex items-center justify-center"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.4, delay: 0.1 } },
                      }}
                    >
                      <Arrow direction="right" />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* ── ROW 2 ── (reversed: right → left) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          >
            {/* Phase labels */}
            <div className="grid" style={{ gridTemplateColumns: "1fr 72px 1fr 72px 1fr 72px 1fr", marginBottom: 8 }}>
              {[...row2].reverse().map((_, i) => {
                const originalIndex = row2.length - 1 - i;
                return (
                  <React.Fragment key={i}>
                    <div style={{ paddingLeft: 2 }}>
                      {row2Phases[originalIndex] && (
                        <span
                          style={{
                            fontSize: "11px",
                            color: "#4a5568",
                            letterSpacing: "0.08em",
                          }}
                        >
                          {row2Phases[originalIndex]}
                        </span>
                      )}
                    </div>
                    {i < 3 && <div />}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Cards + arrows */}
            <div
              className="grid items-center"
              style={{ gridTemplateColumns: "1fr 72px 1fr 72px 1fr 72px 1fr" }}
            >
              {[...row2].reverse().map((industry, i) => (
                <React.Fragment key={industry.label}>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 24, scale: 0.97 },
                      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                    }}
                  >
                    <IndustryCard {...industry} />
                  </motion.div>
                  {i < 3 && (
                    <motion.div
                      className="flex items-center justify-center"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.4, delay: 0.1 } },
                      }}
                    >
                      <Arrow direction="left" />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Discover more CTA ── */}
        <motion.div
          className="flex justify-center mt-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            className="group flex items-center gap-3"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6c72ff 0%, #9b6cff 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 4px 16px rgba(108,114,255,0.35)",
              }}
              className="group-hover:scale-110 group-hover:shadow-lg"
            >
              <ArrowUpRight size={17} color="#fff" strokeWidth={2.2} />
            </div>
            <span
              className="font-syne font-semibold"
              style={{
                color: "#c5cce0",
                fontSize: "15px",
                transition: "color 0.2s",
              }}
            >
              Discover more
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
