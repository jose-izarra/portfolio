import SkillIcon from "@/components/SkillIcon";
import skills from "@/data/skills.json";

export default function Skills() {
  return (
    <div
      className={`skills grid grid-cols-5 justify-evenly mx-2 sm:mx-0 w-2/3`}
    >
      {skills.map((skill) => {
        return <SkillIcon key={skill.name} skill={skill} />;
      })}
    </div>
  );
}
