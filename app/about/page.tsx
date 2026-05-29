"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Users, Target, Rocket, Lightbulb, Trophy, Shield, BrainCircuit, Sparkles, ArrowUpRight } from "lucide-react";

const stats = [
  { value: "10M+", label: "Automated Messages Sent", color: "#00e699" },
  { value: "99.9%", label: "System Uptime SLA", color: "#00f0ff" },
  { value: "500k+", label: "Operational Hours Saved", color: "#8b5cf6" },
  { value: "10x", label: "Average Business Scale", color: "#3b6cf4" },
];

const pillars = [
  { 
    icon: Target, 
    title: "WhatsApp-first automation", 
    desc: "Built around the platform your customers already trust and use daily.", 
    color: "#00e699" 
  },
  { 
    icon: Lightbulb, 
    title: "Tailored for your business", 
    desc: "Every workflow, menu, and automation system is customized to fit your operations.", 
    color: "#00f0ff" 
  },
  { 
    icon: Rocket, 
    title: "Fast deployment & support", 
    desc: "Go live quickly with hands-on support before, during, and after launch.", 
    color: "#8b5cf6" 
  },
  { 
    icon: Users, 
    title: "One connected system", 
    desc: "Orders, invoicing, analytics, and customer management — all in one seamless platform.", 
    color: "#3b6cf4" 
  },
];

const coreTeamValues = [
  {
    icon: BrainCircuit,
    title: "Smarter operations",
    desc: "Turn Customer conversations into confirmed orders, appointments, and revenue, automatically, in real time.",
  },
  {
    icon: Trophy,
    title: "WhatsApp-first systems",
    desc: "Built around the platform your customers already use every day, with no complicated setup or extra apps required.",
  },
  {
    icon: Shield,
    title: "End-to-end automation",
    desc: "From enquiries and order management to invoicing, analytics, and broadcasts, everything works together in one seamless ecosystem.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative bg-[#02040a] overflow-hidden min-h-screen">
      <Navbar />

      {/* ── HERO BANNER ── */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: "#060b1e" }}>
        {/* Background Grids and Orbs */}
        <div className="absolute inset-0 canvas-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] orb orb-green opacity-15" />
        
        <div className="relative container z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <ScrollReveal>
              <span className="badge mb-6">
                <span className="badge-dot" />
                OUR MISSION
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="font-syne font-extrabold text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.08] tracking-tight mb-8">
                Pioneering operations on <br className="hidden sm:block" />
                <span className="text-gradient">intelligent autopilot.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
                Magnum AI is a premier intelligence agency dedicated to building high-performance conversational architectures 
                and WhatsApp-first automation ecosystems. We empower modern businesses to capture, service, and scale customer experiences effortlessly.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="relative py-16 border-y border-white/[0.06] bg-[#030712]/50">
        <div className="absolute inset-0 canvas-grid opacity-20" />
        <div className="relative container z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center flex flex-col items-center"
              >
                <div 
                  className="font-syne font-black text-3xl sm:text-4xl lg:text-6xl mb-2 sm:mb-3 tracking-tight"
                  style={{ 
                    backgroundImage: `linear-gradient(135deg, ${stat.color} 0%, #fff 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs lg:text-sm font-medium max-w-[180px]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE / THE VISION ── */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 canvas-grid opacity-30" />
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] orb orb-blue opacity-10" />

        <div className="relative container z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side text */}
            <div className="flex flex-col gap-6">
              <ScrollReveal >
                <SectionHeader
                  badge="About Magnum AI"
                  title={<>Automate, capture , <br /><span className="text-gradient">customers and scale with WhatsApp-first solutions.
</span></>}
                  align="left"
                  titleClassName="text-4xl lg:text-5xl"
                />
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="text-slate-400 text-base leading-relaxed flex flex-col gap-5">
                  <p>
                    Magnum AI is a business automation platform built for restaurants, clinics, retailers, and modern service businesses. 
                    From customer conversations and order management to invoicing, analytics, and broadcast campaigns, we create systems that simplify operations and help businesses grow faster with less manual work.
                  </p>
                  {/* <p>
                    We realized the friction wasn't in the AI models themselves, but in the interface. By designing advanced automated agents 
                    and databases wrapped directly around **WhatsApp**, we remove all friction. Your customers get lightning fast support, and 
                    your operations run seamlessly on a unified dashboard.
                  </p> */}
                  <p className="font-semibold text-[#00e699] flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                     Just elegant automation.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right side interactive card layout */}
            <div className="relative">
              {/* Spinning background rings */}
              <div className="absolute inset-[-40px] rounded-full border border-white/[0.04] animate-[spin-slow_25s_linear_infinite]" />
              <div className="absolute inset-[-10px] rounded-full border border-[#00e699]/05 animate-[spin-reverse_35s_linear_infinite]" />

              <ScrollReveal delay={0.25}>
                <div className="relative glass gradient-border p-10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-[200px] h-[200px] orb orb-cyan opacity-15" />
                  
                  <blockquote className="font-syne font-bold text-2xl text-white leading-relaxed mb-6">
                    &ldquo;We help businesses automate operations, capture more customers, and scale through intelligent WhatsApp-first systems.
&rdquo;
                  </blockquote>
                  
                  <div className="h-px bg-white/[0.08] my-6" />
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#00e699] to-[#00f0ff] flex items-center justify-center font-syne font-black text-[#02040a] text-lg shadow-[0_0_15px_rgba(0,230,153,0.3)]">
                      M
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Magnum Core Engineering</div>
                      <div className="text-slate-500 text-xs">AI Operations & Architecture</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE PILLARS SECTION ── */}
      <section className="relative section-pad bg-[#030712]/30 border-t border-white/[0.04]">
        <div className="absolute inset-0 canvas-grid opacity-30" />
        <div className="absolute right-1/4 bottom-0 w-[500px] h-[500px] orb orb-indigo opacity-08" />

        <div className="relative container z-10">
          <ScrollReveal className="mb-16">
            <SectionHeader
              badge="Why Magnum AI"
              title={<>Why businesses choose  <span className="text-gradient">MagnumAI.</span></>}
              // subtitle="Cohesive processes, reliable architecture, and client integration shape every single deployment."
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass glass-hover p-6 flex flex-col gap-4 cursor-default"
              >
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ 
                    background: `${color}12`, 
                    border: `1px solid ${color}25`,
                    boxShadow: `0 0 20px ${color}15` 
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>

                <div>
                  <h3 className="font-syne font-bold text-white text-base mb-2">{title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
                
                <div className="h-[2px] w-8 rounded-full mt-auto" style={{ background: color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE VALUE WE EMBED ── */}
      <section className="relative section-pad border-t border-white/[0.04]">
        <div className="absolute inset-0 canvas-grid opacity-30" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] orb orb-green opacity-08" />

        <div className="relative container z-10">
          <div className="grid lg:grid-cols-[400px_1fr] gap-16 items-center">
            {/* Left Header */}
            <div>
              <ScrollReveal >
                <SectionHeader
                  badge="Automation"
                  title={<>Scale Your Business <br /><span className="text-gradient">with Intelligent Automation</span></>}
                  align="left"
                  titleClassName="text-3xl lg:text-4xl"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.15} className="mt-6">
                <p className="text-slate-400 text-sm leading-relaxed">
                  Streamline operations, automate customer interactions, and manage everything from enquiries to revenue 
                  generation with powerful WhatsApp-first systems
                </p>
              </ScrollReveal>
            </div>

            {/* Right Cards List */}
            <div className="flex flex-col gap-6">
              {coreTeamValues.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="glass p-6 flex gap-6 hover:border-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.07] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#00e699]" />
                  </div>
                  <div>
                    <h4 className="font-syne font-bold text-white text-base mb-2">{title}</h4>
                    <p className="text-slate-500 text-xs lg:text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA AT BOTTOM ── */}
      {/* <section className="relative py-24 border-t border-white/[0.05] overflow-hidden bg-[#030712]/30">
        <div className="absolute inset-0 canvas-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] orb orb-cyan opacity-10" />

        <div className="relative container z-10 text-center flex flex-col items-center">
          <ScrollReveal>
            <h2 className="font-syne font-black text-white text-4xl lg:text-6xl leading-tight mb-8">
              Ready to automate <br />
              <span className="text-gradient">your customer operations?</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.15}>
            <p className="text-slate-400 text-base max-w-xl mb-10 leading-relaxed">
              Contact our solutions engineering team today. We'll audit your system and demo a customized WhatsApp automations workflow built specifically for your metrics.
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
                Speak to our Experts
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
