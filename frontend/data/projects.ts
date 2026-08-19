export type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;

  year: number;

  categories: string[];
  tags: string[];

  image: string;
  imageAlt: string;

  caseStudy?: string;
  liveSite?: string;
  github?: string;

  role?: string;

  overview: string;

  responsibilities: string[];

  challenge: string;
  result: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "internfree",
    title: "InternFree",
    subtitle: "Building the platform from frontend to backend",
    description:
      "InternFree is a talent marketplace platform connecting talent and hiring workflows through verification, matching, interviews, and workspace collaboration.",
    year: 2026,
    categories: ["Full Stack", "Backend & APIs", "Real-Time", "Product"],
    tags: [
      "Full Stack",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
    ],
    image: "/images/internfree.png",
    imageAlt: "InternFree talent marketplace platform",
    caseStudy: "/projects/internfree",
    liveSite: "",
    github: "",
    role: "Started as a Software Development Intern working primarily on the frontend, then took ownership of the backend as a Full-Stack Developer.",
    overview:
      "InternFree is a talent marketplace platform connecting talent and hiring workflows through verification, matching, interviews, and workspace collaboration.",
    responsibilities: [
      "Built the backend from scratch with 50+ REST API endpoints across core modules.",
      "Designed a 3-tier role-based access control system for Super Admin, Moderator, and Interviewer roles.",
      "Built a 3-stage talent verification pipeline covering screening, technical, and behavioral evaluation.",
      "Developed an 80/20 weighted matching engine combining hiring intent with interview-based profile completeness.",
      "Implemented real-time voice and video interviews using Socket.io and WebRTC.",
      "Built workspace collaboration features including chat, file sharing, approval flows, and revisions.",
      "Integrated Razorpay into an escrow-based payment workflow covering hold, release, and payout.",
      "Developed an admin-mediated dispute resolution system.",
      "Helped onboard and mentor an additional frontend intern.",
    ],
    challenge:
      "The platform needed to bring several complex workflows into one system—talent verification, matching, interviews, payments, and collaboration—while keeping permissions and data flows consistent across different user roles.",
    result:
      "A production-ready platform with automated talent recommendations, real-time interview capabilities, integrated payments, and collaboration workflows.",
  },

  {
    id: 2,
    slug: "real-time-chat-video-call",
    title: "Real-Time Chat & Video Call",
    subtitle: "Communication built around real-time interaction",
    description:
      "A real-time communication application built for messaging and one-to-one or group communication.",
    year: 2026,
    categories: ["Full Stack", "Real-Time"],
    tags: ["React.js", "Node.js", "Socket.io", "WebRTC", "JWT"],
    image: "/images/real-time-chat.png",
    imageAlt: "Real-time chat and video calling application",
    caseStudy: "/projects/real-time-chat-video-call",
    liveSite: "",
    github: "",
    overview:
      "A real-time communication application built for messaging and one-to-one or group communication.",
    responsibilities: [
      "Built one-to-one and group messaging using Socket.io.",
      "Implemented bidirectional real-time communication between users.",
      "Built voice and video calling using WebRTC.",
      "Implemented peer connection handling and a dedicated signaling server.",
      "Added JWT-based authentication for protected sessions.",
    ],
    challenge:
      "Real-time communication requires more than sending messages between clients. Connections, signaling, authentication, and peer-to-peer media all need to work together reliably.",
    result:
      "A full-stack communication application combining persistent authentication, real-time messaging, and WebRTC-based voice and video communication.",
  },

  {
    id: 3,
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    subtitle: "A complete shopping and payment workflow",
    description:
      "A full-stack e-commerce application covering products, shopping carts, orders, payments, and role-based administration.",
    year: 2025,
    categories: ["Full Stack", "Backend & APIs", "Product"],
    tags: ["MERN Stack", "MongoDB", "Razorpay"],
    image: "/images/e-commerce.png",
    imageAlt: "E-commerce shopping and payment platform",
    caseStudy: "/projects/e-commerce-platform",
    liveSite: "",
    github: "",
    overview:
      "A full-stack e-commerce application covering products, shopping carts, orders, payments, and role-based administration.",
    responsibilities: [
      "Built product catalog and product management.",
      "Implemented shopping cart functionality.",
      "Built order management workflows.",
      "Integrated Razorpay payments.",
      "Implemented payment order verification.",
      "Implemented Razorpay webhook handling.",
      "Built separate dashboards for administrators and customers.",
      "Implemented role-based access control.",
      "Designed a normalized MongoDB data structure.",
    ],
    challenge:
      "The payment flow needed to remain reliable beyond the frontend checkout process. Orders, payment verification, and webhook events had to be handled correctly between the application and payment gateway.",
    result:
      "An end-to-end e-commerce system with product management, customer purchasing, order workflows, and verified Razorpay payments.",
  },
];
