import jawaablogo from "@/assets/jaawaab-logo.png";
import { useState, useEffect } from "react";
import {Heart,Menu,X} from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
    const [openAbout,setOpenAbout] = useState(false);
    const [openPrograms,setOpenPrograms] = useState(false);
    const [openImpact,setOpenImpact] = useState(false);
    const [openJoinUs,setOpenJoinUs] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [isMobileMenuOpen]);

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#f5f9f6] border-b border-gray-200 shadow-md">
      <div className="max-w-8xl mx-auto px-4 md:px-4 lg:px-8"> 
        <div className="flex items-center justify-between h-24">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <img src={jawaablogo} alt="Jawaab logo" className="h-16 w-16" />
            <div className="leading-tight">
              <p className="text-emerald-600 font-bold text-xl md:text-2xl">JAWAAB</p>
              <p className="text-xs md:text-sm text-gray-600">Empowerment</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            <div className="relative inline-block" onMouseEnter={()=> setOpenAbout(true)} onMouseLeave={()=> setOpenAbout(false)}>
            <a href="#" className="text-emerald-600 font-semibold text-base relative group inline-block pb-1">
              About
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" ></span>
            </a>
            {openAbout && (
                <div className="absolute bg-[#f5f9f6] top-full left-0 border border-gray-300 h-auto p-8 gap-y-4 flex flex-col items-start w-max mt-1 z-50 rounded-sm shadow-lg">
                    <a href="#" className="text-emerald-600 font-semibold text-base relative group inline-block">Our Mission
                         <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" ></span>
                    </a>
                    <a href="#" className="text-emerald-600 font-semibold text-base relative group inline-block pb-1">Our Vision
                        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" ></span>
                    </a>
                    <a href="#" className="text-emerald-600 font-semibold text-base relative group inline-block pb-1">Our Values
                        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" ></span>
                    </a>
                    <a href="#" className="text-emerald-600 font-semibold text-base relative group inline-block pb-1">Contact
                        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" ></span>
                    </a>
                </div>
            )}
            </div>
            {/* Programs Dropdown */}
            <div className="relative inline-block" onMouseEnter={() => setOpenPrograms(true)} onMouseLeave={() => setOpenPrograms(false)}>
            <a href="#" className="text-emerald-600 font-semibold text-base relative group inline-block pb-1">Our Programs
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" ></span>
            </a>
            {openPrograms && (
                <div className="absolute bg-[#f5f9f6] top-full left-0 border border-gray-300 h-auto p-8 gap-y-4 flex flex-col items-start w-max mt-1 z-50 rounded-md shadow-lg">
                    <a href="#" className="text-emerald-600 font-semibold text-base relative group inline-block">Mental Wellness
                         <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" ></span>
                    </a>
                    <a href="#" className="text-emerald-600 font-semibold text-base relative group inline-block">Gender Equity
                         <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" ></span>
                    </a>
                    <a href="#" className="relative inline-block text-emerald-600 font-semibold text-base group pb-1"> WASH
                         <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-600 transition-[width] duration-300 group-hover:w-full"></span> </a>
                    <a href="#" className="text-emerald-600 font-semibold text-base relative group inline-block">Climate Action
                         <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" ></span>
                    </a>
                </div>
            )}
            </div>
            {/* Impact Dropdown */}
            <div className="relative inline-block" onMouseEnter={() => setOpenImpact(true)} onMouseLeave={() => setOpenImpact(false)}>
            <a href="#" className="text-emerald-600 font-semibold text-base relative group inline-block pb-1">Our Impact
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" ></span>
            </a>
            {openImpact && (
                <div className="absolute bg-[#f5f9f6] top-full left-0 border border-gray-300 h-auto p-8 gap-y-4 flex flex-col items-start w-max mt-1 z-50 rounded-md shadow-lg">
                    <a href="#" className="text-emerald-600 font-semibold text-base relative group inline-block">Projects
                         <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" ></span>
                    </a>
                    <a href="#" className="text-emerald-600 font-semibold text-base relative group inline-block">Success Stories
                         <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" ></span>
                    </a>
                     <a href="#" className="text-emerald-600 font-semibold text-base relative group inline-block">Impact Reports
                         <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" ></span>
                    </a>
                 </div>
             )}
            </div>
            {/*Join us*/}
            <div className="relative inline-block" onMouseEnter={() => setOpenJoinUs(true)} onMouseLeave={() => setOpenJoinUs(false)}>
            <a href="#" className="text-emerald-600 font-semibold text-base relative group inline-block pb-1">Join Us
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" ></span>
            </a>
            {openJoinUs && (
                <div className="absolute bg-[#f5f9f6] top-full left-0 border border-gray-300 h-auto p-8 gap-y-4 flex flex-col items-start w-max mt-1 z-50 rounded-md shadow-lg">
                    <a href="#" className="text-emerald-600 font-semibold text-base relative group inline-block">Become a volunteer
                         <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" ></span>
                    </a>
                    <a href="#" className="text-emerald-600 font-semibold text-base relative group inline-block">Subscribe
                         <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" ></span>
                    </a>
                </div>
                )}
            </div>
            <Button
                size="md"
                className="relative overflow-hidden rounded-md bg-emerald-500 px-8 py-3 text-base font-bold text-white"
                >
                {/* Radial wave */}
                <span className="absolute inset-0 hover:animate-wave pointer-events-none" />

                {/* Content */}
                <span className="relative flex items-center">
                    <Heart className="h-6 w-6 mr-2 fill-white animate-heart" />
                    Donate
                </span>
            </Button>

          </nav>

          {/* Mobile Menu Button and Donate Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
                size="md"
                className="relative overflow-hidden rounded-md bg-emerald-500 px-4 py-3 text-sm font-bold text-white"
                >
                <span className="absolute inset-0 hover:animate-wave pointer-events-none" />
                <span className="relative flex items-center">
                    <Heart className="h-5 w-5 mr-1 fill-white animate-heart" />
                    Donate
                </span>
            </Button>
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-10 h-10 flex items-center justify-center"
            >
                <Menu className={`h-8 w-8 text-emerald-600 absolute transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-90 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"
                }`}/>
                <X className={`h-8 w-8 text-emerald-600 absolute transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-0"
                }`}/>
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* Spacer to prevent content from going under fixed navbar */}
    <div className="h-24"></div>

    {/* Mobile Menu Overlay - Full Screen with slide animation */}
    <div
      className={`fixed inset-0 z-40 bg-gray-900/90 md:hidden transform transition-transform duration-500 ease-in-out ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Push content below navbar */}
      <div className="h-24"></div>
      
      {/* Scrollable menu content */}
      <nav className="h-[calc(100vh-6rem)] overflow-y-auto px-6 py-6">
        <div className="flex flex-col gap-6">
          {/* About Section */}
          <div className="flex flex-col gap-3">
            <h3 className="text-emerald-600 font-bold text-lg border-b border-gray-300 pb-2">About</h3>
            <a href="#" className="text-white font-semibold text-base pl-4">Our Mission</a>
            <a href="#" className="text-white font-semibold text-base pl-4">Our Vision</a>
            <a href="#" className="text-white font-semibold text-base pl-4">Our Values</a>
            <a href="#" className="text-white font-semibold text-base pl-4">Contact</a>
          </div>

          {/* Programs Section */}
          <div className="flex flex-col gap-3">
            <h3 className="text-emerald-600 font-bold text-lg border-b border-gray-300 pb-2">Our Programs</h3>
            <a href="#" className="text-white font-semibold text-base pl-4">Mental Wellness</a>
            <a href="#" className="text-white font-semibold text-base pl-4">Gender Equity</a>
            <a href="#" className="text-white font-semibold text-base pl-4">WASH</a>
            <a href="#" className="text-white font-semibold text-base pl-4">Climate Action</a>
          </div>

          {/* Impact Section */}
          <div className="flex flex-col gap-3">
            <h3 className="text-emerald-600 font-bold text-lg border-b border-gray-300 pb-2">Our Impact</h3>
            <a href="#" className="text-white font-semibold text-base pl-4">Projects</a>
            <a href="#" className="text-white font-semibold text-base pl-4">Success Stories</a>
            <a href="#" className="text-white font-semibold text-base pl-4">Impact Reports</a>
          </div>

          {/* Join Us Section */}
          <div className="flex flex-col gap-3">
            <h3 className="text-emerald-600 font-bold text-lg border-b border-gray-300 pb-2">Join Us</h3>
            <a href="#" className="text-white font-semibold text-base pl-4">Become a volunteer</a>
            <a href="#" className="text-white font-semibold text-base pl-4">Subscribe</a>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}