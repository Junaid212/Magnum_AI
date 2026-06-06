import React from "react";

interface SectionHeaderProps {
  badge?: React.ReactNode;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
  titleClassName = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`flex flex-col gap-5 ${isCenter ? "items-center text-center" : "items-start text-left"} ${className}`}>
      {badge && (
        <span className="badge">
          <span className="badge-dot" />
          {badge}
        </span>
      )}
      <h2
        className={`font-syne font-extrabold leading-[1.1] tracking-tight text-white ${titleClassName}`}
        style={{ fontSize: titleClassName ? undefined : "clamp(36px, 4vw, 56px)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-slate-400 text-base leading-relaxed ${isCenter ? "max-w-2xl" : "max-w-xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
