"use client";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { href: "mailto:enaicathy@gmail.com", icon: Mail, label: "Email" },
  { href: "https://github.com/enai-cathy", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/enaikato-ige-edaba-5b9538216/", icon: Linkedin, label: "LinkedIn" },
];

export default function SocialLinks() {
  return (
    <div className="flex justify-center md:justify-start gap-4 text-lg">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={link.label}
            className="hover:text-purple-400 transition"
          >
            <Icon size={15} />
          </Link>
        );
      })}
    </div>
  );
}
