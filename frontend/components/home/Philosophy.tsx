import React from "react";

const Philosophy = () => {
  return (
    <section
      className="section-padding bg-[var(--bg-color)] border-y border-[var(--border-color)]"
      id="philosophy"
    >
      <div className="max-w-3xl mx-auto px-8 text-center space-y-12">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-purple)]">
          The Philosophy
        </span>
        <h2 className="text-4xl md:text-5xl serif-font leading-tight space-y-7 text-[var(--text-main)]">
          Building systems that work. Designing experiences that feel right.
        </h2>
        <div className="space-y-6 text-lg text-[var(--text-muted)] font-light leading-relaxed">
          <p>
            I don't see design and development as separate disciplines. I use
            principles of hierarchy, spacing, typography, composition and
            interaction to build interfaces that are not only technically
            robust, but also intuitive and enjoyable to use.
          </p>
          <p>
            Whether it's a payment flow, real-time communication system, or
            complex dashboard, I focus on making the underlying technology
            reliable while keeping the experience simple and intuitive
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
