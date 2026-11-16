import type { Fact, NavLink, Photo, Todo } from "@/lib/types";

/**
 * Site-wide profile content. Bracketed values like "[University]" are
 * placeholders — replace them with the real text.
 */
export const site = {
  name: "Jose Izarra",
  initials: "JI",
  role: "Software Engineer",
  email: "jaiza0912@gmail.com",
  city: "Madrid",
  timeZone: "Europe/Madrid",
  status: "Always building something new",
  cvPath: "/cv",
  cvFile: "/IECV_Jose_Izarra.pdf",
  socials: {
    github: { handle: "jose-izarra", url: "https://github.com/jose-izarra" },
    linkedin: { handle: "in/jose-izarra", url: "https://www.linkedin.com/in/jose-izarra/" },
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Toolbox", id: "toolbox" },
  { label: "Contact", id: "contact" },
];

export const hero = {
  /** The word in the headline that gets the accent underline. */
  headline: { before: "I build ", highlight: "full-stack", after: " software." },
  greeting: "I'm Jose.",
  intro:
    "Recent Computer Science graduate in Madrid. I design APIs, ship web and mobile apps, and wire machine learning into real products.",
};

/** Polaroid-style card in the hero. Set `src` to an image in `public/images/`. */
export const heroPhoto: Photo = {
  src: null,
  alt: "[Describe the photo]",
  title: "Morning fuel",
  caption: "Madrid",
};

export const todos: Todo[] = [
  { text: "Ship the new portfolio", note: "Today", done: false },
  { text: "Hook up the Spotify widget", note: "Today", done: true },
  { text: "Reply to emails", note: "Tomorrow", done: false },
  { text: "Buy more espresso beans", note: "This week", done: false },
];

export const facts: Fact[] = [
  { label: "Based in", value: "Madrid, Spain" },
  { label: "Studied", value: "CS, [University]" },
  { label: "Last role", value: "MVST" },
  { label: "Right now", value: "Shipping side projects", highlight: true },
];

export const contact = {
  lead: "Building something, or stuck on a bug?",
  leadMuted: "My inbox is open.",
  body: "I'm always up for talking software, side projects or a good idea — tell me what you're working on.",
};
