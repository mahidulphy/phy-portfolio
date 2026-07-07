export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">

  <p className="uppercase tracking-widest text-[#895A47]">
    Contact
  </p>

  <h2 className="mt-3 text-4xl font-bold text-[#241D1C]">
    Let's Connect
  </h2>

  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#895A47]">
    Whether you have a project, collaboration, or simply want to say hello,
    feel free to reach out. I'm always happy to connect.
  </p>

  <div className="mt-12 rounded-xl border border-[#E5DDD6]  p-10">

    <div className="grid gap-8 md:grid-cols-2">

      <div>
        <p className="text-sm uppercase tracking-widest text-[#895A47]">
          Email
        </p>

        <a
          href="mailto:your@email.com"
          className="mt-2 inline-block text-xl font-semibold text-[#241D1C] hover:text-[#E5A1B1]"
        >
          mahidulphy@yahoo.com
        </a>
      </div>

      <div>
        <p className="text-sm uppercase tracking-widest text-[#895A47]">
          Location
        </p>

        <p className="mt-2 text-xl font-semibold text-[#241D1C]">
          Bangladesh
        </p>
      </div>

      <div>
        <p className="text-sm uppercase tracking-widest text-[#895A47]">
          GitHub
        </p>

        <a
          href="https://github.com/mahidulphy"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xl font-semibold text-[#241D1C] hover:text-[#E5A1B1]"
        >
          github.com/mahidulphy
        </a>
      </div>

      <div>
        <p className="text-sm uppercase tracking-widest text-[#895A47]">
          Status
        </p>

        <p className="mt-2 text-xl font-semibold text-[#241D1C]">
          Open to Learning & Collaboration
        </p>
      </div>

    </div>

    <div className="mt-10 flex flex-wrap gap-4">

      <a
        href="mailto:your@email.com"
        className="rounded-full bg-[#E5A1B1] px-6 py-3 font-semibold text-[#241D1C] transition-all duration-300 hover:bg-[#D999A9]"
      >
        Send Email
      </a>

      <a
        href="https://github.com/mahidulphy"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-[#241D1C] px-6 py-3 font-semibold transition-all duration-300 hover:bg-[#241D1C] hover:text-[#FCF8F5]"
      >
        Visit GitHub
      </a>

    </div>

  </div>

</section>
  );
}