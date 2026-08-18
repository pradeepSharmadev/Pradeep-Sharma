import React from "react";

const Philosophy = () => {
  return (
    <section
      className="section-padding bg-[var(--bg-color)] border-y border-[var(--border-color)]"
      id="philosophy"
    >
      <div className="max-w-3xl mx-auto px-8 text-center space-y-12">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-purple)]">
          Intro
        </span>
        <h2 className="text-5xl md:text-6xl serif-font leading-tight space-y-7 text-[var(--text-main)]">
          I care about how things work - and how they feel
        </h2>
        <div className="space-y-6 text-lg text-[var(--text-muted)] font-light leading-relaxed">
          <p>
            My experience spans the entire development lifecycle - from
            designing REST APIs and database architecture to building responsive
            interfaces, real-time systems, payment workflows and WebRTC-based
            experiences.
          </p>
          <p>
            At{" "}
            <a
              className="hover:text-[var(--accent-purple)] underline hover:cursor-pointer"
              href="https://www.internfree.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              InternFree
            </a>
            , I joined when the product was still an idea and grew into a role
            where I worked across the complete application, eventually helping
            guide other developers and coordinate product implementation
          </p>
          <p>
            For me, writing code is only part of the job. Understanding the
            problem, making the right technical decisions and taking ownership
            of the outcome are equally important.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
