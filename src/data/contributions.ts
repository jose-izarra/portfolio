/**
 * PLACEHOLDER contribution data.
 *
 * Generates a deterministic, made-up activity pattern so the heatmap has
 * something to draw. Replace `getContributionLevels` with real data (e.g.
 * GitHub's GraphQL `contributionsCollection` behind an `/api` route) and drop
 * the "Sample data" caption in `ContributionsCard`.
 */

export const CONTRIBUTION_WEEKS = 26;

/** 0 (none) – 4 (most); `null` for days that haven't happened yet. */
export type ContributionLevel = 0 | 1 | 2 | 3 | 4 | null;

const DAY_MS = 86_400_000;

/**
 * Levels for a `CONTRIBUTION_WEEKS` × 7 grid, column by column (Sunday first),
 * ending in the week that contains `today` (a UTC-midnight timestamp).
 */
export function getContributionLevels(today: number) {
  const dayOfWeek = new Date(today).getUTCDay();
  const lastIndex = (CONTRIBUTION_WEEKS - 1) * 7 + dayOfWeek;
  const start = today - lastIndex * DAY_MS;

  let seed = 20260912;
  const random = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };

  const levels: ContributionLevel[] = [];
  for (let i = 0; i < CONTRIBUTION_WEEKS * 7; i++) {
    const day = i % 7;
    const r = random();
    const isWeekend = day === 0 || day === 6;
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
    levels.push(i > lastIndex ? null : (level as ContributionLevel));
  }

  return { levels, start, end: today };
}
