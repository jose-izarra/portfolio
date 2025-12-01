import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Jenga Game",
    description: "Jenga adaptation using probabilistic programming to play on the terminal",
    purpose: "Implement sorting and search algorithms for ADS university course",
    techStack: ["Python", "Pygame"],
    duration: "2 months",
    status: {
      finished: true,
      message: "2023"
    },
    contributors: "4 people",
    project_url: "https://github.com/jose-izarra/jenga-game",
    image_url: "/images/jenga.webp"
  },
  {
    title: "Portfolio Website",
    description: "This website lol",
    purpose: "Showcase my work and skills",
    techStack: ["TypeScript", "Next.js", "TailwindCSS", "Vercel"],
    status: {
      finished: false,
      message: "Mostly finished"
    },
    duration: "2 Weeks, for this latest version",
    contributors: "Just me",
    project_url: "https://joseizarra.com",
    image_url: "/images/portfolio_latest.webp"
  },
  {
    title: "Qwicker",
    description: "Automated attendance-taking system for IE University classes",
    purpose: "Design relational databases and interact with serverless computing",
    techStack: ["Vite", "React", "Python", "MySQL", "Azure Serverless Functions"],
    duration: "2 months",
    status: {
      finished: true,
      message: "2023"
    },
    contributors: "6 people",
    project_url: "https://github.com/jose-izarra/attendance_system",
    image_url: "/images/qwicker.webp"
  },
  {
    title: "AI Hackathon",
    description: "RAG to extract information from banking PDFs",
    purpose: "Create and improve model accuracy to win a prize",
    techStack: ["Python", "Pydantic", "OpenAI API"],
    status: {
      finished: true,
      message: "2023"
    },
    duration: "2 weeks",
    contributors: "3 people",
    project_url: "https://github.com/velocitatem/ai-hackathon-ie-2023",
    image_url: "/images/hackathon.webp"
  },
  {
    title: "C Whale",
    description: "C-based domain-specific language for Dockerfile creation and image management",
    purpose: "Learn about C and its compiler",
    techStack: ["C", "CMake", "GNU Parser", "FLEX lexer"],
    status: {
      finished: true,
      message: "2023"
    },
    duration: "2 months",
    contributors: "4 people",
    project_url: "https://github.com/rorosaga/C_whale",
    image_url: "/images/c_whale.webp"
  },
  {
    title: "QuadRobot Sim",
    description: "Trajectory planning simulation for quadruped robots using parallelization and inter-process communication",
    purpose: "Apply parallelization to speed up simulation processes",
    techStack: ["Python", "Pybullet", "Multiprocessing Library"],
    status: {
      finished: true,
      message: "2024"
    },
    duration: "3 months",
    contributors: "3 people",
    project_url: "https://github.com/rorosaga/QuadRobotParallelSim",
    image_url: "/images/quadsim.gif"
  },
  {
    title: "Best Bank",
    description: "IaaS Banking platform heavily automated with Github workflows",
    purpose: "Design end-to-end DevOps pipeline using SCRUM",
    techStack: ["Flask", "Vue", "Bicep", "Azure Resources"],
    status: {
      finished: true,
      message: "2024"
    },
    duration: "4 months",
    contributors: "8 people",
    project_url: "https://github.com/IE-BestBank/",
    image_url: "/images/best-bank.webp"
  },

  {
    title: "Algo-visualizer",
    description: "Visualizer for popular sorting algorithms",
    purpose: "Learn C++ and experiment with UI libraries",
    techStack: ["C++", "CMake", "SFML", "GTest"],
    status: {
      finished: true,
      message: "2024"
    },
    duration: "1 month",
    contributors: "4 people",
    project_url: "https://github.com/jose-izarra/algo-visualizer",
    image_url: "/images/algo-visualizer.webp"
  },
  {
    title: "Liesl",
    description: "Dog sitting app for connecting dog owners with dog sitters",
    purpose: "MVST",
    techStack: ["NextJS", "React Native", "NestJS"],
    status: {
      finished: true,
      message: "2025"
    },
    duration: "3 months",
    contributors: "6 people",
    project_url: "/",
    image_url: "/images/smartphone.png"
  },
  {
    title: "Keyoniq",
    description: "Medical dashboard for doctors and patients and automated PDF generation service",
    purpose: "MVST",
    techStack: ["React", "NestJS", "Azure"],
    status: {
      finished: true,
      message: "2025"
    },
    duration: "3 months",
    contributors: "5 people",
    project_url: "/",
    image_url: "/images/dashboard.png"
  },
] as const;
