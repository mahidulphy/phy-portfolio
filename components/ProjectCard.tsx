import Image from "next/image";
import { ExternalLink, Code } from "lucide-react";
type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  status: string;
};

export default function ProjectCard({
  image,  
  title,
  description,
  technologies,
  github,
  live,
  status,
}: ProjectCardProps) {
  return (
    <div className="rounded-3xl border border-[#E5DDD6] bg-[#FCF8F5] p-8">
      <div className="relative h-56 w-full overflow-hidden rounded-2xl">
        <Image
  src={image}
  alt={title}
  width={800}
  height={450}
  className="w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-105"
/>
      </div>
      <span className="inline-block rounded-full bg-[#E5A1B1]/20 px-3 py-1 text-sm font-semibold text-[#895A47]">
        {status}
      </span>

      <h3 className="mt-5 text-3xl font-bold text-[#241D1C]">
        {title}
      </h3>

      <p className="mt-4 text-[#895A47] leading-7">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-[#E5A1B1]/20 px-3 py-1 text-sm font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>
   
      <div className="mt-8 flex gap-4">

  <a
  href={github}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 rounded-full border border-[#241D1C] px-5 py-2 text-sm font-semibold transition-all duration-300 hover:bg-[#241D1C] hover:text-[#FCF8F5]"
>
  <Code size={18} />
  GitHub
</a>

<a
  href={live}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 rounded-full bg-[#E5A1B1] px-5 py-2 text-sm font-semibold text-[#241D1C] transition-all duration-300 hover:bg-[#D999A9]"
>
  <ExternalLink size={18} />
  Live Demo
</a>

</div>






    </div>
  );
}