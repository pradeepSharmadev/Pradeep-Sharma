import React from 'react'

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
            <h3 className="text-2xl serif-font">Frontend Engineering</h3>
            <p className="text-[var(--text-muted)] font-light leading-relaxed">
              Creating responsive, accessible and performant interfaces with
              modern React and CSS architecture.
            </p>
          </div>
          <div className="space-y-6 pt-8 border-t border-[var(--border-color)]">
            <h3 className="text-2xl serif-font">Backend & APIs</h3>
            <p className="text-[var(--text-muted)] font-light leading-relaxed">
              Designing secure REST APIs, authentication systems, database
              architecture and scalable server-side applications.
            </p>
          </div>
          <div className="space-y-6 pt-8 border-t border-[var(--border-color)]">
            <h3 className="text-2xl serif-font">Design Systems & UI/UX</h3>
            <p className="text-[var(--text-muted)] font-light leading-relaxed">
              Applying typography, spacing, hierarchy, color, composition and
              interaction principles to create consistent, intuitive interfaces.
            </p>
          </div>
          <div className="space-y-6 pt-8 border-t border-[var(--border-color)]">
            <h3 className="text-2xl serif-font">Deployment & Infrastructure</h3>
            <p className="text-[var(--text-muted)] font-light leading-relaxed">
              Working with Docker, CI/CD and cloud platforms to take
              applications from development to production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise