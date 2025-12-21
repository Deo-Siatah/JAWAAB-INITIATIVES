import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function ProjectsCard({ image, title, description, area }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg  transition-all transition-shadow duration-500 cursor-pointer max-w-sm p-0 m-4">
      <div className="flex flex-col h-full">
        {/* Image section */}
        <div className="w-full aspect-video bg-gray-100 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content section */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>

          <span className="inline-block mt-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold w-fit">
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
