import {
  Feature,
  Process,
  TechnicalChallenge,
  TechStack,
} from "@/data/projects";
import React from "react";

type Impact = {
  value: string;
  label: string;
};

type ContentProps = {
  // Left sidebar content
  role: string;
  projectType?: string;
  techStack: TechStack;
  year: number;
  tags: string[];

  // Main content
  overview: string;
  problem: string;
  solution: string;
  architectureImage: string;
  features: Feature[];
  responsibilities: string[];
  technicalChallenges: TechnicalChallenge[];
  process: Process[];
  result: string;
};

const Content = ({
  role,
  projectType,
  tags,
  year,
  techStack,
  overview,
  problem,
  solution,
  architectureImage,
  features,
  responsibilities,
  technicalChallenges,
  process,
  result,
}: ContentProps) => {
  return (
    <section className="py-24 md:py-32 max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24">
      <div className="grid lg:grid-cols-12 gap-16">
        {/* sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 space-y-10">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-[var(--accent-purple)] mb-2 font-bold">
                Role
              </h4>
              <p className="text-sm pr-2">{role}</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-[var(--accent-purple)] mb-2 font-bold">
                Project Type
              </h4>
              <p className="text-sm pr-2">{projectType}</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-[var(--accent-purple)] mb-2 font-bold">
                Timeline
              </h4>
              <p className="text-sm pr-2">{year}</p>
            </div>
            <div className="pt-8 border-t border-[var(--border-color)]">
              <h4 className="text-[10px] uppercase tracking-widest text-[var(--accent-purple)] mb-4 font-bold">
                Technologies
              </h4>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-x-3 gap-y-2 pr-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* content */}
        <div className="lg:col-span-8 space-y-32">
          <article>
            <div className="prose prose-slate prose-lg max-w-none">
              <h2 className="text-4xl md:text-5xl mb-10 leading-tight">
                Project Overview
              </h2>
              <p className="mt-8 text-base leading-8 text-[var(--text-muted)] sm:text-lg">
                {overview}
              </p>
            </div>
            <div className="prose prose-slate prose-lg max-w-none mt-24">
              <h2 className="text-3xl uppercase tracking-widest font-bold mb-10 text-slate-500 dark:text-slate-700">
                Problem
              </h2>
              <p className="mt-8 text-base leading-8 text-[var(--text-muted)] sm:text-lg">
                {problem}
              </p>
            </div>
            <div className="prose prose-slate prose-lg max-w-none mt-24">
              <h2 className="text-3xl uppercase tracking-widest font-bold mb-10 text-slate-500 dark:text-slate-700">
                Solution
              </h2>
              <p className="mt-8 text-base leading-8 text-[var(--text-muted)] sm:text-lg">
                {solution}
              </p>
            </div>
          </article>
          <figure>
            <img
              alt="System Architecture Overview"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              src={architectureImage}
            />
          </figure>
          <article>
            <h2 className="text-4xl md:text-5xl mb-12 leading-tight">
              Key Features
            </h2>
            <div className="space-y-10">
              {features.map((feature, index) => (
                <div
                  key={`${feature.title}-${index}`}
                  className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 items-start"
                >
                  <span className="text-4xl font-serif italic text-[var(--text-main)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl italic font-medium mb-3 text-[var(--text-main)]">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
          <article>
            <h2 className="text-4xl md:text-5xl mb-10 leading-tight">
              Contribution
            </h2>
            <ul className="space-y-3 text-[var(--text-muted)] font-light list-disc marker:text-[var(--text-muted)] pl-6">
              {responsibilities.map((responsibility, index) => (
                <li key={`${responsibility}-${index}`}>
                  <p className="mt-8 text-base leading-8 text-[var(--text-muted)] sm:text-lg">
                    {responsibility}
                  </p>
                </li>
              ))}
            </ul>
          </article>
          <article>
            <div>
              <h2 className="text-4xl md:text-5xl mb-12 leading-tight">
                Technical Challenges
              </h2>
              <div className="space-y-10">
                {technicalChallenges.map((challenge, index) => (
                  <div key={`${challenge.title}-${index}`}>
                    <h4 className="text-lg serif-font italic text-[var(--text-main)]">
                      {challenge.title}
                    </h4>
                    <p className="text-base mt-2">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
          <article>
            <h2 className="text-4xl md:text-5xl mb-12 leading-tight">
              The Process
            </h2>
            <div className="space-y-10">
              {process.map((step) => (
                <div
                  key={`${step.number}`}
                  className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 items-start"
                >
                  <span className="text-4xl font-serif text-[var(--text-main)]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-[var(--text-main)]">
                      {step.title}
                    </h3>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
          <article>
            <div className="prose prose-slate prose-lg max-w-none">
              <h2 className="text-4xl md:text-5xl mb-10 leading-tight">
                Result
              </h2>
              <p className="mt-8 text-base leading-8 text-[var(--text-muted)] sm:text-lg">
                {result}
              </p>
            </div>
          </article>
          <figure className="p-8 md:p-16">
            <img
              alt="Interface Design Mockups"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzpaewA8kUA3pGWqE2WwymReT8pldkGMEa6Zd1U_F_C2n6-E1xkGhr3VZVGQFubFEygil0pDA3F7BZ9emYrU6HH_M7gyB7nYNrbGkdqprEV8o4my1iWkK4zf3rULtcNqHWQI_KCN_EM4E4k8jHgc_6Bjj_5-KWT_BftD_Srlx3KH6pzLd2yxjk456YEK4iCD9KRjqBvnUVJGeih5fqfIs36Y1h_eNc3YnYCHUeHCXo6nD_ubYUr5li1kWXLHqbejuW1gL0HeDn1A"
            />
          </figure>
          <article>
            <h2 className="text-4xl md:text-5xl mb-20 leading-tight">
              Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              <div className="space-y-4">
                <div className="flex italic serif-font items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    dns
                  </span>
                  <h4 className="font-bold">Backend &amp; API</h4>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {techStack.backend.map((item) => (
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex italic serif-font items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    database
                  </span>
                  <h4 className="font-bold">Data Management</h4>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {techStack.database.map((item) => (
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex italic serif-font items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    layers
                  </span>
                  <h4 className="font-bold">Frontend Ecosystem</h4>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {techStack.frontend.map((item) => (
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex italic serif-font items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    cloud_done
                  </span>
                  <h4 className="font-bold">DevOps &amp; Cloud</h4>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {techStack.infrastructure.map((item) => (
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </article>
          <div className="flex gap-8 pt-20 border-t border-[var(--border-color)]">
            <a
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:opacity-60 transition-opacity"
              href="#"
            >
              View Repository
              <span className="material-symbols-outlined !text-sm">
                arrow_outward
              </span>
            </a>
            <a
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:opacity-60 transition-opacity"
              href="#"
            >
              Live Site
              <span className="material-symbols-outlined !text-sm">
                arrow_outward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
