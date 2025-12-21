import Navbar from "@/components/Navbar";
import AboutPage from "@/pages/Aboutpage";
import ProgramsOrbit from "@/pages/ProgramRadial";
import Impactpage from "@/pages/ImpactPage";
import ProjectsCardMock from "@/pages/ProjectsPage";
import bgImage from "../assets/jawaab-hero.jpg";
import {Heart,Users,ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button"


export default function Homepage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-x-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 w-full "
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Soft green overlay */}
        <div className="absolute inset-0 bg-emerald-700/10" />

        {/* Content */}
        <div className="relative z-10 px-6 py-28">
          <div className="mx-auto w-full max-w-5xl">
            <p className="inline-block mb-6 rounded-full bg-emerald-500/90 px-5 py-2 text-sm font-medium text-white">
              Building Stronger Communities Together
            </p>

            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Empowering Communities,
              <span className="block text-emerald-300">
                Transforming Lives
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base md:text-lg text-white/90 font-sans">
              JAWAAB Empowerment Initiative is dedicated to uplifting
              communities through education, mental wellness, poverty
              reduction, and sustainable development programs.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
             <Button
            size="md"
            className="group rounded-full bg-white px-12 py-4 text-sm font-bold
                        text-emerald-700 border-2 border-transparent
                        transition-all duration-300
                        hover:border-red-700 hover:bg-emerald-200"
            >
            <Heart
                className="mr-1 h-6 w-6 text-red-700
                        fill-transparent
                        transition-all duration-700
                        group-hover:fill-red-700"
            />
            Donate Now
            </Button>
              <Button className="rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white bg-white/10 transition"
              size="md">
                <Users className="mr-1 h-6 w-6 text-white " />
                 Become a Volunteer
              </Button>
              <Button className="group border-none bg-clear hover:bg-white/10  px-8 py-3 mt-1 text-lg transition-all rounded-full" size="md">
                Learn More
                <ArrowRight className="inline-block ml-1 h-5 transform transition-transform duration-500 group-hover:translate-x-1  w-5 text-white" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </section>

        {/* About Section */}
        <AboutPage />
        {/* Programs Section */}
        <ProgramsOrbit />
        {/* Impact Section */}
        <Impactpage />
        {/* Projects Section */}
        <ProjectsCardMock />
    </div>
  );
}
