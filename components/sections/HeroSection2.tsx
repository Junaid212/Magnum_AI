"use client";

import { motion } from "framer-motion";

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
    desc: "Turn customer conversations into confirmed orders, appointments, and revenue — automatically, in real time.",
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
    desc: "Turn customer conversations into confirmed orders, appointments, and revenue — automatically, in real time.",
    position: { bottom: "4%", right: "0%" },
  },
];

export default function HeroSection2() {
  return (
    <section
      id="hero2"
      className="relative w-full overflow-hidden flex items-center"
      style={{
        minHeight: "92vh",
        background: "radial-gradient(circle, rgba(116,136,237,1) 0%, rgba(23,67,196,1) 86%)",
      }}
    >
      {/* ── Subtle radial glow in center ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 55% at 55% 50%, rgba(100,160,255,0.18) 0%, transparent 70%)",
        }}
      />
      {/* ── Faint noise / grain overlay for richness ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── Layout ── */}
      <div className="relative w-full max-w-[1400px] mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-8 py-16 lg:py-0" style={{ minHeight: "92vh" }}>

        {/* ────── LEFT: Headline ────── */}
        <div className="flex-1 flex flex-col justify-center lg:max-w-[46%] z-10">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-syne font-extrabold text-white leading-[1.08]"
            style={{ fontSize: "clamp(36px, 2.8vw, 72px)" }}
          >
            We help businesses{" "}
            <br className="hidden lg:block" />
            automate
            <br className="hidden lg:block" />
            operations, capture
            <br className="hidden lg:block" />
            more customers,
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #00d4ff 0%, #00b8ff 40%, #40e0ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              and scale through
              <br />
              intelligent
              <br />
              WhatsApp-first
              <br />
              systems.
            </span>
          </motion.h2>
        </div>

        {/* ────── RIGHT: Sphere + Floating Cards ────── */}
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
    </section>
  );
}
