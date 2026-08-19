import React from 'react'

const WorkHero = () => {
  return (
    <section className="pt-56 pb-24">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 mt-12 h-24 flex items-center justify-between">
        <div className="max-w-3xl">
          <h1 className="serif-title max-w-4xl text-[clamp(4rem,10vw,8rem)] leading-[0.9] mb-12 italic font-light tracking-tight">
            Selected Work.
          </h1>
          <p className="text-xl font-sans max-w-3xl md:text-2xl tracking-wide text-[var(--text-main)] font-light mb-16">
            A collection of applications and systems built across full-stack
            development, real-time communication, payments, and product
            engineering.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WorkHero