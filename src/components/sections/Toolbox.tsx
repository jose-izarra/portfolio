import Image from "@/components/ui/Image";
import Section from "@/components/ui/Section";
import { skillGroups } from "@/data/skills";
import type { Skill } from "@/lib/types";

function SkillIcon({ skill }: { skill: Skill }) {
  if (!skill.icon) {
    // Placeholder until an icon is added to public/icons/
    return (
      <span
        aria-hidden="true"
        className="border-faint text-muted flex size-8 shrink-0 items-center justify-center rounded-[9px] border border-dashed text-xs font-semibold"
      >
        {skill.name.charAt(0)}
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="bg-icon-tile flex size-8 shrink-0 items-center justify-center rounded-[9px]"
    >
      <Image
        src={skill.icon}
        alt=""
        width={18}
        height={18}
        className="size-[18px] object-contain"
      />
    </span>
  );
}

export default function Toolbox() {
  return (
    <Section id="toolbox" title="Toolbox">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-x-6 gap-y-8">
        {skillGroups.map((group) => (
          <div key={group.name} className="flex flex-col gap-3.5">
            <h3 className="font-extrabold">{group.name}</h3>
            <ul className="text-muted flex flex-col gap-2.5 text-[15px]">
              {group.items.map((skill) => (
                <li
                  key={skill.name}
                  className="group hover:text-foreground flex items-center gap-3 transition-colors duration-150"
                >
                  <span className="ease-smooth transition-transform duration-200 group-hover:scale-110">
                    <SkillIcon skill={skill} />
                  </span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
