"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  { q: "How quickly can we deploy a custom AI model?", a: "Our typical timeline is 2–6 weeks depending on complexity. Standard use cases like NLP classification or recommendation engines can go live in 10 days. We follow agile sprints: data audit → model training → API integration → monitoring setup." },
  { q: "Do you offer on-premise deployment?", a: "Yes. Enterprise clients get full on-premise deployment across bare metal, private cloud, or hybrid infrastructure. We support Kubernetes-native deployments with RBAC controls, VPN isolation, and airgapped environments for defense and finance workloads." },
  { q: "What data privacy standards do you follow?", a: "We are SOC 2 Type II certified and GDPR compliant. Data is encrypted at rest (AES-256) and in transit (TLS 1.3). We offer Data Processing Agreements and HIPAA-compliant workloads for healthcare clients." },
  { q: "Can I bring my own models and data?", a: "Absolutely. Our platform is fully model-agnostic. Bring your fine-tuned weights, external pipelines, or use our transfer learning tools. You retain full IP ownership of all custom model outputs." },
  { q: "What support is included in each plan?", a: "Starter includes community support and docs. Professional adds priority email (24h SLA) and a dedicated Slack channel. Enterprise provides a dedicated Customer Success Engineer, 24/7 on-call support, and quarterly executive reviews." },
  { q: "How does pricing scale with usage?", a: "Each plan includes a base allocation. Beyond that, pay-as-you-go at predictable per-call rates. Annual enterprise contracts unlock committed-use discounts of up to 40%." },
  { q: "Do you provide model explainability?", a: "Yes. All production models include SHAP-based explainability reports, confidence scores, and full audit trails. Enterprise adds drift detection alerts and automated performance reports." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative section-pad overflow-hidden">
      <div className="absolute right-0 top-1/3 w-[400px] h-[600px] orb orb-green opacity-07" />
      <div className="relative container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <ScrollReveal>
              <SectionHeader
                badge="FAQ"
                title={<>Frequently<br /><span className="text-gradient">Asked</span> Questions</>}
                subtitle="Everything you need to know. Can't find an answer? Talk to our team directly."
                align="left"
                titleClassName="text-4xl sm:text-5xl"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="mt-10">
              <div className="glass p-6 rounded-2xl">
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Still have questions? Our solutions team is here to walk you through any technical or commercial concerns.
                </p>
                <a href="#contact" className="btn-outline inline-flex text-sm px-5 py-2.5">
                  Talk to an Expert
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Accordion */}
          <div className="flex flex-col">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="faq-item py-1"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 py-5 text-left group"
                  >
                    <span
                      className="font-syne font-bold text-xs flex-shrink-0 w-7 transition-colors"
                      style={{ color: isOpen ? "#00e699" : "rgba(100,116,139,0.5)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`flex-1 font-syne font-semibold text-base leading-snug transition-colors ${isOpen ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`}>
                      {faq.q}
                    </span>
                    <div
                      className="w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={isOpen
                        ? { borderColor: "rgba(0,230,153,0.3)", background: "rgba(0,230,153,0.08)" }
                        : { borderColor: "rgba(255,255,255,0.09)", background: "transparent" }
                      }
                    >
                      {isOpen
                        ? <Minus className="w-3.5 h-3.5 text-[#00e699]" />
                        : <Plus className="w-3.5 h-3.5 text-slate-500" />
                      }
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                        className="faq-answer"
                      >
                        <div className="pl-11 pb-5">
                          <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
