import React from "react";
import Link from "next/link";

type PageNotFoundProps = {
  title?: string;
  description?: string;
};

const PageNotFound = ({
  title = "Page not found",
  description = "The page you're looking for doesn't exist.",
}: PageNotFoundProps) => {
  return (
    <section className="bg-[var(--bg-color)] flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          404
        </p>

        <h1 className="text-5xl font-medium tracking-[-0.04em] md:text-7xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-muted-foreground">
          {description}
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 border-b pb-2 text-sm"
        >
          Back to home
          <span>→</span>
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
