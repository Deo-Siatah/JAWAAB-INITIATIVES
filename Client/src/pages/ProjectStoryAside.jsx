import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { DigitNumber } from "@/components/DigitNumber";
import { CheckCircle2, Heart, MapPin, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectStoryAside({ project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [impactCount, setImpactCount] = useState(0);

  // Parse numeric target from project metric
  const targetNumber = React.useMemo(() => {
    if (!project?.impact_metric) return 150;
    const match = String(project.impact_metric).match(/\d+/);
    return match ? parseInt(match[0], 10) : 150;
  }, [project?.impact_metric]);

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const end = targetNumber;
    const step = Math.max(1, Math.floor(end / 40));

    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setImpactCount(end);
        clearInterval(timer);
      } else {
        setImpactCount(current);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [isInView, targetNumber]);

  return (
    <aside ref={ref} className="space-y-8 py-4 font-sans-inter">
      {/* 1. Animated Impact Counter (Single Plus Sign) */}
      <div className="space-y-2 border-b border-slate-100 pb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
          Direct Impact Reached
        </span>
        
        <div className="flex items-baseline gap-1 text-5xl sm:text-6xl font-extrabold text-slate-900 font-heading-poppins">
          <DigitNumber value={impactCount} />
          <span className="text-emerald-600 font-bold">+</span>
        </div>
        
        <p className="text-sm font-semibold text-slate-600">
          Community Members Reached
        </p>
      </div>

      {/* 2. Verification Status with Prominent Tick */}
      <div className="space-y-5">
        <div className="flex items-center gap-3 text-emerald-700">
          <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0 stroke-[2.5]" />
          <div>
            <p className="text-base font-bold leading-tight">
              {project?.status || "Completed & Verified"}
            </p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Verified by field operations team
            </p>
          </div>
        </div>

        {/* Location & Focus Area */}
        <div className="space-y-2.5 pt-2 text-xs font-semibold text-slate-600 border-t border-slate-100">
          <div className="flex items-center gap-2 pt-2">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Location: <strong className="text-slate-800">{project?.location || "Narok County, Kenya"}</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Core Area: <strong className="text-slate-800">{project?.area || "General Initiative"}</strong></span>
          </div>
        </div>
      </div>

      {/* 3. CTA */}
      <div className="pt-2">
        <a href="/#newsletter" className="block w-full">
          <Button 
            size="md"
            className="w-full rounded-xl px-6 py-4 text-slate-800 text-sm font-bold bg-white border-2 border-slate-800 hover:bg-slate-900 hover:text-white hover:scale-102 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <Heart className="w-4 h-4 fill-current text-rose-500" />
            <span>Support Future Drives</span>
          </Button>
        </a>
      </div>
    </aside>
  );
}