import { motion, useAnimationFrame } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MediaSlides } from "@/pages/MediaSlides";
import { useRef, useState } from "react";

export default function MediaCarousel() {
  const SLIDE_WIDTH = 320;
  const GAP = 24; // gap-6
  const ITEM_WIDTH = SLIDE_WIDTH + GAP;
  const TOTAL_WIDTH = MediaSlides.length * ITEM_WIDTH;

  const xRef = useRef(0);
  const pausedRef = useRef(false);
  const pauseTimeout = useRef(null);

  const [, forceRender] = useState(0);

 
  useAnimationFrame((_, delta) => {
    if (pausedRef.current) return;

    xRef.current -= delta * 0.08; // speed control

    
    if (xRef.current <= -TOTAL_WIDTH) {
      xRef.current = xRef.current % TOTAL_WIDTH;
    }
    if (xRef.current > 0) {
      xRef.current = -(TOTAL_WIDTH + xRef.current);
    }

    forceRender(v => v + 1);
  });

  const slideBy = (direction) => {
    pausedRef.current = true;

    // Move by exactly one item
    xRef.current += direction === "left" ? ITEM_WIDTH : -ITEM_WIDTH;

    clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => {
      pausedRef.current = false;
    }, 1500);
  };

  return (
    <section className="mt-20 py-20  relative overflow-hidden">
      {/* Heading */}
      <div className="mb-12 text-center">
        <span className="inline-block bg-emerald-50 px-6 py-4 rounded-full text-sm font-semibold text-emerald-700 shadow-md">
          Through the Gallery
        </span>
      </div>

      {/* Controls - Responsive positioning */}
      <div className="absolute top-20 sm:top-24 right-4 sm:right-8 md:right-12 lg:right-16 flex gap-3 z-30">
        <button
          onClick={() => slideBy("left")}
          aria-label="Previous slide"
          className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border-2 border-emerald-700
                     flex items-center justify-center bg-white/95 backdrop-blur-sm
                     hover:bg-emerald-700 hover:text-white 
                     active:scale-95 transition-all duration-200 shadow-lg"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={() => slideBy("right")}
          aria-label="Next slide"
          className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border-2 border-emerald-700
                     flex items-center justify-center bg-white/95 backdrop-blur-sm
                     hover:bg-emerald-700 hover:text-white 
                     active:scale-95 transition-all duration-200 shadow-lg"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Carousel - Triple rendering for seamless loop */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6 will-change-transform"
          style={{ transform: `translateX(${xRef.current}px)` }}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          {[...MediaSlides, ...MediaSlides, ...MediaSlides].map((slide, index) => (
            <div
              key={`${slide.id}-${index}`}
              className="relative min-w-[280px] md:min-w-[320px]
                         rounded-2xl overflow-hidden "
            >
              <img
                src={slide.image}
                alt={slide.caption}
                loading="lazy"
                className="h-[420px] w-full object-cover transform-gpu hover:scale-105 transition-transform duration-500"
              />

              <div
                className="absolute bottom-0 inset-x-0
                              bg-gradient-to-t from-black/70 to-transparent p-4"
              >
                <p className="text-white text-lg font-semibold">{slide.caption}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}