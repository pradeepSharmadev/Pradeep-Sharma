import React from "react";

const Education = () => {
  return (
    <section className="max-w-5xl mx-auto px-8">
      <div className="border-y border-[var(--border-color)] py-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Education */}
          <div className="max-w-md">
            <h2 className="text-xs sans-font uppercase tracking-[0.2em] font-bold text-[var(--accent-purple)] mb-6">
              Education <span className="serif-font"> &amp; </span> Credentials{" "}
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg text-[var(--text-main)] font-medium">
                Bachelor of Science Honours, Electronics
              </h3>

              <h4 className="text-sm text-neutral-500 font-light italic serif-title">
                Sri Venkateswara College, University of Delhi
              </h4>

              <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-neutral-500 sans-font uppercase tracking-wider">
                <span>Graduated: 2026</span>
                <span>CGPA: 6.3 / 10</span>
              </div>

              <p className="text-sm leading-6 text-[var(--text-muted)] font-light pt-3">
                My academic background in Electronics has given me a foundation
                in analytical thinking, systems, and problem solving - skills
                that continue to influence the way I approach software
                engineering.
              </p>
            </div>
          </div>

          <div className="max-w-md">
            <h2 className="serif-title text-xl mb-6">
              Interests & Approach
            </h2>

            <div className="space-y-4 leading-6 text-sm text-[var(--text-muted)] font-light">
              <p>
                For me, software engineering sits at the intersection of
                technology and product thinking.
              </p>

              <p>
                I enjoy working through the entire journey of a product:
                understanding an idea, breaking down the problem, designing the
                architecture, building the interface and backend, integrating
                the moving parts, and ultimately making the application work
                reliably in production.
              </p>

              <p>
                I'm particularly interested in full - stack development, backend
                architecture, real-time applications, payment systems, and
                products where thoughtful engineering can make a meaningful
                difference to the user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  // return (
  //   <section className="max-w-5xl mx-auto px-8">
  //     <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
  //       <div className="max-w-md">
  //         <h2 className="text-xs sans-font uppercase tracking-[0.3em] font-bold text-[var(--accent-purple)] mb-6">
  //           Education <span className="serif-font"> &amp; </span> Credentials
  //         </h2>
  //         <div className="space-y-2">
  //           <p className="text-[var(--text-main)] font-medium">
  //             Bachelor of Science Honours, Electronics
  //           </p>
  //           <p className="text-sm text-neutral-500 font-light italic serif-title">
  //             Sri Venkateswara College - University of Delhi, class of 2023-27
  //           </p>
  //         </div>
  //       </div>
  //       <div className="flex gap-12 grayscale opacity-60">
  //         <span className="material-symbols-outlined !text-4xl material-symbols-bold">
  //           terminal
  //         </span>
  //         <span className="material-symbols-outlined !text-4xl material-symbols-bold">
  //           code
  //         </span>
  //         <span className="material-symbols-outlined !text-4xl material-symbols-bold">
  //           verified
  //         </span>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default Education;
