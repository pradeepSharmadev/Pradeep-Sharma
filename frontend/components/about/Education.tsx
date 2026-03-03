import React from "react";

const Education = () => {
  return (
    <section className="max-w-5xl mx-auto px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="max-w-md">
          <h2 className="text-xs sans-font uppercase tracking-[0.3em] font-bold text-[var(--accent-purple)] mb-6">
            Education <span className="serif-font"> &amp; </span> Credentials
          </h2>
          <div className="space-y-2">
            <p className="text-[var(--text-main)] font-medium">
              Bachelor of Science Honours, Electronics
            </p>
            <p className="text-sm text-neutral-500 font-light italic serif-title">
              Sri Venkateswara College-(University of Delhi), class of 2023-27
            </p>
          </div>
        </div>
        <div className="flex gap-12 grayscale opacity-60">
          <span className="material-symbols-outlined !text-4xl material-symbols-bold">
            terminal
          </span>
          <span className="material-symbols-outlined !text-4xl material-symbols-bold">
            code
          </span>
          <span className="material-symbols-outlined !text-4xl material-symbols-bold">
            verified
          </span>
        </div>
      </div>
    </section>
  );
};

export default Education;
