"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Twitter, Linkedin, Github, Instagram, Facebook, MapPin, Mail, Phone } from "lucide-react";

const serviceLinks = ["WhatsApp Automation", "Smart Order Management", "Automated Invoicing", "Broadcast Campaigns", "Analytics Dashboard"];

const contactItems = [
  { icon: MapPin, text: "123 Business Ave, Suite 400\nNew York, NY 10001, USA" },
  { icon: Mail,   text: "hello@magnum.ai",  href: "mailto:hello@magnum.ai" },
  { icon: Phone,  text: "+1 (800) 555-0199", href: "tel:+18005550199" },
];

const socials = [
  { icon: Twitter,   href: "#", label: "Twitter"  },
  { icon: Linkedin,  href: "#", label: "LinkedIn" },
  { icon: Github,    href: "#", label: "GitHub"   },
  { icon: Instagram, href: "#", label: "Instagram"},
  { icon: Facebook,  href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#02040a] border-t border-white/[0.05] overflow-hidden">
      {/* Giant watermark "AIVORA" text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          aria-hidden="true"
          className="font-syne font-black text-white/[0.03] whitespace-nowrap"
          style={{ fontSize: "clamp(80px, 15vw, 220px)", letterSpacing: "-0.04em" }}
        >
          MAGNUM AI
        </span>
      </div>

      {/* Top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] orb orb-green opacity-12 -translate-y-1/2" />

      <div className="relative container">
        {/* CTA Email Pill */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pt-20 pb-16 flex flex-col items-center gap-6 text-center"
        >
          <p className="text-slate-500 text-xs uppercase tracking-[0.2em] font-semibold">Let&apos;s work together</p>
          <h2 className="font-syne font-black text-white leading-tight" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
            Ready to build the<br />
            <span className="text-gradient">future with AI?</span>
          </h2>
          {/* Email pill button */}
          <motion.a
            href="mailto:hello@aivora.ai"
            whileHover={{ scale: 1.03, boxShadow: "0 0 60px rgba(0,230,153,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#00e699]/25 bg-[#00e699]/05 text-[#00e699] font-semibold text-base hover:bg-[#00e699]/10 transition-all duration-300"
            style={{ boxShadow: "0 0 30px rgba(0,230,153,0.15)" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#00e699] shadow-[0_0_8px_rgba(0,230,153,0.9)] animate-pulse" />
            hello@magnum.ai
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-16" />

        {/* Link grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#hero" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo-mag.png"
                alt="Magnum AI"
                width={80}
                height={50}
                className="object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-syne font-black text-white text-base text-xl tracking-tight">Magnum AI</span>
                <span className="text-[#00e699] text-xs font-semibold tracking-[0.12em] uppercase">Automation</span>
              </div>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              The leading AI agency helping ambitious businesses unlock transformative growth through intelligent automation.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -2, color: "#00e699" }}
                  className="w-9 h-9 rounded-xl border border-white/[0.07] bg-white/[0.03] flex items-center justify-center text-slate-500 hover:text-[#00e699] hover:border-[#00e699]/25 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div className="hidden md:block">
            <h4 className="font-syne font-bold text-xs text-white uppercase tracking-[0.15em] mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 text-sm hover:text-[#00e699] transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us column */}
          <div>
            <h4 className="font-syne font-bold text-xs text-white uppercase tracking-[0.15em] mb-5">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              {contactItems.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-lg border border-[#00e699]/20 bg-[#00e699]/05 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-[#00e699]" />
                  </span>
                  {href ? (
                    <a href={href} className="text-slate-500 text-sm leading-snug hover:text-[#00e699] transition-colors duration-200 whitespace-pre-line">
                      {text}
                    </a>
                  ) : (
                    <span className="text-slate-500 text-sm leading-snug whitespace-pre-line">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} MagnumAI. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {["About Us", "Services", "Contact "].map((item) => (
              <a key={item} href="#" className="text-slate-600 text-xs sm:text-sm hover:text-slate-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
