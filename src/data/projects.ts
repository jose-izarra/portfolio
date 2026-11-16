import type { Project } from "@/lib/types";

/** Newest first. The first `PROJECTS_PREVIEW_COUNT` show before "Show more". */
export const PROJECTS_PREVIEW_COUNT = 4;

export const projects: Project[] = [
  {
    name: "Portfolio Website",
    year: "2026",
    tagline: "This website",
    meta: "Just me",
    description: "Showcase for my work and skills, rebuilt with a liquid-glass look.",
    tags: ["TypeScript", "React", "Vite", "Tailwind CSS", "Vercel"],
    url: "https://joseizarra.com",
    image: "/images/portfolio_latest.webp",
  },
  {
    name: "Planwise",
    year: "2025",
    tagline: "Plan recommendations for Madrid",
    meta: "Team of 7 · 4 months",
    description: "Recommendation system that suggests short, targeted plans around Madrid.",
    tags: ["FastAPI", "TensorFlow", "Recommenders", "PostgreSQL"],
    url: "https://github.com/planwise-org/recommendation-system",
    image: "/images/planwise.mp4",
  },
  {
    name: "KEYONIQ",
    year: "2025",
    tagline: "Medical dashboard",
    meta: "MVST · Team of 5",
    description:
      "Dashboard for doctors and patients, with a service that generates medical PDF reports automatically.",
    tags: ["React", "NestJS", "Azure"],
    url: null,
    image: "/images/dashboard.png",
  },
  {
    name: "LIESL",
    year: "2025",
    tagline: "Dog-sitting marketplace",
    meta: "MVST · Team of 6",
    description: "Web and mobile app that connects dog owners with trusted sitters nearby.",
    tags: ["Next.js", "React Native", "NestJS"],
    url: null,
    image: "/images/smartphone.png",
  },
  {
    name: "Factos API",
    year: "2025",
    tagline: "Fake-news detection",
    meta: "Team of 4 · 3 months",
    description: "API that flags fake news by combining several models with ensemble learning.",
    tags: ["FastAPI", "Transformers", "TensorFlow", "NLTK"],
    url: "https://github.com/ramcav/factos_api",
    image: "/images/factos-api.webp",
  },
  {
    name: "Algo-visualizer",
    year: "2024",
    tagline: "Sorting algorithm visualizer",
    meta: "Team of 4 · 1 month",
    description:
      "Desktop app that animates sorting algorithms step by step, with a unit-tested core.",
    tags: ["C++", "SFML", "CMake", "GTest"],
    url: "https://github.com/jose-izarra/algo-visualizer",
    image: "/images/algo-visualizer.webp",
  },
  {
    name: "Best Bank",
    year: "2024",
    tagline: "Banking platform with automated DevOps",
    meta: "Team of 8 · 4 months",
    description:
      "IaaS banking platform with an end-to-end DevOps pipeline, heavily automated with GitHub workflows.",
    tags: ["Flask", "Vue", "Bicep", "Azure"],
    url: "https://github.com/IE-BestBank/",
    image: "/images/best-bank.webp",
  },
  {
    name: "QuadRobot Sim",
    year: "2024",
    tagline: "Quadruped trajectory simulation",
    meta: "Team of 3 · 3 months",
    description:
      "Trajectory planning simulation for quadruped robots, sped up with parallelization and inter-process communication.",
    tags: ["Python", "PyBullet", "Multiprocessing"],
    url: "https://github.com/rorosaga/QuadRobotParallelSim",
    image: "/images/quadsim.mp4",
  },
  {
    name: "C Whale",
    year: "2023",
    tagline: "A language for Dockerfiles",
    meta: "Team of 4 · 2 months",
    description:
      "Domain-specific language, written in C, for creating Dockerfiles and managing images.",
    tags: ["C", "Flex", "Bison", "CMake"],
    url: "https://github.com/rorosaga/C_whale",
    image: "/images/c_whale.webp",
  },
  {
    name: "AI Hackathon",
    year: "2023",
    tagline: "RAG over banking PDFs",
    meta: "Team of 3 · 2 weeks",
    description: "Retrieval-augmented pipeline that extracts information from banking PDFs.",
    tags: ["Python", "Pydantic", "OpenAI API"],
    url: "https://github.com/velocitatem/ai-hackathon-ie-2023",
    image: "/images/hackathon.webp",
  },
  {
    name: "Qwicker",
    year: "2023",
    tagline: "Automated attendance system",
    meta: "Team of 6 · 2 months",
    description:
      "Attendance-taking system for university classes, built on relational databases and serverless functions.",
    tags: ["React", "Vite", "Python", "MySQL", "Azure Functions"],
    url: "https://github.com/jose-izarra/attendance_system",
    image: "/images/qwicker.webp",
  },
  {
    name: "Jenga Game",
    year: "2023",
    tagline: "Jenga with probabilistic programming",
    meta: "Team of 4 · 2 months",
    description:
      "Jenga adaptation that uses probabilistic programming, built to practice sorting and search algorithms.",
    tags: ["Python", "Pygame"],
    url: "https://github.com/jose-izarra/jenga-game",
    image: "/images/jenga.webp",
  },
];
