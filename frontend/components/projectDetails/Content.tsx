// import {
//   Feature,
//   Process,
//   TechnicalChallenge,
//   TechStack,
// } from "@/data/projects";
// import React from "react";

// type Impact = {
//   value: string;
//   label: string;
// };

// type ContentProps = {
//   // left side bar content
//   role: string;
//   projectType?: string;
//   team?: string;
//   duration?: string;
//   year: number;
//   categories: string[];
//   tags: string[];

//   // content
//   overview: string;
//   problem: string;
//   solution: string;

//   features: Feature[];
//   responsibilities: string[];
//   technicalChallenges: TechnicalChallenge[];

//   process: Process[];

//   result: string;
//   impact: Impact[];
//   techStack: TechStack;
// };

// const Content = ({ overview }: ContentProps) => {
//   return (
//     <section className="py-24 md:py-32 max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24">
//       <div className="grid lg:grid-cols-12 gap-16">
//         <div className="lg:col-span-4">
//           <div className="sticky top-32 space-y-12">
//             <div>
//               <h4 className="text-[10px] uppercase tracking-widest text-[var(--accent-purple)] mb-2 font-bold">
//                 Role
//               </h4>
//               <p className="text-sm">Full Stack Developer</p>
//             </div>
//             <div>
//               <h4 className="text-[10px] uppercase tracking-widest text-[var(--accent-purple)] mb-2 font-bold">
//                 Stack
//               </h4>
//               <p className="text-sm">MERN (MongoDB, Express, React, Node)</p>
//             </div>
//             <div>
//               <h4 className="text-[10px] uppercase tracking-widest text-[var(--accent-purple)] mb-2 font-bold">
//                 Timeline
//               </h4>
//               <p className="text-sm">4 Months</p>
//             </div>
//             <div>
//               <h4 className="text-[10px] uppercase tracking-widest text-[var(--accent-purple)] mb-2 font-bold">
//                 Client
//               </h4>
//               <p className="text-sm">Internal University Project</p>
//             </div>
//             <div className="pt-8 border-t border-[var(--border-color)]">
//               <h4 className="text-[10px] uppercase tracking-widest text-[var(--accent-purple)] mb-4 font-bold">
//                 Reliability
//               </h4>
//               <ul className="text-xs space-y-3 text-[var(--text-muted)]">
//                 <li className="flex items-center gap-2">
//                   <span className="w-1 h-1 bg-[var(--accent-purple)] rounded-full"></span>{" "}
//                   Unit Testing with Jest
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="w-1 h-1 bg-[var(--accent-purple)] rounded-full"></span>{" "}
//                   CI/CD with GitHub Actions
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span className="w-1 h-1 bg-[var(--accent-purple)] rounded-full"></span>
//                   Deployed on AWS &amp; Vercel
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="lg:col-span-8 space-y-32">
//           <article>
//             <h2 className="text-4xl md:text-5xl mb-10 leading-tight">
//               Engineering a scalable hub for academic and industry synergy.
//             </h2>
//             <div className="prose prose-slate prose-lg max-w-none space-y-8 text-[var(--text-muted)]">
//               <p>
//                 The core objective was to build a robust, high-performance
//                 platform that handles real-time interactions between students
//                 and industry professionals. This required a deep dive into
//                 scalable system design and efficient data management.
//               </p>
//               <div className="mt-12">
//                 <h3 className="text-3xl uppercase tracking-widest font-bold mb-16 text-slate-300 dark:text-slate-700">
//                   Technical Challenges
//                 </h3>
//                 <div className="space-y-16">
//                   <div>
//                     <h4 className="text-lg serif-font italic text-[var(--text-main)]">
//                       State Management Complexity
//                     </h4>
//                     <p className="text-base mt-2">
//                       Managing multi-step registration flows and persistent
//                       real-time notifications across the client-side without
//                       compromising performance.
//                     </p>
//                   </div>
//                   <div>
//                     <h4 className="text-lg serif-font italic text-[var(--text-main)]">
//                       API Optimization
//                     </h4>
//                     <p className="text-base mt-2">
//                       Implementing advanced indexing in MongoDB and leveraging
//                       Redis caching to reduce latency on high-traffic mentorship
//                       matching endpoints.
//                     </p>
//                   </div>
//                   <div>
//                     <h4 className="text-lg serif-font italic text-[var(--text-main)]">
//                       Security Implementation
//                     </h4>
//                     <p className="text-base mt-2">
//                       Enforcing strict JWT-based authentication and CORS
//                       policies while ensuring data integrity through server-side
//                       validation schemas.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </article>
//           <figure className="p-8 md:p-16">
//             <img
//               alt="System Architecture Overview"
//               className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
//               src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4K91jWGz5jHS5uxMLl8nyhctk_jRHOq950LCgpBbRGdd-yrB4xW7pSpobZzZ-a8iNC8cUtfRIshGw8N13wbD9SwBNcwno8urC3kMRG9990xixXPecjY76lJLizyX2ofYO811mTMPe_M6mUtQ_wq3vvtXgD4jMWM9rPbdKdwJA3qEErXD-JwIxrbgb_zx0geYtTUeeajd7srRhX26lTM87vfuNEVDEMLql4DDO8cLVZDCxZ9D_ELIgWQkvGFT0nNu5BTpboi-cVA"
//             />
//           </figure>
//           <article>
//             <h2 className="text-3xl uppercase tracking-widest font-bold mb-16 text-slate-300 dark:text-slate-700">
//               Engineering Process
//             </h2>
//             <div className="space-y-16">
//               <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 items-start">
//                 <span className="text-4xl font-serif italic text-[var(--text-main)]">
//                   01.
//                 </span>
//                 <div>
//                   <h3 className="text-xl italic font-medium mb-3 text-[var(--text-main)]">
//                     Schema Design
//                   </h3>
//                   <p className="text-[var(--text-muted)] leading-relaxed">
//                     Modeling the data relationships in MongoDB to support
//                     complex queries for the mentorship matching engine.
//                   </p>
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 items-start">
//                 <span className="text-4xl font-serif italic text-[var(--text-main)]">
//                   02.
//                 </span>
//                 <div>
//                   <h3 className="text-xl italic font-medium mb-3 text-[var(--text-main)]">
//                     Backend Development
//                   </h3>
//                   <p className="text-[var(--text-muted)] leading-relaxed">
//                     Developing a RESTful API with Node.js and Express, focusing
//                     on modular controllers and middleware for logging.
//                   </p>
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 items-start">
//                 <span className="text-4xl font-serif italic text-[var(--text-main)]">
//                   03.
//                 </span>
//                 <div>
//                   <h3 className="text-xl italic font-medium mb-3 text-[var(--text-main)]">
//                     Frontend Integration
//                   </h3>
//                   <p className="text-[var(--text-muted)] leading-relaxed">
//                     Building a responsive React SPA with Redux for predictable
//                     state management and Tailwind for atomic styling.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </article>
//           <article>
//             <h2 className="text-3xl uppercase tracking-widest font-bold mb-16 text-slate-300 dark:text-slate-700">
//               Architecture &amp; Tech Stack
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
//               <div className="space-y-4">
//                 <div className="flex italic serif-font items-center gap-4">
//                   <span className="material-symbols-outlined text-primary">
//                     dns
//                   </span>
//                   <h4 className="font-bold">Backend &amp; API</h4>
//                 </div>
//                 <p className="text-sm text-[var(--text-muted)] leading-relaxed">
//                   Node/Express serves as the core engine, utilizing REST APIs to
//                   handle student data and mentorship logic. Implemented custom
//                   middleware for authentication and error handling.
//                 </p>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex italic serif-font items-center gap-4">
//                   <span className="material-symbols-outlined text-primary">
//                     database
//                   </span>
//                   <h4 className="font-bold">Data Management</h4>
//                 </div>
//                 <p className="text-sm text-[var(--text-muted)] leading-relaxed">
//                   MongoDB Atlas for scalable, document-oriented storage.
//                   Optimized for read-heavy operations using strategic indexing
//                   and aggregation pipelines.
//                 </p>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex italic serif-font items-center gap-4">
//                   <span className="material-symbols-outlined text-primary">
//                     layers
//                   </span>
//                   <h4 className="font-bold">Frontend Ecosystem</h4>
//                 </div>
//                 <p className="text-sm text-[var(--text-muted)] leading-relaxed">
//                   React for the user interface, utilizing Hooks and Context API
//                   for localized state, and Redux Toolkit for global data
//                   synchronization.
//                 </p>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex italic serif-font items-center gap-4">
//                   <span className="material-symbols-outlined text-primary">
//                     cloud_done
//                   </span>
//                   <h4 className="font-bold">DevOps &amp; Cloud</h4>
//                 </div>
//                 <p className="text-sm text-[var(--text-muted)] leading-relaxed">
//                   Automated deployments via GitHub Actions. Frontend hosted on
//                   Vercel, with backend services orchestrated on AWS EC2
//                   instances.
//                 </p>
//               </div>
//             </div>
//           </article>
//           <figure className="p-8 md:p-16">
//             <img
//               alt="Interface Design Mockups"
//               className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
//               src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzpaewA8kUA3pGWqE2WwymReT8pldkGMEa6Zd1U_F_C2n6-E1xkGhr3VZVGQFubFEygil0pDA3F7BZ9emYrU6HH_M7gyB7nYNrbGkdqprEV8o4my1iWkK4zf3rULtcNqHWQI_KCN_EM4E4k8jHgc_6Bjj_5-KWT_BftD_Srlx3KH6pzLd2yxjk456YEK4iCD9KRjqBvnUVJGeih5fqfIs36Y1h_eNc3YnYCHUeHCXo6nD_ubYUr5li1kWXLHqbejuW1gL0HeDn1A"
//             />
//           </figure>
//           <article>
//             <h2 className="text-4xl md:text-5xl mb-10 leading-tight">
//               Project Impact
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//               <div className="border-l border-[var(--border-color)] pl-8 py-4">
//                 <span className="block text-4xl font-serif mb-2">40%</span>
//                 <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
//                   Load Time Improvement
//                 </p>
//               </div>
//               <div className="border-l border-[var(--border-color)] pl-8 py-4">
//                 <span className="block text-4xl font-serif mb-2">99.9%</span>
//                 <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
//                   System Uptime
//                 </p>
//               </div>
//             </div>
//           </article>
//           <div className="pt-20 border-t border-[var(--border-color)]">
//             <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-purple)] mb-8">
//               Engineering Toolkit
//             </h4>
//             <div className="flex flex-wrap gap-x-8 gap-y-4">
//               <span className="text-sm font-medium px-4 py-2 bg-[var(--accent-soft)] rounded">
//                 React.js
//               </span>
//               <span className="text-sm font-medium px-4 py-2 bg-[var(--accent-soft)] rounded">
//                 Node.js
//               </span>
//               <span className="text-sm font-medium px-4 py-2 bg-[var(--accent-soft)] rounded">
//                 Express
//               </span>
//               <span className="text-sm font-medium px-4 py-2 bg-[var(--accent-soft)] rounded">
//                 MongoDB
//               </span>
//               <span className="text-sm font-medium px-4 py-2 bg-[var(--accent-soft)] rounded">
//                 Redux
//               </span>
//               <span className="text-sm font-medium px-4 py-2 bg-[var(--accent-soft)] rounded">
//                 Tailwind CSS
//               </span>
//               <span className="text-sm font-medium px-4 py-2 bg-[var(--accent-soft)] rounded">
//                 AWS
//               </span>
//               <span className="text-sm font-medium px-4 py-2 bg-[var(--accent-soft)] rounded">
//                 Jest
//               </span>
//               <span className="text-sm font-medium px-4 py-2 bg-[var(--accent-soft)] rounded">
//                 Docker
//               </span>
//             </div>
//             <div className="flex gap-12 mt-16 pt-12 border-t border-[var(--border-color)]">
//               <a
//                 className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:opacity-60 transition-opacity"
//                 href="#"
//               >
//                 View Github
//                 <span className="material-symbols-outlined !text-sm">
//                   arrow_outward
//                 </span>
//               </a>
//               <a
//                 className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:opacity-60 transition-opacity"
//                 href="#"
//               >
//                 Open Live Demo
//                 <span className="material-symbols-outlined !text-sm">
//                   arrow_outward
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Content;

import React from "react";

type ContentProps = {
  // Left sidebar content
  role: string;
  projectType?: string;
  team?: string;
  duration?: string;
  categories: string[];
  tags: string[];
  year: number;
  techStack: TechStack;

  // Main content
  overview: string;
  problem: string;
  solution: string;
  features: Feature[];
  responsibilities: string[];
  technicalChallenges: TechnicalChallenge[];
  process: Process[];
  result: string;
  impact: Impact[];
};

type Feature = {
  title: string;
  description: string;
};

type TechnicalChallenge = {
  title: string;
  description: string;
};

type Process = {
  number: string;
  title: string;
  description: string;
};

type Impact = {
  value: string;
  label: string;
};

type TechStack = {
  frontend: string[];
  backend: string[];
  database: string[];
  realtime?: string[];
  infrastructure?: string[];
  testing?: string[];
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-500">
    {children}
  </p>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="max-w-3xl font-serif text-3xl font-normal leading-tight tracking-[-0.02em] text-white sm:text-4xl">
    {children}
  </h2>
);

const Content = ({
  role,
  projectType,
  team,
  duration,
  categories,
  tags,
  year,
  techStack,
  overview,
  problem,
  solution,
  features,
  responsibilities,
  technicalChallenges,
  process,
  result,
  impact,
}: ContentProps) => {
  return (
    <div className="w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 pb-24 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20 lg:px-10 xl:gap-28">
        {/* list of side bar */}
        <aside className="h-fit lg:sticky lg:top-24">
          <div className="space-y-8">
            {/* Role */}
            <div>
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
                Role
              </p>

              <p className="text-sm leading-6 text-neutral-300">{role}</p>
            </div>

            {/* Project Type */}
            {projectType && (
              <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
                  Project Type
                </p>

                <p className="text-sm leading-6 text-neutral-300">
                  {projectType}
                </p>
              </div>
            )}

            {/* Team */}
            {team && (
              <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
                  Team
                </p>

                <p className="text-sm leading-6 text-neutral-300">{team}</p>
              </div>
            )}

            {/* Duration */}
            {duration && (
              <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
                  Timeline
                </p>

                <p className="text-sm leading-6 text-neutral-300">{duration}</p>
              </div>
            )}

            {/* Year */}
            <div>
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
                Year
              </p>

              <p className="text-sm text-neutral-300">{year}</p>
            </div>

            {/* Categories */}
            {categories.length > 0 && (
              <div>
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
                  Categories
                </p>

                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <span
                      key={category}
                      className="border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-neutral-400"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {tags.length > 0 && (
              <div>
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-neutral-500 transition-colors hover:text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Main content */}
        <main className="min-w-0">
          <div className="max-w-4xl">
           {/* overview */}
            <section className="border-b border-white/10 pb-20">
              <SectionLabel>01 — Overview</SectionLabel>

              <SectionTitle>
                Engineering a meaningful digital experience.
              </SectionTitle>

              <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-400 sm:text-lg">
                {overview}
              </p>
            </section>

            {/* problem */}
            <section className="border-b border-white/10 py-20">
              <SectionLabel>02 — The Problem</SectionLabel>

              <SectionTitle>
                Understanding the problem before writing the solution.
              </SectionTitle>

              <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-400 sm:text-lg">
                {problem}
              </p>
            </section>

            {/* solution */}
            <section className="border-b border-white/10 py-20">
              <SectionLabel>03 — The Solution</SectionLabel>

              <SectionTitle>
                Turning the product requirements into a scalable system.
              </SectionTitle>

              <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-400 sm:text-lg">
                {solution}
              </p>
            </section>

            {/* features */}
            <section className="border-b border-white/10 py-20">
              <SectionLabel>04 — Key Features</SectionLabel>

              <SectionTitle>
                Built around the experience users actually need.
              </SectionTitle>

              <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
                {features.map((feature, index) => (
                  <article
                    key={`${feature.title}-${index}`}
                    className="grid gap-4 py-7 sm:grid-cols-[40px_minmax(0,1fr)]"
                  >
                    <span className="font-mono text-xs text-neutral-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-base font-medium text-neutral-200">
                        {feature.title}
                      </h3>

                      <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-500">
                        {feature.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Responsibilities */}
            <section className="border-b border-white/10 py-20">
              <SectionLabel>05 — My Contribution</SectionLabel>

              <SectionTitle>From architecture to implementation.</SectionTitle>

              <div className="mt-10">
                <ul className="space-y-0 border-y border-white/10">
                  {responsibilities.map((responsibility, index) => (
                    <li
                      key={`${responsibility}-${index}`}
                      className="flex gap-5 border-b border-white/10 py-5 last:border-b-0"
                    >
                      <span className="mt-1 shrink-0 font-mono text-[10px] text-neutral-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-sm leading-7 text-neutral-400">
                        {responsibility}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Technical Challenges */}
            <section className="border-b border-white/10 py-20">
              <SectionLabel>06 — Technical Challenges</SectionLabel>

              <SectionTitle>
                Where engineering decisions mattered most.
              </SectionTitle>

              <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
                {technicalChallenges.map((challenge, index) => (
                  <article
                    key={`${challenge.title}-${index}`}
                    className="bg-[#0a0a0a] p-7 sm:p-8"
                  >
                    <span className="font-mono text-[10px] text-neutral-600">
                      0{index + 1}
                    </span>

                    <h3 className="mt-5 text-base font-medium text-neutral-200">
                      {challenge.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-neutral-500">
                      {challenge.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* process */}
            <section className="border-b border-white/10 py-20">
              <SectionLabel>07 — Engineering Process</SectionLabel>

              <SectionTitle>From system design to production.</SectionTitle>

              <div className="mt-12">
                <div className="divide-y divide-white/10 border-y border-white/10">
                  {process.map((step) => (
                    <article
                      key={step.number}
                      className="grid gap-5 py-8 sm:grid-cols-[60px_minmax(0,1fr)]"
                    >
                      <span className="font-mono text-xs text-neutral-600">
                        {step.number}.
                      </span>

                      <div>
                        <h3 className="text-lg font-medium text-neutral-200">
                          {step.title}
                        </h3>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-500">
                          {step.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* Result */}
            <section className="border-b border-white/10 py-20">
              <SectionLabel>08 — Result</SectionLabel>

              <SectionTitle>A foundation designed to evolve.</SectionTitle>

              <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-400 sm:text-lg">
                {result}
              </p>
            </section>

           {/* Impact */}
            <section className="border-b border-white/10 py-20">
              <SectionLabel>09 — Project Impact</SectionLabel>

              <SectionTitle>
                The outcome in numbers and engineering signals.
              </SectionTitle>

              <div className="mt-12 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4">
                {impact.map((item, index) => (
                  <div
                    key={`${item.value}-${index}`}
                    className="border-b border-r border-white/10 p-6 sm:p-7"
                  >
                    <p className="font-serif text-2xl text-white sm:text-3xl">
                      {item.value}
                    </p>

                    <p className="mt-3 text-[10px] uppercase leading-5 tracking-[0.16em] text-neutral-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technology Stack */}
            <section className="py-20">
              <SectionLabel>10 — Engineering Toolkit</SectionLabel>

              <SectionTitle>Technologies behind the product.</SectionTitle>

              <div className="mt-12 space-y-0 border-y border-white/10">
                <TechGroup title="Frontend" items={techStack.frontend} />

                <TechGroup title="Backend" items={techStack.backend} />

                <TechGroup title="Database" items={techStack.database} />

                {techStack.realtime && techStack.realtime.length > 0 && (
                  <TechGroup title="Real-Time" items={techStack.realtime} />
                )}

                {techStack.infrastructure &&
                  techStack.infrastructure.length > 0 && (
                    <TechGroup
                      title="Infrastructure"
                      items={techStack.infrastructure}
                    />
                  )}

                {techStack.testing && techStack.testing.length > 0 && (
                  <TechGroup title="Testing" items={techStack.testing} />
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};


const TechGroup = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div className="grid gap-4 border-b border-white/10 py-6 last:border-b-0 sm:grid-cols-[160px_minmax(0,1fr)] sm:items-start">
      <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
        {title}
      </p>

      <div className="flex flex-wrap gap-x-5 gap-y-2">
        {items.map((item) => (
          <span key={item} className="text-sm text-neutral-400">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Content;
