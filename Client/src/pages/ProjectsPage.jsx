import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Loader2, AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";

// Category color mappings matching Jawaab design system
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
    <Card className="group bg-white overflow-hidden p-0 rounded-2xl border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
      {/* Clickable Card Body Link */}
      <Link to={`/projects/${project.id}`} className="block flex-1 cursor-pointer">
        <div>
          {/* Cover Image & Hover Quote Overlay */}
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
            {!loaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
            <img
              src={project.image_url}
              alt={project.title}
              loading="lazy"
              decoding="async"
              onLoad={() => setLoaded(true)}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/600x450?text=Image+Load+Failed";
                setLoaded(true);
              }}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Hover Colour-Wash */}
            <div
              className={`absolute inset-0 ${accent.wash} opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100`}
            />

            {/* Hover Quote Callout */}
            {project.quote && (
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent transition-transform duration-500 ease-out group-hover:translate-y-0">
                <p className="font-inter text-white text-xs sm:text-sm leading-snug drop-shadow-xs italic">
                  {project.quote}
                </p>
              </div>
            )}
          </div>

          {/* Card Meta & Header */}
          <div className="p-6">
            <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold w-fit ${accent.tag}`}>
              {project.area || "General Initiative"}
            </span>
            <h3 className="font-heading text-lg font-bold text-gray-800 mt-3 group-hover:text-emerald-700 transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>
        </div>
      </Link>

      {/* Read Story Link */}
      <div className="p-6 pt-0">
        <Link
          to={`/projects/${project.id}`}
          className={`inline-flex items-center gap-2 font-inter font-semibold text-sm ${accent.text} group/link cursor-pointer`}
        >
          Read full story
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
}

export default function ProjectsShowcase() {
  const [projectsList, setProjectsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchSupabaseProjects = async () => {
    setLoading(true);
    setErrorMsg(null);

    // Timeout trigger: Cancel request if Supabase takes longer than 6 seconds
    const timeoutId = setTimeout(() => {
      setErrorMsg("Connection timed out. Please check your network or Supabase database configuration.");
      setLoading(false);
    }, 6000);

    try {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      clearTimeout(timeoutId);

      if (error) throw error;

      setProjectsList(data || []);
    } catch (err) {
      clearTimeout(timeoutId);
      console.error("Supabase live fetch error:", err);
      setErrorMsg(err.message || "Failed to load live projects from database.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSupabaseProjects();
  }, []);

  return (
    <section className="pt-10 mt-15 max-w-7xl mx-auto px-6 font-sans-inter">
      {/* Editorial Header */}
      <div className="text-center mb-10 p-2">
        <h2 className="text-3xl md:text-5xl font-extrabold text-emerald-700 mb-4">
          <TypeAnimation
            sequence={["Initiatives That Transform Lives", 300]}
            speed={20}
            wrapper="span"
            repeat={0}
            cursor={false}
            className="inline-block font-serif-editorial"
          />
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Explore how Jawaab impacts people, projects, and communities across all key operational pillars.
        </p>
      </div>

      {/* 1. Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
          <span className="text-xs text-slate-500 font-medium">Fetching live initiatives...</span>
        </div>
      )}

      {/* 2. Error / Timeout Alert State */}
      {!loading && errorMsg && (
        <div className="max-w-md mx-auto p-6 rounded-2xl bg-rose-50 border border-rose-200 text-center space-y-4 my-10">
          <AlertCircle className="w-8 h-8 text-rose-600 mx-auto" />
          <div>
            <h3 className="text-sm font-bold text-slate-900">Database Fetch Failed</h3>
            <p className="text-xs text-rose-700 mt-1 font-mono bg-rose-100/50 p-2 rounded-lg">{errorMsg}</p>
          </div>
          <Button
            onClick={fetchSupabaseProjects}
            size="sm"
            className="cursor-pointer font-semibold inline-flex items-center gap-2"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Retry Connection</span>
          </Button>
        </div>
      )}

      {/* 3. Empty Database State */}
      {!loading && !errorMsg && projectsList.length === 0 && (
        <div className="text-center py-16 border border-dashed border-slate-200 rounded-2xl max-w-md mx-auto">
          <p className="text-slate-600 text-sm font-semibold">No project cards published yet.</p>
          <p className="text-slate-400 text-xs mt-1">Use the Admin Dashboard to publish your first initiative.</p>
        </div>
      )}

      {/* 4. Live Projects Grid */}
      {!loading && !errorMsg && projectsList.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsList.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {/* Section Bottom Button */}
      <div className="flex items-center justify-center">
        <Button
          size="md"
          className="mt-10 rounded-full px-8 py-5 text-gray-800 text-base font-bold bg-white border-2 border-gray-800 hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer shadow-xs"
        >
          Explore All Projects
        </Button>
      </div>
    </section>
  );
}