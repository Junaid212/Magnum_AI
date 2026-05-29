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
  LineChart,
  FileText,
  Megaphone
} from "lucide-react";

// Services array removed for handcrafted bento grid implementation

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
              <h1 className="font-syne font-extrabold text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
                Enterprise AI automation, <br className="hidden sm:block" />
                <span className="text-gradient">engineered to scale.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. WhatsApp Automation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-8 flex flex-col justify-between relative group overflow-hidden rounded-3xl border border-white/[0.05] hover:border-[#00e699]/30 transition-all duration-300 md:col-span-2 min-h-[380px]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[#00e699] to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,#00e69908_0%,transparent_60%)]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
                <div className="lg:col-span-7 flex flex-col justify-between h-full py-2">
                  <div>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#00e699]/10 border border-[#00e699]/20 mb-5">
                      <MessageSquare className="w-6 h-6 text-[#00e699]" />
                    </div>
                    <h3 className="font-syne font-extrabold text-white text-2xl lg:text-3xl mb-4">WhatsApp Automation</h3>
                    <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                      Automate customer conversations, order taking, enquiries, confirmations, and support directly on WhatsApp, 24/7.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="text-[10px] font-syne font-bold uppercase tracking-wider text-[#00e699] bg-[#00e699]/08 px-3 py-1.5 rounded-full border border-[#00e699]/15">
                      24/7 Response
                    </span>
                    <span className="text-[10px] font-syne font-bold uppercase tracking-wider text-slate-400 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.05]">
                      Smart Order Flow
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 w-full">
                  <div className="relative w-full rounded-2xl bg-[#040814]/80 border border-white/[0.08] p-4 font-sans text-[11px] flex flex-col gap-3 shadow-2xl">
                    <div className="flex items-center gap-2 pb-2 border-b border-white/[0.05]">
                      <div className="w-2 h-2 rounded-full bg-[#00e699] animate-pulse" />
                      <span className="font-syne font-bold text-slate-300">MAGNUM AI Bot</span>
                      <span className="text-[9px] text-slate-500 ml-auto">Active 24/7</span>
                    </div>
                    <div className="flex flex-col gap-2.5 max-h-[160px] overflow-y-auto pr-1">
                      <div className="self-end bg-blue-600/15 border border-blue-500/20 text-slate-300 p-2.5 rounded-2xl rounded-tr-none max-w-[85%]">
                        Hi, I'd like to order a Spicy Chicken Pizza. 🍕
                      </div>
                      <div className="self-start bg-emerald-500/10 border border-[#00e699]/20 text-slate-300 p-2.5 rounded-2xl rounded-tl-none max-w-[85%]">
                        Checking menu... Yes! 🍗 Spicy Chicken Pizza added. Would you like a drink?
                      </div>
                      <div className="self-end bg-blue-600/15 border border-blue-500/20 text-slate-300 p-2.5 rounded-2xl rounded-tr-none max-w-[85%]">
                        No, just the pizza!
                      </div>
                      <div className="self-start bg-emerald-500/10 border border-[#00e699]/20 text-slate-300 p-2.5 rounded-2xl rounded-tl-none max-w-[85%]">
                        Perfect! Total is $18.50. Order #4829 is confirmed. ✅ Invoice sent!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Smart Order Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass p-8 flex flex-col justify-between relative group overflow-hidden rounded-3xl border border-white/[0.05] hover:border-[#00f0ff]/30 transition-all duration-300 md:col-span-1 min-h-[380px]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[#00f0ff] to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,#00f0ff08_0%,transparent_60%)]" />

              <div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#00f0ff]/10 border border-[#00f0ff]/20 mb-5">
                  <Cpu className="w-6 h-6 text-[#00f0ff]" />
                </div>
                <h3 className="font-syne font-extrabold text-white text-2xl mb-3">Smart Order Management</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Manage WhatsApp, walk-in, and manual orders in one live dashboard built for operational speed.
                </p>
              </div>

              <div className="flex flex-col gap-2 w-full bg-[#040814]/60 border border-white/[0.06] rounded-2xl p-3.5 text-[10px]">
                <div className="flex items-center justify-between text-slate-500 font-syne font-bold uppercase tracking-wider text-[8px] pb-1 border-b border-white/[0.05]">
                  <span>Source</span>
                  <span>Total</span>
                  <span>Status</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/[0.02]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#00e699]">🟢 WhatsApp</span>
                    <span className="text-slate-500">#4829</span>
                  </div>
                  <span className="text-slate-300 font-bold font-mono">$18.50</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#00e699]/10 text-[#00e699] text-[8px] font-medium border border-[#00e699]/20">Active</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/[0.02]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#f59e0b]">🟡 Walk-In</span>
                    <span className="text-slate-500">#4828</span>
                  </div>
                  <span className="text-slate-300 font-bold font-mono">$4.50</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] text-[8px] font-medium border border-[#f59e0b]/20">Prep</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#00f0ff]">🔵 Manual</span>
                    <span className="text-slate-500">#4827</span>
                  </div>
                  <span className="text-slate-300 font-bold font-mono">$32.00</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] text-[8px] font-medium border border-[#00f0ff]/20">Done</span>
                </div>
              </div>
            </motion.div>

            {/* 3. Automated Invoicing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass p-8 flex flex-col justify-between relative group overflow-hidden rounded-3xl border border-white/[0.05] hover:border-[#8b5cf6]/30 transition-all duration-300 md:col-span-1 min-h-[380px]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[#8b5cf6] to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,#8b5cf608_0%,transparent_60%)]" />

              <div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 mb-5">
                  <FileText className="w-6 h-6 text-[#8b5cf6]" />
                </div>
                <h3 className="font-syne font-extrabold text-white text-2xl mb-3">Automated Invoicing</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Generate branded invoices instantly and deliver them automatically through WhatsApp in multiple languages.
                </p>
              </div>

              <div className="relative w-full rounded-2xl bg-[#040814]/70 border border-white/[0.08] p-4 text-[10px] font-mono flex flex-col gap-2 shadow-2xl">
                <div className="flex justify-between items-start border-b border-white/[0.05] pb-2">
                  <div>
                    <span className="font-syne font-extrabold text-white text-xs tracking-wider">MAGNUM CO.</span>
                    <p className="text-[8px] text-slate-500 font-sans mt-0.5">Automated Invoice</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-sans font-bold text-[8px] tracking-wider border border-emerald-500/20">PAID</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Order #4829</span>
                  <span>$18.50</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Tax (5%)</span>
                  <span>$0.92</span>
                </div>
                <div className="flex justify-between text-white font-bold border-t border-white/[0.05] pt-2">
                  <span>Total</span>
                  <span>$19.42</span>
                </div>
                <div className="text-[8px] text-[#8b5cf6] font-sans text-center mt-1">
                  ✓ PDF generated & delivered via WhatsApp
                </div>
              </div>
            </motion.div>

            {/* 4. Broadcast Campaigns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass p-8 flex flex-col justify-between relative group overflow-hidden rounded-3xl border border-white/[0.05] hover:border-[#f59e0b]/30 transition-all duration-300 md:col-span-1 min-h-[380px]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[#f59e0b] to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,#f59e0b08_0%,transparent_60%)]" />

              <div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-5">
                  <Megaphone className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <h3 className="font-syne font-extrabold text-white text-2xl mb-3">Broadcast Campaigns</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Send promotions, offers, announcements, and updates to your customer base with high-open-rate WhatsApp campaigns.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 w-full bg-[#040814]/60 border border-white/[0.06] rounded-2xl p-3.5 text-xs">
                <div className="flex justify-between text-[10px] text-slate-400 font-syne">
                  <span>Campaign: <strong className="text-white font-semibold">Weekend Promo</strong></span>
                  <span className="text-[#f59e0b] font-bold">100% Sent</span>
                </div>
                <div className="w-full bg-white/[0.04] h-2 rounded-full overflow-hidden border border-white/[0.05]">
                  <div className="bg-gradient-to-r from-[#f59e0b] to-[#ffaa00] h-full rounded-full w-[96%]" />
                </div>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div className="bg-white/[0.02] border border-white/[0.04] p-2 rounded-xl text-center">
                    <p className="text-[8px] text-slate-500 uppercase tracking-wider mb-0.5">Open Rate</p>
                    <p className="text-xs font-bold text-emerald-400 font-syne">98.2% 🔥</p>
                  </div>
                  <div className="bg-white/[0.02] border border-white/[0.04] p-2 rounded-xl text-center">
                    <p className="text-[8px] text-slate-500 uppercase tracking-wider mb-0.5">CTR</p>
                    <p className="text-xs font-bold text-[#f59e0b] font-syne">24.5%</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 5. Analytics Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass p-8 flex flex-col justify-between relative group overflow-hidden rounded-3xl border border-white/[0.05] hover:border-[#3b6cf4]/30 transition-all duration-300 md:col-span-1 min-h-[380px]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[#3b6cf4] to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,#3b6cf408_0%,transparent_60%)]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
                <div className="lg:col-span-7 flex flex-col justify-between h-full py-2">
                  <div>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#3b6cf4]/10 border border-[#3b6cf4]/20 mb-5">
                      <LineChart className="w-6 h-6 text-[#3b6cf4]" />
                    </div>
                    <h3 className="font-syne font-extrabold text-white text-2xl lg:text-3xl mb-4">Analytics Dashboard</h3>
                    <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                      Track revenue, orders, customer activity, and operational performance in real time from one central system.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="text-[10px] font-syne font-bold uppercase tracking-wider text-[#3b6cf4] bg-[#3b6cf4]/08 px-3 py-1.5 rounded-full border border-[#3b6cf4]/15">
                      Live Performance
                    </span>
                    <span className="text-[10px] font-syne font-bold uppercase tracking-wider text-slate-400 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.05]">
                      Export CSV/PDF
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 w-full">
                  <div className="relative w-full rounded-2xl bg-[#040814]/80 border border-white/[0.08] p-4 text-xs flex flex-col gap-3.5 shadow-2xl">
                    <div className="flex justify-between items-center">
                      <span className="font-syne font-bold text-slate-300">Revenue Growth</span>
                      <span className="text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">+34.8%</span>
                    </div>
                    <div className="relative w-full h-24 flex items-end">
                      <svg viewBox="0 0 100 40" className="w-full h-full text-[#3b6cf4]">
                        <defs>
                          <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3b6cf4" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#3b6cf4" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0 35 Q 20 20, 40 28 T 80 10 T 100 5 L 100 40 L 0 40 Z"
                          fill="url(#chartGlow)"
                        />
                        <path
                          d="M0 35 Q 20 20, 40 28 T 80 10 T 100 5"
                          fill="none"
                          stroke="#3b6cf4"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <circle cx="100" cy="5" r="3" fill="#3b6cf4" className="animate-pulse" />
                      </svg>
                    </div>
                    <div className="flex justify-between items-center text-[9px] text-slate-500 font-syne uppercase border-t border-white/[0.05] pt-2">
                      <span>Mon</span>
                      <span>Wed</span>
                      <span>Fri</span>
                      <span>Sun</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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

          <div className="relative flex flex-col gap-6 md:gap-0 md:grid md:grid-cols-5">
            {/* Timeline connector line (hidden on mobile) */}
            <div className="hidden md:block absolute top-[44px] left-8 right-8 h-px bg-gradient-to-r from-[#00e699]/30 via-[#00f0ff]/30 to-[#8b5cf6]/10" />

            {steps.map(({ num, icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex flex-col md:items-center text-left md:text-center px-4"
              >
                {/* Mobile connector line */}
                {i < steps.length - 1 && (
                  <div className="md:hidden absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-[#00e699]/30 to-transparent" />
                )}
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
