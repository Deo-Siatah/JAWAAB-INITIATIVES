import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutPage from "@/pages/Aboutpage";
import ProgramsOrbit from "@/pages/ProgramStory";
import ImpactPage from "@/pages/ImpactPage";
import ProjectsCardData from "@/pages/ProjectsPage";
import Newsletter from "@/pages/Newsletter";
import MediaCarousel from "@/components/ImageCarousel";

export default function Homepage() {
  return (
    <div className="bg-background overflow-x-hidden selection:bg-[var(--primary)] selection:text-white">
      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. About Section with ID anchor */}
      <section id="about" className="scroll-mt-20">
        <AboutPage />
      </section>

      {/* 3. Program Radial Orbit */}
      <section id="programs" className="scroll-mt-20 py-8">
        <ProgramsOrbit />
      </section>

      {/* 4. Live Impact Counters */}
      <section id="impact" className="scroll-mt-20">
        <ImpactPage />
      </section>

      {/* 5. Projects Showcase */}
      <section id="projects" className="scroll-mt-20">
        <ProjectsCardData />
      </section>

      {/* 6. Media Gallery Carousel */}
      <section className="py-12 bg-[var(--surface-soft)]">
        <MediaCarousel />
      </section>

      {/* 7. Get Involved / Newsletter Section */}
      <section id="newsletter" className="scroll-mt-20">
        <Newsletter />
      </section>
    </div>
  );
}