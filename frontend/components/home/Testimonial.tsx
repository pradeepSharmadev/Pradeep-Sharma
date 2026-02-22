"use client";
import React, { useState } from "react";
import { RiDoubleQuotesR } from "react-icons/ri";

const testimonials = [
  {
    quote:
      "Working with Pradeep was an exercise in clarity. He has a rare ability to transform abstract business goals into elegant, intuitive digital solutions.",
    name: "Jonathan Doe",
    role: "Product Manager at Technova",
  },
  {
    quote:
      "Pradeep delivers beyond expectations. His design thinking and execution are world-class.",
    name: "Sarah Lee",
    role: "Founder at Creatix",
  },
  {
    quote:
      "Professional, strategic, and incredibly detail-oriented. Highly recommended.",
    name: "Michael Smith",
    role: "CTO at InnovateX",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  return (
    <section className="section-padding bg-[var(--bg-color)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <h2 className="text-5xl md:text-7xl serif-font mb-24">Kind Words</h2>

        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* <RiDoubleQuotesR className="text-5xl md:text-7xl text-[var(--accent-purple)] mb-10" /> */}
          <span className="material-symbols-outlined !text-5xl md:!text-7xl text-[var(--accent-purple)] mb-10 !font-light">
            format_quote
          </span>

          <blockquote
            className="text-2xl md:text-3xl lg:text-4xl serif-font leading-[0.9] mb-12 italic transition-all duration-500"
          >
            "{testimonials[current].quote}"
          </blockquote>

          <div className="space-y-1 mb-16">
            <p className="text-base font-bold uppercase tracking-widest text-[var(--text-main)]">
              {testimonials[current].name}
            </p>
            <p className="text-sm font-light text-[var(--text-muted)]">
              {testimonials[current].role}
            </p>
          </div>

          <div className="flex items-center gap-12">
            <button
              onClick={handlePrev}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            >
              <span className="material-symbols-outlined !text-base">west</span>
              Previous
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            >
              Next
              <span className="material-symbols-outlined !text-base">east</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
