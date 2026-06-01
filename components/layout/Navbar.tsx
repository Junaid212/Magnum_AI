"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(2,4,10,0.85)"
            : "rgba(2,4,10,0.6)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-[90vw] mx-auto px-6 flex items-center justify-between h-[68px]">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            {/* Geometric Aivora logo mark */}
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <path d="M16 2L4 9v14l12 7 12-7V9L16 2z" fill="url(#lg1)" />
              <path d="M16 2L4 9v14l12 7 12-7V9L16 2z" stroke="rgba(0,230,153,0.4)" strokeWidth="0.5" />
              <path d="M16 8l-7 4v8l7 4 7-4v-8l-7-4z" fill="url(#lg2)" opacity="0.6" />
              <defs>
                <linearGradient id="lg1" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00e699" />
                  <stop offset="100%" stopColor="#00a8ff" />
                </linearGradient>
                <linearGradient id="lg2" x1="9" y1="8" x2="23" y2="24" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-syne font-extrabold text-[22px] tracking-tight text-white">
              Magnum AI
            </span>
          </Link>

          {/* ── Center nav pills ── */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0c1220]/70 border border-white/[0.07] rounded-full px-2 py-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "text-white bg-white/[0.10]"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.07]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ── JOIN NOW ── */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 bg-[#00e699] text-[#02040a] font-syne font-extrabold text-sm px-7 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,230,153,0.55)] hover:scale-[1.03]"
            >
              JOIN NOW
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileOpen ? "x" : "m"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-40 w-72 bg-[#060a14]/95 backdrop-blur-2xl border-l border-white/[0.06] flex flex-col p-8 pt-24"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 + 0.08 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-3 px-4 rounded-xl font-medium transition-all ${
                          isActive
                            ? "text-white bg-white/[0.08] border border-white/[0.08]"
                            : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-8 bg-[#00e699] text-[#02040a] font-syne font-extrabold text-sm py-3.5 rounded-full text-center block"
              >
                JOIN NOW
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
