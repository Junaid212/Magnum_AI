import { useRef, useState } from "react";
// import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeader from "../ui/SectionHeader";
// import { Project } from "./types";

const projects = [
  {
    id: "01",
    title: "NeuroChat Enterprise",
    category: "Conversational AI",
    desc: "A fully customizable enterprise chatbot trained on proprietary data, deployed across 200+ customer touchpoints with 94% CSAT scores.",
    tags: ["LLM", "RAG", "GPT-4", "Vector DB"],
    accent: "#00e699",
    stat: { value: "94%", label: "Customer Satisfaction" },
    year: "2025",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "VisionGuard Security",
    category: "Computer Vision",
    desc: "Real-time threat detection across 50 enterprise campuses using CCTV feeds with 99.3% accuracy and zero-latency alerting.",
    tags: ["YOLO v8", "Edge AI", "Real-time", "CV"],
    accent: "#00f0ff",
    stat: { value: "99.3%", label: "Detection Accuracy" },
    year: "2025",
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "PredictFlow Analytics",
    category: "Predictive AI",
    desc: "Demand forecasting engine reducing inventory waste by 34% for a global retail chain across 2,000+ SKUs and 18-month horizon.",
    tags: ["Time-Series", "XGBoost", "LSTM", "BI"],
    accent: "#8b5cf6",
    stat: { value: "34%", label: "Waste Reduction" },
    year: "2024",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "AutoProcess Hub",
    category: "AI Automation",
    desc: "End-to-end intelligent document processing pipeline automating 85% of manual data entry, saving 12,000+ hours annually.",
    tags: ["OCR", "NLP", "RPA", "Workflow"],
    accent: "#f59e0b",
    stat: { value: "12K+", label: "Hours Saved/Year" },
    year: "2024",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProjectsStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside the h-[400vh] container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const N = projects.length;
  // Create activation progress marks: [0.0, 0.333, 0.666, 1.0]
  const progressPoints = Array.from({ length: N }, (_, k) => k / (N - 1));

  const [active, setActive] = useState(0);

  // Synchronise state based on the scroll intervals
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let currentActive = 0;
    for (let idx = 0; idx < N; idx++) {
      const startRange = idx === 0 ? 0 : (idx - 0.5) / (N - 1);
      const endRange = idx === N - 1 ? 1 : (idx + 0.5) / (N - 1);
      if (latest >= startRange && latest <= endRange) {
        currentActive = idx;
        break;
      }
    }
    setActive(currentActive);
  });

  // Calculate card-specific transforms driven purely by scroll progress
  const yTransforms = projects.map((_, i) =>
    useTransform(
      scrollYProgress,
      progressPoints,
      progressPoints.map((_, k) => {
        if (k < i) return "550px"; // Offscreen below
        if (k === i) return "0px";   // Center state
        const stepsOver = k - i;
        return `${-14 * stepsOver}px`; // Shift up slightly when stacked over
      })
    )
  );

  const scaleTransforms = projects.map((_, i) =>
    useTransform(
      scrollYProgress,
      progressPoints,
      progressPoints.map((_, k) => {
        if (k < i - 1) return 0.92;
        if (k === i - 1) return 0.92; // Slightly smaller before scrolling up
        if (k === i) return 1.0;      // Perfect visual center
        const stepsOver = k - i;
        return 1 - 0.03 * stepsOver;  // Compress as cards stack above
      })
    )
  );

  const opacityTransforms = projects.map((_, i) =>
    useTransform(
      scrollYProgress,
      progressPoints,
      progressPoints.map((_, k) => {
        if (k < i - 1) return 0.0;
        if (k === i - 1) return 0.0;  // Invisible until active's transition starts
        if (k === i) return 1.0;      // Full visibility
        const stepsOver = k - i;
        return Math.max(0.3, 1 - 0.25 * stepsOver); // Dim slightly but keep stack edges visible
      })
    )
  );

  // Sync arrow/buttons click to smoothly scroll to corresponding card progress
  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const scrollableHeight = rect.height - window.innerHeight;
    const targetProgress = index / (N - 1);
    const targetScrollPosition = scrollTop + targetProgress * scrollableHeight;

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  };

  const prev = () => {
    const prevIndex = (active - 1 + N) % N;
    scrollToCard(prevIndex);
  };

  const next = () => {
    const nextIndex = (active + 1) % N;
    scrollToCard(nextIndex);
  };

  return (
    <section ref={containerRef} id="projects" className="relative h-[360vh] w-full bg-[#030712]">
      {/* Background Orbs */}
      <div className="absolute left-1/4 top-1/3 -translate-y-1/2 w-[400px] h-[500px] orb orb-indigo opacity-15" />
      <div className="absolute right-1/4 bottom-1/4 w-[500px] h-[500px] orb orb-green opacity-10" />

      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-8 md:py-12 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 md:mt-6">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
              <SectionHeader
                badge="Our Experience"
                title={
                  <>
                    Featured <span className="text-gradient-green font-bold">Projects</span>
                  </>
                }
                subtitle="Real-world intelligent systems delivering measurable enterprise impact."
                align="left"
                titleClassName="text-4xl md:text-5xl lg:text-6xl"
              />
              <div className="flex items-center gap-3 self-end sm:self-center">
                {/* Project index counter */}
                <span className="text-slate-400 text-sm font-medium font-mono mr-2">
                  {String(active + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
                </span>
                <button
                  id="btn-prev-project"
                  onClick={prev}
                  aria-label="Previous Project"
                  className="w-11 h-11 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-slate-400 hover:text-white hover:border-[#00e699]/30 hover:bg-[#00e699]/5 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  id="btn-next-project"
                  onClick={next}
                  aria-label="Next Project"
                  className="w-11 h-11 rounded-full bg-[#00e699] flex items-center justify-center text-[#030712] hover:shadow-[0_0_20px_rgba(0,230,153,0.4)] transition-all cursor-pointer font-bold"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Card Deck container */}
        <div className="relative w-full flex-grow flex items-center justify-center px-4 my-2 sm:my-4">
          <div className="relative w-full max-w-5xl h-[540px] sm:h-[480px] md:h-[450px] flex items-center justify-center">
            {projects.map((p, i) => {
              const isActive = i === active;

              return (
                <motion.div
                  key={p.id}
                  style={{
                    y: yTransforms[i],
                    scale: scaleTransforms[i],
                    opacity: opacityTransforms[i],
                    zIndex: i,
                  }}
                  transition={{ duration: 0.1 }}
                  className="absolute w-full h-full max-w-4xl"
                >
                  <div
                    className="w-full h-full rounded-3xl border overflow-hidden relative transition-colors duration-300 pointer-events-auto bg-[#030712] group"
                    style={{
                      borderColor: isActive ? `${p.accent}40` : "rgba(255,255,255,0.06)",
                    }}
                  >
                    {/* Background cover image (Right Side on Desktop, Full Cover on Mobile) */}
                    <div className="absolute inset-0 md:left-auto md:w-[48%] h-[40%] md:h-full w-full z-0 overflow-hidden">
                      <img 
                        src={p.image} 
                        alt={p.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover opacity-60 md:opacity-85 transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient to fade from the image on the right into the dark background on the left */}
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#030712] via-[#030712]/50 to-transparent z-10" />
                    </div>

                    {/* Top glowing accent bar */}
                    <div
                      className="absolute top-0 left-0 w-full h-[4px] z-30"
                      style={{
                        background: `linear-gradient(90deg, ${p.accent} 0%, ${p.accent}40 60%, transparent 100%)`,
                      }}
                    />

                    {/* Left Frame: Glassmorphic Floating Text Card (exactly matching requested reference image) */}
                    <div className="absolute left-3 sm:left-5 top-3 sm:top-5 bottom-3 sm:bottom-5 z-20 rounded-2xl bg-slate-950/75 md:bg-slate-900/40 backdrop-blur-xl border border-white/[0.08] p-5 sm:p-6 md:p-8 flex flex-col justify-between gap-4 h-[calc(100%-24px)] sm:h-[calc(100%-40px)] overflow-y-auto overscroll-contain touch-auto w-[calc(100%-24px)] md:w-[54%] lg:w-[50%]">
                      
                      {/* Text Heading & Details */}
                      <div>
                        {/* Number indicator & tag */}
                        <div className="flex items-center gap-3 mb-3.5">
                          <span className="font-extrabold text-3xl sm:text-4xl opacity-[0.08] text-white leading-none font-mono">
                            {p.id}
                          </span>
                          <div
                            className="px-3 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase font-mono"
                            style={{
                              background: `${p.accent}12`,
                              color: p.accent,
                              border: `1px solid ${p.accent}20`,
                            }}
                          >
                            {p.category}
                          </div>
                        </div>
                        
                        <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white mb-2.5 tracking-tight leading-tight">
                          {p.title}..
                        </h3>
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                          {p.desc}
                        </p>

                        {/* Reference design info tags row (Industry / Country style) */}
                        <div className="grid grid-cols-2 gap-4 border-t border-white/[0.06] pt-4.5 pb-2 mb-5">
                          <div>
                            <span className="text-slate-400 text-[10px] font-mono block uppercase mb-0.5 tracking-wider">Industry</span>
                            <span className="text-xs sm:text-sm font-semibold tracking-wide" style={{ color: p.accent }}>
                              {p.category}
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-400 text-[10px] font-mono block uppercase mb-0.5 tracking-wider">Deployment</span>
                            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#00f0ff]">
                              Global Enterprise
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Footer level detail elements */}
                      <div className="flex flex-col gap-5 mt-auto">
                        {/* Core Technologies row */}
                        <div>
                          <span className="text-slate-400 text-[10px] font-mono block uppercase tracking-wider mb-2">Core Technologies:</span>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {p.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 rounded-lg text-[9px] sm:text-[10px] font-mono text-slate-200 border border-white/[0.08] bg-white/[0.03]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Metric badge embedded for Mobile-only view inside card */}
                        <div className="flex md:hidden items-center justify-between bg-white/[0.02] border border-white/[0.06] p-3 rounded-xl mt-1">
                          <span className="text-slate-400 text-[10px] leading-tight font-medium font-mono uppercase tracking-wider">
                            {p.stat.label}
                          </span>
                          <span className="font-extrabold text-2xl font-sans" style={{ color: p.accent }}>
                            {p.stat.value}
                          </span>
                        </div>

                        {/* Slide action (READ MORE / Reveal Details) */}
                        <div className="pt-1 select-none">
                          {isActive ? (
                            <a
                              href="#case-study"
                              className="inline-flex items-center gap-3 text-xs tracking-wider text-[#030712] uppercase px-5 py-3 rounded-full font-bold transition-all group font-mono hover:scale-[1.02] active:scale-[0.98]"
                              style={{
                                background: `linear-gradient(90deg, ${p.accent} 0%, #00f0ff 100%)`,
                                boxShadow: `0 0 20px ${p.accent}30`,
                              }}
                            >
                              READ MORE 
                              <div className="w-5 h-5 rounded-full bg-slate-950 flex items-center justify-center transition-transform group-hover:rotate-45">
                                <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                  <line x1="7" y1="17" x2="17" y2="7"></line>
                                  <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                              </div>
                            </a>
                          ) : (
                            <button
                              onClick={() => scrollToCard(i)}
                              className="text-xs text-[#00e699] hover:text-[#00f0ff] font-semibold cursor-pointer transition-colors flex items-center gap-1 font-mono"
                            >
                              REVEAL SPECTRUM DETAILS
                              <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                            </button>
                          )}
                        </div>
                      </div>

                    </div>

                    {/* Standalone Metric Graphic Badge floating on Right (Desktop Only) */}
                    <div 
                      className="hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center gap-2 transition-all duration-300 w-36 h-36 md:w-40 md:h-44 rounded-3xl bg-[#090e1a]/85 backdrop-blur-md border border-white/[0.08]"
                      style={{
                        boxShadow: isActive 
                          ? `0 0 35px ${p.accent}15, 0 15px 35px rgba(0,0,0,0.5)` 
                          : "0 10px 30px rgba(0,0,0,0.4)",
                      }}
                    >
                      <span
                        className="font-extrabold text-4xl lg:text-5xl tracking-tight"
                        style={{ color: p.accent }}
                      >
                        {p.stat.value}
                      </span>
                      <span className="text-slate-300 text-[10px] lg:text-[11px] text-center px-4 leading-tight font-medium font-mono uppercase tracking-wider">
                        {p.stat.label}
                      </span>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dot indicators and bottom CTA */}
        <div className="w-full flex flex-col items-center gap-4 mb-2 md:mb-6">
          <div className="flex items-center justify-center gap-2.5">
            {projects.map((_, i) => (
              <button
                key={i}
                id={`btn-dot-indicator-${i}`}
                onClick={() => scrollToCard(i)}
                aria-label={`Go to project ${i + 1}`}
                className="transition-all duration-300 cursor-pointer"
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  borderRadius: 100,
                  background: i === active ? "#00e699" : "rgba(255,255,255,0.12)",
                  boxShadow: i === active ? "0 0 12px rgba(0,230,153,0.6)" : "none",
                }}
              />
            ))}
          </div>

          <div className="flex justify-center mt-2">
            <span className="text-[11px] font-mono tracking-widest text-slate-500 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e699] animate-pulse" />
              Scroll down to stack cards
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
