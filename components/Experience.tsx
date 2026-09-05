"use client";

import { motion } from "framer-motion";
import { experience } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 bg-bg-secondary border-y border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-[0.2em] text-text-faint">EXPERIENCE</p>
        <h2 className="text-display mt-3 text-4xl sm:text-5xl font-bold tracking-[-0.03em] leading-[0.9]">
          Where I&apos;ve <span className="gradient-text">shipped</span>
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {experience.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[24px] border border-white/10 bg-bg-card p-6 sm:p-8 overflow-hidden"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-mono tracking-wide text-text-muted">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    {job.period}
                  </div>
                  <h3 className="text-display mt-4 text-2xl font-bold leading-none">{job.role}</h3>
                  <p className="mt-1 font-medium text-primary-light">{job.company} · {job.location}</p>
                </div>
                <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 transition">Contact →</a>
              </div>
              <ul className="mt-6 grid gap-3">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-6 text-text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {["React Native", "TypeScript", "REST APIs", "Agile"].map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-text-muted">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="grid gap-4 content-start">
            {[
              ["1+", "Year of experience", "Mobile + Web, production apps"],
              ["3+", "Projects shipped", "Betting, IoT, real-time chat"],
              ["6+", "Certs & awards", "SCROLL, Hacktoberfest, GSSoC"],
            ].map(([n, l, d]) => (
              <div key={l} className="rounded-[20px] border border-white/10 bg-bg-card p-5 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-black text-display text-xl font-bold">{n}</div>
                <div>
                  <div className="font-semibold leading-none">{l}</div>
                  <div className="text-xs text-text-faint mt-1">{d}</div>
                </div>
              </div>
            ))}
            <a href="#projects" className="rounded-2xl border border-dashed border-white/15 p-5 text-sm text-text-muted hover:text-text hover:border-white/25 hover:bg-white/[0.02] transition">
              View projects where this experience was applied →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
