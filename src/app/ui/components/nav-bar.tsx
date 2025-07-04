"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import NavLinks from "@/app/ui/nav-links";

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
        isScrolled ? "bg-black bg-opacity-90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Logo/Name */}
        <div className="text-gray-600 font-bold text-xl">Enai.dev</div>

        {/* Center: Imported NavLinks */}
        <NavLinks />

        {/* Right: Search */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-1 rounded-3xl border-1 border-gray-300 bg-white/50 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-white ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 px-6 py-6 text-white space-y-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ul className="space-y-3 text-lg font-medium">
            <li>
              <a href="#home" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
