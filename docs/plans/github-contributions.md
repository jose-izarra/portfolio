# Plan: real GitHub data in the hero contribution chart

**Goal:** `ContributionsCard` shows Jose's real GitHub contribution calendar for the last 26 weeks. It stays on sample data until a token is configured. The user will provide the token later, so the feature must work end to end on mock data now and switch to real data just by setting an env var.

Branch: `redesign`. Read `CLAUDE.md` first (two tsconfig environments, no imports between `src/` and `api/`, tokens-only colors, Prettier through ESLint).

## Current state

- `src/components/widgets/ContributionsCard.tsx` renders a 7-row grid (`grid-flow-col grid-rows-7`) of `CONTRIBUTION_WEEKS × 7` cells, Sunday first. It colors cells with `bg-heat-0…4` and leaves future days (`null`) blank. The caption reads "Sample data · {range}".
- `src/data/contributions.ts` deterministically generates the fake levels. It takes `dayStart` (a UTC-midnight timestamp for "today" in Madrid) from `useMadridTime`.
- `api/spotify/index.ts` and `src/hooks/useSpotify.ts` already follow the pattern to copy: an API route that hides the secret, plus a client hook with `status: "loading" | "ready" | "error"`.
- `api/_lib/types.ts` has an unused `CommitResponse` type. Leave it alone.

## Design

### 1. API route: `api/github/contributions.ts` → `GET /api/github/contributions`

- Env: `GITHUB_TOKEN` (fine-grained PAT; no repo permissions are needed to read a public contribution calendar) and `GITHUB_USERNAME` (optional, default `"jose-izarra"`; `api/` can't import `src/data/site.ts`).
- **No token → serve mock data**, not an error: return the sample payload with `source: "sample"`. This is the "use mock data for now" mode, and it keeps local dev working without secrets.
- With a token, POST to `https://api.github.com/graphql` with headers `Authorization: Bearer ${token}` and a `User-Agent` (GitHub requires one):

  ```graphql
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
  ```

  - `to` = now. `from` = the Sunday that starts the week 25 weeks before the current week, at 00:00 UTC. That gives exactly 26 Sunday-first columns, matching the current grid. Compute it in the handler.
  - Map `contributionLevel` to `0…4`: `NONE → 0`, `FIRST_QUARTILE → 1`, `SECOND_QUARTILE → 2`, `THIRD_QUARTILE → 3`, `FOURTH_QUARTILE → 4`. Use GitHub's own levels so the chart matches the profile page.
  - Treat GraphQL `errors` and a non-OK status as failures: log them and return `502`.
- Response shape (define the type in `api/_lib/types.ts` and mirror it in the client hook, the same way Spotify does):

  ```ts
  interface ContributionsResponse {
    source: "github" | "sample";
    total: number;             // total contributions in the range
    days: { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }[]; // "YYYY-MM-DD", oldest first, starts on a Sunday
  }
  ```

- Caching: send `Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400`. Vercel's CDN then calls GitHub at most about once an hour, and the token never reaches the client. Send the same header for sample responses, or `no-store`; either is fine.
- Mock generator: move the random logic from `src/data/contributions.ts` into `api/_lib/sample-contributions.ts`. It must live under `api/` because `src/` imports are forbidden there, and the `_` prefix keeps it from becoming a route. Have it emit the same `days[]` shape (dates plus levels, with a plausible `count` per level). Then delete `src/data/contributions.ts`, or keep only `CONTRIBUTION_WEEKS` and the `ContributionLevel` type if the card still needs them.
- The route is deployable (do **not** add it to `.vercelignore`). `vite-plugins/api-dev-server.ts` mounts it automatically in `npm run dev` and `npm run preview`.

### 2. Client hook: `src/hooks/useContributions.ts`

- Fetch `/api/github/contributions` once on mount. Don't poll: the data changes slowly and the CDN caches it. Use an `AbortController` cleanup, like `useSpotify`.
- Return `{ status: "loading" | "ready" | "error", source, total, days }`.

### 3. `ContributionsCard.tsx`

- Build the grid from `days`. Pad the end with `null` cells up to `CONTRIBUTION_WEEKS * 7` so the last column holds the current week, with future days blank as today. GitHub's last week can be partial, so pad from the number of days it returns.
- **Loading:** render the full grid in `bg-heat-0` (same footprint, no layout shift). An `animate-pulse` on the grid is optional.
- **Error:** keep the empty `heat-0` grid and change the caption to "Couldn't load contributions". Don't silently show fake data as if it were real.
- Caption:
  - `source === "sample"` → keep `Sample data · {range}`
  - `source === "github"` → `{total} contributions · {range}`, e.g. "412 contributions · Jun – Nov". Format the number with `Intl.NumberFormat`.
  - `range` comes from the first and last dates in `days` (parse `"YYYY-MM-DD"` as UTC). Keep the existing `monthFormat`.
- Per-cell `title` tooltip such as `"3 contributions on 12 Nov"` (or "No contributions on …"). Keep the `role="img"` grid, and update its `aria-label`: drop "(sample data)" when the data is real, add the total.
- The card no longer needs `useMadridTime`. Remove it if it becomes unused.

### 4. Docs and config

- `CLAUDE.md`: under *Environment Variables*, add `GITHUB_TOKEN` (and optional `GITHUB_USERNAME`) for the contributions card. Under *Content data*, remove the "placeholder generator" note for `contributions.ts`. Under *API*, describe the new route and its sample fallback.
- No new dependencies: use plain `fetch`, not axios.

## Handing the token over (for the user, once the code is merged)

1. Create a fine-grained token at GitHub → Settings → Developer settings → Fine-grained tokens. Public repositories, read-only, no extra permissions.
2. Optional: to count private-repo work, enable *Profile → Contributions & activity → Include private contributions on my profile*.
3. Add `GITHUB_TOKEN` in Vercel (Production + Preview) and in a local `.env`. No code change is needed; the caption switches from "Sample data" automatically.

## Done when

- `npm run lint` and `npm run build` pass.
- With no `GITHUB_TOKEN`: `npm run dev`, then `/api/github/contributions` returns `source: "sample"`, 26 weeks of days starting on a Sunday, and the card looks as it does today.
- With an invalid token: the route returns 502, and the card shows the empty grid plus the error caption with no console spam beyond one error.
- Light and dark themes both look right. Check the hero on mobile width too.
- If a real token is available while testing: the counts match github.com/jose-izarra for a couple of spot-checked days.
