import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Quote,
  ShieldCheck,
  Share2,
  Loader2,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ProjectStoryAside from "./ProjectStoryAside";

function MetaField({ icon: Icon, value, pendingLabel, accent = "text-slate-500" }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className={`w-4 h-4 ${value ? "text-emerald-400" : "text-slate-300"}`} />
      {value ? (
        <span className={accent}>{value}</span>
      ) : (
        <span className="text-slate-400 italic">{pendingLabel}</span>
      )}
    </div>
  );
}

export default function ProjectStoryPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStory() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;
        setProject(data);
      } catch (err) {
        console.error("Error fetching project story:", err);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchStory();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-sans-inter">
        <div className="flex items-center gap-3 text-emerald-600">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span className="text-sm font-semibold tracking-wide">Loading Community Story...</span>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 font-sans-inter text-center">
        <h2 className="text-2xl font-bold text-slate-900 font-serif-editorial">Story Not Found</h2>
        <p className="text-slate-500 text-sm mt-2 mb-6">
          The project story you are looking for may have been moved or updated.
        </p>
        <Button onClick={() => navigate("/")} className="cursor-pointer">
          Return to Home
        </Button>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white font-sans-inter selection:bg-emerald-600 selection:text-white">
      {/* 1. Global Navbar */}
      <Navbar />

      {/* 2. Top Navigation Sub-Bar */}
      <div className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 px-6 mt-16">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-emerald-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 uppercase tracking-wider">
              {project.area || "General Initiative"}
            </span>
            <button
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              title="Share Story Link"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Hero Header with Top Margin */}
      <header className="relative">
        <div className="relative w-full h-[62vh] min-h-[420px] max-h-[720px] overflow-hidden bg-slate-900">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.opacity = 0;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/10" />

          <div className="absolute inset-x-0 bottom-0 max-w-5xl mx-auto px-6 pb-10 sm:pb-14">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-editorial font-bold text-white leading-[1.1] max-w-3xl drop-shadow-sm">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mt-6 text-xs sm:text-sm font-medium">
              <MetaField
                icon={MapPin}
                value={project.location}
                pendingLabel="Location coming soon"
                accent="text-white/90"
              />
              <MetaField
                icon={Calendar}
                value={
                  project.event_date
                    ? new Date(project.event_date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : project.created_at
                    ? new Date(project.created_at).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })
                    : null
                }
                pendingLabel="Date coming soon"
                accent="text-white/90"
              />
              {project.status ? (
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{project.status}</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-white/50 italic">
                  <Clock className="w-4 h-4" />
                  <span>Status update coming soon</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 4. Main Body */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-8 space-y-10">
            {project.quote && (
              <blockquote className="relative pl-6 border-l-2 border-emerald-600">
                <Quote className="w-6 h-6 text-emerald-600/30 mb-2" />
                <p className="font-serif-editorial italic text-slate-800 text-lg sm:text-xl leading-relaxed">
                  {project.quote}
                </p>
              </blockquote>
            )}

            <div className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-relaxed space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold font-heading-poppins text-slate-900 border-b border-slate-100 pb-3">
                Overview of the Visit
              </h2>
              <p>{project.description}</p>

              <h2 className="text-xl sm:text-2xl font-bold font-heading-poppins text-slate-900 border-b border-slate-100 pb-3 pt-4">
                Full Field Report
              </h2>

              {project.full_story ? (
                <div className="whitespace-pre-line text-slate-600 leading-relaxed">
                  {project.full_story}
                </div>
              ) : (
                <p className="text-slate-400 italic text-base">
                  Full field report coming soon for this initiative.
                </p>
              )}

              <h2 className="text-xl sm:text-2xl font-bold font-heading-poppins text-slate-900 border-b border-slate-100 pb-3 pt-4">
                Key Accomplishments &amp; Outcomes
              </h2>

              {project.accomplishments && project.accomplishments.length > 0 ? (
                <ul className="space-y-3 font-normal text-base text-slate-600">
                  {project.accomplishments.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-400 italic text-base">
                  Impact outcomes will be published here once documented.
                </p>
              )}

              {project.gallery_urls && project.gallery_urls.length > 0 && (
                <div className="space-y-4 pt-6">
                  <h2 className="text-xl sm:text-2xl font-bold font-heading-poppins text-slate-900 border-b border-slate-100 pb-3">
                    Field Operations Gallery
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {project.gallery_urls.map((imgUrl, idx) => (
                      <div
                        key={idx}
                        className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100"
                      >
                        <img
                          src={imgUrl}
                          alt={`Field photo ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-4">
            <ProjectStoryAside project={project} />
          </div>
        </div>
      </section>
    </article>
  );
}