import { LucideIcon } from "lucide-react";

type SkillCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
};

export default function SkillCard({
  icon: Icon,
  title,
  description,
  skills,
}: SkillCardProps) {
  return (
    <div className="rounded-3xl border border-[#E5DDD6] bg-[#FCF8F5] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#E5A1B1] hover:shadow-xl">

      <div className="mb-6 inline-flex rounded-2xl bg-[#E5A1B1]/20 p-4">
        <Icon className="h-7 w-7 text-[#E5A1B1]" />
      </div>

      <h3 className="text-3xl font-bold text-[#241D1C]">
        {title}
      </h3>

      <p className="mt-3 mb-5 text-[#895A47] leading-7">
  {description}
</p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-[#E5A1B1]/20 px-3 py-1 text-sm font-semibold text-[#241D1C]"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  );
}