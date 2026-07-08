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

        <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <Link
            href="/"
            className="text-sm text-[#895A47] transition-colors duration-300 hover:text-[#241D1C]"
          >
            ← Back to Home
          </Link>

          <a
            href="#top"
            className="text-sm text-[#895A47] transition-colors duration-300 hover:text-[#241D1C]"
          >
            Back to Top ↑
          </a>

        </div>

        {/* Main */}

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left */}

          <div className="text-center lg:text-left">

            <Image
              src="/logo-dark.svg"
              alt="Mahidul PHY"
              width={80}
              height={80}
              priority
              className="mx-auto lg:mx-0"
            />

            <h2 className="mt-5 text-4xl font-bold text-[#241D1C] md:text-5xl">
              Mahidul PHY
            </h2>

            <p className="mx-auto mt-6 max-w-md text-base leading-8 text-[#895A47] md:text-lg lg:mx-0">
              Building skills, exploring ideas, and creating meaningful
              digital experiences through design, code, and research.
            </p>

          </div>

          {/* Right */}

          <div className="text-center lg:justify-self-end lg:text-left">

            <h3 className="text-3xl font-bold text-[#241D1C]">
              Let's Connect
            </h3>

            <div className="mt-8 flex flex-col gap-4">

              {socialLinks.map((link) => (

                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="group inline-flex items-center justify-center gap-2 text-base text-[#895A47] transition-all duration-300 hover:text-[#241D1C] lg:justify-start md:text-lg"
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

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-[#E5DDD6] pt-8 text-center text-sm text-[#895A47] md:flex-row md:text-left">

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