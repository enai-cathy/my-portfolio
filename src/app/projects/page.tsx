// src/app/projects/page.tsx
import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-12">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project ) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <div className="group cursor-pointer">
              <Image
                src={project.cover}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg group-hover:scale-105 hover:shadow-xl transition-transform"
              />
              <h2 className="mt-4 text-2xl font-semibold">{project.title}</h2>
              <p className="text-gray-500">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
