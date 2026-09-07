import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Heart } from "lucide-react";
import logo from "../assets/jaawaab-logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { label: "About Us", id: "about" },
    { label: "Programs", id: "programs" },
    { label: "Impact", id: "impact" },
    { label: "Projects", id: "projects" },
    { label: "Get Involved", id: "newsletter" },
  ];

  // 1. Navbar elevation and scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Active section observer on Homepage
  useEffect(() => {
    if (!isHomePage) return;

    const sectionIds = ["hero", "about", "programs", "impact", "projects", "newsletter"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  // 3. Navigation handler that handles both same-page scroll and cross-page navigation
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isHomePage) {
      const element = document.getElementById(targetId);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      // Return to Homepage and pass target section via state
      navigate("/", { state: { scrollTo: targetId } });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-header shadow-md border-b border-emerald-900/10 py-3"
          : "bg-white py-5"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-[var(--primary)] transition-all duration-150 ease-out z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, "hero")}
          className="flex items-center gap-3 group"
        >
          <img
            src={logo}
            alt="Jaawaab Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-heading-poppins font-bold text-xl tracking-tight text-foreground">
              JAWAAB
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] -mt-1 font-semibold">
              Empowerment INITIATIVES
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = isHomePage && activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-sm font-medium transition-all duration-200 relative py-1 cursor-pointer ${
                  isActive
                    ? "text-[var(--primary)] font-semibold"
                    : "text-foreground/80 hover:text-[var(--primary)]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--primary)] rounded-full animate-in fade-in zoom-in-50 duration-200" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/donate">
            <button
              className={`group relative inline-flex items-center gap-2 rounded-full font-bold text-slate-950 cursor-pointer overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md shadow-amber-500/25 border border-amber-300/40 ${
                isScrolled ? "px-5 py-2 text-xs" : "px-7 py-2.5 text-sm"
              }`}
            >
              <span className="absolute inset-0 bg-amber-500 transition-opacity duration-300 group-hover:opacity-0" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-amber-400 via-amber-200/90 to-amber-100 transition-opacity duration-500 ease-out" />
              <Heart className="relative z-10 w-4 h-4 fill-slate-950 text-slate-950 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative z-10 tracking-wide">Donate Now</span>
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-header border-b border-border px-6 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-base font-medium py-2 border-b border-border/50 cursor-pointer ${
                  isHomePage && activeSection === item.id
                    ? "text-[var(--primary)] font-bold"
                    : "text-foreground/80"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <Link to="/donate" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="accent" className="w-full flex justify-center gap-2 cursor-pointer">
                <Heart className="w-4 h-4 fill-current" />
                <span>Donate Now</span>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}