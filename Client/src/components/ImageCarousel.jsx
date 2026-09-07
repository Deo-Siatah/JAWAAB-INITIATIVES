import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function MediaCarousel() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  const SLIDE_WIDTH = 320;
  const GAP = 24;
  const ITEM_WIDTH = SLIDE_WIDTH + GAP;
  
  const xRef = useRef(0);
  const pausedRef = useRef(false);
  const pauseTimeout = useRef(null);
  const [, forceRender] = useState(0);

  useEffect(() => {
    fetchGallerySlides();
  }, []);

  async function fetchGallerySlides() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("gallery")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

      if (error) throw error;
      setSlides(data || []);
    } catch (err) {
      console.error("Error fetching gallery slides:", err);
    } finally {
      setLoading(false);
    }
  }

  const TOTAL_WIDTH = slides.length * ITEM_WIDTH;

  useAnimationFrame((_, delta) => {
    if (pausedRef.current || slides.length === 0) return;

    xRef.current -= delta * 0.08;

    if (xRef.current <= -TOTAL_WIDTH) {
      xRef.current = xRef.current % TOTAL_WIDTH;
    }
    if (xRef.current > 0) {
      xRef.current = -(TOTAL_WIDTH + xRef.current);
    }

    forceRender((v) => v + 1);
  });

  const slideBy = (direction) => {
    if (slides.length === 0) return;
    pausedRef.current = true;

    xRef.current += direction === "left" ? ITEM_WIDTH : -ITEM_WIDTH;

    clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => {
      pausedRef.current = false;
    }, 1500);
  };

  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center">
        <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
      </div>
    );
  }

  if (slides.length === 0) return null;

  // Tripled slides array for infinite continuous scrolling
  const infiniteSlides = [...slides, ...slides, ...slides];

  return (
    <section className="mt-20 py-20 relative overflow-hidden font-sans-inter">
      <div className="mb-12 text-center">
        <span className="inline-block bg-emerald-50 px-6 py-4 rounded-full text-sm font-semibold text-emerald-700 shadow-xs">
          Through the Gallery
        </span>
      </div>

      <div className="absolute top-20 sm:top-24 right-4 sm:right-8 md:right-12 lg:right-16 flex gap-3 z-30">
        <button
          onClick={() => slideBy("left")}
          aria-label="Previous slide"
          className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border-2 border-emerald-700 flex items-center justify-center bg-white/95 backdrop-blur-xs hover:bg-emerald-700 hover:text-white active:scale-95 transition-all cursor-pointer shadow-md"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={() => slideBy("right")}
          aria-label="Next slide"
          className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border-2 border-emerald-700 flex items-center justify-center bg-white/95 backdrop-blur-xs hover:bg-emerald-700 hover:text-white active:scale-95 transition-all cursor-pointer shadow-md"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6 will-change-transform"
          style={{ transform: `translateX(${xRef.current}px)` }}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          {infiniteSlides.map((slide, index) => (
            <div
              key={`${slide.id}-${index}`}
              className="relative min-w-[280px] md:min-w-[320px] rounded-2xl overflow-hidden shadow-xs"
            >
              <img
                src={slide.image_url}
                alt={slide.caption}
                loading="lazy"
                className="h-[420px] w-full object-cover transform-gpu hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                <p className="text-white text-base font-semibold leading-snug">{slide.caption}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}