"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ── Vertical curtain lines background ── */
const curtainStyle = {
  backgroundImage: [
    "radial-gradient(ellipse 80% 65% at 50% 105%, rgba(20,60,180,0.55) 0%, rgba(15,35,120,0.25) 45%, transparent 75%)",
    "repeating-linear-gradient(90deg, transparent 0px, transparent 37px, rgba(60,120,255,0.07) 38px, rgba(80,150,255,0.12) 39px, rgba(60,120,255,0.07) 40px, transparent 41px)",
  ].join(", "),
};

/* ── 3D gradient SVG icons matching the reference ── */
function IconSignal() {
  return (
    <svg viewBox="0 0 48 48" width="28" height="28" fill="none">
      <defs>
        <linearGradient id="sig1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4f8ef7" /><stop offset="1" stopColor="#00e699" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="34" r="4" fill="url(#sig1)" opacity="0.9"/>
      <path d="M14 28 Q24 16 34 28" stroke="url(#sig1)" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7"/>
      <path d="M8 22 Q24 6 40 22"  stroke="url(#sig1)" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.45"/>
      <line x1="24" y1="34" x2="24" y2="42" stroke="url(#sig1)" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
      <path d="M18 42 h12" stroke="url(#sig1)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

function IconPerson() {
  return (
    <svg viewBox="0 0 48 48" width="28" height="28" fill="none">
      <defs>
        <linearGradient id="per1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00e699" /><stop offset="1" stopColor="#00a8ff" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="14" r="7" fill="url(#per1)" opacity="0.85"/>
      <path d="M8 42 C8 30 40 30 40 42" stroke="url(#per1)" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8"/>
      <circle cx="36" cy="20" r="3" fill="#00e699" opacity="0.6"/>
      <path d="M36 20 L42 14" stroke="#00e699" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

function IconCube() {
  return (
    <svg viewBox="0 0 48 48" width="28" height="28" fill="none">
      <defs>
        <linearGradient id="cub1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" /><stop offset="1" stopColor="#00a8ff" />
        </linearGradient>
      </defs>
      {/* Front face */}
      <polygon points="24,6 42,16 42,32 24,42 6,32 6,16" stroke="url(#cub1)" strokeWidth="2" fill="none" opacity="0.85"/>
      {/* Inner lines */}
      <line x1="24" y1="6"  x2="24" y2="42" stroke="url(#cub1)" strokeWidth="1.5" opacity="0.45"/>
      <line x1="6"  y1="16" x2="42" y2="16" stroke="url(#cub1)" strokeWidth="1.5" opacity="0.45"/>
      <line x1="6"  y1="32" x2="42" y2="32" stroke="url(#cub1)" strokeWidth="1.5" opacity="0.45"/>
    </svg>
  );
}

const bottomCards = [
  {
    Icon:  IconSignal,
    title: "Smarter operations",
    desc:  "Turn customer conversations into confirmed orders, appointments, and revenue — automatically, in real time.",
    glow:  "rgba(79,142,247,0.18)",
  },
  {
    Icon:  IconPerson,
    title: "Built around WhatsApp",
    desc:  "No new app. No complicated setup. Just powerful automation through the platform your customers already use every day.",
    glow:  "rgba(0,230,153,0.18)",
  },
  {
    Icon:  IconCube,
    title: "End-to-end automation",
    desc:  "From enquiries and order management to invoicing and analytics — everything works together in one seamless system.",
    glow:  "rgba(99,102,241,0.18)",
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#0B1744" }}
    >
      {/* Vertical curtain lines + bottom glow */}
      <div className="absolute inset-0 pointer-events-none" style={curtainStyle} />
      {/* Top-fade overlay so lines are subtle near top */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02040a]/80 via-transparent to-[#02040a] pointer-events-none" />

      {/* ── Main content ── */}
      <div className="relative flex-1 max-w-[90vw] mx-auto w-full px-6 flex flex-col justify-center pt-44 pb-0">
        <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-center min-h-[calc(100vh-96px-280px)]">

          {/* ── LEFT COPY ── */}
          <div className="flex flex-col gap-7">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="font-syne font-extrabold text-white leading-[1.06] tracking-[-0.02em]"
              style={{ fontSize: "clamp(46px, 5.5vw, 80px)", letterSpacing: "0.2rem" }}
            >
              Your business, <br />
              on autopilot
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-[500px]"
            >
              A WhatsApp-first automation system for restaurants, clinics, retailers, and modern businesses 
              built to automate operations, capture orders, and scale customer experience 24/7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, boxShadow: "0 0 45px rgba(0,230,153,0.55)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 bg-[#00e699] rounded-full pl-7 pr-2 py-2 w-fit"
                style={{ boxShadow: "0 0 28px rgba(0,230,153,0.35)" }}
              >
                <span className="font-syne font-extrabold text-sm tracking-[0.06em] text-[#02040a] uppercase whitespace-nowrap">
                  Book a Call
                </span>
                <span className="w-10 h-10 rounded-full bg-[#02040a] flex items-center justify-center flex-shrink-0">
                  <ArrowUpRight className="w-5 h-5 text-[#00e699]" />
                </span>
              </motion.a>
            </motion.div>
          </div>

          {/* ── RIGHT — 3-D Diamond ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[340px] h-[340px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, rgba(120,160,255,0.4) 0%, transparent 65%)", filter: "blur(30px)" }} />
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 30px 60px rgba(60,120,255,0.3)) drop-shadow(0 0 30px rgba(180,210,255,0.15))" }}
              >
                <svg viewBox="0 0 280 300" width="280" height="300" fill="none">
                  <defs>
                    <linearGradient id="d-top" x1="40" y1="10" x2="240" y2="120" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#c8d8f0" /><stop offset="40%" stopColor="#8090b0" /><stop offset="100%" stopColor="#3a4a6a" />
                    </linearGradient>
                    <linearGradient id="d-left" x1="40" y1="120" x2="140" y2="290" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#5a6a8a" /><stop offset="100%" stopColor="#1a2040" />
                    </linearGradient>
                    <linearGradient id="d-right" x1="240" y1="120" x2="140" y2="290" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#7080a0" /><stop offset="100%" stopColor="#2a3050" />
                    </linearGradient>
                    <linearGradient id="d-inner-top" x1="90" y1="40" x2="190" y2="115" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#e0eaff" stopOpacity="0.9"/><stop offset="100%" stopColor="#6070a0" stopOpacity="0.6"/>
                    </linearGradient>
                    <linearGradient id="d-inner-bot" x1="100" y1="115" x2="180" y2="240" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#4a5a80" stopOpacity="0.8"/><stop offset="100%" stopColor="#0a0f20" stopOpacity="0.9"/>
                    </linearGradient>
                    <radialGradient id="d-spec" cx="35%" cy="25%" r="35%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7"/><stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  <polygon points="140,10  270,120  140,125  10,120"  fill="url(#d-top)" />
                  <polygon points="10,120   140,125  140,290"          fill="url(#d-left)" />
                  <polygon points="270,120  140,125  140,290"          fill="url(#d-right)" />
                  <polygon points="140,40  220,112  140,120  60,112"   fill="url(#d-inner-top)" opacity="0.85" />
                  <polygon points="60,112  140,120  140,250"           fill="url(#d-inner-bot)" opacity="0.7" />
                  <polygon points="220,112 140,120  140,250"           fill="url(#d-inner-bot)" opacity="0.5" />
                  <polyline points="140,10  270,120  140,125  10,120  140,10" stroke="rgba(180,200,255,0.25)" strokeWidth="0.8" fill="none" />
                  <line x1="140" y1="125" x2="140" y2="290" stroke="rgba(100,140,220,0.2)" strokeWidth="0.8" />
                  <line x1="10"  y1="120" x2="140" y2="125" stroke="rgba(180,200,255,0.15)" strokeWidth="0.6"/>
                  <line x1="270" y1="120" x2="140" y2="125" stroke="rgba(180,200,255,0.15)" strokeWidth="0.6"/>
                  <polygon points="140,10  200,90  140,95  80,90" fill="url(#d-spec)" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ────────── Bottom Feature Cards ────────── */}
        <motion.div
          initial={{ opacity: 0.9, y: 50 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="grid sm:grid-cols-3 gap-5 mt-10 lg:mt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {bottomCards.map(({ Icon, title, desc, glow }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 + i * 0.1 }}
              className="relative flex flex-col gap-5 p-8 overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, rgba(8,16,40,0.85) 0%, rgba(4,10,28,0.9) 100%)",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Subtle left-edge gradient accent */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(to bottom, transparent, ${glow.replace("0.18","0.7")}, transparent)` }}
              />

              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 60% 50% at 20% 20%, ${glow} 0%, transparent 70%)` }}
              />

              {/* Icon circle */}
              <div
                className="relative w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "radial-gradient(circle, rgba(30,50,100,0.8) 0%, rgba(10,20,50,0.9) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: `0 0 20px ${glow}`,
                }}
              >
                <Icon />
              </div>

              {/* Text */}
              <div className="relative flex flex-col gap-2">
                <h3 className="font-syne font-bold text-white text-lg leading-snug">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll pill — bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#00e699] flex items-center justify-center shadow-[0_0_20px_rgba(0,230,153,0.5)] cursor-pointer z-10"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
      >
        <ArrowUpRight className="w-4 h-4 text-[#02040a] rotate-[135deg]" />
      </motion.div>
    </section>
  );
}
