import Link from "next/link";

export default function Research() {
  return (
    <section id="research" className="mx-auto max-w-7xl pt-20 px-6 py-20 md:py-24">
    
      <p className="uppercase tracking-widest text-[#895A47]">
        Research & Learning
      </p>
    
      <h2 className="mt-3 text-4xl font-bold text-[#241D1C]">
        Exploring ideas beyond the classroom.
      </h2>
    
      <p className="mt-6 max-w-2xl text-base leading-8 text-[#895A47] md:text-lg">
        I'm currently building this section.
        It will showcase my learning journey, research interests,
        future goals, and the ideas I'm exploring.
      </p>
    
      <div className="mt-12 rounded-3xl border border-dashed border-[#E5A1B1] bg-[#FCF8F5] p-12 text-center">
    
        <div className="text-6xl">
          🚀
        </div>
    
        <h3 className="mt-6 text-3xl font-bold text-[#241D1C]">
          Coming Soon
        </h3>
    
        <p className="mt-4 max-w-xl mx-auto leading-7 text-[#895A47]">
          This section is under development.
          I'll soon be sharing my learning journey,
          research interests, and future projects here.
        </p>
        
      </div>
      <div className="mt-12 flex justify-center">

  <Link
    href="/research"
    className="group inline-flex items-center gap-2 rounded-full border border-[#241D1C] px-5 py-3 text-sm font-medium text-[#241D1C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#241D1C] hover:text-[#F2E9E3] md:px-6 md:text-base"
  >
    Explore Research

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>

  </Link>

</div>
    
    </section>
  );
}