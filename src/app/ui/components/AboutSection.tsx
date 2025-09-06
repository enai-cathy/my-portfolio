
"use client";

import { motion } from "framer-motion";
import Image from "next/image";



export default function AboutSection() {

  return (
    <section id="about" className="px-6 text-gray-700">
      <div className="flex max-w-6xl gap-12  justify-center ">
        {/* Left: Image & Intro */}
        <Image
          src="/images/hero-image.jpg"
          alt="Enai Dev"  
          width={200}
          height={200}
          className="rounded-full mx-auto md:mx-0"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl font-bold mt-6">About Me</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto md:mx-0">
          Hello I am Enai, a frontend developer and UI engineer who turns 
          <strong> complex challenges into beautiful, high-performing apps</strong>. With real-world
           experience as a clinical practitioner and in global health, I don’t just build 
           apps. I create <strong>solutions that make an impact, delight users, and drive results.</strong>
          <br/>
          <br/>
          I create products that inspire trust, engagement, and results.
          I’m here to help visionary brands, startups, and organizations craft digital experiences 
          that make an impact.<br/> <strong>Let’s build something extraordinary together.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}


