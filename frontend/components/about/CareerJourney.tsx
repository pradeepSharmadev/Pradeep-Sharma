import React from 'react'

const CareerJourney = () => {
  return (
    <section className="max-w-5xl mx-auto px-8 mb-40">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-xs sans-font uppercase tracking-[0.3em] font-bold text-[var(--accent-purple)] sticky top-32">
            Career Journey
          </h2>
        </div>
        <div className="md:col-span-8 space-y-16 border-l border-[var(--border-color)] pl-12 relative">
          <div className="relative group">
            <div className="timeline-dot"></div>
            <span className="text-[11px] uppercase tracking-widest text-[var(--text-muted)] font-bold mb-3 block">
              2021 — Present
            </span>
            <h3 className="text-xl serif-title mb-4">
              Senior Full-Stack Engineer, Global Workspace
            </h3>
            <p className="editorial-line text-[var(--text-muted)] font-light max-w-xl">
              Architecting scalable design languages and robust technical
              systems for productivity tools used by millions. Focused on
              bridging the gap between high-level brand strategy and granular
              interface components.
            </p>
          </div>
          <div className="relative group">
            <div className="timeline-dot"></div>
            <span className="text-[11px] uppercase tracking-widest text-[var(--text-muted)] font-bold mb-3 block">
              2018 — 2021
            </span>
            <h3 className="text-xl serif-title mb-4">
              Lead Developer &amp; Consultant
            </h3>
            <p className="editorial-line text-[var(--text-muted)] font-light max-w-xl">
              Partnered with emerging startups in the fintech and healthtech
              sectors to define their MVP technical stacks and user experience
              frameworks.
            </p>
          </div>
          <div className="relative group">
            <div className="timeline-dot"></div>
            <span className="text-[11px] uppercase tracking-widest text-[var(--text-muted)] font-bold mb-3 block">
              2015 — 2018
            </span>
            <h3 className="text-xl serif-title mb-4">
              Junior Interaction Developer
            </h3>
            <p className="editorial-line text-[var(--text-muted)] font-light max-w-xl">
              Cut my teeth at a boutique creative studio, mastering the
              fundamental principles of typography, grid systems, and clean code
              architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerJourney