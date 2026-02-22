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
        <h2
          className="text-4xl md:text-6xl serif-font leading-tight space-y-7 text-[var(--text-main)]"
        >
          Design is the quiet language of functionality and aesthetics.
        </h2>
        <div className="space-y-6 text-lg text-[var(--text-muted)] font-light leading-relaxed">
          <p>
            I believe that great design doesn't shout; it guides. My approach is
            rooted in reductionism—removing the unnecessary until only the
            essential remains. This ensures that every interaction is meaningful
            and every visual element serves a purpose.
          </p>
          <p>
            By blending rigorous user research with a sophisticated visual
            palette, I build interfaces that feel both modern and timeless.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
