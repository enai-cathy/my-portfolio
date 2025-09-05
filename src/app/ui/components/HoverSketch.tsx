"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HoverSketchProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function HoverSketch({
  src,
  alt,
  width,
  height,
  className,
}: HoverSketchProps) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPos({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className="relative inline-block group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`z-index-10 rounded-2xl transition-transform duration-300 ${className}`}
      />

      {/* Hover Sketch Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          border: "2px solid black",
          boxShadow: `
            4px 4px 0 rgba(59, 60, 61, 0.7),
          
            8px 8px 0 rgba(172, 175, 173, 0.5),
            10px 10px 0 rgba(231, 231, 229, 0.5)
          `,
        }}
        animate={{
          x: `${(pos.x - 50) / 5}px`,
          y: `${(pos.y - 50) / 5}px`,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 12 }}
      />
    </motion.div>
  );
}
