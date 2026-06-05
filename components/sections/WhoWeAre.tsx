"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

/* ─────────────────────────────────────────
   Inline SVG icon chips rendered mid-sentence
───────────────────────────────────────── */
function ChipWhatsApp() {
  return (
    <span
      className="inline-flex items-center gap-1.5 mx-2 px-3 py-1 rounded-full align-middle"
      style={{
        background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
        boxShadow: "0 2px 12px rgba(37,211,102,0.35)",
        fontSize: "0.72em",
        verticalAlign: "middle",
        position: "relative",
        top: "-2px",
      }}
    >
      <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.858L0 24l6.304-1.513A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.001-1.374l-.36-.213-3.72.893.934-3.617-.235-.373A9.818 9.818 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818 5.419 0 9.818 4.4 9.818 9.818 0 5.419-4.399 9.818-9.818 9.818z" />
      </svg>
      <span className="font-bold text-white" style={{ fontSize: "11px", letterSpacing: "0.02em" }}>WhatsApp</span>
    </span>
  );
}

function ChipAI() {
  return (
    <span
      className="inline-flex items-center gap-1.5 mx-2 px-3 py-1 rounded-full align-middle"
      style={{
        background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
        boxShadow: "0 2px 12px rgba(99,102,241,0.35)",
        fontSize: "0.72em",
        verticalAlign: "middle",
        position: "relative",
        top: "-2px",
      }}
    >
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
      <span className="font-bold text-white" style={{ fontSize: "11px", letterSpacing: "0.02em" }}>AI-First</span>
    </span>
  );
}

function ChipRocket() {
  return (
    <span
      className="inline-flex items-center gap-1.5 mx-2 px-3 py-1 rounded-full align-middle"
      style={{
        background: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
        boxShadow: "0 2px 12px rgba(245,158,11,0.35)",
        fontSize: "0.72em",
        verticalAlign: "middle",
        position: "relative",
        top: "-2px",
      }}
    >
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
      <span className="font-bold text-white" style={{ fontSize: "11px", letterSpacing: "0.02em" }}>Scale Fast</span>
    </span>
  );
}

function ChipAutomation() {
  return (
    <span
      className="inline-flex items-center gap-1.5 mx-2 px-3 py-1 rounded-full align-middle"
      style={{
        background: "linear-gradient(135deg, #0ea5e9 0%, #1d4ed8 100%)",
        boxShadow: "0 2px 12px rgba(14,165,233,0.35)",
        fontSize: "0.72em",
        verticalAlign: "middle",
        position: "relative",
        top: "-2px",
      }}
    >
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
      <span className="font-bold text-white" style={{ fontSize: "11px", letterSpacing: "0.02em" }}>Automated</span>
    </span>
  );
}

/* ─────────────────────────────────────────
   Word-by-word blur-in animation
───────────────────────────────────────── */
type Segment = string | React.ReactNode;

function BlurRevealText({
  segments,
  className,
  staggerDelay = 0.04,
  baseDelay = 0,
}: {
  segments: Segment[];
  className?: string;
  staggerDelay?: number;
  baseDelay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <span ref={ref} className={className}>
      {segments.map((seg, i) => {
        if (typeof seg !== "string") {
          // Inline chip/icon — animate as a block
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(10px)", y: 8 }}
              animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
              transition={{ duration: 0.55, delay: baseDelay + i * staggerDelay, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "inline-block" }}
            >
              {seg}
            </motion.span>
          );
        }
        // Split string into words
        const words = seg.split(" ").filter(Boolean);
        return words.map((word, j) => (
          <motion.span
            key={`${i}-${j}`}
            initial={{ opacity: 0, filter: "blur(12px)", y: 10 }}
            animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: baseDelay + (i + j) * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ display: "inline-block", marginRight: "0.28em" }}
          >
            {word}
          </motion.span>
        ));
      })}
    </span>
  );
}

/* ─────────────────────────────────────────
   Stats bar
───────────────────────────────────────── */
const stats = [
  { value: "10×", label: "Faster response time" },
  { value: "3×", label: "More orders captured" },
  { value: "24/7", label: "Always-on automation" },
  { value: "100%", label: "WhatsApp-native" },
];

/* ─────────────────────────────────────────
   Main section
───────────────────────────────────────── */
export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundImage: "url('/images/114.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
    >
      {/* Subtle top-edge shadow from previous dark section */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(2,4,10,0.08) 0%, transparent 100%)" }}
      />

      {/* Floating decorative blobs */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-10 right-10 w-[400px] h-[400px] rounded-full pointer-events-none"
        aria-hidden="true"
        animate={{ scale: [1, 1.06, 1], opacity: [0.18, 0.25, 0.18] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        // @ts-expect-error inline style override
        style={{ background: "radial-gradient(circle, rgba(107,160,236,0.35) 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <motion.div
        className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        aria-hidden="true"
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)", filter: "blur(70px)" }}
      />

      {/* Faint dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(100,120,180,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 py-18 lg:py-10 pt-10">

        {/* ── Eyebrow label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="h-px w-12 rounded-full" style={{ background: "linear-gradient(90deg, transparent, #6ba0ec)" }} />
          <span
            className="text-xs font-bold uppercase tracking-[0.22em]"
            style={{ color: "#1548c8" }}
          >
            Who We Are
          </span>
          <div className="h-px w-12 rounded-full" style={{ background: "linear-gradient(90deg, #6ba0ec, transparent)" }} />
        </motion.div>

        {/* ── Hero headline — word blur reveal ── */}
        <div className="text-center mb-6">
          <h2
            className="font-syne font-black leading-[1.05] tracking-[-0.02em] text-[#0d1b3e]"
            style={{ fontSize: "clamp(38px, 5.5vw, 80px)" }}
          >
            <BlurRevealText
              segments={["We help businesses"]}
              staggerDelay={0.06}
              baseDelay={0}
            />
            <br />
            <BlurRevealText
              segments={["automate,", <ChipAutomation key="auto" />, "capture,"]}
              staggerDelay={0.07}
              baseDelay={0.18}
            />
            <br />
            <BlurRevealText
              segments={["and grow — with"]}
              staggerDelay={0.06}
              baseDelay={0.34}
            />
            <span style={{ display: "inline-block" }}>
              <BlurRevealText
                segments={[<ChipWhatsApp key="wa" />]}
                baseDelay={0.52}
              />
            </span>
          </h2>
        </div>

        {/* ── Sub-headline — second animated paragraph ── */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p
            className="leading-relaxed font-medium"
            style={{ color: "#4a5980", fontSize: "clamp(16px, 1.8vw, 22px)" }}
          >
            <BlurRevealText
              segments={[
                "A single",
                <ChipAI key="ai" />,
                "platform that turns every customer message into a confirmed order, appointment, or sale —",
                <ChipRocket key="rocket" />,
                "without lifting a finger.",
              ]}
              staggerDelay={0.055}
              baseDelay={0.6}
            />
          </p>
        </div>

        {/* ── Divider line with center dot ── */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-20"
          style={{ transformOrigin: "center" }}
        >
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(107,160,236,0.4) 100%)" }} />
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: "#1548c8", boxShadow: "0 0 10px rgba(21,72,200,0.5)" }}
          />
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(107,160,236,0.4) 0%, transparent 100%)" }} />
        </motion.div>

        {/* ── Stats bar ── */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(21,72,200,0.14)" }}
              className="flex flex-col items-center gap-2 py-8 px-6 rounded-2xl cursor-default transition-shadow duration-300"
              style={{
                background: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(107,160,236,0.2)",
                boxShadow: "0 4px 24px rgba(21,72,200,0.07)",
                backdropFilter: "blur(8px)",
              }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                className="font-syne font-black leading-none"
                style={{ fontSize: "clamp(36px, 4vw, 56px)", color: "#1548c8" }}
              >
                {value}
              </motion.span>
              <span className="text-center text-sm font-medium" style={{ color: "#6b7fa8" }}>
                {label}
              </span>
            </motion.div>
          ))}
        </div> */}

        {/* ── Bottom quote strip ── */}
        {/* <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 rounded-3xl p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1548c8 0%, #0d35a8 50%, #0a2ab8 100%)",
            boxShadow: "0 20px 60px rgba(21,72,200,0.3)",
          }}
        >
          
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-10"
            style={{ background: "white" }} />
          <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full opacity-10"
            style={{ background: "white" }} />
          
          <div className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative">
            <p
              className="font-syne font-black text-white leading-snug max-w-2xl mx-auto"
              style={{ fontSize: "clamp(22px, 2.8vw, 38px)" }}
            >
              The fastest businesses in 2025 run on{" "}
              <span style={{ color: "#7dd3fc" }}>intelligent automation</span> — not headcount.
            </p>
            <p className="mt-5 text-blue-200 font-medium text-base">
              — Magnum AI founding principle
            </p>
          </div>
        </motion.div> */}

      </div>
    </section>
  );
}
