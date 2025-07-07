
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { yieldToMain } from "@/app/utils/yield";

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
    ["#3b82f6", "#ef4444"]
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hydratedTimeline, setHydratedTimeline] = useState<typeof timeline>([]);


  useEffect(() => {
    const hydrateTimeline = async () => {
      const items: typeof timeline = [];
      for (const item of timeline) {
        items.push(item);
        setHydratedTimeline([...items]); // progressive rendering
        await yieldToMain(); // yield every item
      }
    };

    hydrateTimeline();
  }, []);

  return (
    <section id="about" className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Image & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-4"
        >
          <Image
            src="/anton-cat.png"
            alt="Portrait of Enai"
            width={240}
            height={240}
            className="mx-auto md:mx-0 rounded-2xl"
          />
          <h2 className="text-3xl font-bold mt-6">About Me</h2>
          <p className="text-gray-300 text-sm max-w-md mx-auto md:mx-0">
            Doctor turned technologist — building stunning, scalable web
            interfaces with creativity and precision. Bridging design, empathy,
            and code for real-world impact.
          </p>
        </motion.div>

        {/* Right: Timeline */}
        <div className="relative" ref={ref}>
          {/* Animated Vertical Gradient Line */}
          <motion.div
            className="absolute left-4 top-0 bottom-0 w-1 rounded-full"
            style={{ background: gradient }}
          />

          <div className="pl-10 space-y-12">
            {hydratedTimeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-4"
              >
                <div className="hidden md:flex items-start gap-4">
                  {/* Dot on the line */}
                  <div className="absolute left-[-1.5px] top-1.5 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_3px_#fff]" />

                  {/* Content */}
                  <div className="ml-6">
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>

                  {/* Year */}
                  <div className="ml-auto text-xs text-gray-500 min-w-[50px] text-right">
                    {item.year}
                  </div>
                </div>
                {/* Mobile Accordion */}
                <div
                  className="md:hidden bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  role="button"
                  aria-expanded={openIndex === i}
                  aria-controls={`desc-${i}`}
                >
                  <div className="flex justify-between items-center cursor-pointer gap-4">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <span className="text-xs text-gray-400">{item.year}</span>
                  </div>
                  {openIndex === i && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs text-gray-400 mt-2"
                    >
                      {item.desc}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


