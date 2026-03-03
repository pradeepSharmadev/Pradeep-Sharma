import React from 'react'

const Experiments = () => {
  return (
    <section className="border-t border-[var(--border-color)] bg-white dark:bg-[var(--bg-color-secondary)]">
      <div className="max-w-[1440px] mx-auto px-8 pb-48 pt-24 md:px-16">
        <h2 className="text-5xl md:text-6xl font-medium mb-24 text-[var(--text-main)] serif-font">
          Quick Experiments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
          <div className="group">
            <div className="aspect-square overflow-hidden mb-6 bg-slate-100 flex items-center justify-center">
              <code className="text-[var(--accent-purple)] text-sm font-mono opacity-60">
                01_motion_gradient.js
              </code>
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl hover:italic serif-font font-medium tracking-wider text-[var(--text-main)]">
                Fluid Gradients
              </h4>
              <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
                A study on interactive mesh gradients using WebGL for landing
                page backgrounds.
              </p>
              <a
                className="experiment-link inline-block text-[11px] font-bold uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--accent-purple)] transition-colors pt-2"
                href="#"
              >
                <span className="pb-0.5 border-b border-transparent transition-all">
                  View Code
                </span>
              </a>
            </div>
          </div>
          <div className="group">
            <div className="aspect-square overflow-hidden mb-6 bg-slate-100">
              <img
                alt="Typography Study"
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgw1afXfrNxf62ITPeXVRrSHWj7aZgUzG7FbdIsb-znGW2-WyRrF3q3mZ780TIxe6MKKMiPqPfW_avtl-K7Hvpy80EHtnnd3Ne9p0jI3Md4mztoeIV1gzPfYhNQ0eAOJWxnMaG68-k9Ft7pDSebN3z-LO8ZmtgDxeI-v2SxIRR9yVrqYM8cRt_a3HpEUTRHEoAnlg4JqBKUODXfH7hNTFCUbWPX1q-bHX2xKZGoYl06d8dcwQvhCIAvo00ezFCnuQQlzf3Gjj8og"
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl hover:italic serif-font font-medium tracking-wider text-[var(--text-main)]">
                Type Play 02
              </h4>
              <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
                Experimental layout exploring brutalist typography and oversized
                navigation elements.
              </p>
              <a
                className="experiment-link inline-block text-[11px] font-bold uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--accent-purple)] transition-colors pt-2"
                href="#"
              >
                <span className="pb-0.5 border-b border-transparent transition-all">
                  View Design
                </span>
              </a>
            </div>
          </div>
          <div className="group">
            <div className="aspect-square overflow-hidden mb-6 bg-slate-100 flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-slate-300">
                gesture
              </span>
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl hover:italic serif-font font-medium tracking-wider text-[var(--text-main)]">
                Micro-interactions
              </h4>
              <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
                System of subtle hover states and transitions for minimalist
                e-commerce interfaces.
              </p>
              <a
                className="experiment-link inline-block text-[11px] font-bold uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--accent-purple)] transition-colors pt-2"
                href="#"
              >
                <span className="pb-0.5 border-b border-transparent transition-all">
                  View Code
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiments