"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Database, Eye, MessageSquare, LineChart, Bot, ArrowRight } from "lucide-react";
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
    features: ["Custom model training", "Transfer learning", "AutoML pipelines", "Model monitoring"],
    images: [
      "https://picsum.photos/id/1011/480/320",
      // "https://picsum.photos/id/1015/480/320",
      // "https://picsum.photos/id/1025/480/320",
      // "https://picsum.photos/id/1005/480/320"
    ],
    bgClass: "from-[#00e699]/10 via-[#00e699]/03 to-transparent",
  },
  {
    id: "data",
    number: "02",
    title: "Smart\nOrder\nManagement",
    icon: Database,
    color: "#00f0ff",
    desc: "Manage WhatsApp, walk-in, and manual orders in one live dashboard built for operational speed.",
    features: ["Real-time dashboards", "Predictive analytics", "Data pipelines", "BI reports"],
    images: [
      "https://picsum.photos/id/1016/480/320",
      // "https://picsum.photos/id/1018/480/320",
      // "https://picsum.photos/id/1020/480/320",
      // "https://picsum.photos/id/1024/480/320"
    ],
    bgClass: "from-[#00f0ff]/10 via-[#00f0ff]/03 to-transparent",
  },
  {
    id: "cv",
    number: "03",
    title: "Automated\nInvoicing",
    icon: Eye,
    color: "#8b5cf6",
    desc: "Generate branded invoices instantly and deliver them automatically through WhatsApp in multiple languages.",
    features: ["Object detection", "Image classification", "Video analytics", "Edge AI deployment"],
    images: [
      "https://picsum.photos/id/1027/480/320",
      // "https://picsum.photos/id/1035/480/320",
      // "https://picsum.photos/id/1033/480/320",
      // "https://picsum.photos/id/1031/480/320"
    ],
    bgClass: "from-[#8b5cf6]/10 via-[#8b5cf6]/03 to-transparent",
  },
  {
    id: "nlp",
    number: "04",
    title: "Broadcast\nCampaigns",
    icon: MessageSquare,
    color: "#f59e0b",
    desc: "Send promotions, offers, announcements, and updates to your customer base with high-open-rate WhatsApp campaigns.",
    features: ["LLM fine-tuning", "RAG systems", "Sentiment analysis", "Multi-language NLP"],
    images: [
      "https://picsum.photos/id/1041/480/320",
      // "https://picsum.photos/id/1043/480/320",
      // "https://picsum.photos/id/1045/480/320",
      // "https://picsum.photos/id/1050/480/320"
    ],
    bgClass: "from-[#f59e0b]/10 via-[#f59e0b]/03 to-transparent",
  },
  {
    id: "pred",
    number: "05",
    title: "Analytics\nDashboard",
    icon: LineChart,
    color: "#3b6cf4",
    desc: "Track revenue, orders, customer activity, and operational performance in real time from one central system.",
    features: ["Demand forecasting", "Anomaly detection", "Risk modeling", "Churn prediction"],
    images: [
      "https://picsum.photos/id/1057/480/320",
      "https://picsum.photos/id/1060/480/320",
      "https://picsum.photos/id/1062/480/320",
      "https://picsum.photos/id/1069/480/320"
    ],
    bgClass: "from-[#3b6cf4]/10 via-[#3b6cf4]/03 to-transparent",
  },
  // {
  //   id: "auto",
  //   number: "06",
  //   title: "AI\nAutomation",
  //   icon: Bot,
  //   color: "#00e699",
  //   desc: "Replace repetitive work with intelligent agents. Our automation solutions handle documents, decisions, and workflows end-to-end.",
  //   features: ["Agentic workflows", "Document AI", "Process mining", "RPA integration"],
  //   bgClass: "from-[#00e699]/10 via-[#00e699]/03 to-transparent",
  // },
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
            subtitle="Six core AI capabilities engineered to transform how your business operates, competes, and grows."
            titleClassName="text-5xl lg:text-6xl"
          />
        </ScrollReveal>

        {/* Horizontal Accordion */}
        <div className="flex h-[520px] gap-0 overflow-hidden rounded-3xl border border-white/[0.06]" style={{ background: "#060a14" }}>
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
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                      className="absolute inset-0 p-8 flex flex-col justify-between"
                    >
                      {/* Header */}
                      <div>
                        <div className="flex items-center gap-4 mb-6">
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
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">{active.desc}</p>
                        <div className="">
                          {(active.images ?? []).map((src, i) => (
                            <div key={src} className="w-full h-full rounded-md overflow-hidden bg-slate-800">
                              <img src={src} alt={active.features?.[i] ?? `service-img-${i}`} className="w-full h-full object-cover" />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <button
                        className="flex items-center gap-2 text-sm font-semibold group w-fit mt-4"
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
      </div>
    </section>
  );
}
