"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        // Fallback: open mailto so user isn't blocked if email not configured yet
        const fallbackSubject = form.subject || "Portfolio — new message";
        const fallbackBody = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
        const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(fallbackSubject)}&body=${encodeURIComponent(fallbackBody)}`;
        const detail = data?.error ? `: ${data.error}` : "";
        setErrorMsg(`Could not send via server${detail}. Opening your email app as fallback…`);
        window.location.href = mailto;
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      const fallbackSubject = form.subject || "Portfolio — new message";
      const fallbackBody = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(fallbackSubject)}&body=${encodeURIComponent(fallbackBody)}`;
      setErrorMsg("Network error — opened your email app as fallback.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-bg-secondary border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-grid opacity-[0.25] [mask-image:radial-gradient(ellipse_70%_45%_at_50%_100%,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs tracking-[0.2em] text-text-faint">GET IN TOUCH</p>
          <h2 className="text-display mt-3 text-4xl sm:text-5xl font-bold tracking-[-0.03em] leading-[0.9]">
            Let&apos;s build <span className="gradient-text">something</span>
            <br />
            <span className="text-text-faint font-light">together — freelance or full-time</span>
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              {[
                { k: "Email", v: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: "✉" },
                { k: "Phone", v: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}`, icon: "☎" },
                { k: "Location", v: personalInfo.location, href: "#", icon: "◉" },
              ].map((c) => (
                <a
                  key={c.k}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-bg-card p-4 hover:border-white/15 hover:bg-white/[0.04] transition"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-black font-bold">{c.icon}</span>
                  <span>
                    <span className="block font-mono text-xs tracking-widest text-text-faint">{c.k.toUpperCase()}</span>
                    <span className="block text-sm font-medium">{c.v}</span>
                  </span>
                  <span className="ml-auto text-text-faint">↗</span>
                </a>
              ))}

              <div className="rounded-2xl border border-white/10 bg-bg-card p-4">
                <div className="font-mono text-xs tracking-widest text-text-faint">CONNECT</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 transition">LinkedIn ↗</a>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-medium hover:bg-white/[0.08] transition">GitHub</a>
                  <a href={`mailto:${personalInfo.email}`} className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-medium hover:bg-white/[0.08] transition">Email</a>
                </div>
                <p className="mt-3 text-xs leading-5 text-text-faint">Typical response within a day. Open to freelance (fixed scope or ongoing) and full-time roles · Remote, worldwide.</p>
              </div>
            </div>

            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[24px] border border-white/10 bg-bg-card p-6 sm:p-7"
            >
              <div className="grid gap-4">
                <label className="grid gap-1.5">
                  <span className="font-mono text-xs tracking-widest text-text-faint">YOUR NAME</span>
                  <input
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    placeholder="Jane Doe"
                    required
                    disabled={status === "sending"}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm placeholder:text-text-faint/60 focus:border-primary transition disabled:opacity-60"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="font-mono text-xs tracking-widest text-text-faint">EMAIL</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    placeholder="jane@company.com"
                    required
                    disabled={status === "sending"}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm placeholder:text-text-faint/60 focus:border-primary transition disabled:opacity-60"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="font-mono text-xs tracking-widest text-text-faint">SUBJECT (OPTIONAL)</span>
                  <input
                    value={form.subject}
                    onChange={(e) => setForm((s) => ({ ...s, subject: e.target.value }))}
                    placeholder="Project inquiry"
                    disabled={status === "sending"}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm placeholder:text-text-faint/60 focus:border-primary transition disabled:opacity-60"
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="font-mono text-xs tracking-widest text-text-faint">MESSAGE</span>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                    placeholder="Tell me about the project..."
                    rows={5}
                    required
                    disabled={status === "sending"}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm placeholder:text-text-faint/60 focus:border-primary transition disabled:opacity-60"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black hover:bg-white/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message <span aria-hidden>→</span>
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="mt-3 text-center text-sm text-emerald-400">
                  Message sent — I&apos;ll reply to {form.email || "you"} shortly. Check your email for a copy.
                </p>
              )}
              {status === "error" && errorMsg && <p className="mt-3 text-center text-sm text-amber-300">{errorMsg}</p>}

              <p className="mt-3 text-center font-mono text-xs tracking-wide text-text-faint">
                Delivered instantly to prajjwalmpi2002@gmail.com via Resend. Falls back to your email app if not configured yet.
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
