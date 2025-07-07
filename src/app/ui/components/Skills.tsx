"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { yieldToMain } from "@/app/utils/yield";
import { useEffect, useState } from "react";

const techSkills = [
  {
    name: "TypeScript",
    glow: "shadow-[0_0_25px_#3b82f6]",
    border: "border-blue-400",
    image: "/images/TS-logo.png",
  },
  {
    name: "Node.js",
    glow: "shadow-[0_0_25px_#10b981]",
    border: "border-green-500",
    image: "/images/node-js-logo.png",
  },
  {
    name: "React",
    glow: "shadow-[0_0_25px_#38bdf8]",
    border: "border-sky-400",
    image: "/images/react-logo.png",
  },
  {
    name: "Figma",
    glow: "shadow-[0_0_25px_#ec4899]",
    border: "border-pink-500",
    image: "/images/figma-logo.png",
  },
  {
    name: "PostgreSQL",
    glow: "shadow-[0_0_25px_#60a5fa]",
    border: "border-blue-300",
    image: "/images/postgresql-logo.png",
  },
  {
    name: "Next.js",
    glow: "shadow-[0_0_25px_#d1d5db]",
    border: "border-gray-400",
    image: "/images/next-logo.png",
  },
  {
    name: "JavaScript",
    glow: "shadow-[0_0_25px_#facc15]",
    border: "border-yellow-300",
    image: "/images/JS-logo.png",
  },
  {
    name: "MongoDB",
    glow: "shadow-[0_0_25px_#34d399]",
    border: "border-emerald-400",
    image: "/images/mongoDB.png",
  },
];

const softSkills = [
  "Empathetic communicator & active listener",
  "Cross-functional collaboration with designers & engineers",
  "Strong problem-solving and systems thinking",
  "Self-motivated and remote-ready",
  "Agile & feedback-driven workflow",
  "Deep sense of ownership and attention to detail",
];

export default function Skills() {
   const [hydratedTechSkills, setHydratedTechSkills] = useState<typeof techSkills>([]);
  
  
    useEffect(() => {
      const hydratedTechSkills = async () => {
        const items: typeof techSkills = [];
        for (const item of techSkills) {
          items.push(item);
          setHydratedTechSkills([...items]); // progressive rendering
          await yieldToMain(); // yield every item
        }
      };
  
      hydratedTechSkills();
    }, []);
   
  return (
    <>
      <motion.h2
        className="text-4xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center max-w-6xl mx-auto">
        {hydratedTechSkills.map(({ name, glow, border, image }, i) => (
          <motion.div
            key={name}
            className={`backdrop-blur-lg bg-white/10 ${border} border-2 rounded-xl text-center w-full max-w-[120px] p-6 text-white transition-transform transform hover:scale-105 ${glow} hover:shadow-[0_0_25px_white]`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src={image}
              alt={name}
              width={15}
              height={15}
              className=" mx-auto rounded mb-4"
            />

            <p className="text-sm font-medium">{name}</p>
          </motion.div>
        ))}
      </div>
      {/* Soft Skills */}
      <div className="max-w-4xl mx-auto mt-10">
        <h3 className="text-2xl font-semibold mb-6 text-center">Soft Skills</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300 list-disc list-inside px-4">
          {softSkills.map((skill, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );}