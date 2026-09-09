import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Heart, ArrowRight } from "lucide-react";

// Image slides with high visual impact
import heroImg1 from "../assets/heroadd.jpeg";
import heroImg2 from "../assets/jawaab3.webp";
import heroImg3 from "../assets/Jawaab4.webp";

const slides = [
  {
    image: heroImg1,
    tag: "Direct Relief & Empowerment",
    title: "Empowering Communities, Changing Lives Forever.",
    subtitle: "We connect frontline support, sustainable education, and emergency aid directly to the people who need it most.",
  },
  {
    image: heroImg2,
    tag: "Youth & Education Focus",
    title: "Building Futures Through Education & Hope.",
    subtitle: "Providing schools, supplies, and mentorship programs to unlock human potential across underserved regions.",
  },
  {
    image: heroImg3,
    tag: "Sustainable Development",
    title: "Creating Lasting Impact Where It Matters.",
    subtitle: "Clean water, healthcare infrastructure, and community resilience built side-by-side with local leaders.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate background slides every 9 seconds for a calmer transition
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden pt-24">
      {/* 1. Background Layer with Extended Slow Zoom & Dark Contrast Overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${
              index === currentSlide ? "scale-105" : "scale-100"
            }`}
          />
          {/* Rich Dark Overlays (Removed whitish filters for high contrast) */}
          <div className="absolute inset-0 " />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
        </div>
      ))}

      {/* 2. Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 my-auto pt-12 pb-16 flex flex-col items-start justify-center">
        
        {/* Dynamic Badge */}
        <div
          key={`tag-${currentSlide}`}
          className="inline-flex items-center gap-2 px-3.5 py-1.5  mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700"
        >

          <span className="text-xs font-semibold text-emerald-200 tracking-wide uppercase">
            {slides[currentSlide].tag}
          </span>
        </div>

        {/* Editorial Title */}
        <h1
          key={`title-${currentSlide}`}
          className="text-4xl md:text-6xl lg:text-7xl font-serif-editorial font-bold text-white leading-[1.1] max-w-4xl tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000"
        >
          {slides[currentSlide].title}
        </h1>

        {/* Subtitle */}
        <p
          key={`sub-${currentSlide}`}
          className="text-lg md:text-xl text-slate-200 max-w-2xl font-sans-inter leading-relaxed mb-8 opacity-90 animate-in fade-in slide-in-from-bottom-5 duration-1000"
        >
          {slides[currentSlide].subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          
          {/* Custom Gradient & Hover Donate CTA */}
          <Link to="/donate">
          <button
            onClick={() => scrollToSection("newsletter")}
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-slate-950 cursor-pointer overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/25 border border-amber-300/40"
          >
            {/* Default Background */}
            <span className="absolute inset-0 bg-amber-500 transition-opacity duration-300 group-hover:opacity-0" />

            {/* Hover Background: Gradient fading gently into light amber at the bottom */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-amber-400 via-amber-200/90 to-amber-100 transition-opacity duration-500 ease-out" />

            {/* Button Content */}
            <Heart className="relative z-10 w-5 h-5 fill-slate-950 text-slate-950 transition-transform duration-300 group-hover:scale-110" />
            <span className="relative z-10 tracking-wide">Donate Now</span>
          </button>
          </Link>

          {/* Secondary Explore CTA */}
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-2 border-white/40 text-white hover:bg-white/10 hover:border-white transition-all duration-200 cursor-pointer active:scale-95"
          >
            <span>Explore Our Mission</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2 mt-12">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                idx === currentSlide ? "w-8 bg-emerald-400" : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 3. Empty Bottom Anchor Section */}
      <div className="relative z-10 border-t border-white/10 bg-slate-950/40 backdrop-blur-xs py-4 px-6 min-h-[50px]">
        <div className="max-w-7xl mx-auto" />
      </div>
    </section>
  );
}