import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <p className="uppercase tracking-widest text-[#895A47]">
         About
        </p>

        <h2 className="mt-3 text-4xl font-bold text-[#241D1C]">
         Building skills. Exploring ideas.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#895A47]">
         I'm Mahidul, a student exploring frontend development, UI design,
         artificial intelligence, and nuclear physics. I enjoy turning ideas
         into clean digital experiences while constantly learning and improving.
        </p>

        <Link href="/about" className="inline-block mt-8 rounded-full border border-[#241D1C] px-6 py-3 transition-all duration-300 hover:bg-[#241D1C] hover:text-[#F2E9E3]">
         Read More →
        </Link>
      </section>
  );
}