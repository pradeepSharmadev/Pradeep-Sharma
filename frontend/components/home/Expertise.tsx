import React from 'react'

const Expertise = () => {
  return (
    <section
      className="section-padding border-t border-[var(--border-color)]"
      id="skills"
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="space-y-4 mb-16">
          <h2 className="text-5xl md:text-7xl serif-font">Expertise</h2>
          <p className="text-[var(--text-muted)] font-light text-lg">
            Focused on the full spectrum of web development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="space-y-6 pt-8 border-t border-[var(--border-color)]">
            <h3 className="text-2xl serif-font">UI/UX Design</h3>
            <p className="text-[var(--text-muted)] font-light leading-relaxed">
              Designing user-centric interfaces and comprehensive wireframes for
              complex web applications, focusing on intuitive navigation and
              accessibility.
            </p>
          </div>
          <div className="space-y-6 pt-8 border-t border-[var(--border-color)]">
            <h3 className="text-2xl serif-font">Front-end</h3>
            <p className="text-[var(--text-muted)] font-light leading-relaxed">
              Architecting responsive, interactive user interfaces using
              React.js and modern styling frameworks like Tailwind CSS for
              high-performance delivery.
            </p>
          </div>
          <div className="space-y-6 pt-8 border-t border-[var(--border-color)]">
            <h3 className="text-2xl serif-font">Back-end</h3>
            <p className="text-[var(--text-muted)] font-light leading-relaxed">
              Engineering secure and scalable RESTful APIs within the MERN stack
              environment using Node.js, Express, and MongoDB.
            </p>
          </div>
          <div className="space-y-6 pt-8 border-t border-[var(--border-color)]">
            <h3 className="text-2xl serif-font">DevOps</h3>
            <p className="text-[var(--text-muted)] font-light leading-relaxed">
              Streamlining delivery through CI/CD pipelines and managing cloud
              deployments on AWS, Heroku, and Docker-containerized environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise