
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  content: string;
  image: string;
  tags: string[];
  featured?: boolean;
  github?: string;
  live?: string;
}

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-gradient-to-tr from-black to-zinc-900 border border-white/10 text-white max-w-2xl w-full mx-4 p-6 rounded-2xl relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-red-400"
          >
            <X size={20} />
          </button>

          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={400}
            className="w-full rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <p className="text-gray-300 mt-2">{project.description}</p>
          <p className="text-gray-300 mt-2">{project.content}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-white/10 px-2 py-1 rounded text-xs text-blue-300"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="px-4 py-2 text-sm bg-white text-black rounded-full hover:bg-gray-300"
              >
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full"
              >
                Live Site
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
