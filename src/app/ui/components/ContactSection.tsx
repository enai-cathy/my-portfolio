// import Image from "next/image";

// export default function ContactSection() {
//   return (
//     <section className="bg-gradient-to-tr from-indigo-900 to-black text-white px-4 py-20">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         {/* Left – Cat & Handwriting */}
//         <div className="relative text-center md:text-left">
//           <Image
//             src="/images/hero-image.jpeg"
//             alt="image of Enai front-end dev"
//             width={400}
//             height={400}
//             className="mx-auto md:mx-0"
//           />
//           <p className="text-white font-handwritten text-xl mt-4">
//             I am waiting for your letters! →
//           </p>
//         </div>

//         {/* Right – Form */}
//         <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-lg text-white">
//           <h3 className="text-2xl font-bold mb-6">Get in touch today</h3>
//           <form
//             action="https://formspree.io/f/mblybnnv"
//             method="POST"
//             className="space-y-4"
//           >
//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Your name"
//                 className="bg-black/30 px-4 py-2 rounded-xl border border-white/20 placeholder-white text-white"
//               />
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="bg-black/30 px-4 py-2 rounded-xl border border-white/20 placeholder-white text-white"
//               />
//             </div>
//             <textarea
//               placeholder="Please type your message here..."
//               rows={4}
//               className="w-full bg-black/30 px-4 py-2 rounded-xl border border-white/20 placeholder-white text-white"
//             />
//             <button
//               type="submit"
//               className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold shadow-md hover:opacity-90"
//             >
//               Send message
//             </button>
//           </form>

//           {/* Bottom cat peeking */}
//           <Image
//             src="/images/cat-peek.png"
//             alt="Peek cat"
//             width={80}
//             height={80}
//             className="absolute -bottom-8 right-10"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


"use client"
import { useState } from "react";
import {motion} from "framer-motion"
import Image from "next/image";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mblybnnv", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        toast.success("Message sent successfully! 🎉");
        form.reset();
        setFormStatus("success");
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch {
      toast.error("Network error. Please try later.");
    }
  };

  return (
    <section className=" text-white px-4 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left – Image & Note */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative text-center md:text-left"
        >
          <Image
            src="/images/hero-image.jpeg"
            alt="Portrait of Enai, front-end developer"
            width={400}
            height={400}
            className="mx-auto md:mx-0 rounded-xl shadow-lg"
          />
          <p className="text-white font-handwritten text-2xl mt-6">
            I’m waiting for your letter → 
          </p>
        </motion.div>

        {/* Right – Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white/10 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl text-white"
        >
          <h3 className="text-3xl font-bold mb-6">Let's Build Something Awesome</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                aria-label="Name"
                autoComplete="name"
                className="bg-black/30 px-4 py-3 rounded-xl border border-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                aria-label="Email"
                autoComplete="email"
                className="bg-black/30 px-4 py-3 rounded-xl border border-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </motion.div>

            <motion.textarea
              name="message"
              required
              rows={5}
              placeholder="Type your message here..."
              className="w-full bg-black/30 px-4 py-3 rounded-xl border border-white/20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            />

            <motion.button
              type="submit"
              className="w-full mt-2 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-semibold shadow-md hover:opacity-90 transition"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Send Message
            </motion.button>
          </form>

          <Image
            src="/images/cat-peek.png"
            alt="Peeking cat illustration"
            width={80}
            height={80}
            className="absolute -bottom-8 right-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
