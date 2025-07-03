import SlideInSection from "../ui/SlideInSection";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-black via-indigo-900 to-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-4 bg-white text-black">
        <div className="flex flex-col min-h-screen gap-5 md:flex-row items-center">
          <SlideInSection direction="left">
            <div className="w-full">
              <h1 className="text-4xl md:text-6xl font-bold">Ige-Edaba Enai</h1>
              <h2 className="text-lg md:text-xl mt-2">
                SOFTWARE ENGINEER | FRONT-END DEVELOPER
              </h2>
              <p className="mt-4 max-w-xl mx-auto">
                With impeccable experience from concept to layout, I bring your
                ideas to life with clean code.
              </p>
              <button className="mt-6 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full">
                Learn more
              </button>
            </div>
          </SlideInSection>
          <SlideInSection direction="right">
            <img src="/hero-image.jpeg" alt="Hero" className="w-full mt-10" />
          </SlideInSection>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
          <img
            src="/anton-cat.png"
            alt="Anton and Cat"
            className="w-60 rounded-xl mb-10 md:mb-0 md:mr-10"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">About me</h2>
            <ul className="space-y-4">
              <li>
                <strong>Software engineering</strong>
                <p>
                  Designing, developing and enhancing fullstack applications.
                  Setting up databases and automating processes.
                </p>
                <p className="text-sm">2020 - now</p>
              </li>
              <li>
                <strong>Fullstack training at IBA</strong>
                <p>Java, Spring boot + JS, React, Redux</p>
                <p className="text-sm">2020</p>
              </li>
              <li>
                <strong>BSUIR</strong>
                <p>Bachelors at Computer systems and networks</p>
                <p className="text-sm">2020 - 2024</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gradient-radial from-indigo-900 via-black to-black">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center max-w-6xl mx-auto">
          {[
            {
              name: "TypeScript",
              glow: "shadow-[0_0_10px_#3b82f6]",
              border: "border-blue-400",
            },
            {
              name: "Node.js",
              glow: "shadow-[0_0_10px_#10b981]",
              border: "border-green-500",
            },
            {
              name: "React",
              glow: "shadow-[0_0_10px_#38bdf8]",
              border: "border-sky-400",
            },
            {
              name: "Figma",
              glow: "shadow-[0_0_10px_#ec4899]",
              border: "border-pink-500",
            },
            {
              name: "PostgreSQL",
              glow: "shadow-[0_0_10px_#60a5fa]",
              border: "border-blue-300",
            },
            {
              name: "Next.js",
              glow: "shadow-[0_0_10px_#d1d5db]",
              border: "border-gray-400",
            },
            {
              name: "JavaScript",
              glow: "shadow-[0_0_10px_#facc15]",
              border: "border-yellow-300",
            },
            {
              name: "MongoDB",
              glow: "shadow-[0_0_10px_#34d399]",
              border: "border-emerald-400",
            },
          ].map(({ name, glow, border }) => (
            <div
              key={name}
              className={`backdrop-blur-lg bg-white/10 ${border} border-2 rounded-xl text-center w-full max-w-[120px] p-6 text-white transition-transform transform hover:scale-105 ${glow} hover:shadow-[0_0_25px_white]`}
            >
              <div className="w-12 h-12 mb-3 mx-auto bg-white/20 rounded-full border border-white/10"></div>
              <p className="text-sm font-medium">{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-black text-white">
        <h2 className="text-3xl font-bold text-center mb-10">My projects</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white bg-opacity-5 p-4 rounded-xl">
            <img
              src="/pikachu-project.png"
              alt="Pikachu Project"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Online cinema</h3>
            <p className="text-sm text-gray-300">
              A feature-rich platform for streaming movies and TV shows...
            </p>
            <p className="text-xs mt-2">
              Technologies: React, Node.js, MongoDB
            </p>
          </div>
          {/* Add more projects if needed */}
        </div>
      </section>
    </main>
  );
}
