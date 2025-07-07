"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";


const links = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "#about"
   
  },
  { name: "Portfolio", href: "#projects"},
  { name: "Hobby", href: "#hobby" },
  { name: "Contact", href: "#contact" },
];

type NavLinksProps = {
  onClick?: () => void;
};

export default function NavLinks({ onClick }: NavLinksProps) {
  const pathname = usePathname();
  return (
    <>
      <div className="relative p-[2px] rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-600">
        <div className="hidden md:flex gap-6 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white font-medium">
         
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClick}
                  className={clsx(
                    " flex items-center justify-center gap-2 rounded-md text-sm font-medium md:justify-start md:px-3 transition-colors",
                    {
                      "text-purple-200": isActive,
                      " hover:bg-white/10 hover:text-purple-300": !isActive,
                    }
                  )}
                >
                  <p className="">{link.name}</p>
                </Link>
              );
            })}
        
        </div>
      </div>
    </>
  );
}
