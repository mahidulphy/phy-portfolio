"use client";

import { useState } from "react";
import Image from "next/image";

import { designs } from "@/data/designs";

export default function DesignShowcase() {

  const [selectedDesign, setSelectedDesign] = useState(
    designs.find((design) => design.featured) || designs[0]
  );

  return (

    <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">

      <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">

        <Image
          src={selectedDesign.image}
          alt={selectedDesign.title}
          width={700}
          height={900}
          className="h-auto w-full rounded-3xl border border-[#E5DDD6] object-cover"
        />

        <div>

          <span className="rounded-full bg-[#E5A1B1]/20 px-4 py-2 text-xs sm:text-sm font-medium text-[#241D1C]">
            {selectedDesign.category}
          </span>

          <h2 className="mt-8 text-4xl md:text-5xl font-bold text-[#241D1C]">
            {selectedDesign.title}
          </h2>

          <p className="mt-8 text-base md:text-lg leading-8 text-[#895A47]">
            {selectedDesign.description}
          </p>

        </div>

      </div>
      
      

      {/* Design Selector */}

<div className="mt-24">

  <p className="uppercase tracking-[0.3em] text-[#895A47]">
    More Designs
  </p>

  <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#241D1C]">
    Creative Collection
  </h2>

  <p className="mt-6 max-w-2xl text-base md:text-lg leading-8 text-[#895A47]">
    Click any design below to preview it above.
  </p>

  <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

    {designs.map((design) => (

      <button
        key={design.id}
        onClick={() => setSelectedDesign(design)}

        className={`

        overflow-hidden
        rounded-3xl
        border
        transition-all
        duration-300

        ${
          selectedDesign.id === design.id
            ? "border-[#E5A1B1] ring-2 ring-[#E5A1B1] shadow-xl"
            : "border-[#E5DDD6] hover:-translate-y-1 hover:shadow-lg"
        }

        `}
      >

        <Image
          src={design.image}
          alt={design.title}
          width={500}
          height={700}
          className="aspect-[4/5] w-full object-cover"
        />

        <div className="p-5 md:p-6 text-left">

          <span className="rounded-full bg-[#E5A1B1]/20 px-3 py-1 text-xs text-[#241D1C]">
            {design.category}
          </span>

          <h3 className="mt-4 text-xl md:text-2xl font-bold text-[#241D1C]">
            {design.title}
          </h3>

        </div>

      </button>

    ))}

  </div>

</div>



    </section>
     
  );
}

