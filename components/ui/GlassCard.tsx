"use client";

import { motion } from "framer-motion";
import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "green" | "blue" | "purple" | "none";
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = "none",
  delay = 0,
}: GlassCardProps) {
  const glowStyles = {
    green: "hover:shadow-[0_20px_60px_rgba(16,255,176,0.12),0_0_0_1px_rgba(16,255,176,0.12)]",
    blue: "hover:shadow-[0_20px_60px_rgba(79,142,247,0.12),0_0_0_1px_rgba(79,142,247,0.12)]",
    purple:
      "hover:shadow-[0_20px_60px_rgba(168,85,247,0.12),0_0_0_1px_rgba(168,85,247,0.12)]",
    none: "",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : {}}
      className={`glass-card ${hover ? "glass-card-hover" : ""} ${glowStyles[glow]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
