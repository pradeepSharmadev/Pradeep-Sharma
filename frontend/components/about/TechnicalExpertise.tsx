import React from "react";

const TechnicalExpertise = () => {
  return (
    <section className="max-w-5xl mx-auto px-8 mb-40">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-xs sans-font uppercase tracking-[0.3em] font-bold text-[var(--accent-purple)] mb-8 md:mb-0">
            Technical Expertise
          </h2>
        </div>
        <div className="md:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
            <div className="space-y-4">
              <h3 className="serif-title text-xl italic border-b border-neutral-200 pb-2">
                Programming
              </h3>
              <ul className="editorial-line text-neutral-500 font-light space-y-1">
                <li>Python</li>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="serif-title text-xl italic border-b border-neutral-200 pb-2">
                Frontend
              </h3>
              <ul className="editorial-line text-neutral-500 font-light space-y-1">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Redux</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="serif-title text-xl italic border-b border-neutral-200 pb-2">
                Backend
              </h3>
              <ul className="editorial-line text-neutral-500 font-light space-y-1">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="serif-title text-xl italic border-b border-neutral-200 pb-2">
                Tools &amp; DevOps
              </h3>
              <ul className="editorial-line text-neutral-500 font-light space-y-1">
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
