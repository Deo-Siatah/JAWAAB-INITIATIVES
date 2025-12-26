import {Phone,Mail} from "lucide-react";
import {FaGithub,FaLinkedin,FaWhatsapp,FaTiktok,FaFacebook} from "react-icons/fa";
import jawaablogo from "@/assets/jaawaab-logo.png";

export default function Footer() {
    return (
        <footer className="grid grid-col-1 space-y-4 md:grid-cols-3 bg-emerald-600 mt-20 py-20 px-6 md:px-6">
            {/* contact ussection*/}
            <div className="">
                <h2 className="text-3xl md:text-5xl text-white font-poppins font-semibold">Contact Us</h2>
                <div className="mt-2 p-2">
                <p className="text-white/90 text-lg">The address,Nairobi road, Narok,</p>
                <p className="text-white/90 text-lg">Nairobi 00607, Kenya.</p>
                <p className="mt-1 flex items-center gap-2 text-white/90 text-lg">
                    <Phone className="h-7 w-7 text-white/70"/>
                    +254768659047
                </p>
                <p className="mt-2 flex items-center gap-2 text-white/90 text-lg leading-light">
                    <Mail className="h-8 w-8 text-white/70"/>
                    <a>Jawaabinitiaves@outlook.com</a>
                </p> 
                </div>
                <div className="mt-10 flex items-center gap-2">
                    <div>
                    <h2 className="text-3xl md:text-5xl font-sansserif font-bold text-white/90 leading-tight">Jawaab</h2>
                    <h2 className="text-3xl md:text-5xl ml-2 font-sansserif font-bold text-white/90 leading-tight">Initiatives</h2>
                    </div>
                    <div className="">
                        <img src={jawaablogo} alt="Jawaab Logo" className="h-28 w-28 mt-2 "/>
                    </div>

                </div>
            </div>
             <div className="">
                <h2 className="text-3xl md:text-5xl text-white font-poppins font-semibold">Links</h2>
                <nav className="grid grid-cols-2 gap-x-6 gap-y-0  mt-2 p-2 ">
                    <a className="text-white/90 text-lg leading-light hover:underline cursor-pointer">About</a>
                    <a className="text-white/90 text-lg leading-light hover:underline" >Our work</a>
                    <a className="text-white/90 text-lg leading-light hover:underline">Impact</a>
                    <a className="text-white/90 text-lg leading-light hover:underline">Join us</a>
                    <a className="text-white/90 text-lg leading-light hover:underline">Donate</a>
                    <a className="text-white/90 text-lg leading-light hover:underline">Reports</a>
                    <a className="text-white/90 text-lg leading-light hover:underline">Volunteering</a>
                    <a className="text-white/90 text-lg leading-light hover:underline">News</a>
                </nav>
            </div>
             <div className="">
                <h2 className="text-3xl md:text-5xl text-white font-poppins font-semibold">Stay Connected</h2>
                <div className="flex items-center gap-6 mt-4 text-white/90">
                <a href="https://github.com/Deo-Siatah/" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-10 w-10 hover:text-blue-400 transition cursor-pointer "/>
                </a>
                <a href="https://www.linkedin.com/in/deo-siatah-701520248/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="h-10 w-10 hover:text-blue-400 transition cursor-pointer"/>
                </a>
                <a>
                    <FaWhatsapp className="h-10 w-10 hover:text-green-300 transition cursor-pointer"/>
                </a>
                <a>
                    <FaTiktok className="h-10 w-10 hover:text-black transition duration-700 cursor-pointer"/>
                </a>
                    <FaFacebook className="h-10 w-10 hover:text-white cursor-pointer"/>
                </div>
            <div className="mt-3 ">
                <p className="text-white/90 text-lg">Jawaab Initiatives is a community-driven nonprofit empowering vulnerable communities through mental wellness, gender equality, WASH, and climate action.</p>
            </div>
                <p className="text-gray-800 text-lg mt-6">© 2025 Jawaab Initiatives. All rights reserved.</p>
            </div>
          

        </footer>
    )
}