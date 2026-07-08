import DesignCard from "@/components/cards/DesignCard";
import { designs } from "@/data/designs";
import Link from "next/link";

export default function Design() {
  return (
    <section
      id="design"
      className="mx-auto max-w-7xl pt-20 px-6 py-20 md:py-24"
    >

      <p className="uppercase tracking-[0.3em] text-[#895A47]">
        Design
      </p>

      <h2 className="mt-4 text-4xl font-bold leading-tight text-[#241D1C] sm:text-5xl md:text-6xl">
        Featured Designs
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-8 text-[#895A47] md:text-lg">
        A selection of my favorite creative works in branding,
        social media, posters, and digital design.
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

        {designs.map((design) => (
          <DesignCard
            key={design.id}
            {...design}
          />
        ))}

      </div>

      <div className="mt-14 flex justify-center">

        <Link
          href="/design"
          className="group inline-flex items-center gap-2 rounded-full border border-[#241D1C] px-5 py-3 text-sm font-medium text-[#241D1C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#241D1C] hover:text-[#F2E9E3] md:px-6 md:text-base"
        >
          View All Designs

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>

        </Link>

      </div>

    </section>
  );
}