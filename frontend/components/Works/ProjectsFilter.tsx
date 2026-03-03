import React from "react";

const ProjectsFilter = () => {
  return (
    <section className="max-w-[1440px] pt-[6.5rem] pb-[4.5rem] sm:pt-0 sm:pb-0 mx-auto px-8 md:px-16 h-24 flex items-center justify-between">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-12 md:gap-y-4 border-b border-[var(--border-color)] pb-6 text-sm font-bold uppercase tracking-widest text-[var(--text-muted)]">
        <button className="text-[var(--text-main)] border-b-2 border-[var(--accent-purple)] pb-6 -mb-[26px]">
          All Projects
        </button>
        <button className="hover:text-[var(--text-main)] transition-colors pb-6 -mb-[26px] border-b-2 border-transparent">
          Mobile App
        </button>
        <button className="hover:text-[var(--text-main)] transition-colors pb-6 -mb-[26px] border-b-2 border-transparent">
          Web Design
        </button>
        <button className="hover:text-[var(--text-main)] transition-colors pb-6 -mb-[26px] border-b-2 border-transparent">
          UI/UX 
        </button>
        <button className="hover:text-[var(--text-main)] transition-colors pb-6 -mb-[26px] border-b-2 border-transparent">
          Branding
        </button>
      </div>
    </section>
  );
};

export default ProjectsFilter;
