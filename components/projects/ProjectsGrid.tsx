import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsGrid() {
  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  if (otherProjects.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-24">
        <p className="text-center text-[#895A47]">
          More projects are coming soon.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">

      <h2 className="mb-12 text-3xl md:text-4xl font-bold text-[#241D1C]">
        More Projects
      </h2>

      <div className="grid gap-10">
        {otherProjects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </div>

    </section>
  );
}