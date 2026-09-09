import React from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Award, 
  ArrowRight,
  Quote,
  ShieldCheck,
  Sparkles,
  HeartPulse,
  Users,
  Leaf,
  Droplets
} from "lucide-react";
import { Button } from "@/components/ui/button";

const founderAvatarPlaceholder = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400";

export default function AboutPage() {
  return (
    <article className="min-h-screen bg-white font-sans-inter selection:bg-emerald-600 selection:text-white pt-28 pb-24">
      
      {/* 1. Header */}
      <header className="max-w-3xl mx-auto px-6 text-center space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          History & Formation
        </span>

        <h1 className="text-4xl sm:text-6xl font-serif-editorial font-bold text-slate-900 leading-[1.15]">
          From Community Need to Grassroots Action
        </h1>

        <p className="text-slate-600 text-lg sm:text-xl font-serif-editorial italic leading-relaxed pt-2">
          The word <strong className="text-emerald-700 font-semibold not-italic">“Jawaab”</strong> means <em className="text-slate-900">“The Answer”</em> or <em className="text-slate-900">“The Response.”</em>
        </p>
      </header>

      {/* 2. Editorial Narrative Section */}
      <section className="max-w-3xl mx-auto px-6 py-12 text-slate-700 text-base sm:text-lg leading-relaxed space-y-8 border-b border-slate-100 font-sans-inter">
        
        {/* The Beginning */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-slate-900">
            The Beginning
          </h2>
          <p>
            Jawaab Empowerment Initiative was born out of a growing recognition that many communities, particularly women, children, and vulnerable groups, face multiple interconnected challenges simultaneously. Limited access to mental health support, gender inequalities, inadequate water and sanitation, and accelerating climate challenges rarely occur in isolation.
          </p>
          <p>
            Poverty and gender inequality compound vulnerability to gender-based violence, while inadequate water and sanitation directly impact health, human dignity, and school attendance. Recognizing these overlapping realities became the foundation upon which Jawaab was built.
          </p>
        </div>

        {/* Pull Quote */}
        <blockquote className="relative pl-6 border-l-2 border-emerald-600 my-10">
          <Quote className="w-8 h-8 text-emerald-600/20 mb-2" />
          <p className="font-serif-editorial italic text-slate-900 text-xl sm:text-2xl leading-relaxed font-normal">
            “What is the problem, who is affected, and what practical response can we provide?”
          </p>
        </blockquote>

        {/* How Jawaab Came Into Practice */}
        <div className="space-y-4 pt-4">
          <h2 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-slate-900">
            Translating Concept Into Practice
          </h2>
          <p>
            Rather than establishing an organization around a single problem, our founders envisioned an initiative capable of addressing interconnected social challenges through four central pillars of intervention:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 not-prose">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-2">
              <HeartPulse className="w-6 h-6 text-emerald-700" />
              <span className="text-xs font-bold text-slate-800">Mental Wellness</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-2">
              <Users className="w-6 h-6 text-rose-700" />
              <span className="text-xs font-bold text-slate-800">Gender Equity</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-2">
              <Leaf className="w-6 h-6 text-lime-700" />
              <span className="text-xs font-bold text-slate-800">Climate Action</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-2">
              <Droplets className="w-6 h-6 text-sky-700" />
              <span className="text-xs font-bold text-slate-800">WASH</span>
            </div>
          </div>

          <p>
            Through initiatives such as the <strong>Women in Digital Business (WIDB)</strong> program, Jawaab has explored how digital skills, digital marketing, and artificial intelligence can strengthen women's economic participation—embodying our philosophy of empowering people with practical tools rather than temporary assistance.
          </p>
        </div>

      </section>

      {/* 3. Official Legal Charter Section */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-b border-slate-100 space-y-8">
        <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Formal Establishment & Status</span>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-slate-900 leading-snug">
            JAWAAB EMPOWERMENT INITIATIVE COMMUNITY BASED-ORGANIZATION
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Formally registered as a <strong>Community-Based Organisation (CBO) in 2025 in Narok</strong>, Jawaab operates as a voluntary, non-political, and non-profit organization serving underserved communities without discrimination.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="block font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-1">
                Headquarters
              </span>
              <span className="text-slate-600 leading-snug">
                Narok County, Kenya (with scope for regional branch networks)
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="block font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-1">
                Guiding Motto
              </span>
              <span className="text-emerald-800 font-serif-editorial italic font-semibold text-base">
                “Empowering Communities for a Sustainable Future.”
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership Section (Single Founder Area) */}
      <section className="max-w-3xl mx-auto px-6 py-16 space-y-10 border-b border-slate-100 text-center">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-slate-900">
            Founder & Executive Director
          </h2>
        </div>

        <div className="flex flex-col items-center space-y-4 max-w-md mx-auto">
          {/* Round Avatar Container - Paste your direct Supabase image URL below */}
          <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-emerald-100 shadow-sm bg-slate-100">
            <img
              src="https://plxrtlumuqawgdblhqmr.supabase.co/storage/v1/object/public/jawaab-assets/projects/WhatsApp%20Image%202026-09-07%20at%2013.17.12-copy.jpeg"
              alt="Jerim Owino"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1.5">
              <h3 className="text-xl font-bold font-heading-poppins text-slate-900">
                Jerim Owino
              </h3>
             
            </div>

            <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              Founder & Executive Director
            </p>

            <p className="text-sm text-slate-600 leading-relaxed pt-3">
              Founded Jawaab alongside Co-founder <strong>Hamdi Roble</strong> in 2025 to transition emerging community dialogues into an organized institution committed to long-term impact across Narok County.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="max-w-3xl mx-auto px-6 pt-12 text-center">
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-slate-900">
            Be Part of the Answer today.
          </h3>
          <div className="flex items-center justify-center gap-4">
            <Link to="/donate">
              <Button size="lg" className="rounded-full px-8 py-6 font-bold cursor-pointer">
                <span>Support Our Initiatives</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </article>
  );
}