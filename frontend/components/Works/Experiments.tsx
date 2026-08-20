"use client";

import React, { useEffect, useRef, useState } from "react";

const experimentProjectsInspiration = [
  {
    id: 1,
    title: "Razorpay Payment Service Integration",
    description:
      "Integrated Razorpay payment processing with secure order creation, payment verification, webhook handling, and transaction status management.",
  },
  {
    id: 2,
    title: "Socket.io Bidirectional Groups",
    description:
      "Built real-time bidirectional communication using Socket.io with group-based rooms, live messaging, connection management, and event-driven updates.",
  },
  {
    id: 3,
    title: "Google OAuth Authentication",
    description:
      "Implemented Google OAuth authentication with secure login flows, session management, protected routes, and user account provisioning.",
  },
  {
    id: 4,
    title: "JWT Authentication System",
    description:
      "Designed a secure authentication system using JWT with access tokens, refresh tokens, protected APIs, role-based authorization, and session handling.",
  },
  {
    id: 5,
    title: "Real-Time Chat Application",
    description:
      "Developed a full-stack real-time chat application with private conversations, group messaging, online presence, message events, and persistent chat history.",
  },
  {
    id: 6,
    title: "REST API & Service Architecture",
    description:
      "Built scalable REST APIs with validation, authentication, error handling, database integration, pagination, and modular service-layer architecture.",
  },
  {
    id: 7,
    title: "File Upload & Cloud Storage",
    description:
      "Implemented secure file uploads with validation, multipart handling, cloud storage integration, and optimized media access through backend APIs.",
  },
  {
    id: 8,
    title: "Redis Caching Layer",
    description:
      "Added Redis-based caching and session storage to reduce database load, improve API response times, and efficiently manage frequently accessed data.",
  },
  {
    id: 9,
    title: "Background Job Processing",
    description:
      "Built asynchronous background jobs for emails, notifications, and resource-intensive tasks using queue-based processing and worker services.",
  },
  {
    id: 10,
    title: "Production-Ready Full-Stack Architecture",
    description:
      "Designed a complete full-stack application architecture connecting frontend interfaces, backend services, databases, authentication, APIs, and third-party integrations.",
  },
];

const experimentProjects = [
  {
    id: 1,
    title: "Razorpay Payment Service Integration",
    description:
      "Integrated Razorpay payment processing with secure order creation, payment verification, webhook handling, and transaction status management.",
    image: "/images/experiment2.png",
    liveLink: "https://your-project.vercel.app",
    codeLink: "https://github.com/yourusername/razorpay",
    action: "View Project",
  },
  {
    id: 2,
    title: "Socket.io Bidirectional Groups",
    description:
      "Built real-time bidirectional communication using Socket.io with group-based rooms, live messaging, connection management, and event-driven updates.",
    image: "/images/phone.png",
    liveLink: "https://your-project.vercel.app",
    codeLink: "https://github.com/yourusername/socket-groups",
    action: "View Project",
  },
  {
    id: 3,
    title: "Google OAuth Authentication",
    description:
      "Implemented Google OAuth authentication with secure login flows, session management, protected routes, and user account provisioning.",
    image: "/images/financial-dashboard.png",
    liveLink: "https://your-project.vercel.app",
    codeLink: "https://github.com/yourusername/google-oauth",
    action: "View Project",
  },
  {
    id: 4,
    title: "Real-Time Chat Application",
    description:
      "Developed a full-stack real-time chat application with private conversations, group messaging, online presence, and persistent chat history.",
    image: "/images/e-commerce.png",
    liveLink: "https://your-project.vercel.app",
    codeLink: "https://github.com/yourusername/chat-app",
    action: "View Project",
  },
  {
    id: 5,
    title: "JWT Authentication System",
    description:
      "Designed a secure authentication system using JWT with access tokens, refresh tokens, protected APIs, and role-based authorization.",
    image: "/images/communication-platform.png",
    liveLink: "https://your-project.vercel.app",
    codeLink: "https://github.com/yourusername/jwt-auth",
    action: "View Project",
  },
  {
    id: 6,
    title: "Redis Caching Layer",
    description:
      "Added Redis caching to improve API performance, reduce database load, and efficiently manage frequently accessed application data.",
    image: "/images/payment-platform.png",
    liveLink: "https://your-project.vercel.app",
    codeLink: "https://github.com/yourusername/redis-cache",
    action: "View Project",
  },
];

const Experiments = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous" | null>(null);(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDistance, setSlideDistance] = useState(0);

  const getCardsPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 768) {
      return 1;
    }
    if (window.innerWidth < 1024) {
      return 2;
    }
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);

  useEffect(() => {
    const updateSlider = () => {
      if (!viewportRef.current) return;
      const viewportWidth = viewportRef.current.offsetWidth;
      let gap = 32;
      if (window.innerWidth < 768) {
        gap = 24;
      }
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        gap = 32;
      }
      const cardWidth =
        (viewportWidth - gap * (cardsPerView - 1)) / cardsPerView;
      setSlideDistance(cardWidth + gap);
    };

    updateSlider();

    window.addEventListener("resize", updateSlider);

    return () => {
      window.removeEventListener("resize", updateSlider);
    };
  }, [cardsPerView]);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const total = experimentProjects.length;
  const getProject = (index: any) =>
    experimentProjects[(index + total) % total];
  const visibleProjects = [];

  for (let i = -1; i < cardsPerView + 1; i++) {
    visibleProjects.push({
      ...getProject(currentIndex + i),
      position: i,
    });
  }

  const handleNext = () => {
    if (isAnimating) return;
    setDirection("next");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
      setDirection(null);
      setIsAnimating(false);
    }, 650);
  };

  const handlePrevious = () => {
    if (isAnimating) return;
    setDirection("previous");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + total) % total);
      setDirection(null);
      setIsAnimating(false);
    }, 650);
  };

  const baseOffset = -slideDistance;

  const animationOffset =
    direction === "next"
      ? -slideDistance
      : direction === "previous"
        ? slideDistance
        : 0;

  return (
    <section className="border-t border-[var(--border-color)] bg-[var(--bg-color)] overflow-hidden">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-8 pb-24 pt-24 md:px-16">
        <h2 className="text-5xl md:text-6xl font-medium mb-24 text-[var(--text-main)] serif-font">
          Quick Experiments
        </h2>

        {/* Viewport */}
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
          <div ref={viewportRef} className="overflow-hidden">
            {/* Track */}
            <div
              ref={trackRef}
              className={`flex gap-6 md:gap-8 will-change-transform
            ${
              isAnimating
                ? "transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                : ""
            }`}
              style={{
                transform: `translate3d(
              ${baseOffset + animationOffset}px, 0, 0)`,
              }}
            >
              {visibleProjects.map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="flex-none w-full md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)]"
                  style={{
                    width:
                      cardsPerView === 1
                        ? "100%"
                        : cardsPerView === 2
                          ? "calc((100% - 2rem) / 2)"
                          : "calc((100% - 4rem) / 3)",
                  }}
                >
                  <ExperimentCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 flex-col items-center">
            <div className="flex items-center gap-8 md:gap-12 mt-8 md:mt-12">
              <button
                type="button"
                disabled={isAnimating}
                onClick={handlePrevious}
                className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors disabled:opacity-30"
              >
                <span className="material-symbols-outlined !text-base">
                  west
                </span>
                Previous
              </button>

              <button
                type="button"
                disabled={isAnimating}
                onClick={handleNext}
                className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors disabled:opacity-30"
              >
                Next
                <span className="material-symbols-outlined !text-base">
                  east
                </span>
              </button>
            </div>
            <span className="sm:block text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
              {String(currentIndex + 1).padStart(2, "0")} —{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  liveLink: string;
  codeLink: string;
  action: string;
};

type ExperimentCardProps = {
  project: Project;
};

const ExperimentCard = ({ project }: ExperimentCardProps) => {
  return (
    <article className="group">
      {/* Image */}
      <div className="aspect-square overflow-hidden mb-5 md:mb-6 bg-slate-100">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            grayscale
            transition-all
            duration-500
            group-hover:grayscale-0
            group-hover:scale-[1.02]
          "
        />
      </div>
      <div className="space-y-3">
        <h4 className="text-2xl italic hover:italic serif-font font-medium tracking-wider text-[var(--text-main)]">
          {project.title}
        </h4>

        <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
          {project.description}
        </p>

        <div className="flex items-center gap-5 pt-2">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="experiment-link inline-block text-[11px] font-bold uppercase tracking-widest text-[var(--text-main)] hover:text-[var(--accent-purple)] transition-colors pt-2"
          >
            <span className="pb-0.5 border-b border-transparent hover:border-[var(--accent-purple)]">
              Live Project
            </span>
          </a>

          <a
            href={project.codeLink}
            target="_blank"
            rel="noreferrer"
            className="experiment-link inline-block text-[11px] font-bold uppercase tracking-widest text-[var(--text-main)] hover:text-[var(--accent-purple)] transition-colors pt-2"
          >
            <span className="pb-0.5 border-b border-transparent hover:border-[var(--accent-purple)]">
              View Code
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Experiments;
