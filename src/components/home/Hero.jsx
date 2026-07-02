import React from "react";
import { Link } from "react-router-dom";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { ArrowRight, TrendingUp, Radio, Workflow, Zap, Cpu, MessageCircle, GitBranch, CheckCircle2 } from "lucide-react";
import { PROFILE } from "../../data/projects";
import { FloatingCard } from "./FloatingCard";

// Illustrative trend shape for the "SIM cost / month" widget — abstraction
// of the real, resume-verified 25–30% reduction, not a reproduction of
// actual reported figures.
const trendB = [{ v: 60 }, { v: 52 }, { v: 58 }, { v: 44 }, { v: 48 }, { v: 36 }, { v: 40 }, { v: 28 }];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-36 md:pt-44">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ height: 480, width: 820, background: "radial-gradient(circle, #fb923c 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Hardware Operations Engineer & Data Analyst, Carnot Technologies (Mahindra Group)
        </div>
        <h1
          className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl"
          style={{ lineHeight: 1.08 }}
        >
          Turning operational data into{" "}
          <span className="text-orange-400">dashboards and automations teams rely on.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
          {PROFILE.summary}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/work"
            className="hover-scale-103 group inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-transform"
          >
            View the work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
          >
            About me
          </Link>
        </div>
      </div>

      {/* floating widgets — abstractions of real systems, not generic stock metrics */}
      <div className="relative mx-auto mt-20 hidden h-64 max-w-5xl md:block">
        <FloatingCard className="left-0 top-0 w-48" delay={0}>
          <div
            className="mb-1 flex items-center gap-1.5 text-zinc-500"
            style={{ fontSize: "10px", fontFamily: "'JetBrains Mono', monospace" }}
          >
            <TrendingUp size={11} className="text-orange-400" /> SIM cost / month
          </div>
          <div style={{ height: 40 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendB}>
                <Area type="monotone" dataKey="v" stroke="#fb923c" strokeWidth={1.5} fill="#fb923c" fillOpacity={0.15} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-1 text-emerald-400" style={{ fontSize: "10px", fontFamily: "'JetBrains Mono', monospace" }}>
            ↓ 25–30% after fix
          </div>
        </FloatingCard>

        <FloatingCard className="right-0 top-6 w-44" delay={1.2}>
          <div
            className="mb-2 flex items-center gap-1.5 text-zinc-500"
            style={{ fontSize: "10px", fontFamily: "'JetBrains Mono', monospace" }}
          >
            <Radio size={11} className="text-orange-400" /> Fleet status
          </div>
          <div className="flex gap-1.5">
            <span
              className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-emerald-400"
              style={{ fontSize: "9px", fontFamily: "'JetBrains Mono', monospace" }}
            >
              active
            </span>
            <span
              className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-amber-400"
              style={{ fontSize: "9px", fontFamily: "'JetBrains Mono', monospace" }}
            >
              review
            </span>
          </div>
        </FloatingCard>

        <FloatingCard className="left-1/2 top-28 w-52 -translate-x-1/2" delay={0.6}>
          <div
            className="mb-2 flex items-center gap-1.5 text-zinc-500"
            style={{ fontSize: "10px", fontFamily: "'JetBrains Mono', monospace" }}
          >
            <Workflow size={11} className="text-orange-400" /> n8n · automated report
          </div>
          <div className="flex items-center gap-1">
            {[Zap, Cpu, MessageCircle].map((I, i) => (
              <React.Fragment key={i}>
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950">
                  <I size={11} className="text-orange-400" />
                </div>
                {i < 2 && <div className="h-px w-4 bg-zinc-700" />}
              </React.Fragment>
            ))}
          </div>
        </FloatingCard>

        <FloatingCard className="left-8 bottom-0 w-44" delay={1.8}>
          <div
            className="mb-1.5 flex items-center gap-1.5 text-zinc-500"
            style={{ fontSize: "10px", fontFamily: "'JetBrains Mono', monospace" }}
          >
            <GitBranch size={11} className="text-orange-400" /> Production → activation
          </div>
          <div className="flex items-end gap-1">
            {[100, 78, 60, 47].map((v, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-orange-500/70"
                style={{ height: `${v * 0.3}px`, opacity: 0.4 + i * 0.15 }}
              />
            ))}
          </div>
        </FloatingCard>

        <FloatingCard className="right-4 bottom-2 w-44" delay={0.9}>
          <div
            className="flex items-center gap-1.5 text-zinc-500"
            style={{ fontSize: "10px", fontFamily: "'JetBrains Mono', monospace" }}
          >
            <CheckCircle2 size={11} className="text-emerald-400" /> 11 systems shipped
          </div>
        </FloatingCard>
      </div>
    </section>
  );
}
