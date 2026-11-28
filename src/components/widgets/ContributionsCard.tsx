import { GitHubIcon } from "@/components/icons/BrandIcons";
import GlassCard from "@/components/ui/GlassCard";
import { site } from "@/data/site";
import useContributions, { type ContributionDay } from "@/hooks/useContributions";
import { cn, tw } from "@/lib/utils";
import { useMemo } from "react";

const CONTRIBUTION_WEEKS = 26;
const CELLS = CONTRIBUTION_WEEKS * 7;

const HEAT = [tw("bg-heat-0"), tw("bg-heat-1"), tw("bg-heat-2"), tw("bg-heat-3"), tw("bg-heat-4")];

const monthFormat = new Intl.DateTimeFormat("en-GB", { month: "short", timeZone: "UTC" });
const dayFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  timeZone: "UTC",
});
const countFormat = new Intl.NumberFormat("en-GB");

/** Parses "YYYY-MM-DD" as midnight UTC. */
const parseDate = (date: string) => new Date(`${date}T00:00:00Z`);

function describe({ date, count }: ContributionDay) {
  const day = dayFormat.format(parseDate(date));
  if (count === 0) return `No contributions on ${day}`;
  return `${countFormat.format(count)} contribution${count === 1 ? "" : "s"} on ${day}`;
}

/** The last `CONTRIBUTION_WEEKS` weeks of `days`, dropping whole weeks so it stays Sunday-first. */
function lastWeeks(days: ContributionDay[]) {
  return days.slice(Math.ceil(Math.max(0, days.length - CELLS) / 7) * 7);
}

/** GitHub contribution heatmap for the last 26 weeks. */
export default function ContributionsCard() {
  const { status, source, total, days } = useContributions();
  const shown = useMemo(() => lastWeeks(days), [days]);
  const ready = status === "ready" && shown.length > 0;
  // Pad the current week with blank future days
  const cells = ready ? [...shown, ...Array<null>(CELLS - shown.length).fill(null)] : null;

  let caption = "Loading contributions…";
  let label = `Contribution chart for the last ${CONTRIBUTION_WEEKS} weeks`;
  if (status === "error") {
    caption = "Couldn't load contributions";
  } else if (ready) {
    const [first, last] = [shown[0], shown[shown.length - 1]];
    const range = `${monthFormat.format(parseDate(first.date))} – ${monthFormat.format(parseDate(last.date))}`;
    const totalText = `${countFormat.format(total)} contribution${total === 1 ? "" : "s"}`;
    caption = source === "sample" ? `Sample data · ${range}` : `${totalText} · ${range}`;
    label += source === "sample" ? " (sample data)" : `: ${totalText}`;
  }

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
        aria-label={label}
        aria-busy={status === "loading"}
        className={cn(
          "grid grid-flow-col grid-rows-7 justify-between gap-y-[3px] overflow-hidden",
          status === "loading" && "animate-pulse",
        )}
      >
        {cells
          ? cells.map((day, i) => (
              <span
                key={i}
                title={day ? describe(day) : undefined}
                className={cn("size-[7px] rounded-[2px]", day && HEAT[day.level])}
              />
            ))
          : Array.from({ length: CELLS }, (_, i) => (
              <span key={i} className={cn("size-[7px] rounded-[2px]", HEAT[0])} />
            ))}
      </div>

      <div className="text-muted flex items-center justify-between gap-2 text-[11px]">
        <span>{caption}</span>
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
