"use client";

import Link from "next/link";
import Image from "next/image";
import { personalInfo, resumePath, profileImage } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-bg py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Link href="#" className="inline-flex items-center gap-3">
              <span className="relative h-9 w-9 overflow-hidden rounded-xl ring-1 ring-white/10">
                <Image src={profileImage} alt="Prajjwal" fill className="object-cover" sizes="36px" />
              </span>
              <span className="text-display font-semibold tracking-tight">Prajjwal <span className="gradient-text">Chauhan</span></span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-text-muted">Software Developer @ Skilrock Technologies · Freelance Consultant (Remote, Worldwide) · React Native · Android · Next.js · Shipping reliable, user-centric products for startups & businesses.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/[0.04] transition">LinkedIn</a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/[0.04] transition">GitHub</a>
              <a href={`mailto:${personalInfo.email}`} className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/[0.04] transition">Email</a>
              <a href={resumePath} download className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 transition">Download CV ↓</a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <div className="font-mono text-xs tracking-widest text-text-faint">NAVIGATE</div>
              <div className="mt-3 grid gap-2">
                <Link href="#services" className="text-text-muted hover:text-text transition">Services</Link>
                <Link href="#projects" className="text-text-muted hover:text-text transition">Projects</Link>
                <Link href="#skills" className="text-text-muted hover:text-text transition">Skills</Link>
                <Link href="#experience" className="text-text-muted hover:text-text transition">Experience</Link>
                <Link href="#contact" className="text-text-muted hover:text-text transition">Contact</Link>
              </div>
            </div>
            <div>
              <div className="font-mono text-xs tracking-widest text-text-faint">CONTACT</div>
              <div className="mt-3 grid gap-1 text-text-muted">
                <a href={`mailto:${personalInfo.email}`} className="hover:text-text transition">{personalInfo.email}</a>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-text transition">{personalInfo.phone}</a>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-xs font-mono tracking-wide text-text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {personalInfo.name}. Software Developer & Freelancer — Crafted with Next.js · R3F · Lenis.</span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for freelance — worldwide
          </span>
        </div>
      </div>
    </footer>
  );
}
