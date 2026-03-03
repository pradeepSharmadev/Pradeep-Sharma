import React from 'react'

const WorkingProcess = () => {
  return (
    <section className="max-w-5xl mx-auto px-8 mb-40">
      <div className="border-y border-[var(--border-color)] py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <h3 className="serif-title text-xl italic">01. Empathy</h3>
            <p className="text-sm editorial-line text-[var(--text-muted)] font-light">
              The user is the epicenter. I design and build for people, not for
              screens, ensuring every technical decision is backed by human
              behavior.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="serif-title text-xl italic">02. Rigor</h3>
            <p className="text-sm editorial-line text-[var(--text-muted)] font-light">
              Meticulous attention to detail. I believe the difference between
              good and exceptional digital products lies in the final 10% of
              polish and optimization.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="serif-title text-xl italic">03. Scalability</h3>
            <p className="text-sm editorial-line text-[var(--text-muted)] font-light">
              Building for the future. I create robust, modular systems and
              clean architectures that evolve alongside the business and its
              users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkingProcess