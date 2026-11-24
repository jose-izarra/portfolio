# Plan: hero headline, graduation hover reveal, Toolbox icons

Three independent tasks. Do them in order on branch `redesign`, one commit each. Read `CLAUDE.md` first: tokens-only colors, use `Image` rather than `<img>`, `motion` for entrances, and Prettier runs through ESLint.

**Out of scope. The user is doing these themselves, so don't touch them:** the hero status pill (`site.status`), the hero to-do list (`todos`), and the Contact copy and email (`contact`, `site.email`). The GitHub contribution chart has its own plan (`docs/plans/github-contributions.md`).

---

## 1. Hero headline: "I build full-stack software." → "I build software."

`src/data/site.ts`:

```ts
headline: { before: "I build ", highlight: "software", after: "." },
```

`Hero.tsx` doesn't change; the accent underline moves to "software". Nothing else in `index.html`, `README.md` or `src/` mentions "full-stack" (the `experience.ts` job title "Full-Stack Developer Intern" is a real title, so keep it). Check the `<h1>` at mobile, md and lg widths: with fewer words it may now fit on one line, and that's fine.

---

## 2. Reusable hover reveal (graduation 🎉 / photo)

**Want:** hovering "Graduated Jul 2026" (the `lead` of the IE University row in Experience) pops up a 🎉, or a photo of Jose at graduation. The component must be reusable so any text can get a hover surprise later.

**Reference:** the About section of zaidalsaheb.com. That site couldn't be fetched from this environment, so the exact motion wasn't inspected. Build the common version of this pattern, and if the result clearly differs from the reference, ask the user before polishing further:

- A small card pops up **above the trigger, centered on it** (or near the cursor; anchoring to the trigger is simpler and more robust).
- Entrance: spring from `scale: 0.6, y: 8, rotate: -8, opacity: 0` to `scale: 1, y: 0, rotate: ±4–6°, opacity: 1`. Exit in reverse and faster. Use `AnimatePresence`. Reduced motion is already handled globally by `<MotionConfig reducedMotion="user">` in `App.tsx`.
- The trigger text gets a subtle affordance: a dotted underline (`decoration-dotted underline-offset-4`, `decoration-faint` or the closest token) and `cursor-default`.

### Component: `src/components/ui/HoverReveal.tsx`

```tsx
type RevealContent =
  | { emoji: string }
  | { image: { src: string; alt: string; width: number; height: number } };

interface Props {
  reveal: RevealContent;
  children: ReactNode; // the trigger text
  className?: string;
}
```

- Render a `<span className="relative inline-block">` around `children`, track `open` with `onPointerEnter` / `onPointerLeave`, and ignore `pointerType === "touch"` so a tap on the accordion row doesn't flash it.
- Popover: an absolutely positioned `motion.span` at `bottom-full left-1/2 -translate-x-1/2 mb-2` with `pointer-events-none z-20`. Use a `span`, not a `div`, because it ends up inside a `<button>`.
  - Emoji: `text-4xl` on its own, no card, or on a small `glass bg-card shadow-glass` pill. Pick whichever reads better.
  - Image: a polaroid-style frame matching `widgets/PhotoCard.tsx` (`bg-card`, padding, `shadow-glass`, rounded), about 140–160px wide, using `ui/Image`.
- The popover is decorative (`aria-hidden="true"`), so the trigger text stays the accessible content. **Don't** add interactive elements: in Experience the trigger sits inside `AccordionRow`'s `<button>`, and nested interactive content is invalid.
- Make sure no ancestor clips it. `AccordionRow`'s header button has no `overflow-hidden` (only the expanding panel does) and neither does `Section`/`Reveal`, but verify in the browser, including on the first row of the list, where it pops above the section heading area.
- Keep the 1:1 `width`/`height` props of `Image` so there's no layout shift. The popover is out of flow anyway.

### Wiring it into Experience

- `src/lib/types.ts`: add `export type RevealContent = …` (move the union here) and an optional `leadReveal?: RevealContent` on `Experience`.
- `src/data/experience.ts`: on the IE University entry, `leadReveal: { emoji: "🎉" }`. Add a comment that it can become `{ image: { src: "/images/graduation.webp", alt: "Jose at his IE University graduation", width: 320, height: 400 } }` once a photo is added. There's no graduation photo in the repo yet. **Ask the user** whether they have one. If they provide it, resize it to about 320px wide WebP before it goes into `public/images/` and keep the original in `assets-src/images/`.
- `src/components/ui/AccordionRow.tsx`: change `lead: string` to `lead: ReactNode`. Nothing else changes there.
- `src/components/sections/Experience.tsx`: `lead={item.leadReveal ? <HoverReveal reveal={item.leadReveal}>{item.dates}</HoverReveal> : item.dates}`.
- Update the `ui/` list in `CLAUDE.md` with `HoverReveal`.

**Done when:** hovering the date shows the 🎉 with the spring animation, leaving hides it, clicking still toggles the row, touch devices don't flash it, both themes look right, and lint and build pass.

---

## 3. Toolbox: real icons for the missing skills

`src/data/skills.ts` has `icon: null` (a monogram placeholder) for: **SQL, Django, Flask, Next.js, Kafka, TensorFlow, Transformers, Supabase, Deno.**

Source: [Simple Icons](https://simpleicons.org) (CC0). Every one below exists in `simple-icons@16.38.1` (checked). Simple Icons SVGs are single-color paths with **no fill**, so add `fill="#<hex>"` to the `<svg>` of each downloaded file. Get them with `npm pack simple-icons@16.38.1` in a scratch dir (from `package/icons/<slug>.svg`) or from `https://cdn.jsdelivr.net/npm/simple-icons@16.38.1/icons/<slug>.svg`. **Don't** add simple-icons as a dependency; just commit the SVG files.

| Skill | File to add in `public/icons/` | Simple Icons slug | Fill |
|---|---|---|---|
| Django | `django.svg` | `django` | `#092E20` |
| Flask | `flask.svg` | `flask` | `#000000` (brand hex `3BABC3` looks off; the Flask logo is black) |
| Next.js | `nextjs.svg` | `nextdotjs` | `#000000` |
| Kafka | `kafka.svg` | `apachekafka` | `#231F20` |
| TensorFlow | `tensorflow.svg` | `tensorflow` | `#FF6F00` |
| Transformers | `huggingface.svg` | `huggingface` | `#FFD21E`. Simple Icons' version is a flat silhouette; if it reads poorly on the tile, use the official multicolor 🤗 logo SVG instead |
| Supabase | `supabase.svg` | `supabase` | `#3FCF8E` |
| Deno | `deno.svg` | `deno` | `#000000` |
| SQL | `sql.svg` | — no logo for generic SQL | Copy lucide's `database` icon SVG (from `lucide-react`'s source or lucide.dev), set `stroke="#336791"` (Postgres blue) |

Notes:
- The icon tile (`bg-icon-tile`) is light in **both** themes (`#eef4f2` / `#dbe6e3` in `tokens.css`), so black icons stay visible in dark mode. No per-theme icon variants are needed.
- Then set each `icon: "/icons/<file>"` in `skills.ts`. No component changes. Once no `null` is left, the placeholder branch in `Toolbox.tsx`'s `SkillIcon` can stay as a fallback.
- Optional consistency pass: `public/icons/*.svg` mixes sources, some with 800px intrinsic sizes and SVG Repo comments. That's fine because they render at 18px, but strip the `<?xml>`/comment headers from the new files.

**Done when:** every Toolbox item shows a recognisable logo at 18px in light and dark mode (take a screenshot of `#toolbox` in each theme and look at it), and lint and build pass.
