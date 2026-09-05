"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/data";

export default function Education() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[24px] border border-white/10 bg-bg-card p-6 sm:p-8 overflow-hidden">
            <p className="font-mono text-xs tracking-[0.2em] text-text-faint">EDUCATION</p>
            <h3 className="text-display mt-3 text-2xl font-bold tracking-tight">{education.degree}</h3>
            <p className="mt-2 font-medium text-primary-light">{education.institution}</p>
            <p className="text-sm text-text-faint">{education.period}</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              SGPA <span className="font-semibold">{education.sgpa}</span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2 text-center">
              {[
                ["BTech", "CSE"],
                ["2021—2025", "Years"],
                ["Gurugram", "Now"],
              ].map(([a, b]) => (
                <div key={b} className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3">
                  <div className="text-sm font-semibold">{a}</div>
                  <div className="text-xs font-mono text-text-faint">{b}</div>
                </div>
              ))}
            </div>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium hover:bg-white/[0.04] transition">Discuss opportunities →</a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }} className="rounded-[24px] border border-white/10 bg-bg-card p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-display text-lg font-semibold">Certifications & Achievements</h3>
              <span className="font-mono text-xs tracking-widest text-text-faint">{certifications.length} ITEMS</span>
            </div>
            <div className="mt-6 grid gap-3">
              {certifications.map((c) => (
                <div key={c.title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 hover:bg-white/[0.05] transition">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-black font-bold text-xs">✓</span>
                  <div className="min-w-0">
                    <div className="text-sm font-medium leading-5">{c.title}</div>
                    <div className="text-xs text-text-faint">{c.event}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="https://github.com/prajjwalpratap" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-white/90 transition">See open-source work ↗</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
