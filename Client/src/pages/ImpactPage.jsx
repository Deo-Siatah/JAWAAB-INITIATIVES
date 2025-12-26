import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { DigitNumber } from "@/components/DigitNumber";
import { Button } from "@/components/ui/button";

export default function Impactpage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [lives, setLives] = useState(0);
  const [projects, setProjects] = useState(0);
  const [communities, setCommunities] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const animate = (setter, end) => {
      let current = 0;
      const step = end / 50;

      const timer = setInterval(() => {
        current += step;
        if (current >= end) {
          setter(end);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 50);

      return timer;
    };

    animate(setLives, 80);
    animate(setProjects, 10);
    animate(setCommunities, 5);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="mt-20 bg-white px-6 py-20"
    >
      {/* Heading */}
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-emerald-700">
          Making a Real Difference
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Our impact across people, projects, and communities.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-16 mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-14">

        <div className="text-center">
          <div className="text-5xl md:text-6xl font-extrabold">
            <DigitNumber value={lives} />
          </div>
          <p className="mt-4 text-lg font-semibold text-gray-700">
            Lives Impacted
          </p>
        </div>

        <div className="text-center">
          <div className="text-5xl md:text-6xl font-extrabold">
            <DigitNumber value={projects} />
          </div>
          <p className="mt-4 text-lg font-semibold text-gray-700">
            Ongoing Projects
          </p>
        </div>

        <div className="text-center">
          <div className="text-5xl md:text-6xl font-extrabold">
            <DigitNumber value={communities} />
          </div>
          <p className="mt-4 text-lg font-semibold text-gray-700">
            Communities Served
          </p>
        </div>

      </div>
      <div className="flex items-center justify-center">
      <Button 
        size="md"
        className="mt-10 rounded-md px-6 py-5 text-gray-700 text-lg font-bold font-mono bg-white border-2 border-gray-700 hover:bg-gray-700 hover:text-white hover:scale-105 transition-all duration-300"
      >
        Learn More About Our Impact
      </Button>
    </div>

    </section>
  );
}
