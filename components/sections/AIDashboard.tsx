"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const logEntries = [
  { method: "POST", path: "/api/v1/analyze",       status: 200, time: "12ms", type: "success" },
  { method: "GET",  path: "/api/v1/models/list",   status: 200, time: "8ms",  type: "success" },
  { method: "POST", path: "/api/v1/predict",       status: 200, time: "45ms", type: "success" },
  { method: "PUT",  path: "/api/v1/train/job-482", status: 202, time: "6ms",  type: "info"    },
  { method: "GET",  path: "/api/v1/metrics/rt",    status: 200, time: "3ms",  type: "success" },
  { method: "POST", path: "/api/v1/embeddings",    status: 200, time: "28ms", type: "success" },
  { method: "DELETE",path:"/api/v1/cache/flush",   status: 204, time: "5ms",  type: "warning" },
  { method: "GET",  path: "/api/v1/health",        status: 200, time: "1ms",  type: "success" },
  { method: "POST", path: "/api/v1/classify",      status: 200, time: "33ms", type: "success" },
  { method: "GET",  path: "/api/v1/pipeline",      status: 200, time: "7ms",  type: "success" },
];

const statusColor: Record<string, string> = { success: "#00e699", info: "#00f0ff", warning: "#f59e0b", error: "#ef4444" };
const methodColor: Record<string, string> = { GET: "#00f0ff", POST: "#00e699", PUT: "#f59e0b", DELETE: "#ef4444", PATCH: "#8b5cf6" };

const metrics = [
  { label: "Requests/sec", value: "12,840" },
  { label: "Avg Latency",  value: "24ms"   },
  { label: "Uptime",       value: "99.99%" },
  { label: "Active Models",value: "48"     },
];

export default function AIDashboard() {
  const [logs, setLogs] = useState<typeof logEntries>([]);
  const idxRef = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      const entry = logEntries[idxRef.current];
      if (entry) {
        setLogs((prev) => [...prev, entry]);
        idxRef.current++;
      } else {
        idxRef.current = 0;
        setLogs([]);
      }
    }, 550);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative section-pad overflow-hidden">
      <div className="absolute right-0 top-1/3 w-[500px] h-[600px] orb orb-green opacity-08" />
      <div className="relative container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <ScrollReveal>
            <SectionHeader
              badge="AI Infrastructure"
              title={<><span className="text-gradient">Real-Time</span> Processing Engine</>}
              subtitle="Our distributed AI infrastructure handles billions of inference calls with enterprise-grade reliability, sub-50ms latency, and zero-downtime deployments."
              align="left"
              titleClassName="text-4xl sm:text-5xl"
            />
            <div className="grid grid-cols-2 gap-4 mt-10">
              {metrics.map(({ label, value }) => (
                <div key={label} className="glass p-5 hover:border-[#00e699]/15 transition-colors">
                  <div className="font-syne font-black text-2xl text-[#00e699] mb-1">{value}</div>
                  <div className="text-slate-600 text-xs">{label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — Terminal */}
          <ScrollReveal direction="right">
            <div className="glass overflow-hidden" style={{ borderColor: "rgba(0,230,153,0.12)" }}>
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05] bg-white/[0.015]">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]/60" />
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]/60" />
                <div className="w-3 h-3 rounded-full bg-[#00e699]/60" />
                <span className="ml-4 text-[11px] text-slate-600 font-mono">aivora — api-gateway — live</span>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00e699] animate-pulse" />
                  <span className="text-[9px] text-[#00e699]/70 font-mono uppercase">live</span>
                </div>
              </div>

              {/* Log area */}
              <div className="relative overflow-hidden">
                {/* Scan line */}
                <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e699]/50 to-transparent z-10 pointer-events-none"
                  style={{ animation: "scanDown 2.5s linear infinite" }} />

                <div className="p-4 font-mono text-[11px] min-h-[320px] flex flex-col gap-1.5 bg-[#010408]">
                  <div className="text-slate-700 mb-1">
                    <span className="text-[#00e699]/50">[Aivora]</span> API Gateway v2.4.1 — Ready
                  </div>
                  {logs.filter(Boolean).map((log, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-slate-700 w-8 flex-shrink-0 select-none">{String(i + 1).padStart(3, "0")}</span>
                      <span className="font-bold w-12 flex-shrink-0" style={{ color: methodColor[log.method] ?? "#fff" }}>{log.method}</span>
                      <span className="text-slate-400 flex-1 truncate">{log.path}</span>
                      <span className="w-8 text-right flex-shrink-0" style={{ color: statusColor[log.type] }}>{log.status}</span>
                      <span className="text-slate-700 w-9 text-right flex-shrink-0">{log.time}</span>
                    </motion.div>
                  ))}
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[#00e699]/40">❯</span>
                    <span className="terminal-cursor" />
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="px-4 py-2 border-t border-white/[0.04] bg-white/[0.01] flex justify-between">
                <span className="text-[9px] text-slate-700 font-mono">{logs.length} req logged</span>
                <span className="text-[9px] text-[#00e699]/50 font-mono">cluster: us-east-1 ● healthy</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
