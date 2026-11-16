import { GitHubIcon } from "@/components/icons/BrandIcons";
import GlassCard from "@/components/ui/GlassCard";
import { CONTRIBUTION_WEEKS, getContributionLevels } from "@/data/contributions";
import { site } from "@/data/site";
import useMadridTime from "@/hooks/useMadridTime";
import { cn, tw } from "@/lib/utils";
import { useMemo } from "react";

const HEAT = [tw("bg-heat-0"), tw("bg-heat-1"), tw("bg-heat-2"), tw("bg-heat-3"), tw("bg-heat-4")];

const monthFormat = new Intl.DateTimeFormat("en-GB", { month: "short", timeZone: "UTC" });

/** GitHub-style contribution heatmap for the last 26 weeks. */
export default function ContributionsCard() {
  const { dayStart } = useMadridTime();
  const { levels, start, end } = useMemo(() => getContributionLevels(dayStart), [dayStart]);
  const range = `${monthFormat.format(start)} – ${monthFormat.format(end)}`;

  return (
    <GlassCard lift className="flex flex-col gap-3 p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="text-muted flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase">
          <GitHubIcon className="text-foreground size-[13px]" />
          Contributions
        </span>
        <a
          href={site.socials.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground text-xs font-medium transition-colors duration-150"
        >
          @{site.socials.github.handle} ↗
        </a>
      </div>

      <div
        role="img"
        aria-label={`Contribution chart for the last ${CONTRIBUTION_WEEKS} weeks (sample data)`}
        className="grid grid-flow-col grid-rows-7 justify-between gap-y-[3px] overflow-hidden"
      >
        {levels.map((level, i) => (
          <span key={i} className={cn("size-[7px] rounded-[2px]", level !== null && HEAT[level])} />
        ))}
      </div>

      <div className="text-muted flex items-center justify-between gap-2 text-[11px]">
        {/* Placeholder data: see src/data/contributions.ts */}
        <span>Sample data · {range}</span>
        <span aria-hidden="true" className="flex items-center gap-[3px]">
          Less
          {HEAT.map((heat) => (
            <span key={heat} className={cn("size-[7px] rounded-[2px]", heat)} />
          ))}
          More
        </span>
      </div>
    </GlassCard>
  );
}
