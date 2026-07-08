import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="rounded-[40px] border border-[#E5DDD6] bg-white px-8 py-20 text-center md:px-20">

        <p className="uppercase tracking-[0.35em] text-[#895A47]">
          Contact
        </p>

        <h2 className="mt-6 text-5xl font-bold leading-tight text-[#241D1C] md:text-7xl">
          Let's Build
          <br />
          Something Together.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#895A47]">
          Whether you have an idea, a collaboration, or simply want to say
          hello, I'd love to hear from you. Let's create something meaningful
          together.
        </p>

        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="rounded-full bg-[#241D1C] px-8 py-4 text-lg font-medium text-[#F2E9E3] transition duration-300 hover:opacity-90"
          >
            Get In Touch →
          </Link>
        </div>

      </div>
    </section>
  );
}