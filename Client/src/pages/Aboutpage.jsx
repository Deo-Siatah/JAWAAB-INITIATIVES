import React, { useState } from "react";
import { Compass, Eye, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import JawaabLogo from "@/assets/jawaab-logo.jpeg";
import aboutImg1 from "@/assets/jawaab3.webp";
import aboutImg2 from "@/assets/Jawaab4.webp";

export default function AboutPage() {
  const [activePillar, setActivePillar] = useState("mission");
  const [isAnimating, setIsAnimating] = useState(false);

  const pillars = {
    mission: {
      title: "OUR MISSION",
      subtitle: "Targeted Action on the Ground",
      icon: Compass,
      description:
        "To empower communities through strategic climate action, promotion of mental health awareness, advancement of gender equity, and sustainable access to clean water, sanitation, and hygiene (WASH).",
      tags: ["Climate Action", "Mental Health", "Gender Equity", "WASH Access"],
    },
    vision: {
      title: "OUR VISION",
      subtitle: "A Resilient, Self-Sustaining Future",
      icon: Eye,
      description:
        "To create empowered, resilient, and inclusive communities that thrive in harmony with the environment, mental wellness, gender equity, and sustainable health practices for generations to come.",
      tags: ["Sustainability", "Inclusive Growth", "Resilience", "Community Well-being"],
    },
    values: {
      title: "OUR VALUES",
      subtitle: "Principled Commitment",
      icon: ShieldCheck,
      description:
        "Equity, integrity, well-being, environmental stewardship, and radical inclusivity guide every single decision, partnership, and field operation we undertake.",
      tags: ["Radical Integrity", "Equity First", "Stewardship", "Transparency"],
    },
  };

  const handleTabChange = (key) => {
    if (key === activePillar) return;
    setIsAnimating(true);
    setActivePillar(key);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const currentPillar = pillars[activePillar];
  const ActiveIcon = currentPillar.icon;

  return (
    <section className="relative py-20 bg-white font-sans-inter overflow-hidden border-t border-slate-100">
      {/* 1. Static Brand Logo Watermark */}
      <img
        src={JawaabLogo}
        alt="Jawaab Emblem Watermark"
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 opacity-[0.2] w-[500px] max-w-none select-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Solid Editorial Image Frame (No Floaters / No Glassmorphism) */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-slate-100 aspect-[4/3] sm:aspect-[14/10]">
                <img
                  src={activePillar === "mission" ? aboutImg1 : aboutImg2}
                  alt="Jawaab Community Initiative"
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    isAnimating ? "scale-105 opacity-80 blur-sm" : "scale-100 opacity-100"
                  }`}
                />
                <div className="absolute inset-0 bg-slate-950/20" />
              </div>

              {/* Accent Image Inset Frame */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden h-28 bg-slate-100 border border-slate-200">
                  <img
                    src={aboutImg2}
                    alt="Field operations"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="rounded-xl bg-slate-900 p-4 text-white flex flex-col justify-between border border-slate-800">
                  <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">Grassroots Action</span>
                  <p className="text-xs font-medium text-slate-300 leading-snug">Empowering communities across Kenya and beyond.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Copy & Interactive Radar Selector */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Minimal Section Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
              <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider">
                About JAWAAB Initiative
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-slate-900 leading-tight mb-4">
              Dedicated to Creating <span className="text-[var(--primary)]">Lasting Impact</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-8">
              JAWAAB Empowerment Initiative is a grassroots movement focused on uplifting communities through sustainable development, health promotion, and direct action.
            </p>

            {/* 2. Interactive Icon Radar Pills */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-4">
              {Object.keys(pillars).map((key) => {
                const item = pillars[key];
                const Icon = item.icon;
                const isActive = activePillar === key;

                return (
                  <button
                    key={key}
                    onClick={() => handleTabChange(key)}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                      isActive
                        ? "bg-slate-900 text-white shadow-md"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {isActive ? (
                      <Loader2 className="w-4 h-4 text-emerald-400 animate-spin" />
                    ) : (
                      <Icon className="w-4 h-4 text-slate-500" />
                    )}
                    <span>{item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* 3. Morphing Detail Box */}
            <div
              className={`bg-slate-50 border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 ${
                isAnimating ? "scale-[0.98] opacity-50" : "scale-100 opacity-100"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-[var(--primary)]">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading-poppins font-bold text-base text-slate-900">
                    {currentPillar.title}
                  </h3>
                  <p className="text-xs text-[var(--primary)] font-semibold">{currentPillar.subtitle}</p>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                {currentPillar.description}
              </p>

              {/* Functional Tags */}
              <div className="flex flex-wrap gap-2">
                {currentPillar.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Trigger */}
            <div className="mt-8">
              <Button size="lg" className="flex items-center gap-2 group">
                <span>Learn Our Full Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}