"use client";

import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Our Mission",
    desc: "Build practical AI products that deliver measurable business value and exceptional user experiences.",
    img: "/images/mission.jpg",
  },
  {
    title: "Our Team",
    desc: "A cross-disciplinary crew of engineers, designers, and product people who ship fast and learn quickly.",
    img: "/images/team.jpg",
  },
  {
    title: "How we work",
    desc: "Short iterations, clear metrics, and close collaboration with customers to reduce risk and increase impact.",
    img: "/images/process.jpg",
  },
];

export default function AboutCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((c, i) => (
        <GlassCard key={c.title} className="p-6" glow={i === 0 ? "green" : i === 1 ? "blue" : "purple"} delay={i * 0.08}>
          <div className="flex flex-col gap-4">
            <div className="w-full h-40 rounded-lg overflow-hidden">
              <motion.img src={c.img} alt={c.title} className="w-full h-full object-cover" whileHover={{ scale: 1.03 }} />
            </div>
            <h4 className="font-syne font-bold text-lg text-white">{c.title}</h4>
            <p className="text-slate-400 text-sm">{c.desc}</p>
            <div className="mt-4">
              <button className="btn-primary">Learn more</button>
            </div>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
