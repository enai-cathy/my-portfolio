"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    title: "Doctor → Designer → Developer",
    desc: "Multidisciplinary thinker building accessible UIs with empathy and precision.",
    year: "Now",
  },
  {
    title: "Frontend Development",
    desc: "React, Next.js, TypeScript, Tailwind — building performant interfaces.",
    year: "2024",
  },
  {
    title: "Fullstack Skills",
    desc: "Prisma, PostgreSQL, API integration — building end-to-end systems.",
    year: "2024",
  },
  {
    title: "UX & Product",
    desc: "Trained with SheCodes & Ladies in UX. Centering design around people.",
    year: "2025",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const gradient = useTransform(
    scrollYProgress,
    [0, 1],
    ["#3b82f6", "#ef4444"] // blue to red
  );

  return (
   
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        <img
          src="/anton-cat.png"
          alt="Portrait of Enai"
          className="w-60 rounded-xl mb-10 md:mb-0 md:mr-10"
        />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>

          <div ref={ref} className="relative pl-10">
            {/* Animated Gradient Line */}
            <motion.div
              className="absolute left-4 top-0 bottom-0 w-1 rounded-full"
              style={{
                background: gradient,
              }}
            />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="relative flex items-center items-start gap-6"
                >
                  {/* Glowing Dot */}
                  <span className="absolute top-1.5 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.5)] z-10" />

                  {/* Timeline Content */}
                  <div className="ml-6 flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>

                  {/* Right-aligned Date */}
                  <div className="text-xs text-gray-400 min-w-[60px] text-right">
                    {item.year}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
   
  );
}
