"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProject() {
  return (
    <section
      id="featured"
      className="bg-gradient-to-b from-black to-gray-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/404-found.png"
            alt="404-Found Blog App"
            width={600}
            height={400}
            className="rounded-2xl shadow-[0_0_30px_#3b82f6] hover:scale-105 transition duration-300"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <span className="text-sm uppercase tracking-widest text-purple-400">
            Featured Project
          </span>
          <h2 className="text-3xl font-bold">
            404-Found: Blog Platform for Creators
          </h2>
          <p className="text-gray-300">
            A fully responsive and SEO-optimized blog platform built with modern
            tech. It supports markdown-based publishing, secure authentication,
            and a rich content management experience — all crafted with
            performance and scalability in mind.
          </p>

          <ul className="text-sm text-gray-400 grid grid-cols-2 gap-2 mt-4">
            <li>🔧 Next.js & TypeScript</li>
            <li>🎨 Tailwind CSS</li>
            <li>📦 Prisma + PostgreSQL</li>
            <li>🎥 Framer Motion</li>
            <li>🚀 Vercel Hosted</li>
            <li>🔐 Auth & RBAC</li>
          </ul>

          <div className="flex gap-4 mt-6">
            <Link
              href="#"
              className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:opacity-90 transition"
            >
              Live Demo
            </Link>
            <Link
              href="#"
              className="px-5 py-2 text-sm font-semibold border border-gray-500 rounded-full hover:bg-white hover:text-black transition"
            >
              GitHub Repo
            </Link>
          </div>
        </motion.div>
        <div className="mt-16 text-center">
          <Link
            href="#projects" 
            className="inline-block px-6 py-2 text-sm font-semibold rounded-full border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
          >
            See More Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
