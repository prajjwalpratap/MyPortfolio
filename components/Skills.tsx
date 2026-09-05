"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skills } from "@/data";

const groups: Array<{ title: string; items: string[]; accent: string }> = [
  { title: "Mobile", items: skills.mobile, accent: "from-violet-500/20 to-transparent" },
  { title: "Frontend", items: skills.frontend, accent: "from-cyan-500/15 to-transparent" },
  { title: "Backend & DB", items: skills.backend, accent: "from-emerald-500/12 to-transparent" },
  { title: "Tools & Practices", items: [...skills.tools, ...skills.practices.slice(0, 3)], accent: "from-amber-500/10 to-transparent" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-text-faint">STACK & CRAFT</p>
            <h2 className="text-display mt-3 text-4xl sm:text-5xl font-bold tracking-[-0.03em] leading-[0.9]">
              Skills that <span className="gradient-text">ship</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-text-muted">A focused, production-grade stack for fast, reliable mobile & web.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-[20px] border border-white/10 bg-bg-card p-5"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${g.accent}`} />
              <div className="relative">
                <div className="text-xs font-mono tracking-widest text-text-faint">{g.title.toUpperCase()}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-text-muted">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-[24px] border border-white/10 bg-bg-card p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-display text-lg font-semibold">Technologies I use daily</h3>
            <span className="font-mono text-xs tracking-widest text-text-faint">HOVER TO LIFT</span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6">
            {skills.allIcons.map((it, idx) => (
              <motion.div
                key={it.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02 }}
                whileHover={{ y: -6, scale: 1.04 }}
                className="group flex flex-col items-center gap-2"
              >
                <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition group-hover:border-primary/30 group-hover:bg-white/[0.06] group-hover:shadow-[0_12px_32px_rgba(124,109,255,0.18)]">
                  <span className="relative block h-full w-full">
                    <Image src={it.src} alt={it.name} fill className="object-contain p-1" sizes="72px" />
                  </span>
                </div>
                <span className="text-xs font-medium text-text-muted group-hover:text-text transition">{it.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
