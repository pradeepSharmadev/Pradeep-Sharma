export type TechnicalChallenge = {
  title: string;
  description: string;
};

export type Process = {
  number: string;
  title: string;
  description: string;
};

export type Architecture = {
  icon: string;
  title: string;
  description: string;
};

export type Impact = {
  value: string;
  label: string;
};

export type NextProject = {
  slug: string;
  title: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type TechStack = {
  frontend: string[];
  backend: string[];
  database: string[];
  realtime?: string[];
  infrastructure: string[];
  testing?: string[];
};

export type Project = {
  id: number;

  // Identity
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  year: number;

  // Classification
  categories: string[];
  tags: string[];

  // Project information
  role: string;
  projectType?: string;
  // i don't find use case of duration, team you can remove
  team?: string;
  duration?: string;

  // Visuals
  image: string;
  imageAlt: string;
  heroImage: string;
  architectureImage: string;

  // Links
  caseStudy?: string;
  liveSite?: string;
  github?: string;

  // Case Study
  overview: string;
  problem: string;
  solution: string;

  // Product
  features: Feature[];

  // My contribution
  responsibilities: string[];

  // Engineering
  technicalChallenges: TechnicalChallenge[];
  challenge: string;

  // Implementation
  process: Process[];
  architecture: Architecture[];

  // Technologies
  techStack: TechStack;

  // Outcome
  result: string;

  // Navigation
  nextProject: NextProject;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "communication-platform",
    title: "Communication Platform",
    subtitle:
      "A real-time communication platform enabling instant messaging, presence, and peer-to-peer audio/video communication.",
    description:
      "A full-stack real-time communication platform built to provide seamless messaging, online presence, and peer-to-peer audio/video communication. The application combines Socket.IO and WebRTC with a modern React-based frontend and Node.js backend to deliver fast, interactive, and reliable communication experiences.",
    year: 2025,

    projectType: "Personal Project",
    team: "Solo",
    duration: "4 Months",

    categories: ["Full Stack", "Real-Time Application", "Communication"],
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "TypeScript",
      "Socket.IO",
      "WebRTC",
      "MongoDB",
      "Redux Toolkit",
      "Context API",
      "Tailwind CSS",
      "JWT",
      "REST API",
      "Docker",
      "GitHub Actions",
      "AWS",
      "Vercel",
    ],
    image: "/images/projects/communication-platform/hero.jpg",
    imageAlt:
      "Communication Platform interface showing real-time messaging, online presence, and communication features",
    caseStudy: "/project-details/communication-platform",
    liveSite: "#",
    github: "#",
    role: "Full Stack Developer - Architecture, Backend, Real-Time Systems & Frontend",
    overview:
      "The Communication Platform was built to create a reliable real-time environment where users can communicate through instant messaging and peer-to-peer audio/video calls. I worked across the complete application stack, from designing the backend architecture and real-time communication layer to building responsive frontend interfaces and integrating WebRTC-based media communication. The system was designed with a strong focus on performance, connection reliability, security, and maintainability.",
    responsibilities: [
      "Designed and developed the full-stack application architecture.",
      "Built RESTful APIs using Node.js, Express, and TypeScript.",
      "Designed MongoDB schemas for users, conversations, messages, and communication-related data.",
      "Implemented real-time communication using Socket.IO.",
      "Built instant messaging with real-time message delivery and conversation updates.",
      "Implemented online/offline presence and connection status tracking.",
      "Integrated WebRTC for peer-to-peer audio and video communication.",
      "Implemented signaling workflows required for establishing WebRTC connections.",
      "Handled call states including incoming calls, call acceptance, rejection, and termination.",
    ],
    problem:
      "Traditional communication experiences often require users to switch between separate tools for messaging and calls. The goal was to create a unified real-time experience where users could communicate, see presence information, and initiate audio/video conversations from a single application.",
    challenge:
      "The primary challenge was building a communication system where multiple real-time interactions had to remain synchronized between users. Messaging, online presence, socket connections, call signaling, and WebRTC media streams all operate asynchronously and can change rapidly based on network conditions and user actions. The application therefore required a reliable event-driven architecture, predictable client-side state management, secure authentication, and careful handling of connection lifecycle events. Socket.IO was used for real-time signaling and messaging, while WebRTC handled peer-to-peer audio/video communication.",
    solution:
      "I designed an event-driven communication architecture using Socket.IO for real-time messaging, presence, and WebRTC signaling, while WebRTC handled peer-to-peer audio/video communication. React handled the interactive client experience, while Node.js, Express, and MongoDB provided the application backend and persistent data layer.",
    techStack: {
      frontend: ["React.js", "Redux Toolkit", "Context API", "Tailwind CSS"],

      backend: ["Node.js", "Express", "TypeScript", "REST API", "JWT"],

      database: ["MongoDB"],

      infrastructure: ["AWS", "Vercel", "Docker", "GitHub Actions"],
    },
    features: [
      {
        title: "Real-Time Messaging",
        description:
          "Instant message delivery with synchronized conversation updates across connected clients.",
      },
      {
        title: "Online Presence",
        description:
          "Real-time visibility of user connection and availability status.",
      },
      {
        title: "Audio & Video Calls",
        description:
          "Peer-to-peer audio and video communication powered by WebRTC.",
      },
      {
        title: "Secure Authentication",
        description:
          "JWT-based authentication and protected communication workflows.",
      },
      {
        title: "Real-Time Signaling",
        description:
          "Socket.IO-based signaling for establishing and coordinating WebRTC connections.",
      },
    ],
    result:
      "The resulting platform provides a complete real-time communication experience combining instant messaging, presence awareness, and peer-to-peer audio/video communication. The architecture separates API responsibilities from real-time event handling and WebRTC communication, making the application easier to maintain and extend. The platform provides a strong foundation for additional communication features such as group conversations, file sharing, call history, notifications, and richer collaboration workflows.",
    technicalChallenges: [
      {
        title: "Real-Time State Synchronization",
        description:
          "Keeping conversations, messages, presence indicators, and connection states synchronized across multiple clients while handling asynchronous Socket.IO events and reconnect scenarios.",
      },
      {
        title: "WebRTC Communication",
        description:
          "Establishing peer-to-peer audio/video connections required implementing signaling, exchanging session descriptions and ICE candidates, managing media streams, and handling connection lifecycle changes.",
      },
      {
        title: "Connection & Event Management",
        description:
          "Managing socket connections, user presence, call events, reconnections, and cleanup without creating duplicate listeners or inconsistent client-side states.",
      },
      {
        title: "Authentication & Security",
        description:
          "Protecting API endpoints and real-time communication channels through JWT-based authentication, authorization checks, validation, and controlled socket access.",
      },
    ],
    process: [
      {
        number: "01",
        title: "System Architecture",
        description:
          "Defined the overall application architecture and separated REST API responsibilities, real-time Socket.IO communication, WebRTC signaling, authentication, and database operations into maintainable modules.",
      },
      {
        number: "02",
        title: "Backend Development",
        description:
          "Developed the Node.js and Express backend with TypeScript, REST APIs, authentication middleware, MongoDB integration, validation, centralized error handling, and Socket.IO event management.",
      },
      {
        number: "03",
        title: "Real-Time Layer",
        description:
          "Implemented Socket.IO-based messaging and presence features, then integrated WebRTC signaling to establish peer-to-peer audio/video communication between users.",
      },
      {
        number: "04",
        title: "Frontend Integration",
        description:
          "Built responsive React interfaces with reusable components and integrated Redux Toolkit, Context API, Socket.IO events, authentication flows, messaging state, presence updates, and call controls.",
      },
      {
        number: "05",
        title: "Testing & Deployment",
        description:
          "Tested communication flows, authentication, real-time events, and connection states before configuring production deployment workflows using GitHub Actions, Vercel, and AWS infrastructure.",
      },
    ],
    architecture: [
      {
        icon: "dns",
        title: "Backend & REST API",
        description:
          "Node.js, Express, and TypeScript power the backend services, providing authentication, user management, conversations, messages, validation, and centralized error handling.",
      },
      {
        icon: "hub",
        title: "Real-Time Communication",
        description:
          "Socket.IO provides the event-driven communication layer for instant messaging, presence updates, call signaling, connection events, and real-time application state changes.",
      },
      {
        icon: "videocam",
        title: "WebRTC Media Layer",
        description:
          "WebRTC enables peer-to-peer audio and video communication directly between users. Socket.IO acts as the signaling channel required to establish and coordinate WebRTC connections.",
      },
      {
        icon: "database",
        title: "Data Management",
        description:
          "MongoDB provides persistent storage for user accounts, conversations, messages, and application data, with a schema structure designed around communication-focused access patterns.",
      },
      {
        icon: "layers",
        title: "Frontend Ecosystem",
        description:
          "React provides the application interface with reusable components, Hooks, Redux Toolkit, Context API, and Tailwind CSS for responsive layouts and predictable state management.",
      },
      {
        icon: "cloud_done",
        title: "DevOps & Cloud",
        description:
          "GitHub Actions supports automated deployment workflows, with Vercel and AWS used as part of the production deployment infrastructure.",
      },
    ],
    architectureImage:
      "/images/projects/architecture.png",
    heroImage: "/images/hero-project.jpg",
    nextProject: { slug: "payment-platform", title: "Payment Platform" },
  },
  // {
  //   id: 2,
  //   slug: "internfree",
  //   title: "Internfree",
  //   subtitle: "Building the platform from frontend to backend",
  //   description:
  //     "InternFree is a talent marketplace platform connecting talent and hiring workflows through verification, matching, interviews, and workspace collaboration.",
  //   year: 2026,
  //   categories: ["Full Stack", "Backend & APIs", "Real-Time", "Product"],
  //   tags: ["React.js", "Node.js", "Express", "MongoDB"],
  //   image: "/images/projects/college-networking/hero.jpg",
  //   imageAlt: "InternFree talent marketplace platform",

  //   caseStudy: "/project-details/internfree",
  //   liveSite: "#",
  //   github: "#",

  //   role: "Full Stack Developer",

  //   overview:
  //     "InternFree is a talent marketplace platform connecting talent and hiring workflows through verification, matching, interviews, and workspace collaboration.",

  //   responsibilities: [
  //     "Built the backend from scratch with 50+ REST API endpoints across core modules.",
  //     "Designed a 3-tier role-based access control system for Super Admin, Moderator, and Interviewer roles.",
  //     "Built a 3-stage talent verification pipeline covering screening, technical, and behavioral evaluation.",
  //     "Developed an 80/20 weighted matching engine combining hiring intent with interview-based profile completeness.",
  //     "Implemented real-time voice and video interviews using Socket.io and WebRTC.",
  //     "Built workspace collaboration features including chat, file sharing, approval flows, and revisions.",
  //     "Integrated Razorpay into an escrow-based payment workflow covering hold, release, and payout.",
  //     "Developed an admin-mediated dispute resolution system.",
  //     "Helped onboard and mentor an additional frontend intern.",
  //   ],

  //   challenge:
  //     "The platform needed to bring several complex workflows into one system—talent verification, matching, interviews, payments, and collaboration—while keeping permissions and data flows consistent across different user roles.",

  //   result:
  //     "A production-ready platform with automated talent recommendations, real-time interview capabilities, integrated payments, and collaboration workflows.",

  //   technicalChallenges: [
  //     {
  //       title: "State Management Complexity",
  //       description:
  //         "Managing multi-step registration flows and persistent real-time notifications across the client while maintaining predictable application state.",
  //     },
  //     {
  //       title: "API Optimization",
  //       description:
  //         "Optimizing mentorship matching and other high-traffic endpoints through MongoDB indexing, efficient aggregation pipelines, and caching strategies.",
  //     },
  //     {
  //       title: "Security Implementation",
  //       description:
  //         "Implementing JWT-based authentication, authorization, CORS policies, and server-side validation to protect application data and user interactions.",
  //     },
  //   ],

  //   process: [
  //     {
  //       number: "01",
  //       title: "Schema Design",
  //       description:
  //         "Designed MongoDB data relationships to support student profiles, professional connections, mentorship relationships, and complex matching queries.",
  //     },
  //     {
  //       number: "02",
  //       title: "Backend Development",
  //       description:
  //         "Developed modular REST APIs with Node.js and Express, including authentication middleware, validation, error handling, logging, and business logic.",
  //     },
  //     {
  //       number: "03",
  //       title: "Frontend Integration",
  //       description:
  //         "Built a responsive React application using reusable components, Redux Toolkit, Context API, and Tailwind CSS for a consistent user experience.",
  //     },
  //     {
  //       number: "04",
  //       title: "Testing & Deployment",
  //       description:
  //         "Added automated tests with Jest and established deployment workflows with GitHub Actions across Vercel and AWS infrastructure.",
  //     },
  //   ],

  //   architecture: [
  //     {
  //       icon: "dns",
  //       title: "Backend & API",
  //       description:
  //         "Node.js and Express power the core backend and REST APIs, handling authentication, student data, networking, mentorship logic, validation, and centralized error handling.",
  //     },
  //     {
  //       icon: "database",
  //       title: "Data Management",
  //       description:
  //         "MongoDB Atlas provides scalable document-oriented storage with strategic indexing and aggregation pipelines optimized for read-heavy networking and mentorship operations.",
  //     },
  //     {
  //       icon: "layers",
  //       title: "Frontend Ecosystem",
  //       description:
  //         "React powers the interface with reusable components, Hooks, Context API, and Redux Toolkit for localized and global state management. Tailwind CSS provides responsive styling.",
  //     },
  //     {
  //       icon: "cloud_done",
  //       title: "DevOps & Cloud",
  //       description:
  //         "GitHub Actions automates deployment workflows, with the frontend hosted on Vercel and backend services deployed on AWS infrastructure.",
  //     },
  //   ],

  //   architectureImage: "/images/projects/college-networking/architecture.jpg",

  //   heroImage: "/images/projects/college-networking/interface.jpg",

  //   impact: [
  //     {
  //       value: "40%",
  //       label: "Load Time Improvement",
  //     },
  //     {
  //       value: "99.9%",
  //       label: "System Uptime",
  //     },
  //     {
  //       value: "REST",
  //       label: "API Architecture",
  //     },
  //     {
  //       value: "CI/CD",
  //       label: "Automated Deployment",
  //     },
  //   ],

  //   nextProject: {
  //     slug: "education-portal",
  //     title: "EduTech Portal",
  //   },
  // },
  // {
  //   id: 3,
  //   slug: "real-time-chat-video-call",
  //   title: "Real-Time Chat & Video Call",
  //   subtitle: "Communication built around real-time interaction",
  //   description:
  //     "A real-time communication application built for messaging and one-to-one or group communication.",
  //   year: 2026,
  //   categories: ["Full Stack", "Real-Time"],
  //   tags: ["React.js", "Node.js", "Socket.io", "WebRTC", "JWT"],
  //   image: "/images/projects/college-networking/hero.jpg",
  //   imageAlt: "Real-time chat and video calling application",

  //   caseStudy: "/projects/real-time-chat-video-call",
  //   liveSite: "#",
  //   github: "#",

  //   role: "Full Stack Developer",

  //   overview:
  //     "A real-time communication application built for messaging and one-to-one or group communication.",

  //   responsibilities: [
  //     "Built one-to-one and group messaging using Socket.io.",
  //     "Implemented bidirectional real-time communication between users.",
  //     "Built voice and video calling using WebRTC.",
  //     "Implemented peer connection handling and a dedicated signaling server.",
  //     "Added JWT-based authentication for protected sessions.",
  //   ],

  //   challenge:
  //     "Real-time communication requires more than sending messages between clients. Connections, signaling, authentication, and peer-to-peer media all need to work together reliably.",

  //   result:
  //     "A full-stack communication application combining persistent authentication, real-time messaging, and WebRTC-based voice and video communication.",

  //   technicalChallenges: [
  //     {
  //       title: "State Management Complexity",
  //       description:
  //         "Managing multi-step registration flows and persistent real-time notifications across the client while maintaining predictable application state.",
  //     },
  //     {
  //       title: "API Optimization",
  //       description:
  //         "Optimizing mentorship matching and other high-traffic endpoints through MongoDB indexing, efficient aggregation pipelines, and caching strategies.",
  //     },
  //     {
  //       title: "Security Implementation",
  //       description:
  //         "Implementing JWT-based authentication, authorization, CORS policies, and server-side validation to protect application data and user interactions.",
  //     },
  //   ],

  //   process: [
  //     {
  //       number: "01",
  //       title: "Schema Design",
  //       description:
  //         "Designed MongoDB data relationships to support student profiles, professional connections, mentorship relationships, and complex matching queries.",
  //     },
  //     {
  //       number: "02",
  //       title: "Backend Development",
  //       description:
  //         "Developed modular REST APIs with Node.js and Express, including authentication middleware, validation, error handling, logging, and business logic.",
  //     },
  //     {
  //       number: "03",
  //       title: "Frontend Integration",
  //       description:
  //         "Built a responsive React application using reusable components, Redux Toolkit, Context API, and Tailwind CSS for a consistent user experience.",
  //     },
  //     {
  //       number: "04",
  //       title: "Testing & Deployment",
  //       description:
  //         "Added automated tests with Jest and established deployment workflows with GitHub Actions across Vercel and AWS infrastructure.",
  //     },
  //   ],

  //   architecture: [
  //     {
  //       icon: "dns",
  //       title: "Backend & API",
  //       description:
  //         "Node.js and Express power the core backend and REST APIs, handling authentication, student data, networking, mentorship logic, validation, and centralized error handling.",
  //     },
  //     {
  //       icon: "database",
  //       title: "Data Management",
  //       description:
  //         "MongoDB Atlas provides scalable document-oriented storage with strategic indexing and aggregation pipelines optimized for read-heavy networking and mentorship operations.",
  //     },
  //     {
  //       icon: "layers",
  //       title: "Frontend Ecosystem",
  //       description:
  //         "React powers the interface with reusable components, Hooks, Context API, and Redux Toolkit for localized and global state management. Tailwind CSS provides responsive styling.",
  //     },
  //     {
  //       icon: "cloud_done",
  //       title: "DevOps & Cloud",
  //       description:
  //         "GitHub Actions automates deployment workflows, with the frontend hosted on Vercel and backend services deployed on AWS infrastructure.",
  //     },
  //   ],

  //   architectureImage: "/images/projects/college-networking/architecture.jpg",

  //   heroImage: "/images/projects/college-networking/interface.jpg",

  //   impact: [
  //     {
  //       value: "40%",
  //       label: "Load Time Improvement",
  //     },
  //     {
  //       value: "99.9%",
  //       label: "System Uptime",
  //     },
  //     {
  //       value: "REST",
  //       label: "API Architecture",
  //     },
  //     {
  //       value: "CI/CD",
  //       label: "Automated Deployment",
  //     },
  //   ],

  //   nextProject: {
  //     slug: "education-portal",
  //     title: "EduTech Portal",
  //   },
  // },
  // {
  //   id: 4,
  //   slug: "e-commerce-platform",
  //   title: "E-Commerce Platform",
  //   subtitle: "A complete shopping and payment workflow",
  //   description:
  //     "A full-stack e-commerce application covering products, shopping carts, orders, payments, and role-based administration.",
  //   year: 2026,
  //   categories: ["Full Stack", "Backend & APIs", "Product"],
  //   tags: ["MERN Stack", "MongoDB", "Razorpay"],
  //   image: "/images/projects/college-networking/hero.jpg",
  //   imageAlt: "E-commerce shopping and payment platform",

  //   caseStudy: "/projects/e-commerce-platform",
  //   liveSite: "#",
  //   github: "#",

  //   role: "Full Stack Developer",

  //   overview:
  //     "A full-stack e-commerce application covering products, shopping carts, orders, payments, and role-based administration.",

  //   responsibilities: [
  //     "Built product catalog and product management.",
  //     "Implemented shopping cart functionality.",
  //     "Built order management workflows.",
  //     "Integrated Razorpay payments.",
  //     "Implemented payment order verification.",
  //     "Implemented Razorpay webhook handling.",
  //     "Built separate dashboards for administrators and customers.",
  //     "Implemented role-based access control.",
  //     "Designed a normalized MongoDB data structure.",
  //   ],

  //   challenge:
  //     "The payment flow needed to remain reliable beyond the frontend checkout process. Orders, payment verification, and webhook events had to be handled correctly between the application and payment gateway.",

  //   result:
  //     "An end-to-end e-commerce system with product management, customer purchasing, order workflows, and verified Razorpay payments.",

  //   technicalChallenges: [
  //     {
  //       title: "State Management Complexity",
  //       description:
  //         "Managing multi-step registration flows and persistent real-time notifications across the client while maintaining predictable application state.",
  //     },
  //     {
  //       title: "API Optimization",
  //       description:
  //         "Optimizing mentorship matching and other high-traffic endpoints through MongoDB indexing, efficient aggregation pipelines, and caching strategies.",
  //     },
  //     {
  //       title: "Security Implementation",
  //       description:
  //         "Implementing JWT-based authentication, authorization, CORS policies, and server-side validation to protect application data and user interactions.",
  //     },
  //   ],

  //   process: [
  //     {
  //       number: "01",
  //       title: "Schema Design",
  //       description:
  //         "Designed MongoDB data relationships to support student profiles, professional connections, mentorship relationships, and complex matching queries.",
  //     },
  //     {
  //       number: "02",
  //       title: "Backend Development",
  //       description:
  //         "Developed modular REST APIs with Node.js and Express, including authentication middleware, validation, error handling, logging, and business logic.",
  //     },
  //     {
  //       number: "03",
  //       title: "Frontend Integration",
  //       description:
  //         "Built a responsive React application using reusable components, Redux Toolkit, Context API, and Tailwind CSS for a consistent user experience.",
  //     },
  //     {
  //       number: "04",
  //       title: "Testing & Deployment",
  //       description:
  //         "Added automated tests with Jest and established deployment workflows with GitHub Actions across Vercel and AWS infrastructure.",
  //     },
  //   ],

  //   architecture: [
  //     {
  //       icon: "dns",
  //       title: "Backend & API",
  //       description:
  //         "Node.js and Express power the core backend and REST APIs, handling authentication, student data, networking, mentorship logic, validation, and centralized error handling.",
  //     },
  //     {
  //       icon: "database",
  //       title: "Data Management",
  //       description:
  //         "MongoDB Atlas provides scalable document-oriented storage with strategic indexing and aggregation pipelines optimized for read-heavy networking and mentorship operations.",
  //     },
  //     {
  //       icon: "layers",
  //       title: "Frontend Ecosystem",
  //       description:
  //         "React powers the interface with reusable components, Hooks, Context API, and Redux Toolkit for localized and global state management. Tailwind CSS provides responsive styling.",
  //     },
  //     {
  //       icon: "cloud_done",
  //       title: "DevOps & Cloud",
  //       description:
  //         "GitHub Actions automates deployment workflows, with the frontend hosted on Vercel and backend services deployed on AWS infrastructure.",
  //     },
  //   ],

  //   architectureImage: "/images/projects/college-networking/architecture.jpg",

  //   heroImage: "/images/projects/college-networking/interface.jpg",

  //   impact: [
  //     {
  //       value: "40%",
  //       label: "Load Time Improvement",
  //     },
  //     {
  //       value: "99.9%",
  //       label: "System Uptime",
  //     },
  //     {
  //       value: "REST",
  //       label: "API Architecture",
  //     },
  //     {
  //       value: "CI/CD",
  //       label: "Automated Deployment",
  //     },
  //   ],

  //   nextProject: {
  //     slug: "education-portal",
  //     title: "EduTech Portal",
  //   },
  // },
];
