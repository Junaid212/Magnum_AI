"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Cpu, 
  Database, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight, 
  Search, 
  FileCode2, 
  Zap, 
  LineChart 
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "WhatsApp-First Chatbots",
    desc: "We turn conversational threads into revenue pipelines. Automate order menus, booking schedules, and support routes directly inside the application your customers use daily.",
    color: "#00e699",
    features: ["Interactive product catalogs", "Sleek appointment selectors", "Auto-translate responses", "Live-agent transfer protocols"],
  },
  {
    icon: Cpu,
    title: "Operations Automation",
    desc: "Cut administrative labor in half. Our systems automatically handle invoice generation, instant delivery updates, support tickets, and direct data pipelines so your business runs 24/7.",
    color: "#00f0ff",
    features: ["Automatic PDF invoices", "Status broadcast schedules", "CRM pipeline triggers", "Instant SMS & Email hooks"],
  },
  {
    icon: Database,
    title: "AI Agents & LLM Core",
    desc: "We construct brainpower tailored to your internal knowledge bases. Train AI agents to query your specific company policies, lookup dynamic SQL records, and respond with human intelligence.",
    color: "#8b5cf6",
    features: ["Custom data fine-tuning", "Retrieval-Augmented Generation (RAG)", "Intent detection neural nets", "Multi-lingual capabilities"],
  },
  {
    icon: Layers,
    title: "Enterprise System Bridges",
    desc: "Connect your new AI operations directly to your legacy codebase and external SaaS. We build bridges linking Shopify, Salesforce, Stripe, PostgreSQL databases, and proprietary APIs.",
    color: "#3b6cf4",
    features: ["Real-time inventory syncing", "Secure Stripe invoice payloads", "Lead capturing pipelines", "Proprietary database adaptors"],
  },
];

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Operational Audit",
    desc: "We dive deep into your active manual procedures, locating friction blocks, customer service delays, and repetitive clerical work.",
  },
  {
    num: "02",
    icon: FileCode2,
    title: "Ecosystem Architecture",
    desc: "We design custom conversation maps, database models, and API integrations, mapping exactly how data will flow.",
  },
  {
    num: "03",
    icon: Cpu,
    title: "Interactive Prototype",
    desc: "We build a functional model inside a sandboxed environment, allowing you to test conversational flows and triggers.",
  },
  {
    num: "04",
    icon: Zap,
    title: "Live Production",
    desc: "We launch your customized WhatsApp node and connect your core operations dashboard, complete with 99.9% uptime guarantees.",
  },
  {
    num: "05",
    icon: LineChart,
    title: "Metric Optimization",
    desc: "Our analytics team reviews system conversations, tweaking responses, training models, and expanding capabilities to drive conversions.",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative bg-[#02040a] overflow-hidden min-h-screen">
      <Navbar />

      {/* ── HERO BANNER ── */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: "#060b1e" }}>
        {/* Background Grids and Orbs */}
        <div className="absolute inset-0 canvas-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] orb orb-cyan opacity-15" />
        
        <div className="relative container z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <ScrollReveal>
              <span className="badge mb-6">
                <span className="badge-dot" />
                WHAT WE DO
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="font-syne font-extrabold text-white text-5xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
                Enterprise AI automation, <br />
                <span className="text-gradient">engineered to scale.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-slate-400 text-lg lg:text-xl max-w-2xl leading-relaxed">
                We design and integrate smart conversational platforms that replace manual data entry, 
                streamline booking flows, and instantly capture every incoming lead.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 canvas-grid opacity-30" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] orb orb-green opacity-08" />

        <div className="relative container z-10">
          <ScrollReveal className="mb-20">
            <SectionHeader
              badge="Core Capabilities"
              title={<>Smarter systems, <span className="text-gradient">unmatched results.</span></>}
              subtitle="From lightweight conversational menus to heavy enterprise databases, we engineer complete infrastructure."
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map(({ icon: Icon, title, desc, color, features }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.12 }}
                className="glass p-8 flex flex-col gap-6 relative group overflow-hidden"
              >
                {/* Accent border on hover */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to bottom, transparent, ${color}, transparent)` }}
                />
                
                {/* Glow spot */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 10% 10%, ${color}08 0%, transparent 60%)` }}
                />

                <div className="flex items-center gap-4">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ 
                      background: `${color}12`, 
                      border: `1px solid ${color}25`
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color }} />
                  </div>
                  <h3 className="font-syne font-extrabold text-white text-xl lg:text-2xl">{title}</h3>
                </div>

                <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                  {desc}
                </p>

                <div className="h-px bg-white/[0.06] w-full my-2" />

                <div>
                  <h4 className="font-syne font-bold text-xs text-white uppercase tracking-wider mb-4">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-slate-500 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-[#00e699]" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE ENGAGEMENT PROCESS ── */}
      <section className="relative section-pad bg-[#030712]/30 border-t border-white/[0.04]">
        <div className="absolute inset-0 canvas-grid opacity-30" />
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[700px] h-[500px] orb orb-indigo opacity-08" />

        <div className="relative container z-10">
          <ScrollReveal className="mb-20">
            <SectionHeader
              badge="Our Process"
              title={<>From plan to production <br />in <span className="text-gradient">five simple steps.</span></>}
              subtitle="We coordinate detailed operational audits so your systems align with your metrics."
            />
          </ScrollReveal>

          <div className="relative flex flex-col gap-6 md:gap-0 md:grid md:grid-cols-5 gap-y-12">
            {/* Timeline connector line (hidden on mobile) */}
            <div className="hidden md:block absolute top-[44px] left-8 right-8 h-px bg-gradient-to-r from-[#00e699]/30 via-[#00f0ff]/30 to-[#8b5cf6]/10" />

            {steps.map(({ num, icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex flex-col items-start md:items-center text-left md:text-center px-4"
              >
                {/* Bullet badge */}
                <div className="w-16 h-16 rounded-full bg-[#0a0f1e] border border-white/[0.08] flex items-center justify-center mb-6 relative z-10 shadow-lg group hover:border-[#00e699] transition-colors">
                  <Icon className="w-6 h-6 text-[#00e699]" />
                  
                  {/* Step counter tag */}
                  <span className="absolute -top-1 -right-1 bg-white/[0.06] border border-white/[0.1] text-slate-400 font-syne font-bold text-[9px] w-5 h-5 rounded-full flex items-center justify-center">
                    {num}
                  </span>
                </div>

                <h4 className="font-syne font-bold text-white text-base mb-3 leading-snug">{title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed max-w-[200px] md:mx-auto">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA AT BOTTOM ── */}
      {/* <section className="relative py-24 border-t border-white/[0.05] overflow-hidden">
        <div className="absolute inset-0 canvas-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] orb orb-green opacity-10" />

        <div className="relative container z-10 text-center flex flex-col items-center">
          <ScrollReveal>
            <h2 className="font-syne font-black text-white text-4xl lg:text-6xl leading-tight mb-8">
              Let's engineer <br />
              <span className="text-gradient">your custom integration.</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.15}>
            <p className="text-slate-400 text-base max-w-xl mb-10 leading-relaxed">
              Ready to replace friction with automation? Let's hop on a 15-minute operational audit call. We'll map your flows and prepare your initial systems schema.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03, boxShadow: "0 0 45px rgba(0,230,153,0.55)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-[#00e699] rounded-full pl-8 pr-2 py-2.5 w-fit cursor-pointer"
              style={{ boxShadow: "0 0 28px rgba(0,230,153,0.35)" }}
            >
              <span className="font-syne font-extrabold text-sm tracking-[0.06em] text-[#02040a] uppercase whitespace-nowrap">
                Audit My Workflow
              </span>
              <span className="w-10 h-10 rounded-full bg-[#02040a] flex items-center justify-center flex-shrink-0">
                <ArrowUpRight className="w-5 h-5 text-[#00e699]" />
              </span>
            </motion.a>
          </ScrollReveal>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}
