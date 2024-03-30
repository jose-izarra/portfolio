import Image from 'next/image';


export const cv_data = {
  name: "Jose Izarra",
  initials: "JI",
  location: "Madrid, Spain, CET",
  locationLink: "https://www.google.com/maps/place/Madrid",
  about:
    "Software developer with a passion for creating and building new things.",
  summary:
    "Self-driven and highly motivated software developer currently pursuing a degree in Computer Science. Known for my compromise and dedication to my work, I am always looking for new challenges and opportunities to grow. Most of my work involves Web Development, AI, and Robotics, having worked with a variety of technologies and programming languages.",
  avatarUrl: '/jose.jpg', // "https://avatars.githubusercontent.com/jose-izarra",
  personalWebsiteUrl: "https://joseizarra.com/",
  contact: {
    email: "jaiza0912@gmail.com",
    tel: "+34 676135616",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jose-izarra",
        icon: <Image src='/images/github.svg' className='boder-transparent' width={30} height={30} alt='GitHub Icon'/>,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jose-izarra/",
        icon: <Image src='/linkedin.svg' width={30} height={30} alt='LinkedIn Icon'/>,
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
        "Engaging in front-end web development projects, specializing in the creation and redesign of my clients' websites. Technologies: React, Next.js, Vercel, Vite.js, Tailwind CSS, TypeScript.",
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
  languages: [
    {
      name: "Spanish",
      level: "Native",
    },
    {
      name: "English",
      level: "Fluent",
    },
    {
      name: "Portuguese",
      level: "Intermediate",
    }
  ]
} as const;




export const about_me = {
  started: `I started programming when I was in high school in my Computer Science class. Back then, I had no idea of what I was going to do in the future, I didn't know anything about coding, all I had to account for was a robotics class I had taken the last year where I learned a little bit of Arduino.`,
  passions: [
    {
      name: 'Football',
      icon: '⚽',
      content: 'One of my grandest passions is playing football. I have been playing since I was 4 years old and for the better part of my life it was all I really wanted to do. During High School I was playing in an Interntional Academy of the Spanish club Getafe, where I would be spending 4 years playing. After getting a few contract proposals, I decided to reject them all and focus on my studies when I figured out football is not what I wanted to do for the rest of my life for work. As of now, I am still playing football representing my university, nothing too crazy here. '
    },
    {
      name: 'Programming',
      icon: '🧑‍💻',
      content: `I've been into programming for a few years now, the way I look at it is it gives you the freedom to create whatever you want as long as you have a computer and some wifi. I find this amazing since you are able to make all these things out of thin air, from automated robots to blockchain technologies to several harmoneously, centered divs. All in all, I'm still just starting my career in this field so let's see what else it's got for us. Right now I'm focusing a bit more on web development as well as algotrading as my main fields, AI is also pretty interesting tho 😯`
    },
    {
      name: 'Fitness',
      icon: '🏋️‍♂️',
      content: `I don't really know what else to say here. Exercising is fun and relaxing, it helps keep a stable mind. I do mostly weighlifting as my form of staying in shape. Occasional rock climbing with my friends is also fun.`
    }
  ],
  background: {
    story: `I was born and grew up in Caracas, Venezuela where I stayed until my teenage years. I then moved to the US where I stayed for 3 years until me and my family settled in Spain.`
  },

  currently: `Currently I am in my second year of university pursuing a Bachelors in Computer Science and AI. Where I currently live as a student in an apartment in Madrid. Currently also trying to get my driving license.`,
  goals: {
    overview: `There's few things I want in life so I will write them down here so I don't forget. As with time, some things are bound to change, some are not, but these are my current goals`,
    list: [
      `Speak Portuguese fluently`,
      `Achieve my peak physical condition`,
      `Passive income from investments`,
    ]
  }

} as const;



export const books_ive_read = [
  {
    name: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    description: '',
    opinion: ''
  },
  {
    name: 'Atomic Habits',
    author: 'James Clear',
    description: '',
    opinion: ''
  },
  {
    name: '5 AM Club',
    author: 'Robin Sharma',
    description: '',
    opinion: ''
  },
  {
    name: 'The Simple Path to Wealth',
    author: 'J. L. Collins',
    description: '',
    opinion: ''
  },
  {
    name: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    description: '',
    opinion: ''
  },
  {
    name: 'The Obstacle is the Way',
    author: 'Ryan Holiday',
    description: '',
    opinion: ''
  },
  {
    name: 'Meditations',
    author: 'Marcus Aurelius',
    description: '',
    opinion: ''
  },
] as const;




//test for the sticky scroll
export const ight = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];