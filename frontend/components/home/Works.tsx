import React from "react";

const Works = () => {
  return (
    <section
      className="section-padding bg-[var(--bg-color)] border-y border-[var(--border-color)]"
      id="portfolio"
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl serif-font">Selected Work</h2>
            <p className="text-[var(--text-muted)] font-light text-lg">
              A curation of digital products and visual identities.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          <div className="project-card group cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden bg-neutral-100 mb-8 border border-[var(--border-color)]">
              <img
                alt="Health Platform"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgw1afXfrNxf62ITPeXVRrSHWj7aZgUzG7FbdIsb-znGW2-WyRrF3q3mZ780TIxe6MKKMiPqPfW_avtl-K7Hvpy80EHtnnd3Ne9p0jI3Md4mztoeIV1gzPfYhNQ0eAOJWxnMaG68-k9Ft7pDSebN3z-LO8ZmtgDxeI-v2SxIRR9yVrqYM8cRt_a3HpEUTRHEoAnlg4JqBKUODXfH7hNTFCUbWPX1q-bHX2xKZGoYl06d8dcwQvhCIAvo00ezFCnuQQlzf3Gjj8og"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                  Product Design
                </span>
              </div>
              <h3 className="text-3xl serif-font group-hover:italic transition-all duration-300">
                Health Platform
              </h3>
              <p className="text-[var(--text-muted)] font-light max-w-md">
                Redefining personal wellness through a minimalist mobile
                ecosystem.
              </p>
              <div className="flex gap-8">
                <a
                  className="inline-flex text-xs items-center gap-2 font-medium uppercase tracking-widest border-b border-[var(--text-main)] pb-1 pt-2 hover:text-[var(--accent-purple)] hover:border-[var(--accent-purple)] hover:scale-105 transition-transform duration-300"
                  href="#portfolio"
                >
                  View Case Studies
                  <span className="material-symbols-outlined text-lg">
                    arrow_outward
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card group cursor-pointer md:mt-32">
            <div className="aspect-[16/10] overflow-hidden bg-neutral-100 mb-8 border border-[var(--border-color)]">
              <img
                alt="Finance Tracker"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwH2tT53qoevWt9XcnP3uo1A2N5mL3k1-TffQRQ9ydmUCr4q7H4yMRZD-C8Nbp-XwttnTBcK_ohkJiC97FjtNNL-0QMMlWaiuMiJNWNhEOKKuXDEJvFP8mp0PvV29mOi5acWQNBSpjEuBJDmY_PLDabwtKdR2i5fg_DzI039KOQFy0tz0qS97LzWHU64UHVjnOUN44QQax2kqa1zZhm_KpTYLMkn74J54MG8aHU1n5ISYPNuhwpATWLY0h7l5kbz5cttpdsu0c8g"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                  Fintech
                </span>
              </div>
              <h3 className="text-3xl serif-font group-hover:italic transition-all duration-300">
                Finance Tracker
              </h3>
              <p className="text-[var(--text-muted)] font-light max-w-md">
                Complexity distilled into a seamless dashboard experience.
              </p>
              <div className="flex gap-8">
                <a
                  className="inline-flex text-xs items-center gap-2 font-medium uppercase tracking-widest border-b border-[var(--text-main)] pb-1 pt-2 hover:text-[var(--accent-purple)] hover:border-[var(--accent-purple)] hover:scale-105 transition-transform duration-300"
                  href="#portfolio"
                >
                  View Case Studies
                  <span className="material-symbols-outlined text-lg">
                    arrow_outward
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card group cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden bg-neutral-100 mb-8 border border-[var(--border-color)]">
              <img
                alt="Travel Explorer"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG5u3p2X4LA-1mRyDpJalYRNWpTiRuI9zDKwxOh8HdCzZeil2zh5221rKauGgvF3KZq6OyaTOsAIKflDttOAFvwCxuT8WNb5u8wKD58vsczPU452WSOAj3MnCJl_f_qqeDlZUNv7X6Wl9oGZllMPZoquueKPIj1dafA239uVHLQxakVHvcXh0sW-6gzkQ4W6V08-Dc9YBWMTeLtS8MP7I6BS7KOBIO2nRoY_Fni0N05tdBTcF-pai2o05S9c0vccoCaSUYdO775A"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                  Interaction
                </span>
              </div>
              <h3 className="text-3xl serif-font group-hover:italic transition-all duration-300">
                Travel Explorer
              </h3>
              <p className="text-[var(--text-muted)] font-light max-w-md">
                Bringing the world closer with community-led exploration tools.
              </p>
              <div className="flex gap-8">
                <a
                  className="inline-flex text-xs items-center gap-2 font-medium uppercase tracking-widest border-b border-[var(--text-main)] pb-1 pt-2 hover:text-[var(--accent-purple)] hover:border-[var(--accent-purple)] duration-300 hover:scale-105 transition-transform "
                  href="#portfolio"
                >
                  View Case Studies
                  <span className="material-symbols-outlined text-lg">
                    arrow_outward
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card group cursor-pointer md:mt-32">
            <div className="aspect-[16/10] overflow-hidden bg-neutral-100 mb-8 border border-[var(--border-color)]">
              <img
                alt="Dev Portfolio"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChAaw5QRBG3NeZSgDKZ-TDd7mfuVZfoNrOLRFch_7lbIWpfzcs0Lm--D2Y6CiGjB600i0arQBkZXnBhLK-BkLIDsddNNq6OKORoMQBenlvd8eAlXQiZQEh6_xZE7fuKCtXUx75TNkeOb2fJyz51B1ZSZkFxez2sEedEQ_qomCz_WUfiTzvgRS4A7ohf1Oog0hddHjFZ41zagzTM66LQVzVCAYxB1gQ7KZFtW4bwVxv2q3MtDyYX2-8EW7VImBJK-BGW_58wVxnPA"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                  Web Design
                </span>
              </div>
              <h3 className="text-3xl serif-font group-hover:italic transition-all duration-300">
                Curated Spaces
              </h3>
              <p className="text-[var(--text-muted)] font-light max-w-md">
                A spatial design system for digital creators and studios.
              </p>
              <div className="flex gap-8">
                <a
                  className="inline-flex text-xs items-center gap-2 font-medium uppercase tracking-widest border-b border-[var(--text-main)] pb-1 pt-2 hover:text-[var(--accent-purple)] hover:border-[var(--accent-purple)] duration-300 hover:scale-105 transition-transform "
                  href="#portfolio"
                >
                  View Case Studies
                  <span className="material-symbols-outlined text-lg">
                    arrow_outward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
