import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 pt-20 py-20 md:py-24"
    >
      <div className="rounded-[32px] border border-[#E5DDD6] bg-white px-6 py-14 text-center sm:px-10 md:rounded-[40px] md:px-20 md:py-20">

        <p className="uppercase tracking-[0.35em] text-[#895A47]">
          Contact
        </p>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-[#241D1C] sm:text-5xl md:text-7xl">
          Let's Build
          <br />
          Something Together.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#895A47] md:text-lg">
          Whether you have an idea, a collaboration, or simply want to say
          hello, I'd love to hear from you. Let's create something meaningful
          together.
        </p>

        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#241D1C] px-6 py-3 text-sm font-medium text-[#F2E9E3] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:px-8 md:py-4 md:text-base"
          >
            Get In Touch

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </Link>
        </div>

      </div>
    </section>
  );
}