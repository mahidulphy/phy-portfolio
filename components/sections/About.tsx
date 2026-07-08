import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <p className="uppercase tracking-[0.3em] text-[#895A47]">
        About
      </p>

      <h2 className="mt-4 max-w-3xl text-5xl font-bold leading-tight text-[#241D1C]">
        Building Skills.
        <br />
        Exploring Ideas.
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-[#895A47]">
        I'm Mahidul, a student from Bangladesh passionate about frontend
        development, UI design, artificial intelligence, and physics.
        Every project I build is another step toward becoming a better
        developer and future researcher.
      </p>

      <Link
        href="/about"
        className="mt-10 inline-flex items-center rounded-full border border-[#241D1C] px-7 py-3 font-medium transition-all duration-300 hover:bg-[#241D1C] hover:text-[#F2E9E3]"
      >
        Read My Story →
      </Link>
    </section>
  );
}