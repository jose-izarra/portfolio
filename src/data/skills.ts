import type { SkillGroup } from "@/lib/types";

/** `icon: null` renders a monogram placeholder until an icon is added to `public/icons/`. */
export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    items: [
      { name: "Python", icon: "/icons/python.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "SQL", icon: null },
      { name: "C++", icon: "/icons/cpp.svg" },
      { name: "C", icon: "/icons/c.svg" },
    ],
  },
  {
    name: "Frameworks",
    items: [
      { name: "Django", icon: null },
      { name: "Flask", icon: null },
      { name: "FastAPI", icon: "/icons/fastapi.png" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "React Native", icon: "/icons/react.svg" },
      { name: "Next.js", icon: null },
      { name: "NestJS", icon: "/icons/nestjs.svg" },
    ],
  },
  {
    name: "Data & ML",
    items: [
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "Kafka", icon: null },
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "TensorFlow", icon: null },
      { name: "Transformers", icon: null },
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "GitHub Actions", icon: "/icons/github-actions.svg" },
      { name: "Supabase", icon: null },
      { name: "Deno", icon: null },
      { name: "AWS", icon: "/icons/aws.svg" },
      { name: "Azure", icon: "/icons/azure.svg" },
      { name: "Firebase", icon: "/icons/firebase.svg" },
      { name: "Linux", icon: "/icons/linux.svg" },
    ],
  },
];
