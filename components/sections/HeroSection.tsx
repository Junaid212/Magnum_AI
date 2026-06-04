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
      <circle cx="24" cy="34" r="4" fill="url(#sig1)" opacity="0.9" />
      <path d="M14 28 Q24 16 34 28" stroke="url(#sig1)" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M8 22 Q24 6 40 22" stroke="url(#sig1)" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.45" />
      <line x1="24" y1="34" x2="24" y2="42" stroke="url(#sig1)" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <path d="M18 42 h12" stroke="url(#sig1)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
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
      <circle cx="24" cy="14" r="7" fill="url(#per1)" opacity="0.85" />
      <path d="M8 42 C8 30 40 30 40 42" stroke="url(#per1)" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
      <circle cx="36" cy="20" r="3" fill="#00e699" opacity="0.6" />
      <path d="M36 20 L42 14" stroke="#00e699" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
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
      <polygon points="24,6 42,16 42,32 24,42 6,32 6,16" stroke="url(#cub1)" strokeWidth="2" fill="none" opacity="0.85" />
      {/* Inner lines */}
      <line x1="24" y1="6" x2="24" y2="42" stroke="url(#cub1)" strokeWidth="1.5" opacity="0.45" />
      <line x1="6" y1="16" x2="42" y2="16" stroke="url(#cub1)" strokeWidth="1.5" opacity="0.45" />
      <line x1="6" y1="32" x2="42" y2="32" stroke="url(#cub1)" strokeWidth="1.5" opacity="0.45" />
    </svg>
  );
}
/* ─── 3D Sphere SVG ─── */
function Sphere3D() {
  return (
    <svg viewBox="0 0 400 400" width="100%" height="100%" fill="none" style={{ overflow: "visible" }}>
      <defs>
        {/* Main sphere gradient — metallic blue */}
        <radialGradient id="sphereMain" cx="38%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#b8d4ff" stopOpacity="0.9" />
          <stop offset="25%" stopColor="#5a9fff" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#1a5bdb" stopOpacity="0.9" />
          <stop offset="80%" stopColor="#0a2fa0" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#041870" stopOpacity="1" />
        </radialGradient>
        {/* Specular highlight */}
        <radialGradient id="sphereSpec" cx="32%" cy="28%" r="28%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="50%" stopColor="#c8e0ff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c8e0ff" stopOpacity="0" />
        </radialGradient>
        {/* Secondary highlight - bottom right rim */}
        <radialGradient id="sphereRim" cx="72%" cy="75%" r="30%">
          <stop offset="0%" stopColor="#60a8ff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#60a8ff" stopOpacity="0" />
        </radialGradient>

        {/* Teal ribbon gradient */}
        <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#00b8d4" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#006080" stopOpacity="0.4" />
        </linearGradient>

        {/* Orbit ring gradient */}
        <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#80c0ff" stopOpacity="0.15" />
          <stop offset="40%" stopColor="#a0d0ff" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#c0e0ff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#80c0ff" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="orbitGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60a8ff" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#90c8ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#60a8ff" stopOpacity="0.05" />
        </linearGradient>

        {/* Shadow beneath sphere */}
        <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000820" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#000820" stopOpacity="0" />
        </radialGradient>

        <filter id="sphereBlur" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <filter id="glowFilter">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Shadow */}
      <ellipse cx="200" cy="360" rx="110" ry="22" fill="url(#shadowGrad)" />

      {/* ── Orbit ring 1 — large tilted ellipse (back, behind sphere) ── */}
      <ellipse
        cx="200" cy="200" rx="155" ry="52"
        stroke="url(#orbitGrad1)" strokeWidth="1.2"
        fill="none"
        transform="rotate(-18, 200, 200)"
        style={{ clipPath: "inset(50% 0 0 0)" }}
        opacity="0.7"
      />

      {/* ── Orbit ring 2 — second tilted ellipse ── */}
      <ellipse
        cx="200" cy="200" rx="170" ry="58"
        stroke="url(#orbitGrad2)" strokeWidth="1"
        fill="none"
        transform="rotate(12, 200, 200)"
        opacity="0.5"
      />

      {/* ── Main sphere ── */}
      <circle cx="200" cy="200" r="120" fill="url(#sphereMain)" />
      {/* Specular */}
      <circle cx="200" cy="200" r="120" fill="url(#sphereSpec)" />
      {/* Rim light */}
      <circle cx="200" cy="200" r="120" fill="url(#sphereRim)" />
      {/* Subtle inner edge shine */}
      <circle cx="200" cy="200" r="119" stroke="rgba(180,220,255,0.25)" strokeWidth="1.5" fill="none" />

      {/* ── Teal ribbon / swoosh ── */}
      {/* The ribbon curves in from bottom-left, passes through, arcs right */}
      <path
        d="M 50 300 Q 140 180 200 195 Q 260 210 340 130"
        stroke="url(#ribbonGrad)" strokeWidth="18" strokeLinecap="round"
        fill="none" opacity="0.85"
        style={{ filter: "drop-shadow(0 0 8px rgba(0,200,220,0.5))" }}
      />
      {/* Ribbon edge highlight */}
      <path
        d="M 50 295 Q 140 175 200 190 Q 260 205 340 125"
        stroke="rgba(150,240,255,0.5)" strokeWidth="2" strokeLinecap="round"
        fill="none"
      />

      {/* ── Orbit ring 1 front (in front of sphere) ── */}
      <ellipse
        cx="200" cy="200" rx="155" ry="52"
        stroke="url(#orbitGrad1)" strokeWidth="1.2"
        fill="none"
        transform="rotate(-18, 200, 200)"
        style={{ clipPath: "inset(0 0 50% 0)" }}
        opacity="0.7"
      />

      {/* ── Small orbiting balls ── */}
      {/* Top ball on orbit 1 */}
      <circle cx="200" cy="148" r="10" fill="url(#sphereMain)" style={{ filter: "drop-shadow(0 0 8px rgba(80,160,255,0.8))" }} />
      <circle cx="200" cy="148" r="10" fill="url(#sphereSpec)" opacity="0.6" />

      {/* Right ball on orbit 2 */}
      <circle cx="362" cy="212" r="13" fill="url(#sphereMain)" style={{ filter: "drop-shadow(0 0 10px rgba(60,140,255,0.7))" }} />
      <circle cx="362" cy="212" r="13" fill="url(#sphereSpec)" opacity="0.5" />

      {/* Bottom-left small ball */}
      <circle cx="68" cy="250" r="8" fill="#3a7eff" style={{ filter: "drop-shadow(0 0 6px rgba(60,120,255,0.8))" }} />
      <circle cx="68" cy="250" r="8" fill="url(#sphereSpec)" opacity="0.5" />

      {/* Bottom orbit ring extra segment for depth */}
      <ellipse
        cx="200" cy="200" rx="128" ry="40"
        stroke="rgba(160,200,255,0.25)" strokeWidth="0.8"
        fill="none"
        transform="rotate(30, 200, 200)"
        opacity="0.6"
      />
    </svg>
  );
}

/* ─── Feature cards data ─── */
const featureCards = [
  {
    id: "whatsapp",
    Icon: IconWhatsApp,
    title: "Built around WhatsApp",
    desc: "No new app. No complicated setup. Just powerful automation through the platform your customers already use every day.",
    position: { top: "4%", right: "0%" },
  },
  {
    id: "smarter",
    Icon: IconWifi,
    title: "Smarter operations",
    desc: "Turn customer conversations into confirmed orders, appointments, and revenue — automatically, in real time.",
    position: { top: "38%", left: "0%" },
  },
  {
    id: "automation",
    Icon: IconCycle,
    title: "End-to-end automation",
    desc: "From enquiries and order management to invoicing and analytics — everything works together in one seamless system.",
    position: { bottom: "4%", right: "0%" },
  },
];
/* ─── WhatsApp icon ─── */
function IconWhatsApp() {
  return (
    <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
      <circle cx="16" cy="16" r="16" fill="rgba(255,255,255,0.15)" />
      <path
        d="M16 6C10.477 6 6 10.477 6 16c0 1.85.505 3.58 1.383 5.066L6 26l5.09-1.357A9.952 9.952 0 0016 26c5.523 0 10-4.477 10-10S21.523 6 16 6zm0 1.5a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm-3.5 4.5c-.2 0-.527.075-.8.375C11.427 12.675 10.5 13.575 10.5 15s1.025 2.875 1.175 3.075c.15.2 2 3.125 4.9 4.275 2.425.95 2.925.775 3.45.725.525-.05 1.7-.675 1.95-1.35.25-.675.25-1.25.175-1.375-.075-.1-.275-.175-.575-.325-.3-.15-1.7-.85-1.975-.95-.275-.1-.45-.15-.65.15-.2.3-.75.95-.925 1.15-.175.2-.35.225-.65.075-.3-.15-1.275-.475-2.425-1.5-.9-.8-1.5-1.8-1.675-2.1-.175-.3-.025-.45.125-.6.15-.15.3-.375.45-.575.15-.2.2-.325.3-.525.1-.2.05-.375-.025-.525-.075-.15-.625-1.55-.875-2.125-.225-.525-.475-.45-.65-.45z"
        fill="white"
        opacity="0.9"
      />
    </svg>
  );
}

/* ─── WiFi / Signal icon ─── */
function IconWifi() {
  return (
    <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
      <circle cx="16" cy="16" r="16" fill="rgba(255,255,255,0.15)" />
      <circle cx="16" cy="21" r="2.5" fill="white" opacity="0.9" />
      <path d="M11.5 17.5 Q16 12 20.5 17.5" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M8.5 14.5 Q16 7 23.5 14.5" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  );
}

/* ─── Cycle / Automation icon ─── */
function IconCycle() {
  return (
    <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
      <circle cx="16" cy="16" r="16" fill="rgba(255,255,255,0.15)" />
      <path
        d="M22 16a6 6 0 01-6 6 6 6 0 01-4.243-1.757"
        stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.9"
      />
      <path
        d="M10 16a6 6 0 016-6 6 6 0 014.243 1.757"
        stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.9"
      />
      <polyline points="10,13 10,16 13,16" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      <polyline points="22,19 22,16 19,16" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    </svg>
  );
}

const bottomCards = [
  {
    Icon: IconSignal,
    title: "Smarter operations",
    desc: "Turn customer conversations into confirmed orders, appointments, and revenue — automatically, in real time.",
    glow: "rgba(79,142,247,0.18)",
  },
  {
    Icon: IconPerson,
    title: "Built around WhatsApp",
    desc: "No new app. No complicated setup. Just powerful automation through the platform your customers already use every day.",
    glow: "rgba(0,230,153,0.18)",
  },
  {
    Icon: IconCube,
    title: "End-to-end automation",
    desc: "From enquiries and order management to invoicing and analytics — everything works together in one seamless system.",
    glow: "rgba(99,102,241,0.18)",
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
        <div className="grid lg:grid-cols-[1fr_620px] gap-8 items-center min-h-[calc(100vh-96px-280px)]">

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
          {/* <motion.div
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
                      <stop offset="0%" stopColor="#e0eaff" stopOpacity="0.9" /><stop offset="100%" stopColor="#6070a0" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="d-inner-bot" x1="100" y1="115" x2="180" y2="240" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#4a5a80" stopOpacity="0.8" /><stop offset="100%" stopColor="#0a0f20" stopOpacity="0.9" />
                    </linearGradient>
                    <radialGradient id="d-spec" cx="35%" cy="25%" r="35%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" /><stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <polygon points="140,10  270,120  140,125  10,120" fill="url(#d-top)" />
                  <polygon points="10,120   140,125  140,290" fill="url(#d-left)" />
                  <polygon points="270,120  140,125  140,290" fill="url(#d-right)" />
                  <polygon points="140,40  220,112  140,120  60,112" fill="url(#d-inner-top)" opacity="0.85" />
                  <polygon points="60,112  140,120  140,250" fill="url(#d-inner-bot)" opacity="0.7" />
                  <polygon points="220,112 140,120  140,250" fill="url(#d-inner-bot)" opacity="0.5" />
                  <polyline points="140,10  270,120  140,125  10,120  140,10" stroke="rgba(180,200,255,0.25)" strokeWidth="0.8" fill="none" />
                  <line x1="140" y1="125" x2="140" y2="290" stroke="rgba(100,140,220,0.2)" strokeWidth="0.8" />
                  <line x1="10" y1="120" x2="140" y2="125" stroke="rgba(180,200,255,0.15)" strokeWidth="0.6" />
                  <line x1="270" y1="120" x2="140" y2="125" stroke="rgba(180,200,255,0.15)" strokeWidth="0.6" />
                  <polygon points="140,10  200,90  140,95  80,90" fill="url(#d-spec)" />
                </svg>
              </motion.div>
            </div>
          </motion.div> */}
          <div className="flex-1 relative flex items-center justify-center" style={{ minHeight: "500px" }}>
                    {/* Sphere */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                      className="relative"
                      style={{ width: "clamp(260px, 32vw, 440px)", height: "clamp(260px, 32vw, 440px)" }}
                    >
                      {/* Soft halo behind sphere */}
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "radial-gradient(circle, rgba(80,140,255,0.3) 0%, transparent 65%)",
                          filter: "blur(40px)",
                          transform: "scale(1.3)",
                        }}
                      />
          
                      {/* Animated floating sphere */}
                      <motion.div
                        animate={{ y: [0, -16, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-full"
                      >
                        <Sphere3D />
                      </motion.div>
          
                      {/* ── Floating Feature Cards (absolute) ── */}
                      {featureCards.map(({ id, Icon, title, desc, position }, i) => (
                        <motion.div
                          key={id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.3 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute flex flex-col gap-2 p-3 rounded-2xl"
                          style={{
                            ...position,
                            width: "clamp(155px, 16vw, 210px)",
                            background: "rgba(10, 25, 90, 0.55)",
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                            border: "1px solid rgba(120,180,255,0.2)",
                            boxShadow: "0 4px 32px rgba(0,20,80,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
                          }}
                        >
                          {/* Icon */}
                          <div className="flex items-center justify-start">
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{
                                background: "rgba(255,255,255,0.1)",
                                border: "1px solid rgba(255,255,255,0.15)",
                              }}
                            >
                              <Icon />
                            </div>
                          </div>
                          {/* Title */}
                          <p className="font-syne font-bold text-white text-xs leading-tight">
                            {title}
                          </p>
                          {/* Description */}
                          <p className="text-blue-200 leading-snug opacity-80" style={{ fontSize: "10px" }}>
                            {desc}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
        </div>

        {/* ────────── Bottom Feature Cards ────────── */}
        {/* <motion.div
          initial={{ opacity: 0.9, y: 50 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="grid grid-cols-3 lg:gap-5 gap-2 mt-10 lg:mt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {bottomCards.map(({ Icon, title, desc, glow }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 + i * 0.1 }}
              className="relative flex flex-col lg:gap-5 gap-2.5 lg:p-8 p-3 sm:p-5 overflow-hidden group lg:rounded-3xl rounded-md"
              style={{
                background: "linear-gradient(135deg, rgba(8,16,40,0.85) 0%, rgba(4,10,28,0.9) 100%)",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                border: "1px solid #1EC5E2",
              }}
            >
              
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(to bottom, transparent, ${glow.replace("0.18", "0.7")}, transparent)` }}
              />

              
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 60% 50% at 20% 20%, ${glow} 0%, transparent 70%)` }}
              />

              
              <div
                className="relative lg:w-14 lg:h-14 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "radial-gradient(circle, rgba(30,50,100,0.8) 0%, rgba(10,20,50,0.9) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: `0 0 20px ${glow}`,
                }}
              >
                <Icon />
              </div>

              
              <div className="relative flex flex-col gap-2">
                <h3 className="font-syne font-bold text-white lg:text-lg sm:text-sm text-[10px] leading-snug">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed hidden sm:block">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>

      {/* Scroll pill — bottom right */}
      {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#00e699] flex items-center justify-center shadow-[0_0_20px_rgba(0,230,153,0.5)] cursor-pointer z-10"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowUpRight className="w-4 h-4 text-[#02040a] rotate-[135deg]" />
        </motion.div> */}
    </section>
  );
}
