import React from "react";

const WorkingProcess = () => {
  return (
    <section className="max-w-6xl mx-auto px-8">
      <div className="py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="serif-title text-xl italic">01. Understand</h3>
            <p className="text-sm editorial-line text-[var(--text-muted)] font-light">
              Start with the requirements, existing flow, and constraints to get
              a clear picture of what needs to be built before choosing a
              solution.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="serif-title text-xl italic">02. Plan</h3>
            <p className="text-sm editorial-line text-[var(--text-muted)] font-light">
              Break the work into smaller parts and define the architecture,
              APIs, database structure, user flows, and integrations required.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="serif-title text-xl italic">03. Build</h3>
            <p className="text-sm editorial-line text-[var(--text-muted)] font-light">
              Turn the plan into working features across the frontend, backend,
              database, and third-party services, keeping the implementation
              modular and maintainable.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="serif-title text-xl italic">04. Refine</h3>
            <p className="text-sm editorial-line text-[var(--text-muted)] font-light">
              Test real user flows, handle edge cases, fix bugs, and improve
              performance, responsiveness, and overall usability.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="serif-title text-xl italic">05. Ship</h3>
            <p className="text-sm editorial-line text-[var(--text-muted)] font-light">
              Deploy to production, verify the critical flows, and make sure
              everything works reliably outside the development environment.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="serif-title text-xl italic">06. Iterate</h3>
            <p className="text-sm editorial-line text-[var(--text-muted)] font-light">
              Use real usage and feedback to identify problems, improve existing
              features, and continuously evolve the product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
