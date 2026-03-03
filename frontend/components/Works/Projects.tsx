import React from 'react'

const Projects = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-16 pb-40">
      <div className="staggered-grid grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
        <div className="group cursor-pointer">
          <div className="aspect-[4/5] overflow-hidden mb-8 border border-[var(--border-color)]">
            <img
              alt="Health Platform UI"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgw1afXfrNxf62ITPeXVRrSHWj7aZgUzG7FbdIsb-znGW2-WyRrF3q3mZ780TIxe6MKKMiPqPfW_avtl-K7Hvpy80EHtnnd3Ne9p0jI3Md4mztoeIV1gzPfYhNQ0eAOJWxnMaG68-k9Ft7pDSebN3z-LO8ZmtgDxeI-v2SxIRR9yVrqYM8cRt_a3HpEUTRHEoAnlg4JqBKUODXfH7hNTFCUbWPX1q-bHX2xKZGoYl06d8dcwQvhCIAvo00ezFCnuQQlzf3Gjj8og"
            />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                Healthcare
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                Mobile App
              </span>
            </div>
            <h3 className="text-3xl serif-font group-hover:italic transition-all duration-300">
              Holistic Health Plus
            </h3>
            <p className="text-[var(--text-muted)] font-light leading-relaxed max-w-md">
              Redesigning the patient experience for a modern healthcare
              ecosystem with clarity and compassion.
            </p>
          </div>
        </div>
        <div className="group cursor-pointer">
          <div className="aspect-[4/5] overflow-hidden mb-8 border border-[var(--border-color)]">
            <img
              alt="Finance Dashboard"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwH2tT53qoevWt9XcnP3uo1A2N5mL3k1-TffQRQ9ydmUCr4q7H4yMRZD-C8Nbp-XwttnTBcK_ohkJiC97FjtNNL-0QMMlWaiuMiJNWNhEOKKuXDEJvFP8mp0PvV29mOi5acWQNBSpjEuBJDmY_PLDabwtKdR2i5fg_DzI039KOQFy0tz0qS97LzWHU64UHVjnOUN44QQax2kqa1zZhm_KpTYLMkn74J54MG8aHU1n5ISYPNuhwpATWLY0h7l5kbz5cttpdsu0c8g"
            />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                Fintech
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                Web Design
              </span>
            </div>
            <h3 className="text-3xl serif-font group-hover:italic transition-all duration-300">
              Quantum Finance
            </h3>
            <p className="text-[var(--text-muted)] font-light leading-relaxed max-w-md">
              Simplifying complex data visualization for high-frequency trading
              platforms in real-time.
            </p>
          </div>
        </div>
        <div className="group cursor-pointer">
          <div className="aspect-[4/5] overflow-hidden mb-8 border border-[var(--border-color)]">
            <img
              alt="Travel App UI"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG5u3p2X4LA-1mRyDpJalYRNWpTiRuI9zDKwxOh8HdCzZeil2zh5221rKauGgvF3KZq6OyaTOsAIKflDttOAFvwCxuT8WNb5u8wKD58vsczPU452WSOAj3MnCJl_f_qqeDlZUNv7X6Wl9oGZllMPZoquueKPIj1dafA239uVHLQxakVHvcXh0sW-6gzkQ4W6V08-Dc9YBWMTeLtS8MP7I6BS7KOBIO2nRoY_Fni0N05tdBTcF-pai2o05S9c0vccoCaSUYdO775A"
            />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                Travel
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                UI/UX Research
              </span>
            </div>
            <h3 className="text-3xl serif-font group-hover:italic transition-all duration-300">
              Nomad Explorer
            </h3>
            <p className="text-[var(--text-muted)] font-light leading-relaxed max-w-md">
              Community-driven itinerary planning for off-the-beaten-path
              travelers seeking authenticity.
            </p>
          </div>
        </div>
        <div className="group cursor-pointer">
          <div className="aspect-[4/5] overflow-hidden mb-8 border border-[var(--border-color)]">
            <img
              alt="Brand Identity"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChAaw5QRBG3NeZSgDKZ-TDd7mfuVZfoNrOLRFch_7lbIWpfzcs0Lm--D2Y6CiGjB600i0arQBkZXnBhLK-BkLIDsddNNq6OKORoMQBenlvd8eAlXQiZQEh6_xZE7fuKCtXUx75TNkeOb2fJyz51B1ZSZkFxez2sEedEQ_qomCz_WUfiTzvgRS4A7ohf1Oog0hddHjFZ41zagzTM66LQVzVCAYxB1gQ7KZFtW4bwVxv2q3MtDyYX2-8EW7VImBJK-BGW_58wVxnPA"
            />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                Branding
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                Visual Identity
              </span>
            </div>
            <h3 className="text-3xl serif-font group-hover:italic transition-all duration-300">
              Ethereal Studio
            </h3>
            <p className="text-[var(--text-muted)] font-light leading-relaxed max-w-md">
              Visual identity system for a sustainable creative collective
              rooted in organic design principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects