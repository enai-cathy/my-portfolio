import AboutSection from "../ui/components/AboutSection";
import ContactSection from "../ui/components/ContactSection";
import Navbar from "../ui/components/nav-bar";
import PhotoCarousel from "../ui/components/PhotoCarousel";
import SlideInSection from "../ui/SlideInSection";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main
        className="text-white min-h-screen font-sans bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg-1.jpg')" }}
      >
        {/* Hero Section */}
        <section
          className=" bg-cover bg-center bg-no-repeat flex flex-col items-center text-center px-4 text-black"
          style={{ backgroundImage: "url('/images/paper-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-white/50 " />
          <div className="relative z-10 flex flex-col min-h-screen gap-5 md:flex-row items-center">
            <SlideInSection direction="left">
              <div className="w-full text-left">
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  Ige-Edaba Enai C.
                </h1>
                <h2 className="text-xl text-gray-700 md:text-2xl mt-4 font-medium">
                  SOFTWARE ENGINEER | FRONT-END DEVELOPER | VISUAL THINKER
                </h2>
                <p className="mt-6 text-lg text-gray-800 max-w-xl">
                  Doctor turned technologist — building stunning, scalable web
                  interfaces with creativity and precision. Bridging design,
                  empathy, and code for real-world impact.
                </p>
                <Link href="#projects">
                  <button className="mt-6 px-6 py-1 bg-gradient-to-r from-red-600 via-purple-500 to-blue-700 text-white rounded-full hover:opacity-90 transition-all">
                    View My Projects
                  </button>
                </Link>
              </div>
            </SlideInSection>
            <SlideInSection direction="right">
              <img
                src="/images/hero-image.jpeg"
                alt="Hero"
                className="w-full mt-10 md:max-w-md rounded-xl shadow-2xl"
              />
            </SlideInSection>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-black text-white">
          <AboutSection />
        </section>
        {/* Skills Section */}
        <section
          id="skills"
          className="py-24 px-4"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            My Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center max-w-6xl mx-auto">
            {[
              {
                name: "TypeScript",
                glow: "shadow-[0_0_25px_#3b82f6]",
                border: "border-blue-400",
                image: "/images/TS-logo.png",
              },
              {
                name: "Node.js",
                glow: "shadow-[0_0_25px_#10b981]",
                border: "border-green-500",
                image: "/images/node-js-logo.png",
              },
              {
                name: "React",
                glow: "shadow-[0_0_25px_#38bdf8]",
                border: "border-sky-400",
                image: "/images/react-logo.png",
              },
              {
                name: "Figma",
                glow: "shadow-[0_0_25px_#ec4899]",
                border: "border-pink-500",
                image: "/images/figma-logo.png",
              },
              {
                name: "PostgreSQL",
                glow: "shadow-[0_0_25px_#60a5fa]",
                border: "border-blue-300",
                image: "/images/postgresql-logo.png",
              },
              {
                name: "Next.js",
                glow: "shadow-[0_0_25px_#d1d5db]",
                border: "border-gray-400",
                image: "/images/next-logo.png",
              },
              {
                name: "JavaScript",
                glow: "shadow-[0_0_25px_#facc15]",
                border: "border-yellow-300",
                image: "/images/JS-logo.png",
              },
              {
                name: "MongoDB",
                glow: "shadow-[0_0_25px_#34d399]",
                border: "border-emerald-400",
                image: "/images/mongoDB.png",
              },
            ].map(({ name, glow, border, image }) => (
              <div
                key={name}
                className={`backdrop-blur-lg bg-white/10 ${border} border-2 rounded-xl text-center w-full max-w-[120px] p-6 text-white transition-transform transform hover:scale-105 ${glow} hover:shadow-[0_0_25px_white]`}
              >
                <img
                  src={image}
                  alt={name}
                  className="w-15 h-15 mx-auto rounded mb-4"
                />

                <p className="text-sm font-medium">{name}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Projects Section */}
        <section
          id="projects"
          className="py-24 px-4 text-white"
        >
          <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>
          <div className="max-w-6xl mx-auto space-y-24">
            {/* === Project 1 === */}

            <div className="grid grid-cols-5 gap-6 items-center">
              {/* Image (3 cols) */}

              <div className="col-span-5 md:col-span-3">
                <SlideInSection direction="right">
                  <img
                    src="/images/404-found.png"
                    alt="Online Blog"
                    className="rounded-xl w-full h-auto transition duration-300 hover:shadow-[0_0_40px_#3b82f6]"
                  />
                </SlideInSection>
              </div>

              {/* Text (2 cols) */}
              <div className="col-span-5 md:col-span-2 bg-black/20 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
                <SlideInSection direction="left">
                  <span className="text-sm uppercase text-purple-300 mb-1 block">
                    Design • Web
                  </span>
                  <h3 className="text-xl font-semibold mb-2">Online Blog</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    A feature-rich platform for blogging with markdown support,
                    user auth, and responsive design.
                  </p>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-medium shadow-md hover:opacity-90">
                    See more
                  </button>
                </SlideInSection>
              </div>
            </div>

            {/* === Project 2 (reversed layout) === */}
            <SlideInSection direction="left">
              <div className="grid grid-cols-5 gap-6 items-center">
                {/* Text first */}
                <div className="col-span-5 md:col-span-2 bg-black/20 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
                  <span className="text-sm uppercase text-pink-300 mb-1 block">
                    E-Commerce • UI
                  </span>
                  <h3 className="text-xl font-semibold mb-2">Tech Store</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    A clean and modern online store with real-time filtering,
                    secure checkout, and admin dashboard.
                  </p>
                  <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full text-sm font-medium shadow-md hover:opacity-90">
                    See more
                  </button>
                </div>

                {/* Image second */}
                <div className="col-span-5 md:col-span-3">
                  <img
                    src="/images/404-found.png"
                    alt="Tech Store"
                    className="rounded-xl w-full h-auto transition duration-300 hover:shadow-[0_0_40px_#f472b6]"
                  />
                </div>
              </div>
            </SlideInSection>

            {/* Add more project rows if needed */}
          </div>
        </section>
        <section
          id="hobby"
          className="min-h-screen bg-black text-white px-4 py-20"
        >
          <div className="max-w-6xl mx-auto space-y-20">
            {/* PArt */}
            <h2 className="text-4xl font-bold mb-6">Art</h2>
            <PhotoCarousel />
            <div>
              <h2 className="text-4xl font-bold mb-6">Movies</h2>
              <PhotoCarousel />
            </div>
          </div>
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
