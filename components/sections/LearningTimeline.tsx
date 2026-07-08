const timeline = [
  {
    year: "2026",
    title: "Started My Learning Journey",
    description:
      "I decided to seriously invest my time in learning technology and building valuable skills.",
  },
  {
    year: "2026",
    title: "Discovered UI Design",
    description:
      "Started learning layouts, typography, colors, and user experience.",
  },
  {
    year: "2026",
    title: "Started Frontend Development",
    description:
      "Began building responsive websites with modern web technologies.",
  },
  {
    year: "2026",
    title: "Built PHY Portfolio",
    description:
      "Created my first portfolio website to document my journey.",
  },
  {
    year: "2026",
    title: "Exploring Artificial Intelligence",
    description:
      "Learning how AI is transforming technology and solving real-world problems.",
  },
];

export default function LearningTimeline() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">

      <p className="uppercase tracking-[0.3em] text-[#895A47]">
        The Journey
      </p>

      <h2 className="mt-4 text-4xl font-bold leading-tight text-[#241D1C] sm:text-5xl md:text-6xl">
        Every expert was once a beginner.
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-8 text-[#895A47] md:text-lg">
        Here's how my learning journey has been unfolding—one step at a time.
      </p>

      <div className="mt-16">

        {timeline.map((item, index) => (
          <div
            key={index}
            className="relative flex gap-5 pb-12 md:gap-8 md:pb-16"
          >
            {/* Timeline */}

            <div className="flex flex-col items-center">

              <div className="h-4 w-4 rounded-full bg-[#E5A1B1] md:h-5 md:w-5" />

              {index !== timeline.length - 1 && (
                <div className="mt-2 h-full w-[2px] bg-[#E5DDD6]" />
              )}

            </div>

            {/* Content */}

            <div className="flex-1 pb-2">

              <p className="text-xs uppercase tracking-[0.3em] text-[#895A47] md:text-sm">
                {item.year}
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#241D1C] md:text-2xl">
                {item.title}
              </h3>

              <p className="mt-4 max-w-xl text-base leading-8 text-[#895A47]">
                {item.description}
              </p>

            </div>

          </div>
        ))}

        {/* Final */}

        <div className="relative flex gap-5 md:gap-8">

          <div className="mt-1 h-4 w-4 rounded-full border-2 border-[#E5A1B1] md:h-5 md:w-5" />

          <div>

            <h3 className="text-xl font-bold text-[#241D1C] md:text-2xl">
              The Journey Continues...
            </h3>

            <p className="mt-4 max-w-xl text-base leading-8 text-[#895A47]">
              Every project, every lesson, and every challenge is another step
              toward becoming a better developer.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}