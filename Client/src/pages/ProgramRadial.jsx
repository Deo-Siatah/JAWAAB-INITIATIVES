import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { HeartPulse, Users, Leaf, Droplets, ArrowUpRight } from "lucide-react";
import mentalWellnessImg from "@/assets/mental-wellness.jpeg";
import genderEquityImg from "@/assets/gender-equity.jpg";
import climateActionImg from "@/assets/jawaab3.webp";
import washImg from "@/assets/wash.jpg";

/**
 * Programs storytelling section.
 * Replaces ProgramsOrbit.jsx + ProjectsCardData.jsx entirely.
 *
 * No cards, no glassmorphism, no impact-number tiles.
 * Reads top to bottom like an editorial feature: one story per program,
 * alternating image/text sides, connected by a single flowing colour
 * thread down the margin.
 *
 * Swap the `image` paths for real photography — search Pexels for:
 *  mentalWellness -> "support group conversation outdoors"
 *  genderEquity   -> "girls education classroom africa"
 *  climate        -> "community tree planting"
 *  wash           -> "clean water well community"
 */

const chapters = [
  {
    id: "mental-wellness",
    icon: HeartPulse,
    accent: "emerald",
    eyebrow: "Mental Wellness",
    headline: "We sit with people before we ever hand them a solution.",
    body:
      "Grief, stress, and quiet struggle don't announce themselves. Our community counsellors show up first as neighbours — running peer circles, training local volunteers to recognise when someone is drowning quietly, and making sure asking for help never feels like a confession.",
    tag: "\u201cThe first time I said it out loud, it was in a circle of people who'd said it too.\u201d",
    image: mentalWellnessImg,
  },
  {
    id: "gender-equity",
    icon: Users,
    accent: "rose",
    eyebrow: "Gender Equity",
    headline: "A girl who stays in school rewrites her whole family's story.",
    body:
      "We work with schools and parents to close the gaps that push girls out early — scholarships, safe transport, mentorship from women who've walked the same road. Equity isn't a slogan here; it's a bus fare, a sanitary kit, a teacher who checks in.",
    tag: "\u201cShe's the first in four generations to finish secondary school.\u201d",
    image: genderEquityImg,
  },
  {
    id: "climate-action",
    icon: Leaf,
    accent: "lime",
    eyebrow: "Climate Action",
    headline: "Every tree we plant has someone's name attached to it.",
    body:
      "Reforestation only sticks when the community owns it. We train local groups to run nurseries, restore degraded land, and track survival rates season after season — turning climate action from a donor photo-op into decades of local stewardship.",
    tag: "\u201c40,000 seedlings. Not one of them planted by a stranger.\u201d",
    image: climateActionImg,
  },
  {
    id: "wash",
    icon: Droplets,
    accent: "sky",
    eyebrow: "WASH",
    headline: "Clean water changes what a morning looks like.",
    body:
      "In communities without safe water access, mornings start with a walk that can take hours — usually made by girls, usually instead of school. We build and maintain local water points with the community, so that walk gets shorter every year.",
    tag: "\u201cMy daughter makes it to first period now.\u201d",
    image: washImg,
  },
];

const accentMap = {
  emerald: {
    text: "text-emerald-700",
    wash: "bg-emerald-600/25",
    thread: "#059669",
    underline: "decoration-emerald-500",
  },
  rose: {
    text: "text-rose-700",
    wash: "bg-rose-600/25",
    thread: "#e11d48",
    underline: "decoration-rose-500",
  },
  lime: {
    text: "text-lime-700",
    wash: "bg-lime-600/25",
    thread: "#65a30d",
    underline: "decoration-lime-500",
  },
  sky: {
    text: "text-sky-700",
    wash: "bg-sky-600/25",
    thread: "#0284c7",
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
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`group relative overflow-hidden rounded-3xl ${
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

        {/* Colour wash on hover, no glass blur */}
        <div
          className={`absolute inset-0 ${accent.wash} opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100`}
        />

        {/* Story tag slides up on hover */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full p-6 transition-transform duration-500 ease-out group-hover:translate-y-0">
          <p className="font-inter text-white text-sm md:text-base leading-snug drop-shadow-sm">
            {chapter.tag}
          </p>
        </div>
      </motion.div>

      {/* Text */}
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

        <h3 className="font-heading text-2xl md:text-4xl font-bold text-gray-800 leading-tight max-w-md">
          {chapter.headline}
        </h3>

        <p className="font-inter text-gray-500 mt-5 max-w-md leading-relaxed">
          {chapter.body}
        </p>

        <a
          href={`/programs/${chapter.id}`}
          className={`inline-flex items-center gap-1 mt-6 font-inter font-semibold underline underline-offset-4 decoration-2 ${accent.text} ${accent.underline} group/link`}
        >
          Read the full story
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </motion.div>
    </div>
  );
}

export default function ProgramsStory() {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Intro */}
        <div className="max-w-2xl mb-4">
          <p className="font-inter text-sm font-semibold text-emerald-600 mb-3">
            Our Programs
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Four programs. One community, told one story at a time.
          </h2>
          <p className="font-inter text-gray-500 mt-5 leading-relaxed">
            We don't run campaigns — we run relationships. Scroll through what
            that actually looks like on the ground.
          </p>
        </div>

        {/* Flowing colour thread */}
        <div
          className="hidden md:block absolute top-64 bottom-24 left-1/2 w-px -translate-x-1/2"
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

        {/* Close */}
        <div className="text-center mt-8">
          <a
            href="/programs"
            className="inline-flex items-center gap-2 rounded-md border-2 border-gray-700 px-6 py-3 font-inter font-bold text-gray-700 transition-all duration-300 hover:bg-gray-700 hover:text-white"
          >
            See every program in full
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}