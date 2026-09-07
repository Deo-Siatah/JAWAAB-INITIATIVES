import React from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Award, 
  ArrowRight,
  Quote,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

const placeholderAvatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400";
const founderAvatar = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400";

const teamMembers = [
  {
    name: "Jeremy Owino",
    role: "Founder & Executive Director",
    bio: "Pioneered Jawaab to bridge community challenges in Narok with grassroots, sustainable solutions.",
    image_url: founderAvatar, 
    isFounder: true,
  },
  {
    name: "Team Member Placeholder",
    role: "Programs Lead",
    bio: "Oversees field operations, school partnerships, and community engagement initiatives.",
    image_url: placeholderAvatar,
    isFounder: false,
  },
  {
    name: "Team Member Placeholder",
    role: "Community Facilitator",
    bio: "Leads local peer counseling circles and gender equality workshops across Narok.",
    image_url: placeholderAvatar,
    isFounder: false,
  },
];

export default function AboutPage() {
  return (
    <article className="min-h-screen bg-white font-sans-inter selection:bg-emerald-600 selection:text-white pt-28 pb-24">
      
      {/* 1. Story Intro Header */}
      <header className="max-w-3xl mx-auto px-6 text-center space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          Our Genesis & Calling
        </span>

        <h1 className="text-4xl sm:text-6xl font-serif-editorial font-bold text-slate-900 leading-[1.15]">
          A Direct Response to the Cries of Our Community.
        </h1>

        <p className="text-slate-600 text-lg sm:text-xl font-serif-editorial italic leading-relaxed pt-2">
          The word <strong className="text-emerald-700 font-semibold not-italic">“Jawaab”</strong> means <em className="text-slate-900">“The Answer.”</em>
        </p>
      </header>

      {/* 2. Editorial Story Block */}
      <section className="max-w-3xl mx-auto px-6 py-12 prose prose-slate text-slate-700 text-base sm:text-lg leading-relaxed space-y-8 border-b border-slate-100">
        <p>
          We were established to ensure that when rural communities cry out for mental wellness, girl-child education, clean water, and environmental restoration, an actionable response follows. Rather than bringing pre-packaged fixes from the outside, we listen first—sitting with elders, teachers, and youth across Narok County to construct answers that last.
        </p>

        <blockquote className="relative pl-6 border-l-2 border-emerald-600 my-8">
          <Quote className="w-8 h-8 text-emerald-600/20 mb-2" />
          <p className="font-serif-editorial italic text-slate-900 text-xl sm:text-2xl leading-relaxed font-normal">
            “We don’t run temporary campaigns—we cultivate enduring community relationships.”
          </p>
        </blockquote>
      </section>

      {/* 3. Official Constitution & Governance (Clean Editorial Section) */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-b border-slate-100 space-y-8">
        <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Official Charter & Status</span>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-slate-900 leading-snug">
            JAWAAB EMPOWERMENT INITIATIVE COMMUNITY BASED-ORGANIZATION
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Operating officially as <strong className="text-slate-900">“the CBO,”</strong> Jawaab functions as a voluntary, non-political, and non-profit community-based organization dedicated to serving underserved communities without discrimination.
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

      {/* 4. Leadership & Team Section (Round Avatars, Blog Style) */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            People Behind the Mission
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-slate-900">
            Our Leadership & Champions
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Driven by local visionaries who walk hand-in-hand with Narok elders, schools, and youth.
          </p>
        </div>

        {/* Team List with Circular Avatars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4">
              
              {/* Round Avatar Container */}
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-emerald-100 shadow-sm bg-slate-100">
                <img
                  src={member.image_url}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholderAvatar;
                  }}
                />
              </div>

              {/* Text Info */}
              <div className="space-y-1 max-w-xs">
                <div className="flex items-center justify-center gap-1.5">
                  <h3 className="text-lg font-bold font-heading-poppins text-slate-900">
                    {member.name}
                  </h3>
                  {member.isFounder && (
                    <Sparkles className="w-4 h-4 text-emerald-600" title="Founder" />
                  )}
                </div>

                <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                  {member.role}
                </p>

                <p className="text-xs text-slate-500 leading-relaxed pt-2">
                  {member.bio}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 5. Minimalist Closing CTA */}
      <section className="max-w-3xl mx-auto px-6 pt-8 text-center">
        <div className="py-12 border-t border-slate-100 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-slate-900">
            Be Part of the Answer in Narok County.
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