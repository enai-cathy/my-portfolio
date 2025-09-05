// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import toast from "react-hot-toast";
// import Link from "next/link";
// import { Github, Linkedin, Mail } from "lucide-react";
// import { yieldToMain } from "@/app/utils/yield";

// export default function ContactSection() {
//   const [formStatus, setFormStatus] = useState("idle");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const data = new FormData(form);

//     try {
//       const res = await fetch("https://formspree.io/f/mblybnnv", {
//         method: "POST",
//         body: data,
//         headers: { Accept: "application/json" },
//       });

//       await yieldToMain();

//       if (res.ok) {
//         toast.success("Message sent successfully! 🎉");
//         form.reset();
//         setFormStatus("success");
//       } else {
//         toast.error("Something went wrong. Try again.");
//       }
//     } catch {
//       toast.error("Network error. Please try later.");
//     }
//   };

//   return (
//     <motion.section
//       className="text-gray-700 px-4 py-24 "
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       id="contact"
//     >
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
//         {/* Left – Image & CTA */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center md:text-left"
//         >
//           {/* <Image
//             src="/images/hero-image.jpeg"
//             alt="Portrait of Enai"
//             width={400}
//             height={400}
//             loading="lazy"
//             className="mx-auto md:mx-0 rounded-xl shadow-lg"
//           /> */}
//           <p className=" font-handwritten text-2xl mt-6">
//             I’m waiting for your letter →
//           </p>

//           {/* Social Links */}
//           <div className="flex justify-center md:justify-start gap-6 text-lg mt-6">
//             <Link
//               href="mailto:enaicathy@gmail.com"
//               title="Send me an email"
//               className="hover:text-purple-400 transition"
//             >
//               <Mail size={20} />
//             </Link>
//             <Link
//               href="https://github.com/enai-cathy"
//               target="_blank"
//               rel="noopener noreferrer"
//               title="Visit GitHub"
//               className="hover:text-purple-400 transition"
//             >
//               <Github size={20} />
//             </Link>
//             <Link
//               href="https://www.linkedin.com/in/enaikato-ige-edaba-5b9538216/"
//               target="_blank"
//               rel="noopener noreferrer"
//               title="Visit LinkedIn"
//               className="hover:text-purple-400 transition"
//             >
//               <Linkedin size={20} />
//             </Link>
//           </div>
//         </motion.div>

//         {/* Right – Form */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="relative bg-white/10 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl text-white"
//         >
//           <h3 className="text-3xl font-bold mb-6">
//             Let&apos;s Build Something Awesome
//           </h3>

//           <form
//             onSubmit={handleSubmit}
//             className="space-y-5"
//             aria-label="Contact form"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1, duration: 0.5 }}
//               viewport={{ once: true }}
//               className="grid grid-cols-1 sm:grid-cols-2 gap-4"
//             >
//               <input
//                 type="text"
//                 name="name"
//                 required
//                 placeholder="Your name"
//                 aria-label="Name"
//                 autoComplete="name"
//                 className="bg-black/30 px-4 py-3 rounded-xl border border-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 placeholder="Your email"
//                 aria-label="Email"
//                 autoComplete="email"
//                 className="bg-black/30 px-4 py-3 rounded-xl border border-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//             </motion.div>

//             <motion.textarea
//               name="message"
//               required
//               rows={5}
//               placeholder="Type your message here..."
//               aria-label="Message"
//               className="w-full bg-black/30 px-4 py-3 rounded-xl border border-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               viewport={{ once: true }}
//             />

//             <motion.button
//               type="submit"
//               className="w-full mt-2 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-semibold shadow-md hover:opacity-90 transition"
//               whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
//               whileTap={{ scale: 0.97 }}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               Send Message
//             </motion.button>

//             {formStatus === "success" && (
//               <p className="text-green-400 text-sm mt-4">
//                 Thanks! I will reply shortly 👋
//               </p>
//             )}
//           </form>

    
         
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { X } from "lucide-react";
import { yieldToMain } from "@/app/utils/yield";

export default function ContactSection() {
  const [modalOpen, setModalOpen] = useState(false);
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
    <section className="px-4 py-4" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left – Image & CTA */}
        <div className="text-center md:text-left">
          {/* <Image
            src="/images/hero-image.jpeg"
            alt="Portrait of Enai"
            width={400}
            height={400}
            loading="lazy"
            className="mx-auto md:mx-0 rounded-xl shadow-lg"
          /> */}
          

          {/* Social Links
          <div className="flex justify-center md:justify-start gap-6 text-lg mt-6">
            <a
              href="mailto:enaicathy@gmail.com"
              title="Send me an email"
              className="hover:text-purple-400 transition"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/enai-cathy"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit GitHub"
              className="hover:text-purple-400 transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/enaikato-ige-edaba-5b9538216/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit LinkedIn"
              className="hover:text-purple-400 transition"
            >
              <Linkedin size={20} />
            </a>
          </div> */}
          </div>

        {/* Right – Get in Touch Button */}
        <div className="flex justify-center md:justify-end">
          <motion.button
            onClick={() => setModalOpen(true)}
            className="px-8 py-2 rounded-full font-semibold border border-black shadow-lg hover:opacity-90 transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
          </motion.button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
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
                  setModalOpen(false);
                  setFormStatus("idle");
                }}
                className="absolute top-4 right-4 hover:text-purple-400"
              >
                <X size={24} />
              </button>

              {formStatus === "success" ? (
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-4">Thanks for reaching out!</h3>
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
                        className="bg-black/10 px-4 py-3 rounded-xl border border-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your email"
                        aria-label="Email"
                        autoComplete="email"
                        className="bg-black/10 px-4 py-3 rounded-xl border border-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Type your message here..."
                      aria-label="Message"
                      className="w-full bg-black/30 px-4 py-3 rounded-xl border border-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    <button
                      type="submit"
                      className="w-full mt-2 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-semibold shadow-md hover:opacity-90 transition"
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
    </section>
  );
}
