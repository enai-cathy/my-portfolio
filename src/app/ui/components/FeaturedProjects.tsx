"use client";


import { motion } from "framer-motion";
import Link from "next/link";
import HoverSketch from "@/app/ui/components/HoverSketch";


export default function FeaturedProject() {
  return (
    <section
      id="featured"
      className="bg-off-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-12 items-center">
        
        <Link href={`/projects/backline`} className="space-y-8"> 
        {/* Image */}
        <HoverSketch
          src="/images/backline/thumb.png"
          alt="backline project screenshot"
          width={600}
          height={400}
          className=" shadow-lg mx-auto "
        />
          </Link>
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
         Backline - Sports Betting Insights Platform
          </h2>
          <p className="text-gray-800">
         <strong> Backline is a data-driven sports betting insights platform built to give football
           bettors a competitive edge.</strong>
It transforms raw match stats into clean, interactive visualizations, turning overwhelming
 spreadsheets into actionable insights. With features like player performance trends,
  win-probability graphs, and bet confidence scores, Backline makes complex data 
  approachable, transparent, and easy to use.<br/><br/>
The platform is <strong> fully responsive and mobile-first</strong>, blending modern <strong> UI/UX design,</strong> 
<strong> product strategy, and frontend engineering</strong>. Unlike odds-only sites that overwhelm users, 
Backline creates a <strong> trustworthy experience </strong>where bettors can make smarter, data-backed
 decisions, all without the clutter.
          </p>

          <ul className="text-sm text-gray-500 grid grid-cols-2 gap-2 mt-4">
            <li> Next.js & TypeScript</li>
            <li> Tailwind CSS</li>
            <li> PostgreSQL</li>
            <li> Framer Motion</li>
            <li> Vercel Hosted</li>
            <li> MongoDB</li>

          </ul>

          <div className="flex gap-4 mt-6">
            <a
              href="https://backline-dashboard.vercel.app/" target="_blank" 
              className="px-5 py-2 text-sm font-semibold bg-black text-white rounded-full hover:opacity-90 transition"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/enai-cathy/backline-dashboard/" target="_blank"
              className="px-5 py-2 text-sm font-semibold border border-gray-500 rounded-full hover:bg-black hover:text-white transition"
            >
              GitHub Repo
            </a>
          </div>
        </motion.div>
        <div className="mt-16 text-center">
          <Link
            href="/projects" 
      className="px-5 py-2 text-sm font-semibold border border-gray-500 rounded-full hover:bg-black hover:text-white transition"
          >
            See More Projects
          </Link>
        </div>
        
              
      </div>
    </section>
  );
}
