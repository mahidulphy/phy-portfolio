import Footer from "@/components/sections/Footer";
import LearningTimeline from "@/components/sections/LearningTimeline";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
// Header import আপাতত remove 

export default function AboutPage() {
  return (
    <>
      <main className="bg-[#F2E9E3]">

        <section className="flex min-h-[90vh] items-center justify-center px-6">

  <div className="mx-auto max-w-4xl text-center">

    <p className="text-sm uppercase tracking-[0.4em] text-[#895A47]">
      ABOUT ME
    </p>

    <h1 className="mt-8 text-6xl font-bold leading-none text-[#241D1C] md:text-[110px]">

      <span className="block">Building.</span>

      <span className="block mt-2">Learning.</span>

      <span className="block mt-2">Growing.</span>

    </h1>

    <p className="mx-auto mt-10 max-w-xl text-xl leading-9 text-[#895A47]">

      A college student from Bangladesh passionate
      about frontend development,
      UI design,
      artificial intelligence,
      and lifelong learning.

    </p>

    <div className="mt-16">

      <p className="text-xs uppercase tracking-[0.3em] text-[#895A47]">
        Scroll
      </p>

      <div className="mt-4 animate-bounce text-3xl text-[#E5A1B1]">
        ↓
      </div>

    </div>

  </div>

</section>











        <section className="mx-auto max-w-7xl px-6 py-20">

  <div className="grid items-center gap-14 lg:grid-cols-2">

    {/* Left */}

    <div>

      <p className="uppercase tracking-[0.3em] text-[#895A47]">
        My Story
      </p>

      <h2 className="mt-4 text-6xl font-bold leading-tight text-[#241D1C]">
        More Than
        <br />
        Just Code.
      </h2>

      <p className="mt-10 leading-8 text-xl text-[#895A47]">

        I'm Mahidul, a college student from Bangladesh who believes
        that learning is a lifelong journey.

      </p>

      <p className="mt-6 leading-8 text-lg text-[#895A47]">

        In 2026, I began exploring frontend development and UI design.
        Since then, I've been building projects,
        learning every day,
        and turning curiosity into real skills.

      </p>

      <p className="mt-6 leading-8 text-lg text-[#895A47]">

        Beyond web development,
        I'm fascinated by artificial intelligence
        and nuclear physics.
        Every project I build is another step
        toward becoming a better developer.

      </p>

    </div>

    {/* Right */}

    <div>

      <div className="overflow-hidden rounded-[36px]">

        <img
          src="/about/me.jpg"
          alt="Mahidul"
          className="w-full object-cover"
        />

      </div>

    </div>

  </div>

</section>

        <LearningTimeline />
        {/* What I'm Exploring */}

        {/* Contact CTA */}

      </main>

      <Footer />
    </>
  );
}