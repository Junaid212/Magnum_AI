"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Paperclip, User, Mail, MessageSquare } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const stats = [
  { value: 5000, suffix: "+", label: "Projects Delivered" },
  { value: 95,   suffix: "%", label: "Client Satisfaction" },
  { value: 120,  suffix: "+", label: "AI Specialists"      },
  { value: 40,   suffix: "+", label: "Countries Served"    },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 50;
        let i = 0;
        const timer = setInterval(() => {
          i++;
          setCount(Math.floor((i / steps) * target));
          if (i >= steps) { setCount(target); clearInterval(timer); }
        }, 40);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function AchievementsForm() {
  const [sent, setSent] = useState(false);
  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative section-pad overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] orb orb-indigo opacity-08" />
      <div className="absolute right-0 top-1/3 w-[400px] h-[500px] orb orb-green opacity-07" />
      <div className="relative container">
        <ScrollReveal className="mb-16">
          <SectionHeader
            badge="Results & Contact"
            title={<>Proven <span className="text-gradient">Results</span>, Real&nbsp;Conversations</>}
            titleClassName="text-5xl lg:text-6xl"
          />
        </ScrollReveal>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Stats */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, suffix, label }, i) => (
                <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass p-6 text-center glass-hover">
                  <div className="font-syne font-black text-3xl sm:text-4xl lg:text-5xl text-gradient-green mb-2">
                    <AnimatedNumber target={value} suffix={suffix} />
                  </div>
                  <div className="text-slate-500 text-sm">{label}</div>
                </motion.div>
              ))}
            </div>
            <ScrollReveal delay={0.2}>
              <div className="glass gradient-border p-6 rounded-2xl">
                <h3 className="font-syne font-bold text-lg text-white mb-3">Ready to build smarter?</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  Join thousands of companies using Aivora to build faster, smarter workflows. Schedule a free consultation today.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    {["#00e699","#00f0ff","#8b5cf6","#3b6cf4"].map((c, n) => (
                      <div key={n} className="w-7 h-7 rounded-full border-2 border-[#02040a] flex items-center justify-center text-[9px] font-black"
                        style={{ background: c, color: "#02040a" }}>{n+1}</div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500"><span className="text-white font-semibold">500+</span> clients onboarded this month</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <ScrollReveal direction="right">
            <div className="glass p-7 lg:p-8">
              <h3 className="font-syne font-bold text-2xl text-white mb-1.5">Get In Touch</h3>
              <p className="text-slate-500 text-sm mb-7">Tell us about your project — we respond within 24 hours.</p>
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-4 py-12">
                  <div className="w-16 h-16 rounded-full bg-[#00e699]/08 border border-[#00e699]/25 flex items-center justify-center">
                    <Send className="w-7 h-7 text-[#00e699]" />
                  </div>
                  <h4 className="font-syne font-bold text-xl text-white">Message Sent!</h4>
                  <p className="text-slate-500 text-sm">We&apos;ll respond within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handle} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[{ icon: User, placeholder: "Your Name", type: "text" }, { icon: Mail, placeholder: "Email Address", type: "email" }].map(({ icon: Icon, placeholder, type }) => (
                      <div key={placeholder} className="relative">
                        <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                        <input required type={type} placeholder={placeholder}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#00e699]/35 transition-colors" />
                      </div>
                    ))}
                  </div>
                  <input required placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#00e699]/35 transition-colors" />
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-600" />
                    <textarea required rows={4} placeholder="Describe your project..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-[#00e699]/35 transition-colors resize-none" />
                  </div>
                  <div className="flex items-center gap-4 pt-1">
                    <label className="flex items-center gap-2 cursor-pointer text-slate-600 hover:text-slate-400 text-sm transition-colors">
                      <Paperclip className="w-4 h-4" /> Attach file
                    </label>
                    <button type="submit" className="btn-primary ml-auto px-7 py-3.5 rounded-xl text-sm">
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
