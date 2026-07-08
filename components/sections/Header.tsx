"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Research",
    href: "/research",
  },
  {
    name: "Design",
    href: "/design",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5DDD6] bg-[#F2E9E3]/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Logo */}

        <Link href="/">
          <Image
            src="/logo-dark.svg"
            alt="Mahidul PHY"
            width={70}
            height={70}
            priority
          />
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 md:flex">

          {navLinks.map((link) => (

            <Link
  key={link.name}
  href={link.href}
  className={`relative pb-1 text-[15px] font-medium transition-all duration-300 ${
    pathname === link.href
      ? "text-[#E5A1B1]"
      : "text-[#241D1C] hover:text-[#E5A1B1]"
  }`}
>
  {link.name}

  <span
    className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#E5A1B1] transition-all duration-300 ${
      pathname === link.href ? "w-full" : "w-0"
    }`}
  />

</Link>
          ))}

        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>
      {menuOpen && (
  <div className="border-t border-[#E5DDD6] bg-[#F2E9E3] md:hidden">

    <nav className="flex flex-col px-6 py-6">

      {navLinks.map((link) => (

        <Link
          key={link.name}
          href={link.href}
          onClick={() => setMenuOpen(false)}
          className={`py-3 text-lg font-medium transition-colors ${
            pathname === link.href
              ? "text-[#E5A1B1]"
              : "text-[#241D1C] hover:text-[#E5A1B1]"
          }`}
        >
          {link.name}
        </Link>

      ))}

    </nav>

  </div>
)}
    </header>
  );
}