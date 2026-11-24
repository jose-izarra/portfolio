import { useEffect, useState } from "react";

export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export interface ContributionDay {
  /** "YYYY-MM-DD" */
  date: string;
  count: number;
  level: ContributionLevel;
}

/** Mirrors `ContributionsResponse` in `api/_lib/types.ts`. */
interface ContributionsResponse {
  source: "github" | "sample";
  total: number;
  days: ContributionDay[];
}

export interface ContributionsState {
  status: "loading" | "ready" | "error";
  source: ContributionsResponse["source"] | null;
  total: number;
  /** Oldest first, starting on a Sunday. */
  days: ContributionDay[];
}

/** Fetches the contribution calendar once; the CDN caches it, so there's no polling. */
export default function useContributions(): ContributionsState {
  const [state, setState] = useState<ContributionsState>({
    status: "loading",
    source: null,
    total: 0,
    days: [],
  });

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        const response = await fetch("/api/github/contributions", { signal: controller.signal });
        if (!response.ok) throw new Error(`Contributions request failed: ${response.status}`);
        const data = (await response.json()) as ContributionsResponse;
        setState({ status: "ready", source: data.source, total: data.total, days: data.days });
      } catch (error) {
        if (controller.signal.aborted) return;
        console.error("Contributions fetch error:", error);
        setState((previous) => ({ ...previous, status: "error" }));
      }
    };

    load();
    return () => controller.abort();
  }, []);

  return state;
}
