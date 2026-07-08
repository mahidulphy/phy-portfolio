import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const contacts = [
  {
    title: "Email",
    value: "mahidulphy@yahoo.com",
    href: "mailto:mahidulphy@yahoo.com",
  },
  {
    title: "GitHub",
    value: "github.com/mahidulphy",
    href: "https://github.com/mahidulphy",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/mahidulphy",
    href: "https://linkedin.com/in/mahidulphy",
  },
  {
    title: "Resume",
    value: "Available Soon",
    href: "#",
  },
];

export default function ContactLinks() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">

      <div className="space-y-5">

        {contacts.map((contact) => (

          <Link
            key={contact.title}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            className="group flex items-center justify-between rounded-3xl border border-[#E5DDD6] bg-white px-8 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#E5A1B1] hover:shadow-xl"
          >

            <div>

              <p className="text-sm uppercase tracking-[0.25em] text-[#895A47]">
                {contact.title}
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#241D1C]">
                {contact.value}
              </h3>

            </div>

            <ArrowUpRight
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              size={28}
            />

          </Link>

        ))}

      </div>

    </section>
  );
}