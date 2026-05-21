import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "brand" | "green";
}

export default function GradientText({ children, className = "", variant = "brand" }: GradientTextProps) {
  return (
    <span className={`${variant === "green" ? "text-gradient-green" : "text-gradient"} ${className}`}>
      {children}
    </span>
  );
}
