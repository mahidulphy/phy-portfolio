import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";

export default function FeaturedProject() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  if (!featuredProject) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">

      <p className="uppercase tracking-[0.3em] text-[#895A47]">
        Featured Project
      </p>

      <div className="mt-10 grid items-center gap-16 lg:grid-cols-2">

        {/* Image */}

        <div>
          <Image
            src={featuredProject.image}
            alt={featuredProject.title}
            width={900}
            height={600}
            className="rounded-3xl border border-[#E5DDD6]"
          />
        </div>

        {/* Content */}

        <div>

          <h2 className="text-5xl font-bold text-[#241D1C]">
            {featuredProject.title}
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#895A47]">
            {featuredProject.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {featuredProject.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[#E5A1B1]/20 px-4 py-2 text-sm font-medium text-[#241D1C]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 flex gap-4">

            <Link
              href={featuredProject.live}
              className="rounded-full bg-[#241D1C] px-6 py-3 text-[#F2E9E3] transition hover:opacity-90"
            >
              Live Demo
            </Link>

            <Link
              href={featuredProject.github}
              className="rounded-full border border-[#241D1C] px-6 py-3 text-[#241D1C] transition hover:bg-[#241D1C] hover:text-[#F2E9E3]"
            >
              GitHub
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}