const facts = [
  {
    title: "Location",
    value: "Bangladesh 🇧🇩",
  },
  {
    title: "Education",
    value: "HSC Science Student",
  },
  {
    title: "Current Focus",
    value: "Frontend Development",
  },
  {
    title: "Research Interest",
    value: "AI & Physics",
  },
  {
    title: "Started Journey",
    value: "2026",
  },
  {
    title: "Goal",
    value: "Software Engineer & Researcher",
  },
];

export default function QuickFacts() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">

      <p className="uppercase tracking-[0.3em] text-[#895A47]">
        Quick Facts
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#241D1C]">
        A Few Things About Me
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {facts.map((fact) => (
          <div
            key={fact.title}
            className="rounded-3xl border border-[#E5DDD6] bg-white p-6 md:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#895A47]">
              {fact.title}
            </p>

            <h3 className="mt-4 text-xl md:text-2xl font-semibold text-[#241D1C]">
              {fact.value}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}