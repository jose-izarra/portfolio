import type { Experience } from "@/lib/types";

/** Newest first. */
export const experience: Experience[] = [
  {
    dates: "Jul 2026 - Present",
    role: "Graduate Software Engineer (Backend)",
    org: "Fever",
    description:
      "Content Providers team, building services for a live-entertainment platform used by millions in 500+ cities.",
    highlights: [
      "Develop and maintain the partner integrations that let third-party providers list and sell their experiences on Fever.",
    ],
    tags: ["Python", "Django", "Flask", "PostgreSQL"],
  },
  {
    dates: "Jan 2026 - May 2026",
    role: "Founding Engineer",
    org: "Supahost",
    description: "Early engineer at an AI startup for short-term rental hosts.",
    highlights: [
      "Built and launched the offline data sync engine for mobile users, an ETL pipeline for a third-party integration, and CI/CD for automated, versioned rollouts.",
      "Built AI voice agents that answer guest phone inquiries, plus React Native features and Supabase edge functions handling hundreds of guest stays a month.",
    ],
    tags: ["React Native", "Supabase", "WatermelonDB", "Deno", "FastAPI", "ElevenLabs"],
  },
  {
    dates: "Jun 2025 - Nov 2025",
    role: "Full-Stack Developer Intern",
    org: "MVST",
    description:
      "Venture builder in Barcelona. Launched two client projects into production alongside product, design and engineering teams.",
    highlights: [
      "Built LIESL, a web and mobile marketplace connecting dog owners and sitters, scaling to 5,000+ users.",
      "Built KEYONIQ, two dashboards for doctors and patients plus a service that generates medical PDF reports automatically.",
    ],
    tags: ["React", "React Native", "NestJS", "Azure"],
  },
  {
    dates: "Apr 2024 - Oct 2025",
    role: "Founder",
    org: "theHouse",
    description: "Nightlife technology startup in Madrid.",
    highlights: [
      "Built and launched Dash, a ticket marketplace and CRM for nightlife venues; sold 250+ tickets for a night at one of Colombia's biggest clubs.",
    ],
    tags: ["Django", "Next.js", "Stripe", "PostgreSQL"],
  },
  {
    dates: "Graduated Jul 2026",
    // Swap for a photo once one is in public/images/:
    // { image: { src: "/images/graduation.webp", alt: "Jose at his IE University graduation", width: 320, height: 400 } }
    leadReveal: { emoji: "🎉" },
    role: "BSc Computer Science and Artificial Intelligence",
    org: "IE University",
    description:
      "GPA 8.57/10. Team projects across compilers, natural language processing and recommender systems; led projects in the Robotics & AI Club.",
    highlights: [
      "Top grades in Software Development & DevOps (9.0), Databases (9.1) and Programming in C (9.2).",
    ],
    tags: ["Python", "C", "C++", "TensorFlow"],
  },
];
