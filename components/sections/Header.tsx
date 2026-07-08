import Image from "next/image";
import Link from "next/link";

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
  return (
    <header className="sticky top-0 z-50 border-b border-[#E5DDD6] bg-[#F2E9E3]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        <Link href="/">
          <Image
            src="/logo-dark.svg"
            alt="Mahidul PHY"
            width={70}
            height={70}
            priority
          />
        </Link>

        <nav className="flex items-center gap-8">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-[#241D1C] transition-colors duration-300 hover:text-[#E5A1B1]"
            >
              {link.name}
            </Link>
          ))}

        </nav>

      </div>
    </header>
  );
}