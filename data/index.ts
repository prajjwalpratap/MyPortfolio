export const personalInfo = {
  name: "Prajjwal Pratap Singh Chauhan",
  shortName: "Prajjwal Chauhan",
  title: "Software Developer & Freelancer",
  phone: "+919389986308",
  email: "prajjwalmpi2002@gmail.com",
  linkedin: "https://www.linkedin.com/in/prajjwal-chauhan-331129232/",
  github: "https://github.com/prajjwalpratap",
  location: "Gurugram, India",
  availability: "Available for freelance — Worldwide (Remote)",
  summary: `Software Developer at Skilrock Technologies and freelance consultant helping startups and businesses ship fast, reliable mobile and web products. I specialize in React Native, Android, and modern web (Next.js / TypeScript) — from high-performance cross-platform apps to scalable, SEO-ready platforms. With production experience across gaming, fintech, and IoT, I focus on clean architecture, offline reliability, and performance that holds up at scale. Available for freelance: MVPs, mobile apps, and web development.`,
  roles: [
    "Software Developer",
    "Freelance Consultant",
    "React Native Specialist",
    "Full-Stack Developer",
  ],
};

export const services = [
  {
    id: 1,
    title: "Mobile App Development",
    subtitle: "React Native & Android — Cross-platform",
    description:
      "Production-grade mobile apps that feel native. Offline-ready, secure, and App Store / Play Store ready — built for real users and scale.",
    features: ["React Native, Expo, TypeScript", "Auth, push notifications & offline", "Payments, store deployment & maintenance"],
    icon: "📱",
  },
  {
    id: 2,
    title: "Web Development",
    subtitle: "Next.js · React · TypeScript",
    description:
      "Fast, modern web apps with clean UI and solid performance. SEO-ready, responsive, and maintainable — code your team can scale.",
    features: ["Next.js, Tailwind, REST APIs", "Firebase, MongoDB, MySQL", "Responsive, accessible, performant"],
    icon: "💻",
  },
  {
    id: 3,
    title: "MVP & Product Consulting",
    subtitle: "For startups & businesses",
    description:
      "Move from idea to launch in weeks. I help scope, prototype, and ship your MVP — plus architecture reviews and performance audits.",
    features: ["Rapid MVP builds", "Architecture & code reviews", "Performance optimization"],
    icon: "🚀",
  },
];

export const projects = [
  {
    id: 1,
    title: "Lineleanz",
    subtitle: "Gaming & Sports Betting Platform — Production Client (US)",
    description:
      "Production cross-platform app for iOS & Android serving real users. Integrated multiple betting/gaming providers, secure auth, and Coinflow payments with a focus on reliability and offline resilience.",
    features: [
      "Push notifications for real-time betting alerts and promotions",
      "Secure authentication and authorization flows",
      "Deposit and withdrawal via Coinflow payment integration",
      "Robust offline/network-handling — reliable during connectivity drops",
      "Efficient state management and reusable component architecture",
    ],
    tech: ["React Native", "TypeScript", "REST APIs", "Firebase", "Redux"],
    image: "/images/projects/Project4.png",
    github: "",
    live: "",
    period: "Sep 2025 — Present",
    category: "Mobile",
  },
  {
    id: 2,
    title: "Cloud-IoT Healthcare System",
    subtitle: "Cloud Computing & IoT — Research & Prototype",
    description:
      "Healthcare architecture with a Fog Computing layer to cut latency and bandwidth vs. traditional Cloud-IoT. Simulated at scale with iFogSim and validated on real hardware.",
    features: [
      "Fog Computing layer for reduced latency",
      "Performance simulation with iFogSim",
      "Real hardware validation with Arduino & ESP modules",
      "Sensor integration for healthcare monitoring",
      "Bandwidth optimization strategies",
    ],
    tech: ["Cloud Computing", "IoT", "Arduino", "iFogSim", "Python"],
    image: "/images/projects/Project2.png",
    github: "",
    live: "",
    period: "Jan 2024 — May 2024",
    category: "IoT",
  },
  {
    id: 3,
    title: "Lottomania",
    subtitle: "Nigeria Lottery Platform — Mobile Lottery Ecosystem",
    description:
      "Flutter-based lottery ecosystem covering Lottery, Instant Win, and SportsPool for a Nigeria-based client. Focused on navigation reliability, carousel stability, and accurate Betting game rendering across devices.",
    features: [
      "Lottery, Instant Win & SportsPool modules in a Flutter ecosystem",
      "Debugged banner deeplink navigation — fixed race between banner load and game-data resolution",
      "Fixed carousel UI rendering and loading-state bugs for layout stability",
      "Cross-store game-data handling (filtered & unfiltered) for accurate Betting renders",
    ],
    tech: ["Flutter", "Dart", "REST APIs", "Mobile UI"],
    image: "/images/projects/Project1.png",
    github: "",
    live: "",
    period: "Jul 2025 — Mar 2026",
    category: "Mobile",
  },
  {
    id: 4,
    title: "Real-Time Chat Application",
    subtitle: "Instant Messaging Platform — Web",
    description:
      "Real-time chat with instant messaging, multimedia sharing, typing indicators, and read receipts. Firebase Auth + Realtime Database with a fully responsive, production-quality UI.",
    features: [
      "Real-time messaging with Firebase",
      "Multimedia file sharing",
      "Typing indicators and read receipts",
      "Firebase Authentication integration",
      "Fully responsive UI design",
    ],
    tech: ["React.js", "Firebase", "JavaScript", "Tailwind CSS"],
    image: "/images/projects/Project3.png",
    github: "https://github.com/prajjwalpratap",
    live: "",
    period: "Jun 2024 — Sep 2024",
    category: "Web",
  },
];

export const skills = {
  mobile: ["React Native", "Android Development", "Expo", "TypeScript", "Dart", "Flutter"],
  frontend: ["React.js", "JavaScript (ES6+)", "TypeScript","HTML5", "CSS3", "Tailwind CSS", "Next.js"],
  backend: ["REST APIs", "Firebase", "MongoDB", "MySQL", "Node.js"],
  tools: ["Git", "GitHub", "VS Code", "Android Studio", "Xcode", "Postman"],
  practices: ["Agile", "Code Review", "Debugging", "Performance Optimization", "UI/UX Implementation"],
  allIcons: [
    { name: "React", src: "/images/stack/React.png" },
    { name: "TypeScript", src: "/images/stack/Typescript.svg" },
    { name: "JavaScript", src: "/images/stack/Javascript.svg" },
    { name: "Tailwind", src: "/images/stack/Tailwind.png" },
    { name: "Next.js", src: "/images/stack/Next.svg" },
    { name: "Firebase", src: "/images/stack/NextJsCircle.png" },
    { name: "MongoDB", src: "/images/stack/MongoDB.svg" },
    { name: "Node.js", src: "/images/stack/NodeJs.svg" },
    { name: "Git", src: "/images/stack/Git.svg" },
    { name: "GitHub", src: "/images/stack/Github.svg" },
    { name: "Docker", src: "/images/stack/Docker.svg" },
    { name: "VS Code", src: "/images/stack/Express.png" },
  ],
};

export const experience = [
  {
    id: 1,
    company: "Skilrock Technologies",
    role: "Software Developer",
    location: "Gurugram, India",
    period: "May 2025 — Present",
    type: "Full-time",
    bullets: [
      "Developing and maintaining cross-platform mobile applications using React Native and modern TypeScript",
      "Building scalable, reusable UI components to enhance maintainability and user experience",
      "Integrating REST APIs and third-party services for seamless backend communication",
      "Implementing authentication, navigation flows, state management, and offline functionality",
      "Collaborating with backend developers, QA, PMs, and designers in an Agile environment",
    ],
  },
  {
    id: 2,
    company: "Freelance",
    role: "Freelance Developer — Mobile & Web",
    location: "Remote · Worldwide",
    period: "2024 — Present",
    type: "Freelance",
    bullets: [
      "Helping startups and businesses ship MVPs and production apps — React Native, Android, and Next.js",
      "End-to-end delivery: scoping, UI implementation, API integration, and store deployment",
      "Performance-focused builds with clean architecture, offline support, and reliable UX",
      "Direct client collaboration — fast iterations, clear communication, and on-time delivery",
    ],
  },
];

export const education = {
  degree: "Bachelor of Technology in Computer Science and Engineering",
  institution: "Ajay Kumar Garg Engineering College",
  period: "Aug 2021 — May 2025",
  sgpa: "8.1",
};

export const certifications = [
  { title: "1st Runner-Up - National Technical Paper Presentation", event: "SCROLL 2023" },
  { title: "Open Source Contributor", event: "Hacktoberfest 2022" },
  { title: "Contributor", event: "GirlsScript Summer of Code 2024" },
  { title: "React Fundamentals", event: "Infosys Springboard" },
  { title: "Enhancing Soft Skills and Personality", event: "NPTEL" },
  { title: "Cisco Introduction to Cybersecurity", event: "Cisco" },
];

export const profileImage = "/images/userAsset/profile.png";

export const resumePath = "/resume.pdf";
