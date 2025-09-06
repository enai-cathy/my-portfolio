"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import NavLinks from "@/app/ui/nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false); // close menu when link clicked
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Logo/Name */}
        <div className="text-gray-700 font-bold text-xl">Enai.dev</div>

        {/* Center: Imported NavLinks (desktop) */}
        <div className="hidden text-gray-600 md:flex">
          <NavLinks />
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden text-gray-600 bg-white px-6 py-6 space-y-4 animate-slide-down shadow-md">
          <ul className="space-y-3 text-lg font-medium">
            <li>
              <Link
                href="/"
                onClick={handleLinkClick}
                className={`hover:text-blue-400 ${
                  pathname === "/" ? "text-blue-500 font-semibold" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                onClick={handleLinkClick}
                className={`hover:text-blue-400 ${
                  pathname === "/projects" ? "text-blue-500 font-semibold" : ""
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className={`hover:text-blue-400 ${
                  pathname === "/about" ? "text-blue-500 font-semibold" : ""
                }`}
              >
                About
              </Link>
            </li>
          
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
