import React from 'react'

const WorkHero = () => {
  return (
    <section className="pt-56 pb-24">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 h-24 flex items-center justify-between">
        <div className="max-w-3xl">
          <h1 className="text-7xl md:text-8xl font-medium mb-10 text-[var(--text-main)]">
            Selected Work
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-muted)] font-light leading-relaxed max-w-2xl">
            A curated collection of digital experiences where strategy meets
            refined aesthetics. Each project is a journey in solving complex
            human problems through minimalist design.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WorkHero