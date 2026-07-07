import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">

        <p className="uppercase tracking-widest text-[#895A47]">
          Projects
        </p>

        <h2 className="mt-3 text-4xl font-bold text-[#241D1C]">
          Things I'm Building
        </h2>
  
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#895A47]">
          A collection of projects where I explore frontend development,
          design, and modern web technologies.
        </p>

           <div className="mt-12">
              {projects.map((project) => (
                <ProjectCard
                   key={project.title}
                     {...project}
                      />
                    ))}
           </div>

      </section>
  );
}