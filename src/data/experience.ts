import type { Experience } from "@/lib/types";

/** Newest first. Bracketed values are placeholders to fill in. */
export const experience: Experience[] = [
  {
    dates: "[Start] – Present",
    role: "Software Developer",
    org: "MVST",
    description:
      "Full-stack developer building products for startup clients, from first prototype to production.",
    highlights: [
      "Built LIESL, a marketplace that connects dog owners with sitters, across web and mobile.",
      "Built KEYONIQ, a dashboard for doctors and patients, plus a service that generates medical PDF reports automatically.",
    ],
    tags: ["Next.js", "React Native", "NestJS", "React", "Azure"],
  },
  {
    dates: "[Start] – [End]",
    role: "BSc Computer Science",
    org: "[University]",
    description:
      "Team projects across compilers, natural language processing and recommender systems.",
    highlights: ["Shipped four team projects, from a C-based DSL to an ML recommendation engine."],
    tags: ["Python", "C", "C++", "TensorFlow"],
  },
];
