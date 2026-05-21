"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, Zap, Building2, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const plans = [
  {
    id: "starter",
    name: "Starter",
    icon: Zap,
    monthly: 49,
    yearly: 39,
    desc: "Perfect for startups exploring AI capabilities.",
    color: "#00f0ff",
    features: ["100K API calls/month", "3 AI deployments", "Basic analytics", "Community support", "99.5% SLA", "REST API", "5 team seats"],
    cta: "Get Started",
    popular: false,
  },
  {
    id: "pro",
    name: "Professional",
    icon: Sparkles,
    monthly: 149,
    yearly: 119,
    desc: "For growing companies that need AI at scale.",
    color: "#00e699",
    features: ["5M API calls/month", "Unlimited deployments", "Advanced analytics", "Priority support 24h", "99.9% SLA", "GraphQL + REST", "25 team seats", "Custom fine-tuning", "Real-time monitoring"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Building2,
    monthly: 499,
    yearly: 399,
    desc: "Mission-critical AI for large organizations.",
    color: "#8b5cf6",
    features: ["Unlimited API calls", "Unlimited deployments", "Custom reporting", "Dedicated CSM", "99.99% SLA", "Private cloud", "Unlimited seats", "Custom architecture", "On-premise option", "SSO & SAML"],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative section-pad overflow-hidden">
      <div className="absolute inset-0 canvas-grid opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] orb orb-green opacity-08" />

      <div className="relative container">
        <ScrollReveal className="mb-6">
          <SectionHeader
            badge="Pricing"
            title={<>Simple, <span className="text-gradient">Transparent</span> Pricing</>}
            subtitle="No hidden fees. No lock-ins. Scale up or down as your needs evolve."
            titleClassName="text-5xl lg:text-6xl"
          />
        </ScrollReveal>

        {/* Toggle */}
        <ScrollReveal delay={0.1} className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-medium transition-colors ${!yearly ? "text-white" : "text-slate-500"}`}>Monthly</span>
          <button
            onClick={() => setYearly(!yearly)}
            className={`toggle-track ${yearly ? "active" : ""}`}
            aria-label="Toggle billing"
          >
            <div className="toggle-thumb" />
          </button>
          <span className={`text-sm font-medium flex items-center gap-2 transition-colors ${yearly ? "text-white" : "text-slate-500"}`}>
            Yearly
            <span className="px-2 py-0.5 rounded-full bg-[#00e699]/12 border border-[#00e699]/20 text-[#00e699] text-[10px] font-bold">−20%</span>
          </span>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-7">
          {plans.map((plan, i) => {
            const price = yearly ? plan.yearly : plan.monthly;
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative glass flex flex-col transition-all duration-300 ${plan.popular ? "border-[#00e699]/20" : ""}`}
                style={plan.popular ? { boxShadow: "0 0 60px rgba(0,230,153,0.08), 0 0 0 1px rgba(0,230,153,0.15)" } : {}}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-5 py-1.5 rounded-full text-xs font-black text-[#02040a] bg-[#00e699] shadow-[0_0_20px_rgba(0,230,153,0.6)] whitespace-nowrap uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-7 flex flex-col gap-6 flex-1">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${plan.color}12`, border: `1px solid ${plan.color}22` }}>
                      <Icon className="w-5 h-5" style={{ color: plan.color }} />
                    </div>
                    <span className="font-syne font-bold text-white">{plan.name}</span>
                  </div>

                  {/* Price */}
                  <div>
                    <div className="flex items-end gap-2">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={price}
                          initial={{ opacity: 0, y: -15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.2 }}
                          className="font-syne font-black text-5xl text-white"
                        >
                          ${price}
                        </motion.span>
                      </AnimatePresence>
                      <span className="text-slate-500 text-sm pb-1">/mo</span>
                    </div>
                    {yearly && <p className="text-xs text-slate-600 mt-1">Billed ${price * 12}/year</p>}
                    <p className="text-slate-500 text-sm mt-3 leading-relaxed">{plan.desc}</p>
                  </div>

                  <div className="h-px bg-white/[0.05]" />

                  {/* Features */}
                  <ul className="flex flex-col gap-3 flex-1">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-4.5 h-4.5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${plan.color}12`, border: `1px solid ${plan.color}25` }}>
                          <Check className="w-2.5 h-2.5" style={{ color: plan.color }} />
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="pt-2">
                    {plan.popular ? (
                      <button className="btn-primary w-full justify-center">{plan.cta}</button>
                    ) : (
                      <button className="btn-outline w-full justify-center">{plan.cta}</button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <ScrollReveal delay={0.3} className="mt-12 text-center">
          <p className="text-slate-600 text-sm">
            All plans include a <span className="text-white font-semibold">14-day free trial</span>. No credit card required.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
