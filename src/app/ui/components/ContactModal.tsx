"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { yieldToMain } from "@/app/utils/yield";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mblybnnv", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      await yieldToMain();

      if (res.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch {
      toast.error("Network error. Please try later.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white/10 backdrop-blur-2xl p-10 rounded-lg shadow-2xl max-w-lg w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button
              onClick={() => {
                onClose();
                setFormStatus("idle");
              }}
              className="absolute top-4 right-4 hover:text-purple-400"
            >
              <X size={24} />
            </button>

            {formStatus === "success" ? (
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">
                  Thanks for reaching out!
                </h3>
                <p className="text-lg">Can’t wait to talk to you.</p>
              </div>
            ) : (
              <>
                <h3 className="text-3xl font-bold mb-6 text-center">
                  Let&apos;s Build Something Awesome
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  aria-label="Contact form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      aria-label="Name"
                      autoComplete="name"
                      className="bg-black/10 px-4 py-3 rounded-xl border border-white/20 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your email"
                      aria-label="Email"
                      autoComplete="email"
                      className="bg-black/10 px-4 py-3 rounded-xl border border-white/20 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Type your message here..."
                    aria-label="Message"
                    className="w-full bg-black/10 px-4 py-3 rounded-xl border border-white/20 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />

                  <button
                    type="submit"
                    className="w-full mt-2 py-3  rounded-full text-gray-700 border font-semibold shadow-md hover:opacity-90 transition"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
