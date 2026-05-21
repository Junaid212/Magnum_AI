"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  { name: "Sarah Mitchell", role: "CTO, FinVault Technologies", avatar: "SM", rating: 5, text: "MagnumAI transformed our fraud detection. False positives dropped 67% and we went from 3-week deployment cycles to same-day updates. Exceptional engineering team.", color: "#00e699" },
  { name: "Dr. James Okafor", role: "Head of Research, MedCore AI", avatar: "JO", rating: 5, text: "The diagnostic AI runs in 14 hospitals with 94% early-stage detection accuracy. This technology is saving lives. I cannot recommend them highly enough.", color: "#00f0ff" },
  { name: "Priya Nair", role: "VP Engineering, RetailNova", avatar: "PN", rating: 5, text: "Inventory waste dropped 34% in the first quarter. ROI was evident within 6 weeks of go-live. Phenomenal team — responsive, professional, outcome-focused.", color: "#8b5cf6" },
  { name: "Marcus Chen", role: "CEO, AutoPilot Logistics", avatar: "MC", rating: 5, text: "Document automation saved us 12,000 hours in year one. The accuracy is unreal. Their team genuinely cares about outcomes, not just delivery.", color: "#3b6cf4" },
  { name: "Leila Ahmadi", role: "Director of AI, CloudSphere", avatar: "LA", rating: 5, text: "The NLP models handle 2M+ queries daily with sub-100ms response times. Best technical decision we made last year — by a wide margin.", color: "#00e699" },
  { name: "Tom Walters", role: "COO, AgriSense Global", avatar: "TW", rating: 5, text: "Crop yield predictions within 3% accuracy for 18 months straight across 50,000 acres. Revolutionary technology, delivered on time and on budget.", color: "#00f0ff" },
];

function Card({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="testimonial-card glass-sm p-6 flex flex-col gap-4 mx-2.5"
      style={{ borderColor: `${t.color}12` }}>
      <Quote className="w-6 h-6" style={{ color: t.color, opacity: 0.3 }} />
      <p className="text-slate-300 text-sm leading-relaxed flex-1">"{t.text}"</p>
      <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center font-syne font-black text-[10px] text-[#02040a] flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}90)` }}>
            {t.avatar}
          </div>
          <div>
            <div className="font-syne font-semibold text-sm text-white">{t.name}</div>
            <div className="text-slate-600 text-[10px] truncate max-w-[140px]">{t.role}</div>
          </div>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="w-3 h-3 text-amber-400" fill="#f59e0b" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3);
  return (
    <section className="relative section-pad overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060a14]/30 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] orb orb-blue opacity-07" />
      <div className="relative">
        <div className="container mb-14">
          <ScrollReveal>
            <SectionHeader
              badge="Testimonials"
              title={<>Trusted By <span className="text-gradient">Industry Leaders</span></>}
              subtitle="Hear directly from the teams who've transformed their businesses with our AI solutions."
              titleClassName="text-5xl lg:text-6xl"
            />
          </ScrollReveal>
        </div>
        <div className="marquee-wrap mb-5">
          <div className="flex animate-marquee-slow">
            {[...row1, ...row1, ...row1].map((t, i) => <Card key={i} t={t} />)}
          </div>
        </div>
        <div className="marquee-wrap">
          <div className="flex animate-marquee-reverse" style={{ animationDuration: "40s" }}>
            {[...row2, ...row2, ...row2].map((t, i) => <Card key={i} t={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
