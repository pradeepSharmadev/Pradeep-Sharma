import React from 'react'

const AboutPhilosophy = () => {
  return (
    <section className="max-w-5xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 mb-40">
      <div className="md:col-start-5 md:col-span-8 space-y-8">
        <h2 className="text-xs sans-font uppercase tracking-[0.3em] font-bold text-[var(--accent-purple)] mb-6">
          Philosophy
        </h2>
        <div className="editorial-line text-lg text-[var(--text-muted)] space-y-10 font-light">
          <p>
            I believe that code and design are not just solutions to problems,
            but a silent dialogue between the creator and the user. My approach
            is rooted in the "less is more" ideology—not as a stylistic choice,
            but as a commitment to removing friction and noise.
          </p>
          <p>
            With nearly a decade of experience, I've learned that the most
            complex technical challenges often require the simplest executions.
            Whether I'm architecting a backend infrastructure or refining a
            micro-interaction, my goal remains the same: to create products that
            feel as though they've always existed.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPhilosophy