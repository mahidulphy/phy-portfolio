import DesignCard from "@/components/cards/DesignCard";
import { designs } from "@/data/designs";
import Link from "next/link";

export default function Design() {
  return (
    <section id="design" className="max-w-7xl mx-auto px-6 py-24">

  <p className="uppercase tracking-widest text-[#895A47]">
    Design
  </p>

  <h2 className="mt-3 text-4xl font-bold text-[#241D1C]">
    Featured Designs
  </h2>

  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#895A47]">
    A selection of my favorite creative works in branding,
    social media, posters, and digital design.
  </p>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  {designs.map((design) => (
    <DesignCard
      key={design.title}
      {...design}
    />
  ))}

</div>

  <Link
    href="/design"
    className="inline-block mt-10 rounded-full border border-[#241D1C] px-6 py-3 transition-all duration-300 hover:bg-[#241D1C] hover:text-[#F2E9E3]"
  >
    View All Designs →
  </Link>

</section>
  );
}