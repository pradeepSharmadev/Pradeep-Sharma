import React from 'react'

const Footer = () => {
  return (
    <footer className="py-16 bg-[var(--bg-color)] border-t border-[var(--border-color)]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-2xl serif-font italic">
            Thank you for visiting.
          </h3>
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest font-light">
            © 2026 Pradeep Sharma — All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-12">
          <a
            className="text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            href="#"
          >
            <span className="hover:scale-110 flex items-center align-middle justify-center h-full w-full transition-transform duration-300 bg-[var(--accent-soft)] border border-[var(--border-color)] dark:border-[var(--accent-soft)] rounded-full p-2 pt-1 pb-1">
              <span className="material-symbols-outlined !text-2xl">
                expand_less
              </span>
            </span>
          </a>
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em]">
            <a className="hover:text-[var(--accent-purple)]" href="#">
              Terms
            </a>
            <a className="hover:text-[var(--accent-purple)]" href="#">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer