import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import Teseru from "@/assets/Teseru.webp";
import Jawaab3 from "@/assets/jawaab3.webp";
import Jawaab4 from "@/assets/Jawaab4.webp";

/**
 * Projects section: same grid-of-cards structure as before, cards enriched
 * with colour-matched accents (shared with the Programs section), a
 * hover colour-wash, and a short human quote revealed on hover.
 */

const Projects = [
  {
    id: 1,
    image: Teseru,
    title: "Visit to Teseru Girls",
    description:
      "Providing daily meals to children in underserved communities to fight hunger and malnutrition.",
    area: "Mental Wellness",
    quote: "\u201cThe kids ran to the gate before the van even stopped.\u201d",
  },
  {
    id: 2,
    image: Jawaab4,
    title: "Amani Children's Home Support",
    description:
      "Offering shelter, education, and psychosocial support to orphans and vulnerable children.",
    area: "Children's Homes",
    quote: "\u201cTwenty-three children now have a bed, a desk, and a name on a school register.\u201d",
  },
  {
    id: 3,
    image: Jawaab3,
    title: "Tree Planting Drive",
    description:
      "Raising community awareness and restoring degraded land through locally-led reforestation.",
    area: "Climate Action",
    quote: "\u201c600 seedlings, planted by the same hands that will watch them grow.\u201d",
  },
];

const accentMap = {
  "Mental Wellness": { text: "text-emerald-700", wash: "bg-emerald-600/25", tag: "bg-emerald-100 text-emerald-700" },
  "Climate Action": { text: "text-lime-700", wash: "bg-lime-600/25", tag: "bg-lime-100 text-lime-700" },
  "Gender Equity": { text: "text-rose-700", wash: "bg-rose-600/25", tag: "bg-rose-100 text-rose-700" },
  WASH: { text: "text-sky-700", wash: "bg-sky-600/25", tag: "bg-sky-100 text-sky-700" },
};
const fallbackAccent = { text: "text-emerald-700", wash: "bg-emerald-600/25", tag: "bg-emerald-100 text-emerald-700" };

function getAccent(area) {
  return accentMap[area] || fallbackAccent;
}

function ProjectCard({ project }) {
  const [loaded, setLoaded] = useState(false);
  const accent = getAccent(project.area);

  return (
    <Card className="group bg-white overflow-hidden p-0 rounded-2xl border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 cursor-pointer">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        {!loaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Colour wash on hover — matches this project's area accent */}
        <div
          className={`absolute inset-0 ${accent.wash} opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100`}
        />
        {/* Quote slides up on hover */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 ease-out group-hover:translate-y-0">
          <p className="font-inter text-white text-sm leading-snug drop-shadow-sm">
            {project.quote}
          </p>
        </div>
      </div>

      <div className="p-6">
        <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold w-fit ${accent.tag}`}>
          {project.area}
        </span>
        <h3 className="font-heading text-lg font-bold text-gray-800 mt-3">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">{project.description}</p>
        <a
          href={`/projects/${project.id}`}
          className={`mt-4 inline-flex items-center gap-2 font-inter font-semibold text-sm ${accent.text} group/link`}
        >
          Read more
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
    </Card>
  );
}

export default function ProjectsShowcase() {
  return (
    <div className="pt-10 mt-15">
      <div className="text-center mb-10 p-2">
        <h2 className="text-3xl md:text-5xl font-extrabold text-emerald-700 mb-4">
          <TypeAnimation
            sequence={["Initiatives That Transform Lives", 300]}
            speed={20}
            wrapper="span"
            repeat={0}
            cursor={false}
            className="inline-block"
          />
        </h2>
        <p className="mt-4 text-gray-600">
          Explore how Jawaab impacts people, projects, and communities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Button
          size="md"
          className="mt-10 rounded-md px-6 py-5 text-gray-700 text-lg font-bold font-mono bg-white border-2 border-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300"
        >
          Explore All Projects
        </Button>
      </div>
    </div>
  );
}