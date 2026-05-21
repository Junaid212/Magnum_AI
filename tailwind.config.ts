import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#00e699",
          "green-mid": "#00c97a",
          "green-glow": "rgba(0,230,153,0.25)",
          cyan: "#00f0ff",
          blue: "#3b6cf4",
          indigo: "#6366f1",
          purple: "#8b5cf6",
        },
        dark: {
          base: "#02040a",
          surface: "#060a14",
          card: "#0a0f1e",
          elevated: "#0e1526",
          border: "rgba(255,255,255,0.06)",
          "border-md": "rgba(255,255,255,0.10)",
          "border-lg": "rgba(255,255,255,0.14)",
        },
      },
      fontFamily: {
        syne: ["Bricolage Grotesque", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,230,153,0.18) 0%, transparent 65%)",
        "green-radial": "radial-gradient(circle, rgba(0,230,153,0.22) 0%, transparent 70%)",
        "cyan-radial": "radial-gradient(circle, rgba(0,240,255,0.18) 0%, transparent 70%)",
        "blue-radial": "radial-gradient(circle, rgba(59,108,244,0.18) 0%, transparent 70%)",
        "card-glass": "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        "grid-lines": "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      boxShadow: {
        "glow-green": "0 0 30px rgba(0,230,153,0.25), 0 0 60px rgba(0,230,153,0.1)",
        "glow-green-sm": "0 0 15px rgba(0,230,153,0.2)",
        "glow-cyan": "0 0 30px rgba(0,240,255,0.2)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-12px) rotate(1deg)" },
          "66%": { transform: "translateY(-6px) rotate(-1deg)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        "pulse-glow": {
          "0%,100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "scan-down": {
          "0%": { top: "-2px" },
          "100%": { top: "100%" },
        },
        drift: {
          "0%,100%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(10px) translateY(-8px)" },
          "50%": { transform: "translateX(-5px) translateY(-15px)" },
          "75%": { transform: "translateX(-10px) translateY(-5px)" },
        },
        "border-pulse": {
          "0%,100%": { borderColor: "rgba(0,230,153,0.2)" },
          "50%": { borderColor: "rgba(0,230,153,0.5)" },
        },
        "number-scroll": {
          from: { transform: "translateY(100%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "marquee-slow": "marquee 50s linear infinite",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
        "spin-slow": "spin-slow 25s linear infinite",
        "spin-reverse": "spin-reverse 18s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "scan-down": "scan-down 2.5s linear infinite",
        drift: "drift 12s ease-in-out infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22,1,0.36,1)",
        spring: "cubic-bezier(0.34,1.56,0.64,1)",
      },
    },
  },
  plugins: [],
};

export default config;
