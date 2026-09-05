import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Prajjwal Pratap Singh Chauhan — Software Developer & Freelancer",
  description:
    "Software Developer at Skilrock Technologies + Freelance Consultant. React Native · Android · Next.js. I help startups and businesses ship fast, reliable mobile & web products — worldwide, remote.",
  keywords: ["Prajjwal Chauhan", "React Native", "Android", "Next.js", "Freelancer", "Portfolio"],
  authors: [{ name: "Prajjwal Pratap Singh Chauhan" }],
  openGraph: {
    title: "Prajjwal Pratap Singh Chauhan — Software Developer & Freelancer",
    description:
      "Software Developer @ Skilrock + Freelance Consultant — React Native, Android & Next.js. Available for freelance worldwide.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${display.variable} ${mono.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
