"use client";

import { motion } from "framer-motion";
import React from "react";

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function GlowButton({
  children,
  className = "",
  variant = "primary",
  size = "md",
  onClick,
  href,
  type = "button",
  disabled = false,
}: GlowButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary: "glow-btn",
    outline: "outline-btn",
    ghost:
      "bg-transparent text-slate-300 hover:text-white border border-transparent hover:border-white/10 transition-all",
  };

  const baseClass = `inline-flex items-center justify-center gap-2 rounded-full font-semibold cursor-pointer transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
