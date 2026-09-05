"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, profileImage } from "@/data";

const Hero3D = dynamic(() => import("@/components/Hero3DScene"), { ssr: false, loading: () => null });

const roles = personalInfo.roles;

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 bg-grid opacity-[0.6] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,black,transparent_70%)]" />
      <div className="glow-orb h-[720px] w-[720px] -top-32 -left-40 bg-primary/20" />
      <div className="glow-orb h-[640px] w-[640px] top-20 right-[-12%] bg-accent/12" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.55] hidden lg:block" aria-hidden>
        <div className="absolute inset-0">
          <Hero3D />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/10 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-transparent to-bg/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pt-28 sm:pt-32 text-[11px] tracking-[0.16em] font-mono text-text-faint">
          <span>GURUGRAM · INDIA — {personalInfo.availability.toUpperCase()}</span>
          <span className="hidden sm:inline">SCROLL ↓</span>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-6 items-center py-8 sm:py-12 lg:py-16">
          <div className="relative">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-text-muted"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.7)] animate-pulse" />
              Software Developer @ Skilrock · Freelance Available
            </motion.p>

            <h1 className="text-display mt-6 text-[42px] sm:text-[56px] lg:text-[68px] font-bold leading-[0.9] tracking-[-0.04em]">
              <motion.span initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }} className="block text-text-faint/40 font-light">
                Hi, I&apos;m
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }} className="block">
                Prajjwal
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="block gradient-text">
                Chauhan
              </motion.span>
            </h1>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="text-sm font-mono tracking-widest text-text-faint">I BUILD —</span>
              <div className="relative h-7 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={idx}
                    initial={{ y: 28, opacity: 0, rotateX: -18 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -28, opacity: 0, rotateX: 18 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="block text-lg sm:text-xl font-semibold text-text"
                    style={{ transformOrigin: "50% 50%" }}
                  >
                    {roles[idx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.7 }} className="mt-6 max-w-xl text-[15px] leading-7 text-text-muted">
              {personalInfo.summary}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.62, duration: 0.6 }} className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">
                <span className="relative">Hire me — freelance & full-time</span>
                <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition group-hover:translate-x-0.5">→</span>
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-medium text-text hover:bg-white/[0.08] transition">
                View work <span className="text-text-faint">↗</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-text-muted hover:text-text hover:border-white/15 transition">
                LinkedIn
              </a>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs font-mono tracking-wide text-text-faint">
              <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 hover:bg-white/[0.06] transition">Services ↓</a>
              <span className="hidden sm:inline-flex items-center gap-2 px-2">SCROLL TO EXPLORE — REACT · R3F · NEXT.JS</span>
            </div>
          </div>

          <div className="relative lg:h-[520px] flex flex-col items-center justify-center py-6 lg:py-0">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center"
            >
              {/* circular profile — perfectly centered, premium ring + glow */}
              <div className="relative">
                {/* soft glow behind circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/25 via-accent/15 to-primary/10 blur-3xl scale-[1.25] opacity-70" />
                {/* gradient ring */}
                <div className="relative h-[260px] w-[260px] sm:h-[300px] sm:w-[300px] lg:h-[320px] lg:w-[320px] rounded-full p-[2px] bg-gradient-to-br from-white/20 via-white/10 to-white/5 shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
                  <div className="h-full w-full rounded-full bg-bg-card p-1.5">
                    <div className="relative h-full w-full rounded-full overflow-hidden bg-bg-elevated">
                      <Image
                        src={profileImage}
                        alt={`${personalInfo.name} — profile`}
                        fill
                        className="object-cover object-[50%_18%]"
                        sizes="320px"
                        priority
                      />
                      {/* inner ring + subtle vignette for perfect circular finish */}
                      <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                      {/* shimmer sweep */}
                      <div className="pointer-events-none absolute inset-0 rounded-full shimmer opacity-[0.06]" />
                    </div>
                  </div>
                </div>
                {/* pill centered on bottom edge of circle */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  <span className="whitespace-nowrap rounded-full bg-black/70 backdrop-blur px-3 py-1.5 text-xs font-medium text-white border border-white/10">
                    React Native · Next.js
                  </span>
                  <span className="hidden sm:inline-flex whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-black shadow-lg">
                    Freelance open
                  </span>
                </div>
                {/* floating badges — aligned to circle */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 -right-4 sm:-right-8 hidden sm:flex items-center gap-2 rounded-full glass px-3 py-2 text-xs font-medium shadow-lg"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.7)]" /> Available for freelance
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="absolute -bottom-8 -left-4 sm:-left-10 hidden sm:flex items-center gap-2 rounded-2xl glass px-3 py-2.5 text-xs shadow-lg"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-xl bg-white text-black font-bold text-[11px]">PS</span>
                  <span className="font-medium">Prajjwal Chauhan</span>
                  <span className="text-text-faint">· Freelancer</span>
                </motion.div>
              </div>

              {/* stats row — centered under circle, aligned */}
              <div className="mt-8 grid w-full max-w-[360px] grid-cols-3 gap-2">
                {[
                  ["Gurugram", "Based in"],
                  ["BTech CSE", "AKGEC · 8.1"],
                  ["Remote", "Worldwide"],
                ].map(([v, k]) => (
                  <div key={k} className="rounded-2xl bg-white/[0.04] border border-white/[0.06] px-3 py-3 text-center">
                    <div className="text-sm font-semibold leading-none">{v}</div>
                    <div className="text-[11px] tracking-wide font-mono text-text-faint mt-1">{k}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pb-10 text-xs font-mono tracking-wide text-text-faint">
          <span className="hidden sm:inline">pra**@gmail.com</span>
          <span className="hidden sm:inline h-1 w-1 rounded-full bg-white/20" />
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-text transition">github.com/prajjwalpratap</a>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-text transition">LinkedIn — hire me</a>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>Press ↓ or scroll</span>
        </div>
      </div>
    </section>
  );
}
