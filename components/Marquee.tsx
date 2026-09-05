"use client";

export default function Marquee() {
  const items = [
    "React Native",
    "Android",
    "Next.js",
    "TypeScript",
    "REST APIs",
    "Firebase",
    "Tailwind",
    "Expo",
    "GSAP",
    "Three.js",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.02] py-3">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-8 pr-8">
        {row.map((t, i) => (
          <span key={`${t}-${i}`} className="inline-flex items-center gap-8 text-sm font-mono tracking-[0.14em] text-text-muted whitespace-nowrap">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
            {t.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}
