import React from "react";

const Connect = () => {
  return (
    <section className="bg-[var(--bg-color)] border-t border-[var(--border-color)] pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-8">
        <div className="mb-24 text-center md:text-left">
          <h2 className="serif-title text-4xl md:text-6xl mb-8 font-light italic">
            Let's create something meaningful.
          </h2>
          <a
            className="text-1xl md:text-2xl font-light hover:text-[var(--accent-purple)] transition-colors duration-300 underline underline-offset-8 decoration-1 decoration-[var(--border-color)]"
            href="mailto:pradeepsharma7319@gmail.com"
          >
            pradeepsharma7319@gmail.com
          </a>
          <div className="flex justify-left gap-8 text-[10px] font-bold pt-4 uppercase tracking-[0.2em] text-[var(--text-muted)]">
            <a className="hover:underline" href="#">
              LinkedIn
            </a>
            <a className="hover:underline" href="#">
              Dribbble
            </a>
            <a className="hover:underline" href="#">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
