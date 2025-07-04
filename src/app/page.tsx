// // pages/index.tsx
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-white text-gray-900 font-sans">
//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center h-screen text-center px-6">
//         <h1 className="text-4xl font-bold mb-4">Ige-Edaba Enai</h1>
//         <h2 className="text-xl mb-4">Front-End Developer</h2>
//         <p className="max-w-md text-gray-600 mb-6">
//           A doctor and visual artist turned creative developer, passionate about
//           merging design, logic, and user-focused experiences.
//         </p>
//         <Link
//           href="#projects"
//           className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
//         >
//           View Projects
//         </Link>
//       </section>

//       {/* About Section */}
//       <section className="px-6 py-16 bg-gray-50 text-center">
//         <h3 className="text-2xl font-semibold mb-4">About Me</h3>
//         <p className="max-w-xl mx-auto text-gray-700">
//           I blend medical precision, artistic intuition, and web technologies to
//           build pixel-perfect and high-performance user interfaces. I'm
//           currently focused on React, TypeScript, and full-stack projects using
//           Prisma and PostgreSQL.
//         </p>
//       </section>

//       {/* Tech Stack */}
//       <section className="px-6 py-16 text-center">
//         <h3 className="text-2xl font-semibold mb-8">Tech Stack</h3>
//         <div className="flex flex-wrap justify-center gap-4 text-sm">
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "TypeScript",
//             "React",
//             "Next.js",
//             "TailwindCSS",
//             "PostgreSQL",
//             "Prisma",
//             "Figma",
//           ].map((tech) => (
//             <span key={tech} className="bg-gray-200 px-4 py-2 rounded-full">
//               {tech}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Projects */}
//       <section id="projects" className="px-6 py-16 bg-gray-100">
//         <h3 className="text-2xl font-semibold text-center mb-10">Projects</h3>
//         <div className="grid gap-8 md:grid-cols-2">
//           {[1, 2, 3].map((i) => (
//             <div key={i} className="bg-white p-6 rounded-xl shadow-md">
//               <div className="w-full h-40 bg-gray-300 rounded mb-4" />
//               <h4 className="text-lg font-semibold mb-2">Project Title {i}</h4>
//               <p className="text-sm text-gray-600 mb-4">
//                 A brief description of the project highlighting tools used,
//                 goals, and outcomes. Designed for recruiters to understand
//                 technical and design thinking.
//               </p>
//               <Link href="#" className="text-blue-600 hover:underline text-sm">
//                 View Project →
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="px-6 py-20 text-center">
//         <h3 className="text-2xl font-semibold mb-4">Let’s Work Together</h3>
//         <p className="text-gray-600 mb-6">
//           I’m open to front-end or full-stack roles, freelance opportunities, or
//           creative collaborations.
//         </p>
//         <div className="flex justify-center gap-4">
//           <Link href="#" className="text-blue-600 hover:underline">
//             GitHub
//           </Link>
//           <Link href="#" className="text-blue-600 hover:underline">
//             LinkedIn
//           </Link>
//           <Link
//             href="mailto:enai@example.com"
//             className="text-blue-600 hover:underline"
//           >
//             Email Me
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-6 text-sm text-gray-400">
//         © 2025 Ige-Edaba Enai. All rights reserved.
//       </footer>
//     </main>
//   );
// }
import ProjectCard from "@/app/ui/components/ProjectCard";
import PhotoCarousel from "@/app/ui/components/PhotoCarousel";

export default function HomePage() {
  const projects = [
    {
      title: "Online Cinema",
      desc: "Feature-rich streaming UI with authentication and media UI.",
      tag: "Design • Web",
      image: "/projects/project1.png",
    },
    {
      title: "E-Shop",
      desc: "Secure device store with Stripe, filtering, and admin dashboard.",
      tag: "E-commerce • Tech",
      image: "/projects/project2.png",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-20">
        <h2 className="text-4xl font-bold mb-10">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-14">
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">Photography</h2>
          <PhotoCarousel />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">My Cat</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <img
                key={n}
                src={`/cat/cat${n}.jpg`}
                alt={`Cat ${n}`}
                className="rounded-xl object-cover h-60 w-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
