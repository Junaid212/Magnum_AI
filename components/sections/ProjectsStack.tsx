"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";

const projects = [
  {
    id: "01",
    title: "Restaurant automation, reimagined",
    category: "Clinics & Restaurants",
    desc: "From taking orders on WhatsApp to managing live kitchen workflows and automated invoicing, Magnum AI helps restaurants operate faster, smoother, and with fewer missed orders.",
    tags: ["WhatsApp Automation", "Live Dashboard", "Automated Invoicing"],
    accent: "#00e699",
    stat: { value: "94%", label: "Customer Satisfaction" },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "A receptionist that never sleeps.",
    category: "Clinics & Healthcare",
    desc: "Automate appointment bookings, reminders, patient enquiries, and follow-ups through WhatsApp, reducing missed calls and improving patient experience around the clock.",
    tags: ["Appointment Automation", "Reminder Systems", "Patient Management"],
    accent: "#00f0ff",
    stat: { value: "99.3%", label: "Detection Accuracy" },
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Every enquiry becomes a sale.",
    category: "Retail & Cosmetics",
    desc: "Turn WhatsApp and Instagram conversations into structured orders with automated catalogs, customer tracking, delivery collection, and instant invoicing.",
    tags: ["Catalog Automation", "Order Collection", "Broadcast Campaigns"],
    accent: "#8b5cf6",
    stat: { value: "34%", label: "Inventory Waste Saved" },
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "One system. Total operational control.",
    category: "E-commerce & Operations",
    desc: "Manage orders, customers, invoices, analytics, and internal workflows from one connected platform designed to scale with your business.",
    tags: ["Analytics Dashboard", "Workflow Automation", "Business Intelligence"],
    accent: "#f59e0b",
    stat: { value: "12K+", label: "Operational Hours Saved" },
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProjectsStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the entire parent 400vh section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const total = projects.length;

  // Re-map index boundary triggers dynamically
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 0.0 - 0.2 -> Card 0
    // 0.2 - 0.4 -> Card 1
    // 0.4 - 0.6 -> Card 2
    // 0.6 - 0.8 -> Card 3
    // 0.8 - 1.0 -> Card 3 (complete state)
    let index = Math.floor(latest / 0.2);
    if (index > 3) index = 3;
    if (index < 0) index = 0;
    setActiveIndex(index);
  });

  // Re-map GPU accelerated offsets to absolute coordinates in the same viewport space
  // Card 0 (Base card - stays centered, scales down and fades as next cards slide over)
  const y0 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1.0], [0, 0, -15, -30, -45, -45]);
  const scale0 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1.0], [1.0, 1.0, 0.96, 0.92, 0.88, 0.88]);
  const opacity0 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1.0], [1.0, 1.0, 0.85, 0.7, 0.55, 0.55]);

  // Card 1 (Slides up from offscreen [1000px] between 0.2 and 0.4 progress)
  const y1 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1.0], [1000, 1000, 0, -15, -30, -30]);
  const scale1 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1.0], [1.0, 1.0, 1.0, 0.96, 0.92, 0.92]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1.0], [0.0, 0.0, 1.0, 0.85, 0.7, 0.7]);

  // Card 2 (Slides up from offscreen [1000px] between 0.4 and 0.6 progress)
  const y2 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1.0], [1000, 1000, 1000, 0, -15, -15]);
  const scale2 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1.0], [1.0, 1.0, 1.0, 1.0, 0.96, 0.96]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1.0], [0.0, 0.0, 0.0, 1.0, 0.85, 0.85]);

  // Card 3 (Slides up from offscreen [1000px] between 0.6 and 0.8 progress)
  const y3 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1.0], [1000, 1000, 1000, 1000, 0, 0]);
  const scale3 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1.0], [1.0, 1.0, 1.0, 1.0, 1.0, 1.0]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1.0], [0.0, 0.0, 0.0, 0.0, 1.0, 1.0]);

  const yTransforms = [y0, y1, y2, y3];
  const scaleTransforms = [scale0, scale1, scale2, scale3];
  const opacityTransforms = [opacity0, opacity1, opacity2, opacity3];

  return (
    <section ref={sectionRef} id="projects" className="relative w-full h-[400vh] bg-[#02040a] border-t border-white/[0.05]">
      {/* Background canvas overlays */}
      <div className="absolute inset-0 canvas-grid opacity-30 pointer-events-none" />
      <div className="absolute left-1/4 top-1/4 w-[600px] h-[600px] orb orb-blue opacity-08 pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-[600px] h-[600px] orb orb-green opacity-06 pointer-events-none" />

      {/* Sticky Fullscreen Wrapper - Pins screen during card scroll sequence */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden px-4 sm:px-8">
        <div className="relative container z-20 w-full py-4 lg:py-0">
          <div className="flex flex-col lg:grid lg:grid-cols-[380px_1fr] gap-6 lg:gap-12 items-center w-full">
            
            {/* ── LEFT COLUMN: TITLE BLOCK ── */}
            <div className="flex flex-col gap-4 lg:gap-8 lg:pr-6 w-full max-sm:mt-0">
              <ScrollReveal>
                <SectionHeader
                  badge="Our Impact"
                  title={<>See how businesses <br /><span className="text-gradient">are transforming with Magnum AI</span></>}
                  align="left"
                  titleClassName="text-xl sm:text-2xl lg:text-5xl leading-tight"
                />
              </ScrollReveal>

              {/* Navigation progress numbers */}
              <ScrollReveal delay={0.15} className="flex flex-col gap-3 border-t border-white/[0.08] pt-4 lg:pt-6 max-w-xs">
                <div className="flex items-end justify-between font-mono">
                  <span className="text-slate-500 text-xs uppercase font-semibold">Active Project</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl lg:text-3xl font-extrabold text-[#00e699] tracking-tight">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="text-slate-600 text-sm">/ {String(total).padStart(2, "0")}</span>
                  </div>
                </div>

                {/* visual loading bar */}
                <div className="h-[3px] w-full bg-white/[0.08] rounded-full overflow-hidden relative">
                  <div 
                    className="h-full bg-gradient-to-r from-[#00e699] to-[#00f0ff] transition-all duration-500 rounded-full"
                    style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
                  />
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.25} className="hidden sm:block">
                <span className="text-[11px] font-mono tracking-widest text-slate-500 uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e699] animate-pulse" />
                  Scroll to stack projects
                </span>
              </ScrollReveal>
            </div>

            {/* ── RIGHT COLUMN: STACKING CARD AREA ── */}
            <div className="relative w-full h-[46vh] sm:h-[55vh] lg:h-[66vh] max-h-[580px] flex items-center justify-center">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  style={{
                    y: yTransforms[i],
                    scale: scaleTransforms[i],
                    opacity: opacityTransforms[i],
                    zIndex: i + 10,
                  }}
                  className="absolute inset-0 rounded-3xl border border-white/[0.08] bg-[#040814] overflow-hidden group shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
                >
                  {/* Background image covering full card area */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-35 md:opacity-45 transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Rich overlay gradient merging left text with abstract backdrop */}
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#02040a] via-[#02040a]/90 to-transparent z-10" />
                  </div>

                  {/* Dynamic Highlight Border on Hover */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-[4px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: project.accent }}
                  />

                  {/* Content Container (Split screen: Info left, Stat Badge right) */}
                  <div className="absolute inset-0 z-20 p-5 sm:p-8 md:p-10 flex flex-col md:flex-row items-stretch justify-between gap-4 overflow-y-auto md:overflow-visible scrollbar-none">
                    {/* Left panel: Info & details */}
                    <div className="flex flex-col justify-between gap-3 max-w-xl md:w-[60%]">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-syne font-black text-2xl opacity-10 text-white leading-none">
                            {project.id}
                          </span>
                          <span 
                            className="px-3 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider font-mono border"
                            style={{
                              background: `${project.accent}12`,
                              color: project.accent,
                              borderColor: `${project.accent}25`
                            }}
                          >
                            {project.category.split(" & ")[0]}
                          </span>
                        </div>

                        <h3 className="font-syne font-extrabold text-white text-base sm:text-2xl lg:text-4xl leading-tight mb-2 group-hover:text-white/95 transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed mb-4">
                          {project.desc}
                        </p>
                      </div>

                      {/* Tags & technology lists (hidden on mobile to prevent squishing) */}
                      <div className="hidden sm:flex flex-col gap-2 mt-auto">
                        <span className="text-slate-500 text-[10px] uppercase font-semibold tracking-wider font-mono">Core Technologies:</span>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-lg text-[9px] sm:text-[10px] font-mono text-slate-300 border border-white/[0.06] bg-white/[0.02]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right panel: Static stat badge and dynamic Call to Action */}
                    <div className="flex flex-col items-start md:items-end justify-between gap-4 md:w-[35%] mt-auto md:mt-0">
                      {/* Stat badge (hidden on mobile) */}
                      <div 
                        className="hidden md:flex w-full md:w-36 md:h-40 rounded-2xl bg-white/[0.03] border border-white/[0.07] p-5 flex flex-col items-center justify-center gap-2 group-hover:border-white/10 transition-colors shadow-lg"
                        style={{
                          boxShadow: `0 15px 35px rgba(0,0,0,0.4)`
                        }}
                      >
                        <span className="font-syne font-black text-3xl sm:text-4xl" style={{ color: project.accent }}>
                          {project.stat.value}
                        </span>
                        <span className="text-slate-400 text-[10px] font-semibold text-center uppercase tracking-widest font-mono leading-tight">
                          {project.stat.label}
                        </span>
                      </div>

                      {/* Read Case Study Button */}
                      <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full font-syne font-extrabold text-[10px] sm:text-xs text-[#02040a] tracking-wider uppercase group-hover:shadow-lg transition-all cursor-pointer w-full md:w-auto justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${project.accent} 0%, #fff 100%)`,
                          boxShadow: `0 0 25px ${project.accent}20`
                        }}
                      >
                        <span>View Case Study</span>
                        <div className="w-4.5 h-4.5 rounded-full bg-[#02040a] flex items-center justify-center flex-shrink-0">
                          <ArrowUpRight className="w-3 h-3 text-white" />
                        </div>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}