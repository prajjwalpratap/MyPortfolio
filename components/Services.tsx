"use client";

import { services } from "@/data";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-text-faint">SERVICES — HOW I CAN HELP</p>
            <h2 className="text-display mt-3 text-4xl sm:text-5xl font-bold tracking-[-0.03em] leading-[0.9]">
              Freelance <span className="gradient-text">services</span>
              <br />
              <span className="text-text-faint font-light">for startups & businesses</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-text-muted">
            End-to-end product development — from idea to App Store and production. Fixed scope or ongoing, remote worldwide.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-bg-card p-6 sm:p-7 flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative flex-1">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-black text-xl">{s.icon}</span>
                <h3 className="text-display mt-4 text-xl font-bold tracking-tight">{s.title}</h3>
                <p className="mt-1 text-xs font-mono tracking-widest text-text-faint">{s.subtitle.toUpperCase()}</p>
                <p className="mt-3 text-sm leading-6 text-text-muted">{s.description}</p>
                <ul className="mt-4 grid gap-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-2 text-xs leading-5 text-text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-white/90 transition self-start">
                Start a project <span aria-hidden>→</span>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono tracking-wide text-text-faint">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Fast turnaround
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">Clean, scalable code</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">Clear communication</span>
          <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 hover:bg-white/[0.04] transition">Discuss your project →</a>
        </div>
      </div>
    </section>
  );
}
