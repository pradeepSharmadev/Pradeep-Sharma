import React from 'react'

const WorkProcess = () => {
  return (
    <section className="border-t border-[var(--border-color)] py-32">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-5xl md:text-6xl font-medium mb-10 text-[var(--text-main)] serif-font">
              Process Overview
            </h2>
            <div className="space-y-8 text-xl text-[var(--text-muted)] font-light leading-relaxed italic border-l-2 border-[var(--border-color)] pl-8 py-4 mb-12">
              <p className="serif-font">
                "The only way to go fast, is to go well."
              </p>
              <footer className="text-sm font-bold uppercase tracking-widest text-[var(--text-muted)] not-italic">
                — Robert C. Martin, Clean Code
              </footer>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="space-y-4">
              <span className="text-[11px] font-bold text-[var(--accent-purple)] tracking-widest uppercase">
                Stage 01
              </span>
              <h4 className="text-lg font-bold text-[var(--text-main)]">
                Requirement Analysis
              </h4>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light">
                Deep diving into user stories and technical constraints to
                define the core MVP and architectural roadmap.
              </p>
            </div>
            <div className="space-y-4">
              <span className="text-[11px] font-bold text-[var(--accent-purple)] tracking-widest uppercase">
                Stage 02
              </span>
              <h4 className="text-lg font-bold text-[var(--text-main)]">
                Architecture Design
              </h4>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light">
                Designing robust MERN stack foundations with scalable schema
                modeling and efficient API structures.
              </p>
            </div>
            <div className="space-y-4">
              <span className="text-[11px] font-bold text-[var(--accent-purple)] tracking-widest uppercase">
                Stage 03
              </span>
              <h4 className="text-lg font-bold text-[var(--text-main)]">
                Agile Development
              </h4>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light">
                Iterative sprints focusing on clean code principles,
                comprehensive testing, and rapid feature integration.
              </p>
            </div>
            <div className="space-y-4">
              <span className="text-[11px] font-bold text-[var(--accent-purple)] tracking-widest uppercase">
                Stage 04
              </span>
              <h4 className="text-lg font-bold text-[var(--text-main)]">
                Deployment &amp; DevOps
              </h4>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light">
                Seamless CI/CD pipelines, containerization, and cloud
                orchestration for high-availability performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkProcess