import SkillCard from "@/components/cards/SkillCard";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
           <p className="uppercase tracking-widest text-[#895A47]">
              Skills
           </p>
    
           <h2 className="mt-3 py-4 text-4xl font-bold text-[#241D1C]">
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