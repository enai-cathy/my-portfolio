"use client";

import SlideInSection from "../SlideInSection";
import SingleProjectCard from "@/app/ui/components/SingleProjectCard";


const projects = [
  {
    title: "Online Blog",
    description: "Markdown support, auth, and sleek UI.",
    image: "/images/404-found.png",
    tags: ["React", "Next.js", "Markdown"],
    featured: true,
    github: "https://github.com/your-username/online-blog",
    live: "https://yourblog.com",
  },
  {
    title: "Tech Store",
    description: "E-commerce site with filters and admin dashboard.",
    image: "/images/tech-store.png",
    tags: ["Next.js", "Tailwind", "Commerce"],
    github: "https://github.com/your-username/tech-store",
    live: "https://yourstore.com",
  },
  // More...
];

// export default function ProjectCard() {
//   return (
//     <>
//       <h2 className="text-4xl font-bold text-center text-white mb-16">My Projects</h2>
//       <div className="max-w-6xl mx-auto space-y-24">

//         <div className="grid grid-cols-5 gap-6 items-center">
//           {/* Image (3 cols) */}

//           <div className="col-span-5 md:col-span-3">
//             <SlideInSection direction="right">
//               <img
//                 src="/images/404-found.png"
//                 alt="Online Blog"
//                 className="rounded-xl w-full h-auto shadow-[10px_0_30px_#3b82f6] transition duration-300 hover:shadow-[0_0_40px_#3b82f6]"
//               />
//             </SlideInSection>
//           </div>

//           {/* Text (2 cols) */}
//           <div className="col-span-5 md:col-span-2 bg-black/20 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
//             <SlideInSection direction="left">
//               <span className="text-sm uppercase text-purple-300 mb-1 block">
//                 Design • Web
//               </span>
//               <h3 className="text-xl font-semibold mb-2">Online Blog</h3>
//               <p className="text-sm text-gray-300 mb-4">
//                 A feature-rich platform for blogging with markdown support, user
//                 auth, and responsive design.
//               </p>
//               <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-medium shadow-md hover:opacity-90">
//                 See more
//               </button>
//             </SlideInSection>
//           </div>
//         </div>

//         {/* === Project 2 (reversed layout) === */}
//         <SlideInSection direction="left">
//           <div className="grid grid-cols-5 gap-6 items-center">
//             {/* Text first */}
//             <div className="col-span-5 md:col-span-2 bg-black/20 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
//               <span className="text-sm uppercase text-pink-300 mb-1 block">
//                 E-Commerce • UI
//               </span>
//               <h3 className="text-xl font-semibold mb-2">Tech Store</h3>
//               <p className="text-sm text-gray-300 mb-4">
//                 A clean and modern online store with real-time filtering, secure
//                 checkout, and admin dashboard.
//               </p>
//               <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full text-sm font-medium shadow-md hover:opacity-90">
//                 See more
//               </button>
//             </div>

//             {/* Image second */}
//             <div className="col-span-5 md:col-span-3">
//               <img
//                 src="/images/404-found.png"
//                 alt="Tech Store"
//                 className="rounded-xl w-full h-auto shadow-[10px_0_30px_#f472b6] transition duration-300 hover:shadow-[0_0_40px_#f472b6]"
//               />
//             </div>
//           </div>
//         </SlideInSection>

//         {/* Add more project rows if needed */}
//       </div>
//     </>
//   );
// }
export default function ProjectsCard() {
  return (
    <div className="px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-16 text-white">
        Projects
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <SingleProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}