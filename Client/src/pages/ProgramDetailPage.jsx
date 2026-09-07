import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  HeartPulse,
  Users,
  Leaf,
  Droplets,
  MapPin,
  CheckCircle2,
  Share2,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import mentalWellnessImg from "@/assets/mental-wellness.jpeg";
import genderEquityImg from "@/assets/gender-equity.jpg";
import climateActionImg from "@/assets/jawaab3.webp";
import washImg from "@/assets/wash.jpg";

const programDetails = {
  "mental-wellness": {
    id: "mental-wellness",
    title: "Community Mental Wellness & Peer Circles",
    icon: HeartPulse,
    eyebrow: "Mental Health Advocacy",
    accentColor: "emerald",
    heroImg: mentalWellnessImg,
    location: "Narok North & Narok South, Kenya",
    impactMetric: "2,400+ Youth Reached",
    quote: "“The first time I spoke about my anxiety out loud, it was in a community circle where no one judged me.”",
    overview:
      "In rural communities across Narok, mental health challenges are often borne in isolation due to deep-rooted cultural stigmas. Jawaab Initiatives runs community-based peer counseling circles that provide safe, non-judgmental spaces for young people and community members to discuss emotional well-being, grief, and psychosocial trauma.",
    detailedNarrative:
      "Our trained local facilitators partner with secondary schools, youth groups, and women's collectives in Narok County to normalize conversations around mental health.\n\nRather than imposing clinical approaches from the outside, we train respected community champions to recognize early signs of distress, facilitate peer-led healing circles, and connect individuals with professional psychological support when required.",
    accomplishments: [
      "Established 18 active peer mental wellness circles across rural Narok schools",
      "Trained 45 local community champions in psychological first aid",
      "Hosted monthly destigmatization workshops reaching over 2,400 youth",
      "Provided 1-on-1 crisis referral pathways in partnership with county health centers",
    ],
  },
  "gender-equity": {
    id: "gender-equity",
    title: "Gender Equity & Girl-Child Empowerment",
    icon: Users,
    eyebrow: "Education & Leadership",
    accentColor: "rose",
    heroImg: genderEquityImg,
    location: "Narok East & Trans Mara, Kenya",
    impactMetric: "850+ Girls Retained in School",
    quote: "“When a girl stays in school, she rewrites the destiny of her entire lineage.”",
    overview:
      "In regions where early marriage, FGM, and economic barriers disrupt education, Jawaab Initiatives works alongside elders, parents, and schools to keep girls in the classroom and mentor young leaders of all genders.",
    detailedNarrative:
      "Our approach engages both boys and girls to challenge legacy gender biases and cultivate mutual respect. By providing dignity kits, educational sponsorships, and safe transport to remote schools, we remove the practical hurdles that push young women out of secondary education.\n\nWe regularly host intergenerational forums with traditional elders and community matriarchs to foster sustainable cultural shifts.",
    accomplishments: [
      "Supported 850+ adolescent girls with annual sanitary kit provisions and school fees",
      "Conducted 32 co-ed leadership workshops across 12 secondary institutions",
      "Partnered with 40 traditional leaders to champion girls' secondary completion",
      "Created mentorship networks linking high school students with female university graduates",
    ],
  },
  "climate-action": {
    id: "climate-action",
    title: "Reforestation & Land Restoration",
    icon: Leaf,
    eyebrow: "Environmental Stewardship",
    accentColor: "lime",
    heroImg: climateActionImg,
    location: "Mau Forest Fringe & Narok Pastoralist Zones",
    impactMetric: "40,000+ Seedlings Planted",
    quote: "“40,000 seedlings. Not one of them planted by a stranger, but by hands that will watch them grow.”",
    overview:
      "Climate change and deforestation severely threaten grazing ecosystems and water towers in Narok. Jawaab Initiatives mobilizes community-led tree planting, native tree nurseries, and sustainable land management drives.",
    detailedNarrative:
      "We believe environmental action only endures when local communities own every stage of the process. Our initiatives establish tree nurseries managed directly by youth groups and schools along the Mau Forest ecosystem.\n\nBy teaching soil conservation, agroforestry, and rainwater harvesting, we turn environmental stewardship into a source of community resilience and economic pride.",
    accomplishments: [
      "Planted and monitored over 40,000 indigenous tree seedlings with an 82% survival rate",
      "Established 5 community-owned tree nurseries producing 15,000 seedlings annually",
      "Engaged 1,200 Pastoralist youth in rangeland restoration and erosion control",
      "Hosted annual eco-clubs across 15 primary and secondary schools in Narok",
    ],
  },
  wash: {
    id: "wash",
    title: "Water, Sanitation & Hygiene (WASH)",
    icon: Droplets,
    eyebrow: "Clean Water Access",
    accentColor: "sky",
    heroImg: washImg,
    location: "Narok West & Rural Settlements, Kenya",
    impactMetric: "12 Water Points Restored",
    quote: "“Clean water changes what a morning looks like for every family in our village.”",
    overview:
      "Hours spent walking for water keep young girls out of school and put families at risk of waterborne illnesses. Jawaab Initiatives builds and restores community water points, rainwater harvesting infrastructure, and sanitation facilities.",
    detailedNarrative:
      "Clean water transforms health, school attendance, and daily productivity. We partner with village water committees to drill solar-powered boreholes, repair damaged shallow wells, and install high-capacity rainwater harvesting tanks at local schools.\n\nTo ensure long-term sustainability, we train community technicians to handle routine maintenance and hygiene education.",
    accomplishments: [
      "Constructed and rehabilitated 12 community water points serving 8,500+ residents",
      "Installed 10,000-liter rainwater harvesting systems in 8 primary schools",
      "Reduced average morning water retrieval walks from 3.5 hours to under 20 minutes",
      "Formed and certified 12 village water management committees for long-term maintenance",
    ],
  },
};

const themeStyles = {
  emerald: {
    badge: "bg-emerald-100 text-emerald-800",
    text: "text-emerald-700",
    border: "border-emerald-600",
  },
  rose: {
    badge: "bg-rose-100 text-rose-800",
    text: "text-rose-700",
    border: "border-rose-600",
  },
  lime: {
    badge: "bg-lime-100 text-lime-800",
    text: "text-lime-700",
    border: "border-lime-600",
  },
  sky: {
    badge: "bg-sky-100 text-sky-800",
    text: "text-sky-700",
    border: "border-sky-600",
  },
};

export default function ProgramDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const program = programDetails[id];

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 font-sans-inter text-center pt-32">
        <h2 className="text-2xl font-bold text-slate-900 font-serif-editorial">Program Story Not Found</h2>
        <p className="text-slate-500 text-sm mt-2 mb-6">
          The program initiative you are looking for does not exist or has been moved.
        </p>
        <Button onClick={() => navigate("/")} className="cursor-pointer">
          Return to Home
        </Button>
      </div>
    );
  }

  const theme = themeStyles[program.accentColor] || themeStyles.emerald;
  const Icon = program.icon;

  return (
    <article className="min-h-screen bg-white font-sans-inter selection:bg-emerald-600 selection:text-white pt-24">
      
      {/* 1. Sub-Header Navigation Bar */}
      <div className="bg-white border-b border-slate-100 py-3 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-emerald-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Overview</span>
          </button>

          <div className="flex items-center gap-3">
            <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${theme.badge}`}>
              {program.eyebrow}
            </span>
            <button
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              title="Share Program Story"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Hero Header Image Frame */}
      <header className="relative">
        <div className="relative w-full h-[55vh] min-h-[380px] max-h-[600px] overflow-hidden bg-slate-900">
          <img
            src={program.heroImg}
            alt={program.title}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/10" />

          <div className="absolute inset-x-0 bottom-0 max-w-5xl mx-auto px-6 pb-10 sm:pb-12">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3">
              <Icon className="w-5 h-5" />
              <span>{program.eyebrow} Pillar</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-editorial font-bold text-white leading-[1.15] max-w-3xl drop-shadow-sm">
              {program.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mt-6 text-xs sm:text-sm font-medium text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{program.location}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Active Community Program</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Blog-Style Article Body & Sidebar */}
      <section className="max-w-5xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Story Content (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            {program.quote && (
              <blockquote className={`relative pl-6 border-l-2 ${theme.border}`}>
                <Quote className={`w-6 h-6 ${theme.text} opacity-30 mb-2`} />
                <p className="font-serif-editorial italic text-slate-800 text-lg sm:text-xl leading-relaxed">
                  {program.quote}
                </p>
              </blockquote>
            )}

            <div className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-relaxed space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold font-heading-poppins text-slate-900 border-b border-slate-100 pb-3">
                Program Mission & Scope
              </h2>
              <p>{program.overview}</p>

              <h2 className="text-xl sm:text-2xl font-bold font-heading-poppins text-slate-900 border-b border-slate-100 pb-3 pt-4">
                Field Operations in Narok County
              </h2>
              <div className="whitespace-pre-line text-slate-600 leading-relaxed">
                {program.detailedNarrative}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold font-heading-poppins text-slate-900 border-b border-slate-100 pb-3 pt-4">
                Key Program Outcomes
              </h2>
              <ul className="space-y-3 font-normal text-base text-slate-600">
                {program.accomplishments.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${theme.text} shrink-0 mt-0.5`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Minimal Sidebar Metric (4 Cols) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="space-y-2 border-b border-slate-100 pb-6">
              <span className={`text-xs font-bold uppercase tracking-widest ${theme.text}`}>
                Pillar Impact Record
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading-poppins">
                {program.impactMetric}
              </div>
              <p className="text-sm font-semibold text-slate-600">
                Directly impacted through field operations
              </p>
            </div>

            <div className="flex items-center gap-3 text-emerald-700 pt-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0 stroke-[2.5]" />
              <div>
                <p className="text-base font-bold text-slate-900 leading-tight">
                  Active Program Pillar
                </p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Verified by community leadership
                </p>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </article>
  );
}