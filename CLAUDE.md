# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jose Izarra's personal portfolio site (joseizarra.com), built with Vite 8, React 19, React Router, TypeScript (strict), and Tailwind CSS v4. A client-rendered SPA plus Vercel Functions for the API. Deployed on Vercel.

## Commands

- `npm run dev` — Vite dev server; also serves `api/` handlers locally (see below)
- `npm run build` — `tsc -b` (type-checks the app, API and Vite config projects) then `vite build` to `dist/`
- `npm run preview` — serves the production build, also with `api/` handlers
- `npm run lint` / `npm run lint:fix` — ESLint (typescript-eslint, react-hooks, react-refresh, a curated jsx-a11y subset). Prettier runs *through* ESLint via `eslint-plugin-prettier`, so formatting violations are lint errors.

There is no test suite. CI (`.github/workflows/pr.yml`) only runs `npm run lint` on PRs to `main`, using the Node version from `.nvmrc` (v26). TypeScript is pinned to 6.0.x because typescript-eslint doesn't support TS 7 yet.

## Formatting

Prettier config (`.prettierrc.mjs`): double quotes, trailing commas, `printWidth: 100`, and `prettier-plugin-tailwindcss` for class sorting. The plugin also sorts classes inside `tw\`...\`` / `tw("...")` calls — `tw` from `src/lib/utils.ts` is an identity helper used purely to get class sorting on class strings stored in variables. Use `cn()` (clsx + tailwind-merge) for conditional class composition.

## Architecture

Two separate environments, each with its own tsconfig, and ESLint forbids importing across them:
- `src/` — browser app (`tsconfig.app.json`, DOM types, `@/*` → `src/*`)
- `api/` — Vercel Functions (`tsconfig.api.json`, Node types only)

### Pages
- `index.html` — the HTML shell. It holds all SEO/OpenGraph meta tags, the favicon link, Google Analytics (`G-RCRTV0NMCG`) and the inline script that sets `<html data-theme>` before first paint (saved choice, else the OS setting).
- `src/main.tsx` — entry: fonts (`@fontsource-variable/bricolage-grotesque` with the latin subset preloaded, `@fontsource-variable/jetbrains-mono`), `globals.css`, `BrowserRouter`.
- `src/App.tsx` — global `Navbar` and `Footer` around the routes (`/` → `pages/Home.tsx`, `/cv` → `pages/MyCV.tsx` embedding the PDF from `/public`, `*` → `pages/NotFound.tsx`), Vercel Analytics + Speed Insights, and motion's `MotionConfig reducedMotion="user"`.
- `vercel.json` rewrites every non-`/api` path to `index.html` (SPA fallback).

### Components (`src/components/`)
- `layout/` — `Navbar` (sticky menu bar, section links, Madrid clock), `ThemeToggle`, `Footer`.
- `sections/` — the home page in order: `Hero`, `About`, `Experience`, `Projects`, `Toolbox`, `Contact`. Section ids (`about`, `experience`, …) are the navbar anchors, listed in `navLinks` in `data/site.ts`.
- `widgets/` — the hero cards: `ClockCard`, `SpotifyCard`, `ContributionsCard`, `PhotoCard`, `TodoCard`, `Dock`.
- `ui/` — primitives: `GlassCard` (the frosted surface every card is built on), `Section`, `AccordionRow` (shared by Experience and Projects; the parent owns which row is open), `Reveal` (scroll-in animation), `Media` (image / `.mp4` / placeholder), `Placeholder`, `Tag`, `Image`.
- `icons/BrandIcons.tsx` — GitHub/LinkedIn/Spotify marks (not in lucide-react).

Hooks: `useTheme` (reads/toggles `data-theme`, persists to `localStorage`), `useNow` (one shared 1s ticker) and `useMadridTime` on top of it, `useSpotify` (polls `/api/spotify`).

### Content data
Content lives in typed TypeScript modules in `src/data/`, typed by interfaces in `src/lib/types.ts`. Editing site content usually means editing these:
- `site.ts` — name, email, socials, nav links, hero copy, hero photo, to-do list, About facts, contact copy.
- `experience.ts`, `projects.ts`, `skills.ts` — the Experience, Projects and Toolbox lists.
- `contributions.ts` — **placeholder** generator for the hero heatmap (labelled "Sample data" in the UI); replace with real GitHub data.

Placeholders: bracketed strings like `"[University]"` are copy to fill in. An `image: null` / `src: null` / `icon: null` renders a dashed placeholder (`ui/Placeholder`, or a monogram for skills). The About paragraphs are JSX in `sections/About.tsx` because they contain inline links.

Project images go in `public/images/`, skill icons in `public/icons/`. `assets-src/` holds full-size originals that are not deployed.
- Animated project previews are MP4s, not GIFs (`ui/Media` plays any `.mp4` as a muted looping video). Source GIFs are kept in `assets-src/images/`. Convert with `ffmpeg -i in.gif -an -vf "scale=500:-2:flags=lanczos" -c:v libx264 -pix_fmt yuv420p -crf 26 -movflags +faststart out.mp4`.

### Images
Use `src/components/ui/Image.tsx` rather than a bare `<img>`. It's a thin wrapper that requires `width`/`height` (no layout shift), lazy-loads with async decoding by default, and `priority` preloads the image with high fetch priority. There is no runtime optimizer: files in `public/` are served as-is, so shrink large images before adding them.

### API (server-side proxies so secrets stay off the client)
Vercel Functions using Web-standard handlers (`export async function GET(request: Request): Response`). Files and folders prefixed with `_` (e.g. `api/_lib/types.ts`) are helpers, not routes. Locally, `vite-plugins/api-dev-server.ts` mounts the same handlers on `/api` in `vite` and `vite preview`, loading all `.env` vars into `process.env`. Unknown `/api/*` paths return 404.
- `api/spotify/index.ts` — exchanges a stored refresh token for an access token and returns the currently-playing track. Consumed client-side by `SpotifyCard`.
- `api/spotify/auth.ts` + `api/spotify/callback.ts` — one-time OAuth flow used to obtain the refresh token. **Local-only**: listed in `.vercelignore` so they're never deployed; run the flow with `npm run dev`. `/api/spotify/auth?secret=<SPOTIFY_AUTH_SECRET>` redirects to Spotify; the callback returns the tokens as JSON so the `refresh_token` can be copied into env vars.

### Styling
Tailwind v4 (via `@tailwindcss/vite`), configured CSS-first — there is no `tailwind.config.*`.
- `src/styles/tokens.css` — **the design palette**. Every color/shadow is a CSS variable defined for light (`:root`) and dark (`[data-theme="dark"]`). Change colors here only.
- `src/globals.css` — maps those variables to Tailwind utilities in `@theme inline` (`bg-background`, `text-foreground`, `text-muted`, `border-border`, `bg-surface`, `bg-accent`, `bg-card`, `shadow-glass`, …), sets fonts (`font-sans` Bricolage Grotesque, `font-mono` JetBrains Mono), and defines the `glass` (backdrop blur), `bg-dots` and `link-underline` utilities. `dark:` follows `data-theme`, not the OS.
- Never use literal colors in components; add a token to both themes instead.
- Animation: `motion` for entrances (`Reveal`, hero stagger), accordion height and the theme-toggle swap; plain CSS transitions for hovers (`ease-smooth`). Keep it subtle.

## Environment Variables

- `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN` — now-playing card
- `SPOTIFY_REDIRECT_URI`, `SPOTIFY_AUTH_SECRET` — only needed for the OAuth token-acquisition flow
