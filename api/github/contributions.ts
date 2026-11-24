import { CONTRIBUTION_WEEKS, getSampleContributions } from "../_lib/sample-contributions.ts";
import type {
  ContributionLevel,
  ContributionsResponse,
  GitHubContributionsQueryResponse,
} from "../_lib/types.ts";

const DAY_MS = 86_400_000;

// The CDN calls GitHub at most about once an hour; the token never reaches the client
const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
};

const QUERY = `
  query ($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks { contributionDays { date contributionCount contributionLevel } }
        }
      }
    }
  }
`;

const LEVELS: Record<string, ContributionLevel> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

/** Midnight UTC on the Sunday that starts the week `CONTRIBUTION_WEEKS - 1` weeks ago. */
function rangeStart(now: Date): Date {
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const thisSunday = today - now.getUTCDay() * DAY_MS;
  return new Date(thisSunday - (CONTRIBUTION_WEEKS - 1) * 7 * DAY_MS);
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const login = process.env.GITHUB_USERNAME || "jose-izarra";

  // No token configured yet: serve the sample calendar so the card still has something to draw
  if (!token) {
    return Response.json(getSampleContributions(), { headers: CACHE_HEADERS });
  }

  const now = new Date();

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "portfolio-contributions",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { login, from: rangeStart(now).toISOString(), to: now.toISOString() },
      }),
    });

    if (!response.ok) {
      throw new Error(`GitHub responded ${response.status}: ${await response.text()}`);
    }

    const { data, errors } = (await response.json()) as GitHubContributionsQueryResponse;
    if (errors?.length) {
      throw new Error(`GitHub GraphQL errors: ${errors.map((e) => e.message).join("; ")}`);
    }
    if (!data?.user) {
      throw new Error(`GitHub user "${login}" not found`);
    }

    const calendar = data.user.contributionsCollection.contributionCalendar;
    const body: ContributionsResponse = {
      source: "github",
      total: calendar.totalContributions,
      days: calendar.weeks.flatMap((week) =>
        week.contributionDays.map((day) => ({
          date: day.date,
          count: day.contributionCount,
          level: LEVELS[day.contributionLevel] ?? 0,
        })),
      ),
    };

    return Response.json(body, { headers: CACHE_HEADERS });
  } catch (error) {
    console.error("GitHub contributions error:", error);
    return Response.json(
      { error: "Failed to fetch GitHub contributions" },
      { status: 502, headers: { "Cache-Control": "no-store" } },
    );
  }
}
