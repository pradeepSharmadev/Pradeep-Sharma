import React from 'react'

const Workconnect = () => {
  return (
    <section
      className="bg-white dark:bg-[var(--bg-color-secondary)] py-32 border-t border-[var(--border-color)]"
      id="contact"
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-20">
        <div className="space-y-8">
          <h2 className="text-7xl font-medium text-[var(--text-main)] serif-font">
            Let's talk.
          </h2>
          <p className="text-xl text-[var(--text-muted)] font-light leading-relaxed">
            Have a vision you'd like to bring to life? I'm currently available
            for select freelance opportunities and full-stack engineering roles.
          </p>
          <div className="space-y-4 pt-4">
            <p className="text-xs pb-2 font-bold uppercase tracking-widest text-[var(--text-muted)]">
              Direct Contact
            </p>
            <a
              className="text-1xl md:text-2xl font-light hover:text-[var(--accent-purple)] transition-colors duration-300 underline underline-offset-8 decoration-1 decoration-[var(--border-color)]"
              href="mailto:pradeepsharma7319@gmail.com"
            >
              pradeepsharma7319@gmail.com
            </a>
          </div>
        </div>
        <div>
          <form className="space-y-8">
            <div className="border-b border-[var(--border-color)] py-4">
              <input
                className="w-full focus:outline-none bg-transparent border-none px-0 focus:ring-0 text-lg placeholder:text-[var(--text-muted)]"
                placeholder="Your Name"
                type="text"
              />
            </div>
            <div className="border-b border-[var(--border-color)] py-4">
              <input
                className="w-full focus:outline-none bg-transparent border-none px-0 focus:ring-0 text-lg placeholder:text-[var(--text-muted)]"
                placeholder="Email Address"
                type="email"
              />
            </div>
            <div className="border-b border-[var(--border-color)] py-4">
              <textarea
                className="w-full focus:outline-none bg-transparent border-none px-0 focus:ring-0 text-lg placeholder:text-[var(--text-muted)] min-h-[120px]"
                placeholder="Tell me about your project"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-5 hover:bg-[var(--accent-purple)] text-[var(--text-main)] font-semibold uppercase tracking-widest text-xs border rounded-sm border-[var(--border-color)] bg-[var(--accent-soft)] transition-all duration-500 dark:border-[var(--accent-soft)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Workconnect