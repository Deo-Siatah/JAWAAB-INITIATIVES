
import { ProjectsCard } from "@/components/ProjectsCard";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import Teseru from "@/assets/Teseru.webp"
import Jawaab3 from "@/assets/jawaab3.webp";
import Jawaab4 from "@/assets/Jawaab4.webp";
export default function ProjectsCardData() {
  const Projects = [
    {
      id: 1,
      image: Teseru,
      title: "Visit to Teseru girls",
      description:
        "Providing daily meals to children in underserved communities to fight hunger and malnutrition.",
      area: "Mental Wellness",
    },
    {
      id: 2,
      image: Jawaab4,
      title: "Amani childrens Home Support",
      description:
        "Offering shelter, education, and psychosocial support to orphans and vulnerable children.",
      area: "Children’s Homes",
    },
    {
      id: 3,
      image: Jawaab3,
      title: "Tree planting drive",
      description:
        "Raising awareness and providing survivor support services to combat gender-based violence.",
      area: "Climate Action",
    },
  ];

  return (
    <div className=" pt-10  mt-15 ">
        {/* <div className="text-center mb-10 p-2">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-700 mb-4">Initiatives That
            <span className="text-emerald-700"> Transform Lives</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Explore how Jawaab impacts people, projects, and communities.
        </p>
        </div> */}
    <div className="text-center mb-10 p-2">
    <h2 className="text-3xl md:text-5xl font-extrabold text-emerald-700 mb-4">
    <TypeAnimation
        sequence={[
        "Initiatives That Transform Lives",
        300,
        
        ]}
        speed={20}
        wrapper="span"
        repeat={0}
        cursor={false}
        className="inline-block"
    />
    </h2>
    <p className="mt-4 text-gray-600">Explore how Jawaab impacts people, projects, and communities.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
      {Projects.map((project) => (
        <ProjectsCard
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          area={project.area}
        />
      ))}
   </div>
    <div className="flex items-center justify-center">
      <Button 
        size="md"
        className="mt-10 rounded-md px-6 py-5 text-gray-700 text-lg font-bold font-mono bg-white border-2 border-gray-700 hover:bg-gray-700 hover:text-white  transition-all duration-300"
      >
        Explore All Projects
      </Button>
    </div>
   </div>
  );
}
