import AccordionRow from "@/components/ui/AccordionRow";
import Media from "@/components/ui/Media";
import Section from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";
import { projects, PROJECTS_PREVIEW_COUNT } from "@/data/projects";
import { cn } from "@/lib/utils";
import { useState } from "react";

function Blob({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full opacity-(--blob-opacity) blur-[68px]",
        className,
      )}
    />
  );
}

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? projects : projects.slice(0, PROJECTS_PREVIEW_COUNT);
  const hiddenCount = projects.length - PROJECTS_PREVIEW_COUNT;

  const toggleShowAll = () => {
    // Collapse a row that is about to be hidden
    if (showAll && openIndex !== null && openIndex >= PROJECTS_PREVIEW_COUNT) setOpenIndex(null);
    setShowAll(!showAll);
  };

  return (
    <Section id="projects" title="Projects">
      <div className="relative">
        <Blob className="bg-accent -top-9 -left-12 size-[280px]" />
        <Blob className="bg-accent-alt -right-10 -bottom-12 size-80" />

        <div className="glass bg-glass border-glass-edge shadow-glass-panel relative flex flex-col rounded-[28px] border px-2.5 py-2">
          {visible.map((project, i) => (
            <AccordionRow
              key={project.name}
              lead={project.year}
              title={project.name}
              subtitle={project.tagline}
              aside={project.meta}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              className="last:border-b-0"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 flex-col gap-3.5">
                  <p className="text-muted text-[15px] text-pretty">{project.description}</p>
                  <TagList tags={project.tags} />
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline self-start text-sm font-semibold"
                    >
                      {project.url.includes("github.com") ? "View on GitHub" : "Visit site"} ↗
                    </a>
                  )}
                </div>
                <Media
                  src={project.image}
                  alt={project.image ? `${project.name} preview` : "Project image"}
                  width={144}
                  height={144}
                  className="size-36 shrink-0 rounded-2xl"
                />
              </div>
            </AccordionRow>
          ))}
        </div>
      </div>

      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={toggleShowAll}
          aria-expanded={showAll}
          className="text-muted hover:text-foreground -mt-2 h-11 self-start px-3 text-sm font-semibold transition-colors duration-150"
        >
          {showAll ? "Show less ↑" : `Show ${hiddenCount} more ↓`}
        </button>
      )}
    </Section>
  );
}
