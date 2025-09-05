"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";


const links = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about"
   
  },
  { name: "Projects", href: "/projects"},
  { name: "Contact", href: "#contact" },
];

type NavLinksProps = {
  onClick?: () => void;
};

export default function NavLinks({ onClick }: NavLinksProps) {
  const pathname = usePathname();
  return (
    <>
      
        <div className="hidden md:flex gap-6 px-4 py-2 rounded-full border border-white/10 font-medium">
         
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
                      "text-purple-400": isActive,
                      " hover:bg-black hover:text-white": !isActive,
                    }
                  )}
                >
                  <p className="">{link.name}</p>
                </Link>
              );
            })}
        
        </div>
      
    </>
  );
}
