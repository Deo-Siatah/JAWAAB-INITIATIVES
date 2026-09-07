import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { HeartPulse, Users, Leaf, Droplets, ArrowUpRight } from "lucide-react";
import mentalWellnessImg from "@/assets/mental-wellness.jpeg";
import genderEquityImg from "@/assets/gender-equity.jpg";
import climateActionImg from "@/assets/jawaab3.webp";
import washImg from "@/assets/wash.jpg";

const chapters = [
  {
    id: "mental-wellness",
    icon: HeartPulse,
    accent: "emerald",
    eyebrow: "Mental Wellness",
    headline: "We sit with people before we ever hand them a solution.",
    body:
      "Grief, stress, and quiet struggle don't announce themselves in Narok. Our community counselors show up first as neighbors — running peer circles, training local volunteers to recognize when someone is struggling quietly, and making sure asking for help never feels like a confession.",
    tag: "“The first time I said it out loud, it was in a circle of people who'd said it too.”",
    image: mentalWellnessImg,
  },
  {
    id: "gender-equity",
    icon: Users,
    accent: "rose",
    eyebrow: "Gender Equity",
    headline: "A girl who stays in school rewrites her whole family's story.",
    body:
      "We work with schools, traditional elders, and parents in rural Narok to close the gaps that push girls out early — scholarships, safe transport, and mentorship from women who've walked the same road. Equity isn't a slogan here; it's a bus fare, a sanitary kit, a teacher who checks in.",
    tag: "“She's the first in four generations to finish secondary school.”",
    image: genderEquityImg,
  },
  {
    id: "climate-action",
    icon: Leaf,
    accent: "lime",
    eyebrow: "Climate Action",
    headline: "Every tree we plant has someone's name attached to it.",
    body:
      "Reforestation along the Mau Forest ecosystem only sticks when the community owns it. We train local youth groups in Narok to run native tree nurseries, restore degraded rangelands, and track survival rates season after season.",
    tag: "“40,000 seedlings. Not one of them planted by a stranger.”",
    image: climateActionImg,
  },
  {
    id: "wash",
    icon: Droplets,
    accent: "sky",
    eyebrow: "WASH Initiative",
    headline: "Clean water changes what a morning looks like.",
    body:
      "In rural settlements across Narok without safe water access, mornings start with a walk that can take hours — usually made by girls, usually instead of school. We build and rehabilitate local solar boreholes with community committees so that walk gets shorter every year.",
    tag: "“My daughter makes it to first period now.”",
    image: washImg,
  },
];

const accentMap = {
  emerald: {
    text: "text-emerald-700",
    wash: "bg-emerald-600/25",
    underline: "decoration-emerald-500",
  },
  rose: {
    text: "text-rose-700",
    wash: "bg-rose-600/25",
    underline: "decoration-rose-500",
  },
  lime: {
    text: "text-lime-700",
    wash: "bg-lime-600/25",
    underline: "decoration-lime-500",
  },
  sky: {
    text: "text-sky-700",
    wash: "bg-sky-600/25",
    underline: "decoration-sky-500",
  },
};

function Chapter({ chapter, index }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-40, 40]);
  const accent = accentMap[chapter.accent];
  const reversed = index % 2 === 1;
  const Icon = chapter.icon;

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center py-20 md:py-28"
    >
      {/* Image Block */}
      <Link
        to={`/programs/${chapter.id}`}
        className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
          reversed ? "md:order-2" : "md:order-1"
        }`}
      >
        <motion.div style={{ y: imageY }} className="h-[340px] md:h-[460px] -m-6">
          <img
            src={chapter.image}
            alt={chapter.eyebrow}
            className="h-full w-full object-cover scale-110 transition-transform duration-700 ease-out group-hover:scale-100"
          />
        </motion.div>

        {/* Colour wash on hover */}
        <div
          className={`absolute inset-0 ${accent.wash} opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100`}
        />

        {/* Story tag slides up on hover */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full p-6 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent transition-transform duration-500 ease-out group-hover:translate-y-0">
          <p className="font-inter text-white text-sm md:text-base leading-snug drop-shadow-xs italic">
            {chapter.tag}
          </p>
        </div>
      </Link>

      {/* Text Block */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={reversed ? "md:order-1" : "md:order-2"}
      >
        <div className="flex items-center gap-2 mb-4">
          <Icon className={`h-5 w-5 ${accent.text}`} />
          <span className={`font-inter text-sm font-semibold tracking-wide ${accent.text}`}>
            {chapter.eyebrow}
          </span>
        </div>

        <Link to={`/programs/${chapter.id}`}>
          <h3 className="font-heading text-2xl md:text-4xl font-bold text-gray-800 leading-tight max-w-md hover:text-emerald-700 transition-colors">
            {chapter.headline}
          </h3>
        </Link>

        <p className="font-inter text-gray-500 mt-5 max-w-md leading-relaxed">
          {chapter.body}
        </p>

        <Link
          to={`/programs/${chapter.id}`}
          className={`inline-flex items-center gap-1 mt-6 font-inter font-semibold underline underline-offset-4 decoration-2 ${accent.text} ${accent.underline} group/link cursor-pointer`}
        >
          Read the full story
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </motion.div>
    </div>
  );
}

export default function ProgramsStory() {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden font-sans-inter">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Intro */}
        <div className="max-w-2xl mb-4">
          <p className="font-inter text-sm font-semibold text-emerald-600 mb-3">
            Our Key Impact Pillars
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight font-serif-editorial">
            Four programs. One community, told one story at a time.
          </h2>
          <p className="font-inter text-gray-500 mt-5 leading-relaxed">
            We don't run isolated campaigns — we build long-term relationships across Narok County. Scroll through what community stewardship looks like on the ground.
          </p>
        </div>

        {/* Flowing background thread */}
        <div
          className="hidden md:block absolute top-64 bottom-24 left-1/2 w-px -translate-x-1/2 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, #059669, #e11d48, #65a30d, #0284c7)",
            opacity: 0.25,
          }}
          aria-hidden="true"
        />

        <div className="relative divide-y divide-gray-100">
          {chapters.map((chapter, i) => (
            <Chapter key={chapter.id} chapter={chapter} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}