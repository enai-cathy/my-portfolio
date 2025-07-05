import AboutSection from "../ui/components/AboutSection";
import ContactSection from "../ui/components/ContactSection";
import FeaturedProject from "../ui/components/FeaturedProjects";
import Navbar from "../ui/components/nav-bar";
import PhotoCarousel from "../ui/components/PhotoCarousel";
import ProjectCard from "../ui/components/ProjectCard";
import Skills from "../ui/components/Skills";
import SlideInSection from "../ui/SlideInSection";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main
        className="text-white min-h-screen font-sans bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg-1.jpg')" }}
      >
        {/* Hero Section */}
        <section
          className=" bg-cover bg-center bg-no-repeat flex flex-col items-center text-center px-4 text-black"
          style={{ backgroundImage: "url('/images/paper-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-white/50 " />
          <div className="relative z-10 flex flex-col min-h-screen gap-5 md:flex-row items-center">
            <SlideInSection direction="left">
              <div className="w-full text-left">
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  Ige-Edaba Enai C.
                </h1>
                <h2 className="text-xl text-gray-700 md:text-2xl mt-4 font-medium">
                  SOFTWARE ENGINEER | FRONT-END DEVELOPER | VISUAL THINKER
                </h2>
                <p className="mt-6 text-lg text-gray-800 max-w-xl">
                  Doctor turned technologist — building user-first,
                  production-ready interfaces with React, TypeScript, and
                  Next.js. Bridging design, empathy, and code for real-world
                  impact.
                </p>
                <Link href="#projects">
                  <button className="mt-6 px-6 py-1 bg-gradient-to-r from-red-600 via-purple-500 to-blue-700 text-white rounded-full hover:opacity-90 transition-all">
                    View My Projects
                  </button>
                </Link>
              </div>
            </SlideInSection>
            <SlideInSection direction="right">
              <img
                src="/images/hero-image.jpeg"
                alt="Hero"
                className="w-full mt-10 md:max-w-md rounded-xl shadow-2xl"
              />
            </SlideInSection>
          </div>
        </section>
        {/* Featured Section */}
        <FeaturedProject />
        {/* About Section */}
        <section id="about" className="py-20 px-4 text-white">
          <AboutSection />
        </section>
        {/* Skills Section */}
        <section id="skills" className="py-24 px-4">
          <Skills/>
        </section>
        {/* Projects Section */}
        <section id="projects" className="py-24 px-4 text-white">
          <ProjectCard/>
        </section>
        
        <section id="hobby" className="min-h-screen  text-white px-4 py-20">
          <div className="max-w-6xl mx-auto space-y-20">
            {/* PArt */}
            <h2 className="text-4xl font-bold mb-6">Art</h2>
            <PhotoCarousel />
            <div>
              <h2 className="text-4xl font-bold mb-6">Movies</h2>
              <PhotoCarousel />
            </div>
          </div>
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
