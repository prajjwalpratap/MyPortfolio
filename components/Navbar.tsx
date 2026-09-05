"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { personalInfo, resumePath, profileImage } from "@/data";

const links = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock scroll when mobile menu open is handled by Lenis; just close on route change
  useEffect(() => {
    if (open) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled
              ? "glass shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          <a href="#" className="flex items-center gap-3 group">
            <span className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/10">
              <Image
                src={profileImage}
                alt="Prajjwal"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="36px"
                priority
              />
            </span>
            <span className="hidden sm:block text-[11px] tracking-[0.18em] text-text-faint font-mono">
              PRAJJWAL
            </span>
            <span className="text-display text-sm font-semibold tracking-tight">
              — <span className="gradient-text">2026</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-text-muted hover:text-text hover:bg-white/[0.06] transition"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={resumePath}
              download
              className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-text-muted hover:text-text hover:border-white/15 hover:bg-white/[0.04] transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M12 3v13m0 0 5-5m-5 5-5-5M3 17v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3" />
              </svg>
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition"
            >
              Let&apos;s talk
            </a>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full glass"
          >
            <span className="relative block h-4 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 bg-white transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span className={`absolute left-0 top-[7px] h-0.5 w-4 bg-white transition ${open ? "opacity-0" : "opacity-100"}`} />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-4 bg-white transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* mobile sheet */}
      <div
        className={`md:hidden transition-all duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div className="mx-4 mt-3 rounded-2xl glass p-2 shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
          <div className="grid gap-1 p-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-text hover:bg-white/[0.06] transition"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href={resumePath}
                download
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 px-4 py-3 text-center text-sm font-medium"
              >
                Resume
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-white text-black px-4 py-3 text-center text-sm font-semibold"
              >
                Let&apos;s talk
              </a>
            </div>
            <div className="flex gap-2 px-2 pt-2">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-xl glass py-3 text-center text-sm">LinkedIn</a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-xl glass py-3 text-center text-sm">GitHub</a>
              <a href={`mailto:${personalInfo.email}`} className="flex-1 rounded-xl glass py-3 text-center text-sm">Email</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
