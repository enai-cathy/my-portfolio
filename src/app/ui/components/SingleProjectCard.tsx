// components/SingleProjectCard.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
  github?: string;
  live?: string;
}

export default function SingleProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden shadow-lg"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          {project.featured && (
            <span className="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-0.5 text-xs font-bold rounded">
              ⭐ Featured
            </span>
          )}
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="text-sm text-gray-300 mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 text-xs text-blue-300 mb-3">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-blue-900/40 px-2 py-0.5 rounded">
                #{tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="text-sm text-purple-400 hover:underline"
          >
            See more →
          </button>
        </div>
      </motion.div>

      {/* Modal */}
      {isOpen && (
        <ProjectModal project={project} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
