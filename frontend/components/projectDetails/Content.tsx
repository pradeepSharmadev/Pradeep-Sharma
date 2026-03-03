import React from "react";

const Content = () => {
  return (
    <section className="py-24 md:py-32 max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24">
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <div className="sticky top-32 space-y-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-[var(--accent-purple)] mb-2 font-bold">
                Role
              </h4>
              <p className="text-sm">Full Stack Developer</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-[var(--accent-purple)] mb-2 font-bold">
                Stack
              </h4>
              <p className="text-sm">MERN (MongoDB, Express, React, Node)</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-[var(--accent-purple)] mb-2 font-bold">
                Timeline
              </h4>
              <p className="text-sm">4 Months</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-[var(--accent-purple)] mb-2 font-bold">
                Client
              </h4>
              <p className="text-sm">Internal University Project</p>
            </div>
            <div className="pt-8 border-t border-[var(--border-color)]">
              <h4 className="text-[10px] uppercase tracking-widest text-[var(--accent-purple)] mb-4 font-bold">
                Reliability
              </h4>
              <ul className="text-xs space-y-3 text-[var(--text-muted)]">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-[var(--accent-purple)] rounded-full"></span>{" "}
                  Unit Testing with Jest
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-[var(--accent-purple)] rounded-full"></span>{" "}
                  CI/CD with GitHub Actions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-[var(--accent-purple)] rounded-full"></span>
                  Deployed on AWS &amp; Vercel
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-32">
          <article>
            <h2 className="text-4xl md:text-5xl mb-10 leading-tight">
              Engineering a scalable hub for academic and industry synergy.
            </h2>
            <div className="prose prose-slate prose-lg max-w-none space-y-8 text-[var(--text-muted)]">
              <p>
                The core objective was to build a robust, high-performance
                platform that handles real-time interactions between students
                and industry professionals. This required a deep dive into
                scalable system design and efficient data management.
              </p>
              <div className="mt-12">
                <h3 className="text-3xl uppercase tracking-widest font-bold mb-16 text-slate-300 dark:text-slate-700">
                  Technical Challenges
                </h3>
                <div className="space-y-16">
                  <div>
                    <h4 className="text-lg serif-font italic text-[var(--text-main)]">
                      State Management Complexity
                    </h4>
                    <p className="text-base mt-2">
                      Managing multi-step registration flows and persistent
                      real-time notifications across the client-side without
                      compromising performance.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg serif-font italic text-[var(--text-main)]">
                      API Optimization
                    </h4>
                    <p className="text-base mt-2">
                      Implementing advanced indexing in MongoDB and leveraging
                      Redis caching to reduce latency on high-traffic mentorship
                      matching endpoints.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg serif-font italic text-[var(--text-main)]">
                      Security Implementation
                    </h4>
                    <p className="text-base mt-2">
                      Enforcing strict JWT-based authentication and CORS
                      policies while ensuring data integrity through server-side
                      validation schemas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <figure className="p-8 md:p-16">
            <img
              alt="System Architecture Overview"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4K91jWGz5jHS5uxMLl8nyhctk_jRHOq950LCgpBbRGdd-yrB4xW7pSpobZzZ-a8iNC8cUtfRIshGw8N13wbD9SwBNcwno8urC3kMRG9990xixXPecjY76lJLizyX2ofYO811mTMPe_M6mUtQ_wq3vvtXgD4jMWM9rPbdKdwJA3qEErXD-JwIxrbgb_zx0geYtTUeeajd7srRhX26lTM87vfuNEVDEMLql4DDO8cLVZDCxZ9D_ELIgWQkvGFT0nNu5BTpboi-cVA"
            />
          </figure>
          <article>
            <h2 className="text-3xl uppercase tracking-widest font-bold mb-16 text-slate-300 dark:text-slate-700">
              Engineering Process
            </h2>
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 items-start">
                <span className="text-4xl font-serif italic text-[var(--text-main)]">
                  01.
                </span>
                <div>
                  <h3 className="text-xl italic font-medium mb-3 text-[var(--text-main)]">
                    Schema Design
                  </h3>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    Modeling the data relationships in MongoDB to support
                    complex queries for the mentorship matching engine.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 items-start">
                <span className="text-4xl font-serif italic text-[var(--text-main)]">
                  02.
                </span>
                <div>
                  <h3 className="text-xl italic font-medium mb-3 text-[var(--text-main)]">
                    Backend Development
                  </h3>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    Developing a RESTful API with Node.js and Express, focusing
                    on modular controllers and middleware for logging.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 items-start">
                <span className="text-4xl font-serif italic text-[var(--text-main)]">
                  03.
                </span>
                <div>
                  <h3 className="text-xl italic font-medium mb-3 text-[var(--text-main)]">
                    Frontend Integration
                  </h3>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    Building a responsive React SPA with Redux for predictable
                    state management and Tailwind for atomic styling.
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article>
            <h2 className="text-3xl uppercase tracking-widest font-bold mb-16 text-slate-300 dark:text-slate-700">
              Architecture &amp; Tech Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              <div className="space-y-4">
                <div className="flex italic serif-font items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    dns
                  </span>
                  <h4 className="font-bold">Backend &amp; API</h4>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Node/Express serves as the core engine, utilizing REST APIs to
                  handle student data and mentorship logic. Implemented custom
                  middleware for authentication and error handling.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex italic serif-font items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    database
                  </span>
                  <h4 className="font-bold">Data Management</h4>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  MongoDB Atlas for scalable, document-oriented storage.
                  Optimized for read-heavy operations using strategic indexing
                  and aggregation pipelines.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex italic serif-font items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    layers
                  </span>
                  <h4 className="font-bold">Frontend Ecosystem</h4>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  React for the user interface, utilizing Hooks and Context API
                  for localized state, and Redux Toolkit for global data
                  synchronization.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex italic serif-font items-center gap-4">
                  <span className="material-symbols-outlined text-primary">
                    cloud_done
                  </span>
                  <h4 className="font-bold">DevOps &amp; Cloud</h4>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Automated deployments via GitHub Actions. Frontend hosted on
                  Vercel, with backend services orchestrated on AWS EC2
                  instances.
                </p>
              </div>
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
            <h2 className="text-4xl md:text-5xl mb-10 leading-tight">
              Project Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="border-l border-[var(--border-color)] pl-8 py-4">
                <span className="block text-4xl font-serif mb-2">40%</span>
                <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
                  Load Time Improvement
                </p>
              </div>
              <div className="border-l border-[var(--border-color)] pl-8 py-4">
                <span className="block text-4xl font-serif mb-2">99.9%</span>
                <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
                  System Uptime
                </p>
              </div>
            </div>
          </article>
          <div className="pt-20 border-t border-[var(--border-color)]">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-purple)] mb-8">
              Engineering Toolkit
            </h4>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <span className="text-sm font-medium px-4 py-2 bg-[var(--accent-soft)] rounded">
                React.js
              </span>
              <span className="text-sm font-medium px-4 py-2 bg-[var(--accent-soft)] rounded">
                Node.js
              </span>
              <span className="text-sm font-medium px-4 py-2 bg-[var(--accent-soft)] rounded">
                Express
              </span>
              <span className="text-sm font-medium px-4 py-2 bg-[var(--accent-soft)] rounded">
                MongoDB
              </span>
              <span className="text-sm font-medium px-4 py-2 bg-[var(--accent-soft)] rounded">
                Redux
              </span>
              <span className="text-sm font-medium px-4 py-2 bg-[var(--accent-soft)] rounded">
                Tailwind CSS
              </span>
              <span className="text-sm font-medium px-4 py-2 bg-[var(--accent-soft)] rounded">
                AWS
              </span>
              <span className="text-sm font-medium px-4 py-2 bg-[var(--accent-soft)] rounded">
                Jest
              </span>
              <span className="text-sm font-medium px-4 py-2 bg-[var(--accent-soft)] rounded">
                Docker
              </span>
            </div>
            <div className="flex gap-12 mt-16 pt-12 border-t border-[var(--border-color)]">
              <a
                className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:opacity-60 transition-opacity"
                href="#"
              >
                View Github
                <span className="material-symbols-outlined !text-sm">
                  arrow_outward
                </span>
              </a>
              <a
                className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:opacity-60 transition-opacity"
                href="#"
              >
                Open Live Demo
                <span className="material-symbols-outlined !text-sm">
                  arrow_outward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
