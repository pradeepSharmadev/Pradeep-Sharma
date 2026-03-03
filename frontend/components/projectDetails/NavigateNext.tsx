import React from 'react'

const NavigateNext = () => {
  return (
    <section className="border-t border-[var(--border-color)] mt-20">
      <a
        className="group block py-32 max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 transition-colors"
        href="#"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--accent-purple)] mb-4 block">
              Next Project
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl group-hover:italic">
              EduTech Portal
            </h2>
          </div>
          <div className="w-16 h-16 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:bg-[var(--accent-soft)] group-hover:border-[var(--accent-soft)] group-hover:text-[var(--text-main)] transition-all duration-500">
            <span className="material-symbols-outlined !text-3xl">
              arrow_forward
            </span>
          </div>
        </div>
      </a>
    </section>
  );
}

export default NavigateNext