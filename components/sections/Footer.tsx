import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/mahidulphy",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mahidulphy",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/mahidulphy",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/mahidulphy",
  },
  {
    name: "X",
    href: "https://x.com/mahidulphy",
  },
  {
    name: "ORCID",
    href: "https://orcid.org/0009-0001-5442-9561",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E5DDD6] bg-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Top */}

        <div className="flex items-center justify-between">

          <Link
            href="/"
            className="text-sm text-[#895A47] transition hover:text-[#241D1C]"
          >
            ← Back to Home
          </Link>

          <a
            href="#top"
            className="text-sm text-[#895A47] transition hover:text-[#241D1C]"
          >
            Back to Top ↑
          </a>

        </div>

        {/* Main */}

        <div className="mt-16 grid gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <Image
              src="/logo-dark.svg"
              alt="Mahidul PHY"
              width={80}
              height={80}
              priority
            />

            <h2 className="mt-5 text-5xl font-bold text-[#241D1C]">
              Mahidul PHY
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-[#895A47]">
              Building skills, exploring ideas, and creating meaningful
              digital experiences.
            </p>

          </div>

          {/* Right */}

          <div className="lg:justify-self-end">

            <h3 className="text-3xl font-bold text-[#241D1C]">
              Let's Connect
            </h3>

            <div className="mt-8 flex flex-col gap-4">

              {socialLinks.map((link) => (

                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="group flex items-center gap-2 text-lg text-[#895A47] transition hover:text-[#241D1C]"
                >

                  {link.name}

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </Link>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col gap-3 border-t border-[#E5DDD6] pt-8 text-sm text-[#895A47] md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 Mahidul PHY. All rights reserved.
          </p>

          <p>
            Designed & Developed by Mahidul Islam.
          </p>

        </div>

      </div>

    </footer>
  );
}