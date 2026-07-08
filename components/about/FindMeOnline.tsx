import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaOrcid,
  FaXTwitter,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

const links = [
{
    title: "Email",
    username: "mahidulphy@yahoo.com",
    href: "mailto:mahidulphy@yahoo.com",
    icon: MdEmail,
  }, 
  {
    title: "GitHub",
    username: "@mahidulphy",
    href: "https://github.com/mahidulphy",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    username: "@mahidulphy",
    href: "https://linkedin.com/in/mahidulphy",
    icon: FaLinkedin,
  },
 
  {
    title: "Facebook",
    username: "@mahidulphy",
    href: "https://facebook.com/mahidulphy",
    icon: FaFacebook,
  },
  {
    title: "Instagram",
    username: "@mahidulphy",
    href: "https://instagram.com/mahidulphy",
    icon: FaInstagram,
  },
  {
    title: "X (Twitter)",
    username: "@mahidulphy",
    href: "https://x.com/mahidulphy",
    icon: FaXTwitter,
  },
  {
    title: "ORCID",
    username: "0009-0001-5442-9561",
    href: "https://orcid.org/0009-0001-5442-9561",
    icon: FaOrcid,
  },
  
];

export default function FindMeOnline() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">

      <p className="uppercase tracking-[0.3em] text-[#895A47]">
        Find Me Online
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#241D1C]">
        Let's Stay Connected
      </h2>

      <p className="mt-6 max-w-2xl text-base md:text-lg leading-8 text-[#895A47]">
        You can find me across different platforms where I share my work,
        research journey, and creative projects.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">

        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.title}
              href={link.href}
              target="_blank"
              className="group flex items-center justify-between rounded-3xl border border-[#E5DDD6] bg-white p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#E5A1B1] hover:shadow-xl"
            >
              <div className="flex items-center gap-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F8F3EF] text-[#241D1C]">
                  <Icon size={22} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#895A47]">
                    {link.title}
                  </p>

                  <h3 className="mt-1 text-base md:text-lg font-semibold text-[#241D1C]">
                    {link.username}
                  </h3>
                </div>

              </div>

              <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </Link>
          );
        })}

      </div>

    </section>
  );
}