import SkillCard from "@/components/cards/SkillCard";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 pt-20 py-20 md:py-24">
           <p className="uppercase tracking-widest text-[#895A47]">
              Skills
           </p>
    
           <h2 className="mt-4 text-4xl font-bold leading-tight text-[#241D1C] sm:text-5xl md:text-6xl">
             My Technical Skills
           </h2>
    
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill) => (
                <SkillCard
                 key={skill.title}
                 {...skill}
            />
             ))}
          </div>
          </section>
  );
}