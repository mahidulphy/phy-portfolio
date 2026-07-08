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
    <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">

      <div className="space-y-6">

        {contacts.map((contact) => (

          <Link
            key={contact.title}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            className="group flex items-center justify-between rounded-3xl border border-[#E5DDD6] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E5A1B1] hover:shadow-xl md:p-8"
          >

            <div className="min-w-0">

              <p className="text-xs uppercase tracking-[0.25em] text-[#895A47] md:text-sm">
                {contact.title}
              </p>

              <h3 className="mt-2 break-words text-lg font-semibold text-[#241D1C] md:text-2xl">
                {contact.value}
              </h3>

            </div>

            <ArrowUpRight
              size={26}
              className="ml-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 md:size-7"
            />

          </Link>

        ))}

      </div>

    </section>
  );
}