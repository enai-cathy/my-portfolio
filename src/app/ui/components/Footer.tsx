import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div>
          <h4 className="font-bold text-lg">Enai Cathy</h4>
        </div>

        {/* Nav links */}
        <ul className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
          <li>
            <Link href="#about" className="hover:text-white">
              About me
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-white">
              My skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-white">
              Projects
            </Link>
          </li>
          <li>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </li>
        </ul>

        {/* Download CV button */}
        <div className="relative p-[2px] rounded-full bg-gradient-to-r from-blue-800 via-purple-800 to-red-800">
        <a
          href="/Enai_CV.pdf"
          download
          className="px-5 py-1 bg-black rounded-full text-sm font-semibold hover:opacity-90"
        >
          Download CV
        </a>
        </div>
      </div>
      <hr className=" border-1 border-purple-900 opacity-50 mt-5 " />
      <div className="flex items-center justify-between">
        <p className="text-center text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <p className=" text-center text-xs text-gray-500 mt-6">
          enaicathy@gmail.com
        </p>
      </div>
    </footer>
  );
}
