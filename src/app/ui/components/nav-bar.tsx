"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import NavLinks from "@/app/ui/nav-links";
import Link from "next/link";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white bg-opacity-90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Logo/Name */}
        <div className="text-gray-600 font-bold text-xl">Enai.dev</div>

        {/* Center: Imported NavLinks */}
        <NavLinks />

   

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden  ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-6 space-y-4">
          
          <ul className="space-y-3 text-lg font-medium">
            <li>
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-400">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              {/* <a href="#contact" className="hover:text-blue-400">
                Contact
              </a> */}
              
            </li>
          </ul>
        </div>
      )}
   
    </nav>
  );
};

export default Navbar;
