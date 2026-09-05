"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-bg text-text overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
