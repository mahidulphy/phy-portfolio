import { Code, Palette, ChartColumn, Atom } from "lucide-react";
import SkillCard from "@/components/cards/SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
           <p className="uppercase tracking-widest text-[#895A47]">
              Skills
           </p>
    
           <h2 className="mt-3 text-4xl font-bold text-[#241D1C]">
             My Technical Skills
           </h2>
    
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> 
             
              <SkillCard
               icon={Code}
               title="Development"
               description="Building responsive and modern web applications."
               skills={[
                 "HTML",
                 "Tailwind CSS",
                 "Next.js",
               ]}
              />
    
              <SkillCard
               icon={Palette}
               title="Design"
               description="Creating clean and modern user interfaces."
               skills={[
                 "Canva",
                 "Adobe Photoshop",
               ]}
              />
    
              <SkillCard
               icon={ChartColumn}
               title="Marketing"
                description="Running and optimizing digital advertising campaigns."
               skills={[
                 "Google Ads",
                 "Meta Ads",
               ]}
              />
    
              <SkillCard
               icon={Atom}
               title="Research"
               description="Exploring AI and nuclear science concepts."
               skills={[
                 "Artificial Intelligence",
                 "Nuclear Physics",
               ]}
              />
            </div>
          </section>
  );
}