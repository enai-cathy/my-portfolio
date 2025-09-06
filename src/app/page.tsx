// This is the main landing page of the portfolio website, showcasing hero section, projects, about, skills, and contact info.
import AboutSection from "./ui/components/AboutSection";
import FeaturedProject from "./ui/components/FeaturedProjects";
import Navbar from "./ui/components/nav-bar";
import Skills from "./ui/components/Skills";
import SlideInSection from "./ui/SlideInSection";
import Link from "next/link";
import ProjectsCard from "./ui/components/ProjectCard";
import ContactButton from "./ui/components/ContactButton";



export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="font-sans text-gray-900 ">
        {/* Hero */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
          <SlideInSection direction="left">
            <h1 className="text-6xl sm:text-7xl font-bold mb-4">
              Ige-Edaba Enaikato C.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-6 font-light">
             FRONTEND DEVELOPER - VISUAL THINKER
            </p>
            <p className="text-base max-w-lg mx-auto text-gray-700 leading-relaxed">
              I transform ideas into apps that work, backed by the precision of medicine and the creativity of code.
              <br/>
              {/* <strong> I build meaningful, production-ready
              interfaces with React, TypeScript, and Next.js.</strong> */}
            </p>
            <div className=" flex justify-center mt-4 gap-4">
            <Link href="/projects"  className="px-5 py-2 text-sm font-semibold border border-black rounded-full hover:opacity-90 transition">
                View My Work
            </Link>
            <ContactButton/>
            </div>
          </SlideInSection>

        </section>

        {/* Work Gallery */}
        <section id="projects" className="py-16 px-6 max-w-5xl mx-auto">
         
            <FeaturedProject />
          <ProjectsCard/>
       
        </section>

        {/* About & Skills */}
        <section id="about" className="py-12 px-6 max-w-5xl mx-auto">
          <AboutSection />
        </section>
        <section id="skills" className="py-12 px-6 max-w-5xl mx-auto">
          <Skills />
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 px-6 max-w-5xl mx-auto">
          <p className="text-center font-handwritten text-2xl">
           Intentional products shape better experiences,<br/>let’s craft the next one together.
          </p>
          <div className="flex justify-center mt-6">
          <ContactButton />
          </div>
        </section>
      </main>
   
    </>
  );
}
