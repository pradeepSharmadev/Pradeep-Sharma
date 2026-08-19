"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
// import { projects } from "@/data/projects";

const projects = [
  {
    id: 1,
    title: "Communication Platform",
    year: 2026,
    categories: ["Full Stack", "Real-Time"],
    tags: ["Real-Time", "Socket.IO", "WebRTC"],
    description:
      "A real-time communication platform enabling instant messaging, presence, and peer-to-peer audio/video communication between users.",
    image: "/images/communication-platform.png",
    imageAlt: "Communication Platform — real-time communication application",
    caseStudy: "/projects/communication-platform",
    liveSite: "https://example.com",
  },

  {
    id: 2,
    title: "Payment Platform",
    year: 2026,
    categories: ["Full Stack", "Backend & APIs"],
    tags: ["Payments", "Razorpay", "Webhooks"],
    description:
      "A full-stack payment platform designed around secure transactions, payment workflows, and reliable webhook-based integrations.",
    image: "/images/payment-platform.png",
    imageAlt: "Payment Platform — payment management application",
    caseStudy: "/projects/payment-platform",
    liveSite: "https://example.com",
  },

  {
    id: 3,
    title: "Healthcare Platform",
    year: 2026,
    categories: ["Full Stack", "Real-Time", "Product"],
    tags: ["Full Stack", "Authentication", "Real-Time"],
    description:
      "A modern healthcare platform focused on creating an accessible, intuitive, and reliable digital experience for users.",
    image: "/images/healthcare-platform.png",
    imageAlt: "Healthcare Platform — digital healthcare application",
    caseStudy: "/projects/healthcare-platform",
    liveSite: "https://example.com",
  },

  {
    id: 4,
    title: "Financial Dashboard",
    year: 2025,
    categories: ["Full Stack", "Product"],
    tags: ["Data Visualization", "APIs", "Dashboard"],
    description:
      "A data-driven financial dashboard that transforms complex financial information into clear visualizations and actionable insights.",
    image: "/images/financial-dashboard.png",
    imageAlt: "Financial Dashboard — financial data visualization",
    caseStudy: "/projects/financial-dashboard",
    liveSite: "https://example.com",
  },
  
  {
    id: 5,
    title: "InternFree",
    year: 2026,
    categories: ["Full Stack", "Backend & APIs", "Real-Time", "Product"],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Socket.IO",
      "WebRTC",
      "Razorpay",
    ],
    description:
      "A talent marketplace platform connecting talent and hiring workflows through verification, matching, interviews, payments, and workspace collaboration.",
    image: "/images/internfree.png",
    imageAlt: "InternFree — talent marketplace platform",
    caseStudy: "/projects/internfree",
    liveSite: "https://example.com",
  },

  {
    id: 6,
    title: "Real-Time Chat & Video Call",
    year: 2026,
    categories: ["Full Stack", "Real-Time"],
    tags: ["React.js", "Node.js", "Socket.IO", "WebRTC", "JWT"],
    description:
      "A real-time communication application supporting one-to-one and group messaging with WebRTC-powered voice and video calling.",
    image: "/images/real-time-chat.png",
    imageAlt: "Real-Time Chat & Video Call — communication application",
    caseStudy: "/projects/real-time-chat-video-call",
    liveSite: "https://example.com",
  },

  {
    id: 7,
    title: "E-Commerce Platform",
    year: 2025,
    categories: ["Full Stack", "Backend & APIs", "Product"],
    tags: ["MERN Stack", "MongoDB", "Razorpay"],
    description:
      "A full-stack e-commerce application covering product management, shopping carts, orders, payments, and role-based administration.",
    image: "/images/e-commerce.png",
    imageAlt: "E-Commerce Platform — shopping and payment application",
    caseStudy: "/projects/e-commerce-platform",
    liveSite: "https://example.com",
  },
];

const filters = [
  "All Projects",
  "Full Stack",
  "Backend & APIs",
  "Real-Time",
  "Product",
];

const Projects = () => {
  const [projectState, setProjectState] = useState({
    filter: "All Projects",
    search: "",
    sort: "latest",
  });

  const filteredProjects = useMemo(() => {
    return [...projects]
      .filter((project) => {
        const matchesFilter =
          projectState.filter === "All Projects" ||
          project.categories.includes(projectState.filter);

        const searchTerm = projectState.search.toLowerCase().trim();

        const matchesSearch =
          !searchTerm ||
          project.title.toLowerCase().includes(searchTerm) ||
          project.description.toLowerCase().includes(searchTerm) ||
          project.tags?.some((tag) => tag.toLowerCase().includes(searchTerm));

        return matchesFilter && matchesSearch;
      })
      .sort((a, b) => {
        if (projectState.sort === "latest") {
          return (b.year ?? 0) - (a.year ?? 0);
        }

        if (projectState.sort === "oldest") {
          return (a.year ?? 0) - (b.year ?? 0);
        }

        if (projectState.sort === "az") {
          return a.title.localeCompare(b.title);
        }

        if (projectState.sort === "za") {
          return b.title.localeCompare(a.title);
        }

        return 0;
      });
  }, [projects, projectState]);
  return (
    <>
      <section className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 border-b border-[var(--border-color)] ">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm font-bold uppercase tracking-widest text-[var(--text-muted)]">
            {filters.map((filter) => {
              const active = projectState.filter === filter;

              return (
                <button
                  key={filter}
                  onClick={() =>
                    setProjectState((prev) => ({
                      ...prev,
                      filter,
                    }))
                  }
                  className={`
                    pb-1 -mb-[1px] border-b-2 transition-colors
                    ${
                      active
                        ? "text-[var(--text-main)] border-[var(--accent-purple)]"
                        : "border-transparent hover:text-[var(--text-main)]"
                    }
                  `}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Search + Sort */}
          <div className="flex items-center gap-4 pb-5 lg:pb-6">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                value={projectState.search}
                onChange={(e) =>
                  setProjectState((prev) => ({
                    ...prev,
                    search: e.target.value,
                  }))
                }
                placeholder="Search..."
                className="w-32 md:w-44 bg-transparent border-b border-[var(--border-color)] py-2 text-xs uppercase tracking-widest text-[var(--text-main)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-purple)] transition-colors"
              />
            </div>

            {/* Sort */}
            <select
              value={projectState.sort}
              onChange={(e) =>
                setProjectState((prev) => ({
                  ...prev,
                  sort: e.target.value,
                }))
              }
              className="bg-transparent border-0 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] focus:outline-none cursor-pointer"
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
            </select>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-16 pb-40 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {filteredProjects.map((project) => (
            <article key={project.id} className="group cursor-pointer">
              {/* Image */}
              {/* aspect-[16/10] */}
              <div className="relative aspect-[3/2] overflow-hidden mb-8 border border-[var(--border-color)]">
                <Image
                  src={project.image}
                  alt={project.imageAlt || project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-[0.1em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-3xl serif-font">{project.title}</h3>

                {/* Description */}
                <p className="text-[var(--text-muted)] font-light max-w-md leading-6">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-6 pt-8 text-[var(--text-main)]">
                  {project.caseStudy && (
                    <a
                      href={project.caseStudy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[12px] uppercase tracking-widest font-bold hover:text-[var(--accent-purple)] hover:italic transition-all duration-300"
                    >
                      View Case Study
                      <span className="material-symbols-outlined !text-sm">
                        arrow_outward
                      </span>
                    </a>
                  )}

                  {project.liveSite && (
                    <a
                      href={project.liveSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[12px] uppercase tracking-widest font-bold hover:text-[var(--accent-purple)] hover:italic transition-all duration-300"
                    >
                      Live Site
                      <span className="material-symbols-outlined !text-sm">
                        arrow_outward
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-sm uppercase tracking-widest text-[var(--text-muted)]">
              No projects found
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default Projects;
