"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data";

export default function Projects() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-20 sm:py-28 bg-bg-secondary border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_45%_at_50%_0%,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-text-faint">SELECTED WORK — 2024 → 2026</p>
            <h2 className="text-display mt-3 text-4xl sm:text-5xl font-bold tracking-[-0.03em] leading-[0.9]">
              Projects <span className="gradient-text">built</span>
              <br />
              <span className="text-text-faint font-light">for real users</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-text-muted">
            From a US betting platform to IoT healthcare and real-time chat — each project ships with a focus on performance, reliability and craft.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:gap-8">
          {projects.map((p, i) => {
            const isOpen = openId === p.id;
            const featured = i === 0;
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-bg-card ${featured ? "lg:grid lg:grid-cols-[1.15fr_0.85fr]" : "lg:grid lg:grid-cols-[0.9fr_1.1fr]"} ${!featured && i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* media */}
                <div className={`relative overflow-hidden bg-bg-elevated ${featured ? "min-h-[320px] lg:min-h-[420px]" : "min-h-[280px]"}`}>
                  <Image src={p.image} alt={p.title} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(max-width:1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-black">{String(p.id).padStart(2, "0")} — {p.category}</span>
                    <span className="hidden sm:inline-flex rounded-full border border-white/15 bg-black/30 backdrop-blur px-3 py-1.5 text-xs font-mono text-white/80">{p.period}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-full border border-white/15 bg-black/35 backdrop-blur px-2.5 py-1 text-xs text-white/85">{t}</span>
                    ))}
                    {p.tech.length > 4 && <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-black">+{p.tech.length - 4}</span>}
                  </div>
                </div>

                {/* copy */}
                <div className="flex flex-col p-6 sm:p-8">
                  <h3 className="text-display text-2xl sm:text-[26px] font-bold tracking-tight leading-none">{p.title}</h3>
                  <p className="mt-1.5 text-sm font-medium tracking-wide text-primary-light">{p.subtitle}</p>
                  <p className="mt-4 text-[14px] leading-6 text-text-muted">{p.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-text-muted">{t}</span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.github ? (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-white/90 transition">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 0c-6.6 0-12 5.37-12 12 0 5.3 3.44 9.8 8.2 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12Z"/></svg>
                        GitHub
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-text-faint">Private repo</span>
                    )}
                    {p.live ? (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 text-sm font-medium hover:bg-white/[0.08] transition">Live ↗</a>
                    ) : null}
                    <button onClick={() => setOpenId(isOpen ? null : p.id)} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-text-muted hover:text-text hover:border-white/15 transition">
                      {isOpen ? "Hide details" : "View details"}
                      <span className={`transition ${isOpen ? "rotate-180" : ""}`}>⌄</span>
                    </button>
                    <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-text-muted hover:text-text transition">Hire for similar →</a>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="mt-6 grid gap-2 overflow-hidden border-t border-white/10 pt-6">
                        {p.features.map((f) => (
                          <li key={f} className="flex gap-2.5 text-sm leading-6 text-text-muted">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="https://github.com/prajjwalpratap" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition">View all on GitHub ↗</a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm font-medium hover:bg-white/[0.04] transition">Start a project</a>
        </div>
      </div>
    </section>
  );
}
