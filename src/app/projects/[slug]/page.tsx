// import { notFound } from "next/navigation";
// import { projects } from "@/data/projects";
// import ReactMarkdown from "react-markdown";

// export default function ProjectSlug({ params }: { params: { slug: string } }) {
//   const project = projects.find((p) => p.slug === params.slug);

//   if (!project) return notFound();

//   return (
//     <main className="max-w-3xl mx-auto p-6 space-y-8">
//       <img
//         src={project.cover}
//         alt={project.title}
//         className="rounded-2xl shadow-lg w-full"
//       />

//       <header className="space-y-2">
//         <h1 className="text-4xl font-bold">{project.title}</h1>
//         <p className="text-lg text-gray-600">{project.subtitle}</p>
//         <p className="text-sm text-gray-400">Role: {project.role}</p>
//       </header>

//       <section className="prose prose-lg">
//         <ReactMarkdown>{project.caseStudy}</ReactMarkdown>
//       </section>

//       {project.images?.length > 0 && (
//         <div className="grid md:grid-cols-2 gap-6">
//           {project.images.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               alt={`${project.title} image ${i + 1}`}
//               className="h-full w-full rounded-xl shadow-md hover:scale-250 transition-transform"
//             />
//           ))}
//         </div>
//       )}
//     </main>
//   );
// }

'use client';
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ unwrap Promise
  const project = projects.find((p) => p.slug === slug);

    if (!project) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          {project.title}
        </h1>
        <Image
          src={project.cover}
          alt={project.title}
          width={800}
          height={420}
          className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
        />
      </motion.div>

      {/* Sections */}
      <div className="space-y-16">
        {project.sections.map((section, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h2 className="text-3xl font-semibold mb-4">{section.heading}</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {section.content}
            </p>

            {section.images && (
              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                {section.images.map((src, idx) => (
                  <Image
                    key={idx}
                    src={src}
                    width={600}
                    height={400}
                    alt={`${section.heading} ${idx}`}
                    className="rounded-2xl shadow-md hover:shadow-xl hover:scale-200 transition"
                  />
                ))}
              </div>
            )}
          </motion.section>
        ))}
      </div>
    </main>
  );
}
