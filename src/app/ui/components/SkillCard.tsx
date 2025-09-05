'use client';
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  image: string;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, image, color }) => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPos({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 50, y: 50 })}
      className="relative w-36 sm:w-40 p-6 rounded-2xl bg-white text-black cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
    >
      <Image src={image} alt={name} width={40} height={40} className="mx-auto mb-4" />
      <p className="text-center font-medium">{name}</p>

      {/* Hover Sketch Shadow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          border: `2px solid ${color}`,
          boxShadow: `
            4px 4px 0 ${color},
            8px 8px 0 ${color}66,
            12px 12px 0 ${color}33
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
};

export default SkillCard;
