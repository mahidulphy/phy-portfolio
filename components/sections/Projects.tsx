import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 pt-20 py-20 md:py-24">

        <p className="uppercase tracking-[0.3em] text-[#895A47]">
          Projects
        </p>

        <h2 className="mt-4 text-4xl font-bold leading-tight text-[#241D1C] sm:text-5xl md:text-6xl">
          Things I'm Building
        </h2>
  
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#895A47] md:text-lg">
          A collection of projects where I explore frontend development,
          design, and modern web technologies.
        </p>

           <div className="mt-14 grid gap-10">
              {projects.map((project) => (
                <ProjectCard
                   key={project.title}
                     {...project}
                      />
                    ))}
           </div>
           <div className="mt-14 flex justify-center">
  <Link
    href="/projects"
    className="group inline-flex items-center gap-2 rounded-full border border-[#241D1C] px-5 py-3 font-medium text-sm transition-all duration-300 hover:bg-[#241D1C] hover:text-[#F2E9E3] md:px-6 md:text-base"
  >
    Explore All Projects

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>
</div>

      </section>
  );
}