import React from "react";

const Expertise = () => {
  return (
    <section
      className="section-padding border-t border-[var(--border-color)]"
      id="skills"
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="space-y-4 mb-16">
          <h2 className="text-5xl md:text-7xl serif-font">What I Build</h2>
          <p className="text-[var(--text-muted)] font-light text-lg">
            Focused on building production-ready applications
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="space-y-6 pt-8 border-t border-[var(--border-color)]">
            <h3 className="text-2xl serif-font">Full Stack Development</h3>
            <div className="gap-4 flex flex-col">
              <p className="text-[var(--text-muted)] font-light">
                Building scalable web applications across the frontend, backend,
                APIs, authentication, and databases.
              </p>
              {/* <div className="flex items-center flex-wrap gap-2">
                <span className="text-[10px] uppercase tracking-[0.1em] font-semibold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  React
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  Next.js
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  Node.js
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  Express
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  Typescript
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  MongoDB
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  PostgreSQL
                </span>
              </div> */}
            </div>
          </div>
          <div className="space-y-6 pt-8 border-t border-[var(--border-color)]">
            <h3 className="text-2xl serif-font">Backend & APIs</h3>
            <div className="gap-4 flex flex-col">
              <p className="text-[var(--text-muted)] font-light">
                Building secure REST APIs, auth systems, database architectures,
                and complex server-side workflows with real-time and payment
                integrations.
              </p>
              {/* <div className="flex items-center flex-wrap gap-2">
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  REST APIs
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  Authorization
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  Socket.IO
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  WebSockets
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  WebRTC
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  Razorpay
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  Webhooks
                </span>
              </div> */}
            </div>
          </div>
          <div className="space-y-6 pt-8 border-t border-[var(--border-color)]">
            <h3 className="text-2xl serif-font">Product Design</h3>
            <div className="gap-4 flex flex-col">
              <p className="text-[var(--text-muted)] font-light">
                Applying principles of hierarchy, typography, spacing,
                composition, and interaction to create interfaces that are clear
                and intentional.
              </p>
              {/* <div className="flex items-center flex-wrap gap-2">
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  UI/UX
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  Responsive Design
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  Interaction
                </span>
              </div> */}
            </div>
          </div>
          <div className="space-y-6 pt-8 border-t border-[var(--border-color)]">
            <h3 className="text-2xl serif-font">Architecture & Deployment</h3>
            <div className="gap-4 flex flex-col">
              <p className="text-[var(--text-muted)] font-light">
                Designing maintainable systems and taking applications from
                development to production with performance and scalability in
                mind.
              </p>
              {/* <div className="flex items-center flex-wrap gap-2">
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  System Design
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  Docker
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  CI/CD
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  Performance
                </span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-0.5 px-3 bg-[var(--accent-soft)] text-[var(--text-muted)]">
                  Scalability
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
