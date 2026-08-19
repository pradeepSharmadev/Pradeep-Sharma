import React from 'react'

const AboutPhilosophy = () => {
  return (
    <section className="max-w-5xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 mb-40">
      <div className="md:col-start-5 md:col-span-8 space-y-6">
        <h2 className="text-xs sans-font uppercase tracking-[0.2em] font-bold text-[var(--accent-purple)] mb-4">
          About
        </h2>
        <div className="editorial-line text-md text-[var(--text-muted)] space-y-6 font-light">
          <p>
            I'm Pradeep Sharma, a Full-Stack Developer focused on building
            production-ready web applications that are reliable, scalable, and
            intuitive to use.
          </p>
          <p>
            Based in Delhi, India, I work across the entire development
            lifecycle - from designing responsive interfaces and REST APIs to
            architecting databases, implementing authentication and payments,
            and building real-time communication systems.
          </p>
          <p>
            I have 1+ year of professional experience working with React.js,
            Node.js, Express.js, MongoDB, TypeScript, and modern web
            technologies. My work combines frontend development, backend
            engineering, product thinking, and technical problem-solving to turn
            ideas into functional products.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPhilosophy