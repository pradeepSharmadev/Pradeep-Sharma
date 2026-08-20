import React from "react";

const Connect = () => {
  return (
    <section className="bg-[var(--bg-color)] border-t border-[var(--border-color)] pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-8">
        <div className="mb-24 text-center md:text-left">
          <h2 className="serif-title text-4xl md:text-6xl mb-8 font-light italic">
            Let's build something meaningful.
          </h2>
          <p className="text-sm md:text-base font-light text-[var(--text-muted)] mb-6">
            I'm available for full-time and freelance opportunities in Delhi,
            India.
          </p>
          <div className="flex flex-col gap-2 items-center md:items-start text-sm md:text-base font-light">
            <a
              href="tel:+918434111639"
              className="w-fit hover:text-[var(--accent-purple)] transition-colors duration-300"
            >
              +91-8434111639
            </a>
            <a
              className="w-fit flex justify-center hover:text-[var(--accent-purple)] transition-colors duration-300 underline underline-offset-8 decoration-1 decoration-[var(--border-color)]"
              href="mailto:pradeepsharma7319@gmail.com"
            >
              pradeepsharma7319@gmail.com{" "}
            </a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 text-[10px] font-bold pt-8 uppercase tracking-[0.2em] text-[var(--text-muted)]">
            <a
              className="hover:text-[var(--accent-purple)] hover:underline transition-colors"
              href="https://github.com/pradeepSharmadev"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="hover:text-[var(--accent-purple)] hover:underline transition-colors"
              href="https://www.linkedin.com/in/pradeepsharma01"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="hover:text-[var(--accent-purple)] hover:underline transition-colors"
              href="https://leetcode.com/u/Pradeep_kumarr_sharmaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
