"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, tag, image }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black/30 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex flex-col"
    >
      <img src={image} alt={title} className="rounded-xl mb-4" />
      <div className="space-y-2">
        <span className="text-sm uppercase text-purple-300">{tag}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-300">{desc}</p>
        <button className="mt-3 w-fit px-4 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-medium shadow-md hover:opacity-90">
          See more
        </button>
      </div>
    </motion.div>
  );
}
