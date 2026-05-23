"use client";

import { motion } from "framer-motion";
import { Building2, Heart, ShoppingBag, Plane, GraduationCap, Leaf, Banknote, Stethoscope } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const industries = [
  { icon: Banknote,     label: "Restaurants",       desc: "Risk models, fraud detection, algo-trading",     color: "#00e699" },
  { icon: Stethoscope,  label: "Clinics & Healthcare",    desc: "Diagnostic AI, drug discovery, patient analytics", color: "#00f0ff" },
  { icon: ShoppingBag,  label: "Retail & Cosmetics",        desc: "Demand forecasting, personalization, CV",         color: "#8b5cf6" },
  { icon: Building2,    label: "E-commerce",   desc: "Valuation models, market prediction",             color: "#3b6cf4" },
  { icon: Plane,        label: "Supermarkets",     desc: "Predictive maintenance, route optimization",      color: "#00e699" },
  { icon: GraduationCap,label: "Hotels & Hospitality",     desc: "Adaptive learning, content generation",           color: "#00f0ff" },
  { icon: Leaf,         label: "Schools & Training",   desc: "Crop prediction, precision farming, satellite AI", color: "#8b5cf6" },
  { icon: Heart,        label: "Service Businesses",      desc: "Health coaching AI, biometric analysis",          color: "#3b6cf4" },
];

export default function Industries() {
  return (
    <section className="relative section-pad overflow-hidden">
      <div className="absolute inset-0 canvas-grid opacity-40" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[350px] orb orb-cyan opacity-07" />
      <div className="relative container">
        <ScrollReveal className="mb-16">
          <SectionHeader
            badge="Industries We Serve"
            title={<>Built for businesses <span className="text-gradient">across every industry</span></>}
            // subtitle="Our modular AI platform adapts to the unique complexity and regulatory demands of every sector."
            titleClassName="text-5xl lg:text-6xl"
          />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-8 gap-4 ">
          {industries.map(({ icon: Icon, label, desc, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -5, borderColor: `${color}25` }}
              className="glass p-6 flex flex-col gap-4 cursor-default transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: `${color}10`, border: `1px solid ${color}20` }}>
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <div>
                <h3 className="font-syne font-bold text-white text-sm mb-1.5">{label}</h3>
                {/* <p className="text-slate-600 text-xs leading-relaxed">{desc}</p> */}
              </div>
              <div className="h-[2px] w-0 group-hover:w-8 rounded-full transition-all duration-400 mt-auto" style={{ background: color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
