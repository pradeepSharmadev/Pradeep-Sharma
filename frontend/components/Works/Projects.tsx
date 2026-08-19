import React from "react";

const Projects = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-16 pb-40">
      <div className="staggered-grid grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
        <div className="group cursor-pointer">
          <div className="aspect-[4/5] overflow-hidden mb-8 border border-[var(--border-color)]">
            <img
              alt="Communication full stack web application built by Pradeep Sharma"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG5u3p2X4LA-1mRyDpJalYRNWpTiRuI9zDKwxOh8HdCzZeil2zh5221rKauGgvF3KZq6OyaTOsAIKflDttOAFvwCxuT8WNb5u8wKD58vsczPU452WSOAj3MnCJl_f_qqeDlZUNv7X6Wl9oGZllMPZoquueKPIj1dafA239uVHLQxakVHvcXh0sW-6gzkQ4W6V08-Dc9YBWMTeLtS8MP7I6BS7KOBIO2nRoY_Fni0N05tdBTcF-pai2o05S9c0vccoCaSUYdO775A"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                Real-Time
              </span>
              <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                Socket.IO
              </span>
              <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                WebRTC
              </span>
            </div>
            <h3 className="text-3xl serif-font">Communication Platform</h3>
            <p className="text-[var(--text-muted)] font-light max-w-md">
              A real-time communication platform enabling instant messaging,
              presence, and peer-to-peer audio/video communication between
              users.
            </p>
            <div className="flex gap-4 pt-8 text-[var(--text-main)]">
              <a
                className="flex items-center gap-2 text-[12px] uppercase tracking-widest font-bold hover:opacity-90 hover:text-[var(--accent-purple)] hover:italic transition-all duration-300"
                href="#"
              >
                View Case Study
                <span className="material-symbols-outlined !text-sm">
                  arrow_outward
                </span>
              </a>
              <a
                className="flex items-center gap-2 text-[12px] uppercase tracking-widest font-bold hover:opacity-90 hover:text-[var(--accent-purple)] hover:italic transition-all duration-300"
                href="#"
              >
                Live Site
                <span className="material-symbols-outlined !text-sm">
                  arrow_outward
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="group cursor-pointer">
          <div className="aspect-[4/5] overflow-hidden mb-8 border border-[var(--border-color)]">
            <img
              alt="Payment full stack web application built by Pradeep Sharma"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwH2tT53qoevWt9XcnP3uo1A2N5mL3k1-TffQRQ9ydmUCr4q7H4yMRZD-C8Nbp-XwttnTBcK_ohkJiC97FjtNNL-0QMMlWaiuMiJNWNhEOKKuXDEJvFP8mp0PvV29mOi5acWQNBSpjEuBJDmY_PLDabwtKdR2i5fg_DzI039KOQFy0tz0qS97LzWHU64UHVjnOUN44QQax2kqa1zZhm_KpTYLMkn74J54MG8aHU1n5ISYPNuhwpATWLY0h7l5kbz5cttpdsu0c8g"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                Full Stack
              </span>
              <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                Razorpay
              </span>
              <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                Webhooks
              </span>
            </div>
            <h3 className="text-3xl serif-font">Payment Platform</h3>
            <p className="text-[var(--text-muted)] font-light max-w-md">
              A full-stack payment platform that simplifies transaction
              workflows through secure payment processing, webhook integration,
              and a centralized dashboard.
            </p>
            <div className="flex gap-4 pt-8 text-[var(--text-main)]">
              <a
                className="flex items-center gap-2 text-[12px] uppercase tracking-widest font-bold hover:opacity-90 hover:text-[var(--accent-purple)] hover:italic transition-all duration-300"
                href="#"
              >
                View Case Study
                <span className="material-symbols-outlined !text-sm">
                  arrow_outward
                </span>
              </a>
              <a
                className="flex items-center gap-2 text-[12px] uppercase tracking-widest font-bold hover:opacity-90 hover:text-[var(--accent-purple)] hover:italic transition-all duration-300"
                href="#"
              >
                Live Site
                <span className="material-symbols-outlined !text-sm">
                  arrow_outward
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="group cursor-pointer">
          <div className="aspect-[4/5] overflow-hidden mb-8 border border-[var(--border-color)]">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              alt="Healthcare full stack web application built by Pradeep Sharma"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgw1afXfrNxf62ITPeXVRrSHWj7aZgUzG7FbdIsb-znGW2-WyRrF3q3mZ780TIxe6MKKMiPqPfW_avtl-K7Hvpy80EHtnnd3Ne9p0jI3Md4mztoeIV1gzPfYhNQ0eAOJWxnMaG68-k9Ft7pDSebN3z-LO8ZmtgDxeI-v2SxIRR9yVrqYM8cRt_a3HpEUTRHEoAnlg4JqBKUODXfH7hNTFCUbWPX1q-bHX2xKZGoYl06d8dcwQvhCIAvo00ezFCnuQQlzf3Gjj8og"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                Full Stack
              </span>
              <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                Authentication
              </span>
              <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                Real-Time
              </span>
            </div>
            <h3 className="text-3xl serif-font">Healthcare Platform</h3>
            <p className="text-[var(--text-muted)] font-light max-w-md">
              A modern healthcare platform designed to make personal wellness
              more accessible through a secure, intuitive, and real-time digital
              experience
            </p>
            <div className="flex gap-4 pt-8 text-[var(--text-main)]">
              <a
                className="flex items-center gap-2 text-[12px] uppercase tracking-widest font-bold hover:opacity-90 hover:text-[var(--accent-purple)] hover:italic transition-all duration-300"
                href="#"
              >
                View Case Study
                <span className="material-symbols-outlined !text-sm">
                  arrow_outward
                </span>
              </a>
              <a
                className="flex items-center gap-2 text-[12px] uppercase tracking-widest font-bold hover:opacity-90 hover:text-[var(--accent-purple)] hover:italic transition-all duration-300"
                href="#"
              >
                Live Site
                <span className="material-symbols-outlined !text-sm">
                  arrow_outward
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="group cursor-pointer">
          <div className="aspect-[4/5] overflow-hidden mb-8 border border-[var(--border-color)]">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              alt="Finance Tracker full stack web application built by Pradeep Sharma"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChAaw5QRBG3NeZSgDKZ-TDd7mfuVZfoNrOLRFch_7lbIWpfzcs0Lm--D2Y6CiGjB600i0arQBkZXnBhLK-BkLIDsddNNq6OKORoMQBenlvd8eAlXQiZQEh6_xZE7fuKCtXUx75TNkeOb2fJyz51B1ZSZkFxez2sEedEQ_qomCz_WUfiTzvgRS4A7ohf1Oog0hddHjFZ41zagzTM66LQVzVCAYxB1gQ7KZFtW4bwVxv2q3MtDyYX2-8EW7VImBJK-BGW_58wVxnPA"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                Full Stack
              </span>
              <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                Data Visualization
              </span>
              <span className="text-[10px] uppercase tracking-[0.1em] font-bold py-1 px-3 bg-[var(--accent-soft)] text-[var(--text-main)]">
                APIs
              </span>
            </div>
            <h3 className="text-3xl serif-font">Financial Dashboard</h3>
            <p className="text-[var(--text-muted)] font-light max-w-md">
              A data-driven financial dashboard that transforms complex
              financial information into clear, interactive visualizations and
              actionable insights.
            </p>
            <div className="flex gap-4 pt-8 text-[var(--text-main)]">
              <a
                className="flex items-center gap-2 text-[12px] uppercase tracking-widest font-bold hover:opacity-90 hover:text-[var(--accent-purple)] hover:italic transition-all duration-300"
                href="#"
              >
                View Case Study
                <span className="material-symbols-outlined !text-sm">
                  arrow_outward
                </span>
              </a>
              <a
                className="flex items-center gap-2 text-[12px] uppercase tracking-widest font-bold hover:opacity-90 hover:text-[var(--accent-purple)] hover:italic transition-all duration-300"
                href="#"
              >
                Live Site
                <span className="material-symbols-outlined !text-sm">
                  arrow_outward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
