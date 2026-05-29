"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  ArrowRight,
  MessageSquare,
  Cpu,
  Database,
  HelpCircle
} from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "whatsapp-chatbot",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "whatsapp-chatbot",
        message: "",
      });
    }, 1800);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Solutions Consulting",
      value: "hello@magnum.ai",
      actionLabel: "Email our engineers",
      href: "mailto:hello@magnum.ai",
      color: "#00e699",
    },
    {
      icon: Phone,
      title: "Business Support",
      value: "+1 (800) 555-MAGNUM",
      actionLabel: "Launch live call",
      href: "tel:+18005556246",
      color: "#00f0ff",
    },
    {
      icon: MapPin,
      title: "Headquarters",
      value: "Silicon Valley, California",
      actionLabel: "View on map",
      href: "https://maps.google.com",
      color: "#8b5cf6",
    },
  ];

  return (
    <main className="relative bg-[#02040a] overflow-hidden min-h-screen">
      <Navbar />

      {/* ── HERO BANNER ── */}
      <section className="relative pt-36 pb-16 overflow-hidden bg-[#060b1e]">
        {/* Background Grids and Orbs */}
        <div className="absolute inset-0 canvas-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] orb orb-blue opacity-15" />
        
        <div className="relative container z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <ScrollReveal>
              <span className="badge mb-6">
                <span className="badge-dot" />
                GET IN TOUCH
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="font-syne font-extrabold text-white text-4xl sm:text-5xl lg:text-7xl leading-[1.08] tracking-tight mb-6">
                Let's construct the <br className="hidden sm:block" />
                <span className="text-gradient">future on autopilot.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
                Connect directly with our solutions engineering team. We'll map your system architecture 
                and construct a custom conversational path for your scale.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SPLIT LAYOUT SECTION ── */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 canvas-grid opacity-30" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] orb orb-green opacity-08" />

        <div className="relative container z-10">
          <div className="grid lg:grid-cols-[420px_1fr] gap-16 items-start">
            
            {/* ── LEFT COLUMN: CONTACT DETAILS ── */}
            <div className="flex flex-col gap-6">
              <ScrollReveal >
                <h2 className="font-syne font-extrabold text-white text-3xl leading-snug">
                  Direct channels <br />
                  <span className="text-gradient-green">to our core team.</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.15} className="flex flex-col gap-5 mt-4">
                {contactMethods.map((method, i) => (
                  <motion.div
                    key={method.title}
                    whileHover={{ y: -4 }}
                    className="glass p-5 flex gap-4 border border-white/[0.06] hover:border-white/10 transition-colors relative overflow-hidden group"
                  >
                    {/* Tiny color bar */}
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: method.color }}
                    />
                    
                    <div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ 
                        background: `${method.color}10`, 
                        border: `1px solid ${method.color}20` 
                      }}
                    >
                      <method.icon className="w-5 h-5" style={{ color: method.color }} />
                    </div>
                    <div>
                      <div className="text-slate-500 text-[10px] uppercase font-semibold tracking-wider mb-0.5">{method.title}</div>
                      <div className="font-syne font-bold text-white text-sm mb-2">{method.value}</div>
                      <a 
                        href={method.href} 
                        className="text-xs font-semibold text-[#00e699] hover:underline flex items-center gap-1 cursor-pointer"
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {method.actionLabel}
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </ScrollReveal>

              {/* FAQ Teaser Block */}
              {/* <ScrollReveal delay={0.25}>
                <div className="glass p-6 bg-[#030712]/40 mt-4 border border-white/[0.05]">
                  <h4 className="font-syne font-bold text-white text-sm mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#00e699]" />
                    Looking for a quick response?
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Our solutions team answers most structural queries and custom RFPs in under 4 hours, and completes operational proposals in less than 24 hours.
                  </p>
                </div>
              </ScrollReveal> */}
            </div>

            {/* ── RIGHT COLUMN: DYNAMIC GLASS FORM ── */}
            <ScrollReveal delay={0.2}>
              <div className="glass gradient-border p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] orb orb-cyan opacity-15" />
                
                <AnimatePresence mode="wait">
                  {formState === "success" ? (
                    /* SUCCESS STATE */
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="py-16 text-center flex flex-col items-center gap-6"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#00e699]/10 border border-[#00e699]/30 flex items-center justify-center shadow-[0_0_30px_rgba(0,230,153,0.2)]">
                        <CheckCircle className="w-8 h-8 text-[#00e699] animate-pulse" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="font-syne font-black text-2xl lg:text-3xl text-white">Transmission Received!</h3>
                        <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                          Your operational details have been locked into our database. A solutions engineer will contact you shortly.
                        </p>
                      </div>
                      <button
                        onClick={() => setFormState("idle")}
                        className="btn-outline text-xs mt-4"
                      >
                        Submit another inquiry
                      </button>
                    </motion.div>
                  ) : (
                    /* REGULAR FORM STATE */
                    <motion.form 
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col gap-6 relative z-10"
                    >
                      <div className="grid sm:grid-cols-2 gap-6">
                        {/* Name Input */}
                        <div className="flex flex-col gap-2">
                          <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Your Name *</label>
                          <input 
                            type="text" 
                            required
                            disabled={formState === "submitting"}
                            placeholder="John Doe" 
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="bg-white/[0.02] border border-white/[0.08] focus:border-[#00e699] text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all focus:shadow-[0_0_15px_rgba(0,230,153,0.1)]"
                          />
                        </div>
                        {/* Email Input */}
                        <div className="flex flex-col gap-2">
                          <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Email Address *</label>
                          <input 
                            type="email" 
                            required
                            disabled={formState === "submitting"}
                            placeholder="john@company.com" 
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="bg-white/[0.02] border border-white/[0.08] focus:border-[#00e699] text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all focus:shadow-[0_0_15px_rgba(0,230,153,0.1)]"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        {/* Company Input */}
                        <div className="flex flex-col gap-2">
                          <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Company Name</label>
                          <input 
                            type="text" 
                            disabled={formState === "submitting"}
                            placeholder="Acme Corp" 
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="bg-white/[0.02] border border-white/[0.08] focus:border-[#00e699] text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all focus:shadow-[0_0_15px_rgba(0,230,153,0.1)]"
                          />
                        </div>
                        {/* Service Picker Dropdown */}
                        <div className="flex flex-col gap-2">
                          <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Service of Interest</label>
                          <select 
                            disabled={formState === "submitting"}
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="bg-[#0a0f1e] border border-white/[0.08] focus:border-[#00e699] text-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-all focus:shadow-[0_0_15px_rgba(0,230,153,0.1)]"
                          >
                            <option value="whatsapp-chatbot">WhatsApp-First Chatbot</option>
                            <option value="ops-automation">Operations Automation</option>
                            <option value="ai-agent">AI Agent & LLM Core</option>
                            <option value="system-bridges">Enterprise System Bridges</option>
                            <option value="consult-other">Custom Architectural Audit</option>
                          </select>
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="flex flex-col gap-2">
                        <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Describe your workflow *</label>
                        <textarea 
                          rows={4}
                          required
                          disabled={formState === "submitting"}
                          placeholder="Tell us about your manual friction points, booking flows, or database structures..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="bg-white/[0.02] border border-white/[0.08] focus:border-[#00e699] text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all focus:shadow-[0_0_15px_rgba(0,230,153,0.1)] resize-none"
                        />
                      </div>

                      {/* Submit button */}
                      <motion.button
                        type="submit"
                        disabled={formState === "submitting"}
                        whileHover={formState !== "submitting" ? { scale: 1.02 } : {}}
                        whileTap={formState !== "submitting" ? { scale: 0.98 } : {}}
                        className="btn-primary w-full mt-2 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ boxShadow: "0 0 25px rgba(0,230,153,0.3)" }}
                      >
                        {formState === "submitting" ? (
                          <>
                            <span className="w-4 h-4 rounded-full border-2 border-[#02040a] border-t-transparent animate-spin" />
                            <span>Transmitting operational details...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Request Architectural Audit</span>
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
