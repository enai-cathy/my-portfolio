'use client';
import { motion } from "framer-motion";
import Image from "next/image";


export default function AboutSection() {
  
  return (
    <section id="about" className="py-24 px-6 text-gray-700">
      <div className="max-w-6xl mx-auto min-h-screen gap-12 items-start">
        {/* Left: Image & Intro */}
        <Image 
        src="/profile.jpg" 
        alt="Profile Picture" 
        width={200} 
        height={200} 
        className="rounded-full mx-auto md:mx-0" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-4"
        >
          <h2 className="text-3xl font-bold mt-6">About Me</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto md:mx-0">
          Hello I am Enai, a frontend developer and UI engineer who bridges the gap between complex
           real-world problems and elegant digital solutions. With a background as a clinical 
           practitioner and global health experience, I’ve seen firsthand how technology can
            transform lives—and I bring that same impact-driven mindset to every app I build.
<br/>
Specializing in React, Next.js, and TypeScript, I craft responsive, high-performance web
 applications that are intuitive, visually engaging, and built for real-world use. 
 From health-tech dashboards that empower medical teams to fintech tools, e-commerce 
 platforms, and interactive web experiences, I thrive on turning ambitious ideas into 
 functional, user-friendly products.
<br/>
I approach development with curiosity, creativity, and precision, 
ensuring every project is <strong>both beautiful and meaningful</strong>. Whether 
it’s improving patient care, optimizing business workflows, or building the next 
innovative app, 
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


