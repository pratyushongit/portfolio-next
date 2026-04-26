export const HERO_WORDS = "Turning Complex Ideas into Production-Ready Systems";

export const leftLists = ["ReactJS", "TypeScript", "NextJS"];
export const rightLists = ["NestJS", "Mastra", "Docker"];

export const gridItems = [
  {
    id: 1,
    title: "Leading projects with clarity, trust & open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Reliable communication within distributed environments",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI-driven platforms & scalable developer experience",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building agentic AI systems & developer platforms",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Agentic Finance Tracker",
    des: "An agentic finance tracker that uses AI to track your finances and provide insights.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/sass.svg"],
    link: "https://github.com/pratyushongit/agentic-finance-tracker-ui",
  },
  {
    id: 2,
    title: "Bay 'n Basil - E-Commerce Website",
    des: "An e-commerce experience for a premium home-blended spice brand.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/ts.svg"],
    link: "https://github.com/pratyushongit/baynbasil-ui",
  },
  {
    id: 3,
    title: "Decision Dice - Decision Making Tool",
    des: "A decision making tool that helps you make decisions by rolling a dice.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/ts.svg", "/three.svg", "/vite.svg"],
    link: "https://github.com/pratyushongit/cs-bootcamp-app",
  },
  {
    id: 4,
    title: "Portfolio Website",
    des: "A portfolio website that showcases my projects and skills.",
    img: "/p4.png",
    iconLists: [
      "/next.svg",
      "aceternity.svg",
      "/tail.svg",
      "/ts.svg",
      "/sentry.svg",
    ],
    link: "https://github.com/pratyushongit/portfolio-next",
  },
];

export const workExperience = [
  {
    id: 1,
    year: "2024 - Present",
    company: "Contentstack",
    title: "Senior Software Engineer - 2",
    desc: "Architecting agentic AI frameworks, multi-agent orchestration, and developer platforms from the ground up.",
    work: [
      "Led the architecture and development of an Agentic AI framework from the ground up using the open-source TypeScript framework Mastra, enabling scalable multi-agent orchestration, continuous tool execution, and dynamic context management.",
      "Designed and developed a scalable Agent Builder frontend using React, enabling intuitive configuration of agent tools, triggers, and instruction workflows.",
      "Developed custom Slate.js plugins to enable Notion-style tool and variable chip insertion within agent builder instructions, improving prompt authoring efficiency.",
      "Implemented a RAG-based retrieval system to dynamically identify and fetch relevant tools and triggers from a vector database based on user prompts.",
      "Delivered a prompt-to-agent platform, allowing users to create, configure, and publish AI agents using natural language.",
      "Implemented advanced agent workflows with Chain-of-Thought reasoning and Human-in-the-Loop controls to improve decision accuracy, transparency, and reliability.",
      "Led development of a production-grade MCP server, deeply integrated into developer workflows to enable seamless AI-assisted automation.",
      "Built third-party connectors from the ground up for OpenAI ChatGPT, AWS Bedrock, Airtable, BigCommerce, Box, and Microsoft Teams within the Automate platform.",
      "Engineered a high-performance Live Preview SDK using Preact alongside a scalable NestJS microservices backend, enabling real-time collaborative editing with threads, comments, and discussions.",
    ],
  },
  {
    id: 2,
    year: "2021 - 2024",
    company: "Johnson Controls",
    title: "Senior Software Engineer",
    desc: "Delivered high-performance web applications with a focus on architecture, testing, and team leadership.",
    work: [
      "Developed a single-page reporting app using React.js, Redux and Tailwind CSS.",
      "Replaced the traditional login mechanism with OAuth 2.0 to login seamlessly.",
      "Written unit test cases using Jest which drastically decreased application errors.",
      "Worked on a micro-frontend architecture, facilitating smoother feature roll-outs. Also worked on several tech debt topics to improve the application's performance.",
      "Led a team of 6 developers and have also mentored junior developers.",
      "Facilitated weekly dev meetings and have actively engaged in code-reviews.",
      "Participated in sprint planning, grooming, SoS & retrospective meetings.",
    ],
  },
  {
    id: 3,
    year: "2018 - 2021",
    company: "Siemens Technology India",
    title: "Software Developer",
    desc: "Built interactive, cross-browser web applications with real-time data visualization for IoT domains.",
    work: [
      "Developed highly interactive web applications with cross-browser compatibility utilizing HTML, CSS3, SASS, JavaScript, TypeScript, Angular, Angular Material and integrating RESTful APIs.",
      "Developed web-accessible websites with multilingual support.",
      "Implemented real-time graphs using Chart.js and web sockets (Socket.io).",
      "Developed applications pertaining to the IoT domain.",
      "Removed dependency on local/session storage by implementation of unique URL based routing.",
      "Participated in design reviews and provided input to design recommendations.",
      "Built responsive and mobile optimized websites using Bootstrap, media queries, flexbox.",
      "Developed unit tests for the application using the Jasmine testing framework.",
    ],
  },
  {
    id: 4,
    year: "2015 - 2018",
    company: "Infosys",
    title: "Senior Systems Engineer",
    desc: "Developed accessible e-commerce web applications adhering to WCAG and BOIA guidelines.",
    work: [
      "Worked as a UI developer for developing a web-accessible e-commerce website for a leading automobile manufacturing company.",
      "Developed the whole e-commerce website from scratch to remove the BOIA (Bureau of Internet Accessibility) violations in the website.",
      "Involved in extensive HTML, JavaScript & jQuery coding as it required pairing of both mouse and key events. Styled the webpages using CSS3.",
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/pratyushongit",
  },
  {
    id: 2,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/pratyush-biswas-7a3a8a126/",
  },
];
