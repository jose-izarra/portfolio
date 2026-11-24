import AccordionRow from "@/components/ui/AccordionRow";
import HoverReveal from "@/components/ui/HoverReveal";
import Section from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";
import { experience } from "@/data/experience";
import { useState } from "react";

export default function Experience() {
  // Index of the expanded row, or null when all are collapsed
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col border-t">
        {experience.map((item, i) => (
          <AccordionRow
            key={`${item.org}-${item.role}`}
            lead={
              item.leadReveal ? (
                <HoverReveal reveal={item.leadReveal}>{item.dates}</HoverReveal>
              ) : (
                item.dates
              )
            }
            title={item.role}
            subtitle={item.org}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <p className="text-muted text-[15px] text-pretty">{item.description}</p>
            <ul className="flex flex-col gap-2 text-[15px]">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2.5">
                  <span aria-hidden="true" className="text-accent">
                    →
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <TagList tags={item.tags} />
          </AccordionRow>
        ))}
      </div>
    </Section>
  );
}
