"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

export default function ContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="px-5 py-2 text-sm rounded-full font-semibold border border-black shadow-lg bg-black text-white hover:opacity-90 transition"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        Get in Touch
      </motion.button>

      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
