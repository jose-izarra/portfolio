// import {
//     AmbitLogo,
//     BarepapersLogo,
//     BimLogo,
//     CDGOLogo,
//     ClevertechLogo,
//     ConsultlyLogo,
//     EvercastLogo,
//     Howdy,
//     JarockiMeLogo,
//     JojoMobileLogo,
//     Minimal,
//     MobileVikingsLogo,
//     MonitoLogo,
//     NSNLogo,
//     ParabolLogo,
//     TastyCloudLogo,
//     YearProgressLogo,
//   } from "@/images/logos";
//   import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";


  export const cv_data = {
    name: "Jose Izarra",
    initials: "JI",
    location: "Madrid, Spain, CET",
    locationLink: "https://www.google.com/maps/place/Madrid",
    about:
      "Software developer with a passion for creating and building new things.",
    summary:
      "Self-driven and highly motivated software developer currently pursuing a degree in Computer Science. Known for my compromise and dedication to my work, I am always looking for new challenges and opportunities to grow. Most of my work involves Web Development, AI, and Robotics, having worked with a variety of technologies and programming languages.",
    avatarUrl: "https://avatars.githubusercontent.com/jose-izarra",
    personalWebsiteUrl: "https://joseizarra.com/",
    contact: {
      email: "jaiza0912@gmail.com",
      tel: "+34 676135616",
      social: [
        {
          name: "GitHub",
          url: "https://github.com/jose-izarra",
          icon: '/images/github.svg',
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/jose-izarra/",
          icon: '/images/linkedin.svg',
        },
      ],
    },
    education: [
      {
        school: "IE University",
        degree: "Bachelor's Degree in Computer Science and Artificial Intelligence",
        start: "2022",
        expected: "2026",
      },
    ],
    experience: [
      {
        company: "IEU Robotics and AI Club",
        link: "https://github.com/iERoboticsClub",
        badges: ["Remote"],
        title: "Project Manager → Full Stack Developer",
        logo: "",
        start: "2022",
        end: "Present",
        description:
          "Led the design, development, and continuous maintenance of the Robotics & AI Club website, the leading club at my university, showcasing information about the club, its members, and ongoing projects. Technologies: Astro.js, JavaScript, MongoDB, Express.js",
      },
      {
        company: "Freelance",
        link: "",
        badges: ["Remote", "Part-time"],
        title: "Front End Developer",
        logo: "",
        start: "2023",
        end: "Present",
        description:
          "Engaging in front-end web development projects, specializing in the creation and redesign of my clients' websites.",
      },
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React/Next.js/Vite.js",
      "Node.js",
      "MySql/MongoDB",
      "Python",
      "Express.js",
      "Arduino",
    ],
    projects: [
      {
        title: "IE Robotics and AI Club Website",
        techStack: [
          "Project Manager",
          "JavaScript",
          "Astro.js",
          "MongoDB",
          "Docker",
          "Express.js",
        ],
        description: "Website for the Robotics and AI Club at IE University",
        logo: "",
        link: {
          label: "ieroboticsclub.com",
          href: "https://www.ieroboticsclub.com/",
        },
      },
      {
        title: "C Whale",
        techStack: ["C", "Docker", "Makefile", "Lexer", "Parser", ],
        description:
          "Programming language that facilitates the process of managing Docker containers and images",
        logo: "",
        link: {
          label: "C_whale on GitHub",
          href: "https://github.com/rorosaga/C_whale/",
        },
      },
      {
        title: "joseizarra.com",
        techStack: ["Side Project", "Next.js", "TypeScipt", "Tailwind CSS"],
        description:
          "My personal website and blog. Built with Next.js and Tailwind CSS",
        logo: "",
        link: {
          label: "joseizarra.com",
          href: "https://joseizarra.com/",
        },
      },
      {
        title: "Qwicker",
        techStack: ["Vite.js", "React", "Microsoft Azure", "MySQL"],
        description:
          "Attendance system for university lectures to automate the attendance-taking process",
        logo: "",
        link: {
          label: "github.com",
          href: "https://github.com/jose-izarra/attendance_system/",
        },
      },
      {
        title: "Jenga Tower",
        techStack: ["Python", "Algorithms and Data Structures"],
        description:
          "Game of Jenga implemented in Python using the Pygame library.",
        logo: "",
        link: {
          label: "github.com",
          href: "https://github.com/jose-izarra/jenga-game/",
        },
      },
      {
        title: "CLAI",
        techStack: ["AI Hackathon", "Python", "RAG", "NLP"],
        description:
          "Intelligent PDF extraction tool that utilizes Retrieval Augmented Generation (RAG) and LLM's to extract data from PDFs",
        logo: "",
        link: {
          label: "github.com",
          href: "https://github.com/velocitatem/ai-hackathon-ie-2023",
        },
      },
    ],
  } as const;