# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jose Izarra's personal portfolio site (joseizarra.com), built with Vite 8, React 19, React Router, TypeScript (strict), and Tailwind CSS v4. A client-rendered SPA plus Vercel Functions for the API. Deployed on Vercel.

## Commands

- `npm run dev` — Vite dev server; also serves `api/` handlers locally (see below)
- `npm run build` — `tsc -b` (type-checks the app, API and Vite config projects) then `vite build` to `dist/`
- `npm run preview` — serves the production build, also with `api/` handlers
- `npm run lint` / `npm run lint:fix` — ESLint (typescript-eslint, react-hooks, react-refresh, the jsx-a11y subset Next used to enable). Prettier runs *through* ESLint via `eslint-plugin-prettier`, so formatting violations are lint errors.

There is no test suite. CI (`.github/workflows/pr.yml`) only runs `npm run lint` on PRs to `main`, using the Node version from `.nvmrc` (v24). TypeScript is pinned to 6.0.x because typescript-eslint doesn't support TS 7 yet.

## Formatting

Prettier config (`.prettierrc.mjs`): double quotes, trailing commas, `printWidth: 100`, and `prettier-plugin-tailwindcss` for class sorting. The plugin also sorts classes inside `tw\`...\`` / `tw("...")` calls — `tw` from `src/lib/utils.ts` is an identity helper used purely to get class sorting on class strings stored in variables. Use `cn()` (clsx + tailwind-merge) for conditional class composition.

## Architecture

Two separate environments, each with its own tsconfig, and ESLint forbids importing across them:
- `src/` — browser app (`tsconfig.app.json`, DOM types, `@/*` → `src/*`)
- `api/` — Vercel Functions (`tsconfig.api.json`, Node types only)

### Pages
- `index.html` — the HTML shell. It holds all SEO/OpenGraph meta tags, the favicon link and Google Analytics (`G-RCRTV0NMCG`).
- `src/main.tsx` — entry: Inter font (`@fontsource-variable/inter`, latin subset preloaded), `globals.css`, `BrowserRouter`.
- `src/App.tsx` — routes (`/` → `pages/Home.tsx`, `/cv` → `pages/MyCV.tsx` embedding the PDF from `/public`, `*` → `pages/NotFound.tsx`), Vercel Analytics + Speed Insights, and the global `Footer` (which contains `SpotifyCard`).
- `vercel.json` rewrites every non-`/api` path to `index.html` (SPA fallback).

### Content data
Content lives in typed TypeScript modules in `src/data/` (`projects.ts`, `skills.ts`, `background-pics.ts`), typed by interfaces in `src/lib/types.ts`. Editing site content usually means editing these arrays; project images go in `public/images/`, skill icons in `public/icons/`. `assets-src/` holds full-size originals that are not deployed.
- Hero background pictures (`background-pics.ts`) point at 300px-tall thumbnails in `public/images/hero/`. To add one, put the original in `assets-src/images/` and run `scripts/hero-thumbnails.sh assets-src/images/<name>.webp` (needs `cwebp`).
- Animated project previews are MP4s, not GIFs (`ProjectCard` plays any `.mp4` `image_url` as a muted looping video). Source GIFs are kept in `assets-src/images/`. Convert with `ffmpeg -i in.gif -an -vf "scale=500:-2:flags=lanczos" -c:v libx264 -pix_fmt yuv420p -crf 26 -movflags +faststart out.mp4`.

### Images
Use `src/components/Image.tsx` rather than a bare `<img>`. It's a thin wrapper that requires `width`/`height` (no layout shift), lazy-loads with async decoding by default, and `priority` preloads the image with high fetch priority (used for the LCP hero picture). There is no runtime optimizer: files in `public/` are served as-is, so shrink large images before adding them (see `scripts/hero-thumbnails.sh`).

### API (server-side proxies so secrets stay off the client)
Vercel Functions using Web-standard handlers (`export async function GET(request: Request): Response`). Files and folders prefixed with `_` (e.g. `api/_lib/types.ts`) are helpers, not routes. Locally, `vite-plugins/api-dev-server.ts` mounts the same handlers on `/api` in `vite` and `vite preview`, loading all `.env` vars into `process.env`. Unknown `/api/*` paths return 404.
- `api/github.ts` — searches GitHub commits by `author:jose-izarra` and returns total count + most recent repo. Consumed client-side by `StatsCard`. **Throws at module load if `PAT_1` is unset**, so that route returns 500 without it.
- `api/spotify/index.ts` — exchanges a stored refresh token for an access token and returns the currently-playing track. Consumed client-side by `SpotifyCard`.
- `api/spotify/auth.ts` + `api/spotify/callback.ts` — one-time OAuth flow used to obtain the refresh token. `/api/spotify/auth?secret=<SPOTIFY_AUTH_SECRET>` redirects to Spotify; the callback returns the tokens as JSON so the `refresh_token` can be copied into env vars.

### Styling
Tailwind v4 (via `@tailwindcss/vite`) is configured CSS-first in `src/globals.css` — there is no `tailwind.config.*`. Theme tokens (colors like `primary-400/500/600`, `background`, `border`; fonts `inter`/`lora`; custom shadows; `move-left`/`move-right` marquee animations) are defined in the `@theme` block there. `tailwindcss-animate` is loaded via `@plugin`. Lora comes from the Google Fonts `@import` at the top of that file.

## Environment Variables

- `PAT_1` — GitHub personal access token (required; see above)
- `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN` — now-playing card
- `SPOTIFY_REDIRECT_URI`, `SPOTIFY_AUTH_SECRET` — only needed for the OAuth token-acquisition flow
