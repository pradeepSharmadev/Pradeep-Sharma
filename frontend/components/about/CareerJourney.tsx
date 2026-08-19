import React from "react";

const CareerJourney = () => {
  return (
    <section className="max-w-5xl mx-auto px-8 mb-40">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-xs sans-font uppercase tracking-[0.2em] font-bold text-[var(--accent-purple)] sticky top-32">
            Career Journey
          </h2>
        </div>

        <div className="md:col-span-8 space-y-16 border-l border-[var(--border-color)] pl-12 relative">
          <div className="relative group">
            <div className="timeline-dot"></div>
            <span className="text-[11px] uppercase tracking-widest text-[var(--text-muted)] font-bold mb-3 block">
              July 2025 — Present
            </span>
            <h3 className="text-xl serif-title mb-1">
              Full-Stack Developer (Contract)
            </h3>
            <span className="text-[11px] uppercase tracking-widest text-[var(--text-muted)] block mb-5">
              DU Assassins — InternFree · Remote
            </span>
            <div className="space-y-3 text-[var(--text-muted)] font-light max-w-xl pl-4">
              <p>
                I took full ownership of InternFree's backend and built it from
                scratch, developing more than 50 REST API endpoints across the
                platform's core modules.
              </p>
              <p>
                As the product evolved, I also requested and onboarded an
                additional frontend intern and mentored them through their
                ramp-up.
              </p>
              <p className="font-normal pt-2">My work includes:</p>
              <ul className="space-y-3 text-[var(--text-muted)] font-light list-disc marker:text-[var(--border-color)] max-w-xl pl-6">
                <li>
                  Building a three-stage talent verification pipeline covering
                  screening, technical, and behavioral evaluation.
                </li>
                <li>
                  Designed a role-based access control system for
                  <strong>
                    {" "}
                    Super Admin, Moderator, Interviewer, Hirer, and Talent
                  </strong>{" "}
                  roles.
                </li>
                <li>
                  Developing the verification workflow that qualifies talent for
                  a platform-verified badge.
                </li>
                <li>
                  Engineering an 80/20 weighted matching engine combining
                  hiring-intent matching with interview-based profile
                  completeness.
                </li>
                <li>
                  Automating talent recommendations that previously required
                  manual shortlisting.
                </li>
                <li>
                  Implementing real-time voice and video interviews using
                  Socket.io and WebRTC across all three interview stages.
                </li>
                <li>
                  Building workspace collaboration functionality directly into
                  the platform.
                </li>
                <li>
                  Developing an escrow-based payment system with Razorpay across
                  three fund-flow stages: hold, release, and payout.
                </li>
                <li>
                  Building workspace collaboration tools for chat, file sharing,
                  approval flows, and revisions.
                </li>
                <li>
                  Implementing an admin-mediated dispute resolution module.
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="timeline-dot"></div>

            <span className="text-[11px] uppercase tracking-widest text-[var(--text-muted)] font-bold mb-3 block">
              January 2025 — June 2025
            </span>

            <h3 className="text-xl serif-title mb-1">
              Software Development Intern
            </h3>

            <span className="text-[11px] uppercase tracking-widest text-[var(--text-muted)] block mb-5">
              DU Assassins — InternFree · Remote
            </span>

            <div className="space-y-3 text-[var(--text-muted)] font-light max-w-xl pl-4">
              <p>
                I joined InternFree as a Software Development Intern and worked
                on the product's frontend for six months.
              </p>
              <p className="font-normal pt-2">During the internship:</p>
              <ul className="space-y-3 text-[var(--text-muted)] font-light list-disc marker:text-[var(--border-color)] max-w-xl pl-6">
                <li>
                  Built core frontend features using React.js and Tailwind CSS.
                </li>
                <li>Integrated REST APIs developed by a fellow intern.</li>
                <li>
                  Contributed to shipping the platform's first production
                  release.
                </li>
                <li>
                  Worked as part of a two-person founding team alongside one
                  co-intern.
                </li>
                <li>
                  Divided ownership across Frontend and Backend development.
                </li>
                <li>Collaboratively designed Wireframes and User flows.</li>
                <li>
                  Helped translate the founder's initial product idea into a
                  functional platform.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  // return (
  //   <section className="max-w-5xl mx-auto px-8 mb-40">
  //     <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
  //       <div className="md:col-span-4">
  //         <h2 className="text-xs sans-font uppercase tracking-[0.2em] font-bold text-[var(--accent-purple)] sticky top-32">
  //           Career Journey
  //         </h2>
  //       </div>
  //       <div className="md:col-span-8 space-y-16 border-l border-[var(--border-color)] pl-12 relative">
  //         <div className="relative group">
  //           <div className="timeline-dot"></div>
  //           <span className="text-[11px] uppercase tracking-widest text-[var(--text-muted)] font-bold mb-3 block">
  //             July 2025 - Present
  //           </span>
  //             <h3 className="text-xl serif-title mb-4">
  //               Full-Stack Developer (Contract)
  //             </h3>
  //           <p className="editorial-line text-[var(--text-muted)] font-light max-w-xl">
  //             Architecting scalable design languages and robust technical
  //             systems for productivity tools used by millions. Focused on
  //             bridging the gap between high-level brand strategy and granular
  //             interface components.
  //           </p>
  //         </div>
  //         <div className="relative group">
  //           <div className="timeline-dot"></div>
  //           <span className="text-[11px] uppercase tracking-widest text-[var(--text-muted)] font-bold mb-3 block">
  //             2018 — 2021
  //           </span>
  //           <h3 className="text-xl serif-title mb-4">
  //             Lead Developer &amp; Consultant
  //           </h3>
  //           <p className="editorial-line text-[var(--text-muted)] font-light max-w-xl">
  //             Partnered with emerging startups in the fintech and healthtech
  //             sectors to define their MVP technical stacks and user experience
  //             frameworks.
  //           </p>
  //         </div>
  //         <div className="relative group">
  //           <div className="timeline-dot"></div>
  //           <span className="text-[11px] uppercase tracking-widest text-[var(--text-muted)] font-bold mb-3 block">
  //             2015 — 2018
  //           </span>
  //           <h3 className="text-xl serif-title mb-4">
  //             Junior Interaction Developer
  //           </h3>
  //           <p className="editorial-line text-[var(--text-muted)] font-light max-w-xl">
  //             Cut my teeth at a boutique creative studio, mastering the
  //             fundamental principles of typography, grid systems, and clean code
  //             architecture.
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default CareerJourney;
