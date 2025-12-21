
import { ProjectsCard } from "@/components/ProjectsCard";
import Teseru from "@/assets/Teseru.jpg"
import Jawaab3 from "@/assets/jawaab3.jpg";
import Jawaab4 from "@/assets/Jawaab4.jpg";
export default function ProjectsCardMock() {
  const mockProjects = [
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {mockProjects.map((project) => (
        <ProjectsCard
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          area={project.area}
        />
      ))}
   </div>
  );
}
