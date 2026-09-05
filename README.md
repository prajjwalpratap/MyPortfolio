# Prajjwal Chauhan — Portfolio

Professional portfolio website built with **Next.js 14**, **React**, **Tailwind CSS**, and **Three.js** (R3F + drei).

## Features

- **Modern Next.js 14** — App Router, Server Components, TypeScript
- **Responsive Design** — Mobile-first, works on all devices
- **3D Animation Ready** — `@react-three/fiber` + `@react-three/drei` pre-configured
- **Dark Theme** — Professional dark UI with gradient accents
- **Resume Download** — Downloadable CV button in footer
- **Sections**: Hero, Projects, Skills, Experience, Education, Contact, Footer

## Tech Stack

| Category | Tech |
|----------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| 3D | @react-three/fiber, @react-three/drei, three |
| Icons | Heroicons (SVG inline) |

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
C:\MyPortfolio\
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Hero3DScene.tsx  # 3D scene placeholder (R3F)
├── data/
│   └── index.ts        # All content from resume
├── public/
│   └── images/         # All image assets
├── next.config.js
├── tsconfig.json
└── package.json
```

## Adding 3D Animations

The 3D scene is already scaffolded in `components/Hero3DScene.tsx`. To add custom 3D objects:

1. Edit `components/Hero3DScene.tsx`
2. Import additional Three.js geometries from `three`
3. Add components inside the `<Scene>` component

Example — add a torus:

```tsx
import { TorusKnot } from "@react-three/drei";

function MyCustomShape() {
  return <TorusKnot args={[1, 0.3, 128, 16]} position={[0, 0, 0]} />;
}
```

## Customization

### Update Content

Edit `data/index.ts` — all text, projects, skills, experience, and certifications are defined there.

### Change Colors

Edit `app/globals.css` — CSS variables are defined in the `@theme` block:

```css
--color-primary: #6366f1;   /* Main accent */
--color-accent: #06b6d4;    /* Secondary accent */
--color-bg: #0a0a0f;        /* Background */
```

### Contact Form

The contact form currently opens the user's email client via `mailto:`. To use a backend service (e.g., Formspree, EmailJS), update `components/Contact.tsx`.

## Deploy

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

Build and drag the `out/` folder into Netlify, or connect your GitHub repo.

## Links

- **LinkedIn**: https://www.linkedin.com/in/prajjwal-chauhan-331129232/
- **GitHub**: https://github.com/prajjwalpratap
- **Email**: prajjwalmpi2002@gmail.com
