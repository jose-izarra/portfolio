import type { ContributionDay, ContributionLevel, ContributionsResponse } from "./types.ts";

export const CONTRIBUTION_WEEKS = 26;

const DAY_MS = 86_400_000;
const TIME_ZONE = "Europe/Madrid";

/** A plausible contribution count for each level, for the tooltips. */
const SAMPLE_COUNTS = [0, 1, 3, 6, 10] as const;

/** UTC-midnight timestamp of today's date in Madrid. */
function madridToday(now: Date): number {
  const [year, month, day] = new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE })
    .format(now)
    .split("-")
    .map(Number);
  return Date.UTC(year, month - 1, day);
}

/**
 * Deterministic, made-up activity for the last `CONTRIBUTION_WEEKS` weeks (Sunday first,
 * ending today). Served by `/api/github/contributions` while no `GITHUB_TOKEN` is configured.
 */
export function getSampleContributions(now = new Date()): ContributionsResponse {
  const today = madridToday(now);
  const lastIndex = (CONTRIBUTION_WEEKS - 1) * 7 + new Date(today).getUTCDay();
  const start = today - lastIndex * DAY_MS;

  let seed = 20260912;
  const random = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };

  const days: ContributionDay[] = [];
  for (let i = 0; i <= lastIndex; i++) {
    const weekday = i % 7;
    const r = random();
    const isWeekend = weekday === 0 || weekday === 6;
    let level: number = isWeekend
      ? r < 0.65
        ? 0
        : r < 0.9
          ? 1
          : 2
      : r < 0.16
        ? 0
        : r < 0.42
          ? 1
          : r < 0.7
            ? 2
            : r < 0.88
              ? 3
              : 4;
    if (level > 0 && Math.sin(i / 23) > 0.35) level = Math.min(4, level + 1);

    days.push({
      date: new Date(start + i * DAY_MS).toISOString().slice(0, 10),
      count: SAMPLE_COUNTS[level],
      level: level as ContributionLevel,
    });
  }

  return {
    source: "sample",
    total: days.reduce((sum, day) => sum + day.count, 0),
    days,
  };
}
