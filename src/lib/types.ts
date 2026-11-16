export interface NavLink {
  label: string;
  /** Section id on the home page, without the `#`. */
  id: string;
}

export interface Fact {
  label: string;
  value: string;
  /** Show the accent status dot before the value. */
  highlight?: boolean;
}

export interface Experience {
  dates: string;
  role: string;
  org: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface Project {
  name: string;
  year: string;
  /** One-line summary shown next to the name. */
  tagline: string;
  /** Team size, duration, client… shown in the side column when expanded. */
  meta: string;
  description: string;
  tags: string[];
  /** Repo or live link. `null` renders no link. */
  url: string | null;
  /** Image or `.mp4` in `public/images/`. `null` renders a placeholder. */
  image: string | null;
}

export interface Skill {
  name: string;
  /** Icon in `public/icons/`. `null` renders a monogram placeholder. */
  icon: string | null;
}

export interface SkillGroup {
  name: string;
  items: Skill[];
}

export interface Todo {
  text: string;
  note: string;
  done: boolean;
}

export interface Photo {
  /** Image in `public/images/`. `null` renders a placeholder. */
  src: string | null;
  alt: string;
  title: string;
  caption: string;
}
