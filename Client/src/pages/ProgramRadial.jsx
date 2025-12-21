import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { programs } from "@/components/Programs";
import { useRef } from "react";

export default function ProgramsOrbit() {
  const [active, setActive] = useState(programs[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className=" mt-30 relative py-24 md:py-32 bg-emerald-300/90 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold text-emerald-600">
            OUR PROGRAMS
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-heading font-extrabold">
            Impact Areas We Focus On
          </h2>
        </motion.div>

        {/* MOBILE VIEW */}
        <div className="relative mx-auto h-[320px] w-[320px] md:hidden">
        {/* Orbit */}
        <motion.div
            className="absolute inset-0 z-20"
            animate={{ rotate: 360 }}
            transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
            }}
        >
            {programs.map((program, index) => {
            const angle = (index / programs.length) * 2 * Math.PI;
            const radius = 150; // smaller radius for mobile
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            const Icon = program.icon;

            return (
                <button
                key={program.id}
                onClick={() => setActive(program)}
                className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-white shadow border border-gray-200"
                style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                }}
                >
                <Icon className={`h-5 w-5 ${program.iconClass}`} />
                </button>
            );
            })}
        </motion.div>

        {/* Center */}
        <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0 }}
              className="absolute inset-0  flex flex-col items-center justify-center rounded-full bg-white p-6 text-center shadow-lg"
            >
        
            <active.icon className={`h-10 w-10 mb-2 ${active.iconClass}`} />
            <h3 className="text-base font-bold">{active.title}</h3>
            <p className="mt-2 text-xs text-gray-600">
            {active.description}
            </p>
            <div
                className={`absolute inset-0 z-0 rounded-full blur-3xl opacity-30 ${active.glowClass}`}
                />
            <button className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-700 group">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
       
        </motion.div>
        </div>


        {/* DESKTOP ORBIT */}
        <div className="relative hidden md:block">
          <div className="relative mx-auto h-[460px] w-[460px] lg:h-[520px] lg:w-[520px]">

            {/* Rotating orbit */}
            <motion.div
              className="absolute inset-0 z-20"
              animate={{ rotate: 360 }}
              transition={{
                duration: 80,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {programs.map((program, index) => {
                const angle = (index / programs.length) * 2 * Math.PI;
                const radius = 250;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                const Icon = program.icon;

                return (
                  <button
                    key={program.id}
                    aria-label={`View ${program.title} program`}
                    onClick={() => setActive(program)}
                    onMouseEnter={() => setActive(program)}
                    className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md border border-gray-200 hover:scale-110 transition"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                    }}
                  >
                    <Icon  className={`h-7 w-7 ${program.iconClass}`} />
                  </button>
                );
              })}
            </motion.div>

            {/* Center spotlight */}
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0 }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-full bg-white p-14 text-center shadow-xl"
            >
              {/* Radial glow */}
              <div
                className={`absolute inset-0 z-0 rounded-full blur-3xl opacity-30 ${active.glowClass}`}
                />

              <active.icon className={`h-16 w-16 mb-4 ${active.iconClass}`}/>

              <h3 className="text-2xl font-bold">
                {active.title}
              </h3>

              <p className="mt-4 text-gray-600 text-sm max-w-xs">
                {active.description}
              </p>

              <button className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-700 group">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-emerald 300/90 to-emerald-100" />
    </section>
  );
}
