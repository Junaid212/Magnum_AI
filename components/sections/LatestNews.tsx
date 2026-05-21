"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const posts = [
  { id: 1, tag: "Research", color: "#00e699", title: "The Future of Multimodal AI: Vision, Language, and Beyond", excerpt: "Exploring how multimodal foundation models are redefining what machines can perceive, reason about, and generate across text, images, audio, and video.", date: "May 15, 2026", read: "8 min", featured: true },
  { id: 2, tag: "Product", color: "#00f0ff", title: "Introducing Real-Time Model Monitoring in v3", excerpt: "Live model drift detection, automated retraining triggers, and a redesigned analytics dashboard in our biggest platform release.", date: "May 10, 2026", read: "5 min", featured: false },
  { id: 3, tag: "Tutorial", color: "#8b5cf6", title: "Building Production RAG Pipelines at Scale", excerpt: "A step-by-step guide to retrieval-augmented generation systems that handle millions of documents without hallucination.", date: "May 5, 2026", read: "12 min", featured: false },
];

export default function LatestNews() {
  const feat = posts[0];
  const rest = posts.slice(1);
  return (
    <section id="news" className="relative section-pad overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[400px] h-[500px] orb orb-indigo opacity-08" />
      <div className="relative container">
        <ScrollReveal className="mb-14 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <SectionHeader badge="Blog & News" title={<>Insights &amp; <span className="text-gradient">Updates</span></>} subtitle="AI research, product news, and engineering deep-dives." align="left" titleClassName="text-4xl sm:text-5xl" />
          <a href="#" className="flex items-center gap-2 text-sm font-semibold text-[#00e699] hover:text-white transition-colors whitespace-nowrap group">
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </ScrollReveal>
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Featured */}
          <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass glass-hover cursor-pointer img-zoom overflow-hidden group">
            <div className="relative h-60 border-b border-white/[0.05] overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${feat.color}18 0%, rgba(0,240,255,0.06) 50%, transparent 100%)` }}>
              <div className="absolute inset-0 canvas-grid opacity-30" />
              <div className="absolute top-5 left-5">
                <span className="badge text-[10px]" style={{ color: feat.color, borderColor: `${feat.color}30`, background: `${feat.color}10` }}>
                  <Tag className="w-3 h-3" /> {feat.tag}
                </span>
              </div>
              <div className="absolute top-5 right-5 px-2.5 py-1 rounded-full bg-[#00e699]/12 border border-[#00e699]/25 text-[#00e699] text-[10px] font-black uppercase tracking-widest">
                Featured
              </div>
              <div className="absolute bottom-5 left-5 right-5 h-1 rounded-full bg-white/[0.04]">
                <div className="h-full w-2/3 rounded-full" style={{ background: feat.color }} />
              </div>
            </div>
            <div className="p-7">
              <div className="flex items-center gap-4 text-xs text-slate-600 mb-4">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{feat.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{feat.read}</span>
              </div>
              <h3 className="font-syne font-bold text-xl text-white mb-3 leading-snug group-hover:text-[#00e699] transition-colors">{feat.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{feat.excerpt}</p>
              <span className="flex items-center gap-2 text-sm font-semibold text-[#00e699]">Read Article <ArrowRight className="w-4 h-4" /></span>
            </div>
          </motion.article>

          {/* Two stacked */}
          <div className="flex flex-col gap-5">
            {rest.map((post, i) => (
              <motion.article key={post.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="glass glass-hover cursor-pointer flex-1 overflow-hidden group img-zoom">
                <div className="h-28 border-b border-white/[0.05] relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${post.color}14, transparent)` }}>
                  <div className="absolute top-3 left-3">
                    <span className="badge text-[9px]" style={{ color: post.color, borderColor: `${post.color}25`, background: `${post.color}08` }}>
                      <Tag className="w-2.5 h-2.5" /> {post.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-[10px] text-slate-600 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.read}</span>
                  </div>
                  <h3 className="font-syne font-bold text-sm text-white mb-2 leading-snug group-hover:text-[#00e699] transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
                  <span className="flex items-center gap-1 text-xs font-semibold text-[#00e699]">Read More <ArrowRight className="w-3 h-3" /></span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
