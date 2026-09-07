import React from "react";
import { Phone, Mail, MapPin, ArrowUpRight, Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaTiktok, FaFacebook } from "react-icons/fa";
import jawaablogo from "@/assets/jaawaab-logo.png";

export default function Footer() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-emerald-600 text-white font-sans-inter overflow-hidden border-t border-emerald-500/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/20">
          
          {/* COLUMN 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 bg-white rounded-2xl shadow-md shrink-0">
                  <img src={jawaablogo} alt="Jawaab Logo" className="h-12 w-auto object-contain" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-heading-poppins tracking-tight text-white">
                    JAAWAAB
                  </h2>
                  <p className="text-xs font-semibold text-emerald-100 uppercase tracking-widest">
                    Empowerment Initiative
                  </p>
                </div>
              </div>

              <p className="text-white/90 text-sm leading-relaxed mb-6 max-w-sm">
                A community-driven nonprofit empowering vulnerable communities through mental wellness, gender equity, WASH, and sustainable climate action.
              </p>
            </div>

            {/* Social Icons */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-100 mb-3">
                Stay Connected
              </p>
              <div className="flex items-center gap-3">
                {[
                  { icon: FaFacebook, href: "https://www.facebook.com/share/1aqkfEyU7n/", label: "Facebook" },
                  { icon: FaWhatsapp, href: "https://wa.me/254758943430", label: "WhatsApp" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/deo-siatah-701520248/", label: "LinkedIn" },
                  { icon: FaGithub, href: "https://github.com/Deo-Siatah/", label: "GitHub" },
                  { icon: FaTiktok, href: "#", label: "TikTok" },
                ].map((social, idx) => {
                  const IconComp = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-emerald-700 transition-all duration-300 hover:scale-110"
                    >
                      <IconComp className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* COLUMN 2: Quick Navigation Links (3 Cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold font-heading-poppins text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-200" />
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
              {[
                { label: "About Us", id: "about" },
                { label: "Our Work", id: "programs" },
                { label: "Impact", id: "impact" },
                { label: "Projects", id: "projects" },
                { label: "Donate", id: "newsletter" },
                { label: "Get Involved", id: "newsletter" },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-white/90 hover:text-white hover:underline transition-all duration-200 flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* COLUMN 3: Direct Contact Information (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold font-heading-poppins text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-200" />
                Contact Us
              </h3>

              <div className="space-y-4 text-sm text-white/90">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-white/10 border border-white/20 text-white shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Nairobi Road, Narok</p>
                    <p className="text-emerald-100 text-xs">P.O. Box 00607, Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-white/10 border border-white/20 text-white shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a
                    href="tel:+254768659047"
                    className="hover:text-white transition-colors font-medium"
                  >
                    +254 768 659 047
                  </a>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-white/10 border border-white/20 text-white shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a
                    href="mailto:Jawaabinitiaves@outlook.com"
                    className="hover:text-white transition-colors font-medium underline underline-offset-4 decoration-white/40"
                  >
                    Jawaabinitiaves@outlook.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="mt-8 p-4 rounded-2xl bg-emerald-700/60 border border-emerald-500/50 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white">Want to Partner With Us?</p>
                <p className="text-xs text-emerald-100">Join our growing movement today.</p>
              </div>
              <a
                href="#newsletter"
                onClick={(e) => scrollToSection(e, "newsletter")}
                className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 transition-colors"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100">
          <p>© {currentYear} Jawaab Initiatives. All rights reserved.</p>

        </div>

      </div>
    </footer>
  );
}