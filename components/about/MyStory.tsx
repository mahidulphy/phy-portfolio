import Image from "next/image";

export default function MyStory() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* Photo */}

        <div>
          <Image
            src="/me/about.jpg"
            alt="Mahidul Islam"
            width={700}
            height={850}
            className="w-full rounded-3xl border border-[#E5DDD6] object-cover"
          />
        </div>

        {/* Content */}

        <div>

          <p className="uppercase tracking-[0.3em] text-[#895A47]">
            My Story
          </p>

          <h2 className="mt-4 text-5xl font-bold leading-tight text-[#241D1C]">
            Learning one step at a time.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-[#895A47]">

            <p>
              I'm Mahidul, a student from Bangladesh with a deep curiosity
              about technology and science. What started as simple curiosity
              has grown into a passion for building meaningful digital
              experiences.
            </p>

            <p>
              My current focus is frontend development, UI design,
              artificial intelligence, and physics. Every project teaches
              me something new and brings me one step closer to becoming
              the developer and researcher I aspire to be.
            </p>

            <p>
              I believe growth comes from consistency, curiosity,
              and the courage to keep learning every single day.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}