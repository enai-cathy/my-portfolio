import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-tr from-indigo-900 to-black text-white px-4 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left – Cat & Handwriting */}
        <div className="relative text-center md:text-left">
          <Image
            src="/images/hero-image.jpeg"
            alt="image of Enai front-end dev"
            width={400}
            height={400}
            className="mx-auto md:mx-0"
          />
          <p className="text-white font-handwritten text-xl mt-4">
            I am waiting for your letters! →
          </p>
        </div>

        {/* Right – Form */}
        <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-lg text-white">
          <h3 className="text-2xl font-bold mb-6">Get in touch today</h3>
          <form
            action="https://formspree.io/f/mblybnnv"
            method="POST"
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="bg-black/30 px-4 py-2 rounded-xl border border-white/20 placeholder-white text-white"
              />
              <input
                type="email"
                placeholder="Your email"
                className="bg-black/30 px-4 py-2 rounded-xl border border-white/20 placeholder-white text-white"
              />
            </div>
            <textarea
              placeholder="Please type your message here..."
              rows={4}
              className="w-full bg-black/30 px-4 py-2 rounded-xl border border-white/20 placeholder-white text-white"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold shadow-md hover:opacity-90"
            >
              Send message
            </button>
          </form>

          {/* Bottom cat peeking */}
          <Image
            src="/images/cat-peek.png"
            alt="Peek cat"
            width={80}
            height={80}
            className="absolute -bottom-8 right-10"
          />
        </div>
      </div>
    </section>
  );
}
