import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
export function ProjectsCard({ image, title, description, area }) {
    const [loading,setLoading]=useState(false);
  return (
    <Card className="bg-white overflow-hidden hover:shadow-lg hover:border-2 hover:border-emerald-300/90 transition-all transition-shadow duration-500 cursor-pointer max-w-sm p-0 m-4">
      <div className="flex flex-col h-full">
        {/* Image section */}
        <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
         {!loading && (
            <div  className="absolute inset-0 bg-gray-200 animate-pulse"/>
        )}
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoading(true)}
            className={`w-full h-full object-cover hover:scale-105 transition-opacity duration-500 ${loading ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        {/* Content section */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>

          <span className="inline-block mt-2 px-4 py-2 rounded-full shadow-md bg-emerald-100 text-emerald-700 text-xs font-semibold w-fit">
            {area}
          </span>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            {description}
          </p>

          <button className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-700 group">
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </Card>
  );
}
