import SkillIcon from "@/components/SkillIcon";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";

interface SkillsProps {
  className?: string;
}

export default function Skills({ className }: SkillsProps) {
  return (
    <div
      className={cn(
        className,
        "grid grid-cols-4 justify-items-center gap-8 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8",
      )}
    >
      {skills.map((skill) => {
        return <SkillIcon key={skill.name} skill={skill} />;
      })}
    </div>
  );
}
