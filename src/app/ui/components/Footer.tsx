  import Link from "next/link";
  import SocialLinks from "./SocialLinks";
  
  
  export default function Footer() {
  return (
  <footer className="sticky bg-white/90 bottom-0 border-t border-gray-700 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-6">
          <p className="text-sm text-gray-600">- 2025 Enai. Let’s chat!</p>
          <SocialLinks />
          <Link href="/resume" className="text-sm text-gray-600 font-semibold underline hover:no-underline">
              Read Resume →
          </Link>
        </div>
      </footer>
  );
  }