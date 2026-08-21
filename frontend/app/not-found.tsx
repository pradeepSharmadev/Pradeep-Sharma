import Link from "next/link";
 
const NotFound = () => {
  return (
    <main className="min-h-screen bg-[var(--bg-color)]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-6 py-8 md:px-10 lg:px-16">
        {/* Header */}
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tighter serif-font"
          >
            Pradeep<span className="text-[var(--accent-purple)]">.</span>
          </Link>

          <span className="text-xs text-[var(--text-main)] font-semibold uppercase tracking-[0.2em]">
            404
          </span>
        </header>

        {/* Content */}
        <section className="flex flex-1 items-center">
          <div className="w-full text-[var(--text-main)]">
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[var(--text-main)]">
              Error 404
            </p>

            <h1 className="max-w-4xl text-[var(--text-main)] text-[clamp(4rem,14vw,12rem)] font-medium leading-[0.8] tracking-[-0.07em]">
              Lost
              <br />
              in space.
            </h1>

            <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-sm text-[var(--text-muted)] leading-6">
                The page you're looking for doesn't exist or may have been
                moved. Let's get you back to somewhere familiar.
              </p>

              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-widest border-b border-[var(--text-main)] hover:text-[var(--accent-purple)] hover:border-[var(--accent-purple)] transition-colors duration-300"
              >
                <span>Back to home</span>

                <span className="material-symbols-outlined !text-lg">
                  arrow_outward
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex items-center justify-between border-t border-[var(--border-color)] pt-5 text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
          <span> © {new Date().getFullYear()} Pradeep Sharma — All rights reserved.</span>
          <span>Nothing here</span>
        </footer>
      </div>
    </main>
  );
};

export default NotFound;
