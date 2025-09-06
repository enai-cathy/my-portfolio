// "use client";
// import { useState, useEffect } from "react";
// import SingleProjectCard from "@/app/ui/components/SingleProjectCard";
// import { yieldToMain } from "@/app/utils/yield"; 



// const projects = [
//   {
//     title: "404-found",
//     description: "Blog Platform for Creators.",
//     content: "A fully responsive and SEO-optimized blog platform built with modern tech. It supports markdown-based publishing, secure authentication, and a rich content management experience — all crafted with performance and scalability in mind.",
//     image: "/images/404-found.png",
//     tags: ["React", "Next.js", "Tailwind CSS","OpenAI", "PostgreSQL"],
//     featured: true,
//     github: "https://github.com/enai-cathy/sample-blog",
//     live: "https://yourblog.com",
//   },
//   {
//     title: "Mint Mogul",
//     description: "E-commerce site with filters and admin dashboard.",
//     content: "placeholder",
//     image: "/images/tech-store.png",
//     tags: ["Next.js", "Tailwind", "Commerce"],
//     github: "https://github.com/your-username/tech-store",
//     live: "https://yourstore.com",
//   },
//   // More...
// ];


// export default function ProjectsCard() {
//   const [hydratedProjects, setHydratedProjects] = useState<typeof projects>([]);
  

//   useEffect(() => {
//     const hydrate = async () => {
//       const list: typeof projects = [];
//       for (const item of projects) {
//         list.push(item);
//         setHydratedProjects([...list]);
//         await yieldToMain(); 
//       }
//     };
//     hydrate();
//   }, []);
//   return (
//     <div className="px-4 py-20">
//       <h1 className="text-4xl font-bold text-center mb-16 text-white">
//         Projects
//       </h1>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {hydratedProjects.map((project) => (
//           <SingleProjectCard key={project.title} project={project} />
//         ))}
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import { projects } from "@/data/projects";
import HoverSketch from "./HoverSketch";


export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-12">
      
      <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-8">
        {projects.map((project ) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} >
            <div className="group cursor-pointer">

           <HoverSketch
                src={project.cover}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg group-hover:scale-102 hover:shadow-xl transition-transform"
              />
              <h2 className="mt-4 text-gray-700 text-2xl font-semibold">{project.title}</h2>
              <p className="text-gray-500">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
