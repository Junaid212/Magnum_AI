"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Database, Eye, MessageSquare, LineChart, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    id: "ml",
    number: "01",
    title: "WhatsApp\nAutomation",
    icon: Brain,
    color: "#00e699",
    desc: "Automate customer conversations, order taking, enquiries, confirmations, and support — directly on WhatsApp, 24/7.",
    image: "https://i.pinimg.com/736x/0d/61/0b/0d610bf2866010a898c7c3a2b9163153.jpg",
    bgClass: "from-[#00e699]/10 via-[#00e699]/03 to-transparent",
  },
  {
    id: "data",
    number: "02",
    title: "Smart\nOrder\nManagement",
    icon: Database,
    color: "#00f0ff",
    desc: "Manage WhatsApp, walk-in, and manual orders in one live dashboard built for operational speed.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    bgClass: "from-[#00f0ff]/10 via-[#00f0ff]/03 to-transparent",
  },
  {
    id: "cv",
    number: "03",
    title: "Automated\nInvoicing",
    icon: Eye,
    color: "#8b5cf6",
    desc: "Generate branded invoices instantly and deliver them automatically through WhatsApp in multiple languages.",
    image: "https://i.pinimg.com/1200x/4c/b8/08/4cb8082a2dbc919cebb8bd594221d3c5.jpg",
    bgClass: "from-[#8b5cf6]/10 via-[#8b5cf6]/03 to-transparent",
  },
  {
    id: "nlp",
    number: "04",
    title: "Broadcast\nCampaigns",
    icon: MessageSquare,
    color: "#f59e0b",
    desc: "Send promotions, offers, announcements, and updates to your customer base with high-open-rate WhatsApp campaigns.",
    image: "https://i.pinimg.com/736x/ff/bc/eb/ffbceb183db64834530576f48f3ffe30.jpg",
    bgClass: "from-[#f59e0b]/10 via-[#f59e0b]/03 to-transparent",
  },
  {
    id: "pred",
    number: "05",
    title: "Analytics\nDashboard",
    icon: LineChart,
    color: "#3b6cf4",
    desc: "Track revenue, orders, customer activity, and operational performance in real time from one central system.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    bgClass: "from-[#3b6cf4]/10 via-[#3b6cf4]/03 to-transparent",
  },
];

export default function ServicesAccordion() {
  const [activeId, setActiveId] = useState("ml");

  const active = services.find((s) => s.id === activeId)!;

  return (
    <section id="services" className="relative section-pad overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] orb orb-green opacity-08" />
      <div className="relative container">
        <ScrollReveal className="mb-16">
          <SectionHeader
            badge="Our Services"
            title={<>What We <span className="text-gradient">Deliver</span></>}
            subtitle="Five core AI capabilities engineered to transform how your business operates, competes, and grows."
            titleClassName="text-5xl lg:text-6xl"
          />
        </ScrollReveal>

        {/* ── DESKTOP LAYOUT (Horizontal Accordion) ── */}
        <div className="hidden md:flex h-[520px] gap-0 overflow-hidden rounded-3xl border border-white/[0.06]" style={{ background: "#060a14" }}>
          {services.map((svc) => {
            const Icon = svc.icon;
            const isActive = svc.id === activeId;
            return (
              <motion.div
                key={svc.id}
                onClick={() => setActiveId(svc.id)}
                animate={{ flex: isActive ? 5 : 1 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden cursor-pointer border-r border-white/[0.05] last:border-r-0"
              >
                {/* Background gradient when active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="bg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className={`absolute inset-0 bg-gradient-to-br ${svc.bgClass}`}
                    />
                  )}
                </AnimatePresence>

                {/* Active accent line at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500"
                  style={{ background: svc.color, opacity: isActive ? 1 : 0 }}
                />

                {/* Collapsed: vertical text strip */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center gap-4 transition-opacity duration-300 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${svc.color}15`, border: `1px solid ${svc.color}25` }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color: svc.color }} />
                  </div>
                  <span
                    className="font-syne font-bold text-xs tracking-widest uppercase writing-vertical whitespace-nowrap"
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {svc.title.replace("\n", " ")}
                  </span>
                </div>

                {/* Expanded: content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                      className="absolute inset-0 p-8 flex flex-col justify-between"
                    >
                      {/* Header, Description, and Image Stack */}
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                            style={{ background: `${active.color}15`, border: `1px solid ${active.color}25`, boxShadow: `0 0 30px ${active.color}20` }}
                          >
                            <Icon className="w-7 h-7" style={{ color: active.color }} />
                          </div>
                          <div>
                            <div className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-1">{active.number}</div>
                            <h3 className="font-syne font-bold text-2xl text-white leading-tight">
                              {active.title.replace("\n", " ")}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                          {active.desc}
                        </p>

                        {/* Image placed below description */}
                        <div className="relative w-full h-[220px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#040814] shadow-inner group">
                          <img 
                            src={active.image} 
                            alt={active.title} 
                            className="w-full h-full object-cover opacity-70 group-hover:scale-[1.03] transition-transform duration-700" 
                          />
                          {/* Shadow/fade overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent z-10" />
                          {/* Glow orb inside image container */}
                          <div className="absolute -bottom-8 -right-8 w-[140px] h-[140px] orb opacity-25 pointer-events-none"
                            style={{
                              background: `radial-gradient(circle, ${active.color}33 0%, transparent 70%)`,
                              filter: "blur(20px)"
                            }}
                          />
                        </div>
                      </div>

                      {/* CTA at the very bottom */}
                      <button
                        className="flex items-center gap-2 text-sm font-semibold group w-fit mt-2"
                        style={{ color: active.color }}
                      >
                        Explore service
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ── MOBILE LAYOUT (Vertical Expandable Stack) ── */}
        <div className="flex md:hidden flex-col gap-4">
          {services.map((svc) => {
            const Icon = svc.icon;
            const isActive = svc.id === activeId;
            return (
              <div 
                key={svc.id}
                onClick={() => setActiveId(svc.id)}
                className="rounded-2xl border border-white/[0.06] bg-[#060a14] overflow-hidden transition-all duration-300"
                style={{
                  borderColor: isActive ? svc.color : "rgba(255,255,255,0.06)",
                }}
              >
                {/* Accordion Header */}
                <div className="p-5 flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${svc.color}15`, border: `1px solid ${svc.color}25` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: svc.color }} />
                    </div>
                    <h3 className="font-syne font-bold text-base text-white">
                      {svc.title.replace("\n", " ")}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">{svc.number}</span>
                </div>

                {/* Expandable Accordion Content */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="border-t border-white/[0.05]"
                    >
                      <div className="p-5 flex flex-col gap-4 bg-[#080d1a]/40">
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                          {svc.desc}
                        </p>
                        
                        {/* Compact Service Illustration image */}
                        <div className="relative w-full h-[180px] overflow-hidden rounded-xl border border-white/[0.08] bg-[#040814]">
                          <img 
                            src={svc.image} 
                            alt={svc.title} 
                            className="w-full h-full object-cover opacity-70" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                        </div>

                        {/* CTA Link */}
                        <button
                          className="flex items-center gap-2 text-xs font-semibold mt-2"
                          style={{ color: svc.color }}
                        >
                          Explore service
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
