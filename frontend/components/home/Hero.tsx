import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-8 md:px-16 pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] font-medium serif-font">
              Hello, I'm <br />
              Pradeep.
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-muted)] font-light max-w-xl leading-relaxed">
              I create intentional, high-fidelity digital experiences that
              bridge the gap between human emotion and technical precision.
            </p>
          </div>
          <div className="flex gap-8">
            <a
              className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest border-b border-[var(--text-main)] pb-2 hover:text-[var(--accent-purple)] hover:border-[var(--accent-purple)] transition-colors duration-300"
              href="#portfolio"
            >
              View Case Studies
              <span className="material-symbols-outlined text-lg">
                arrow_outward
              </span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="group relative aspect-[4/5] bg-neutral-50 rounded-sm overflow-hidden ring-1 ring-inset ring-neutral-200 transition-all duration-700">
            <Image
              alt="Pradeep Portrait"
              fill
              className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
              src="/images/pradeep-profile.png"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-50 pointer-events-none"></div>
          </div>
        </div>

        {/* <div className="lg:col-span-5 relative"> 
             <div
              className="aspect-[4/5] bg-neutral-50 rounded-sm hover:bg-neutral-100 overflow-hidden border border-[var(--border-color)] grayscale hover:grayscale-0 transition-all duration-700"
            > 
              <div
              className="w-full h-full object-cover duration-700 border border-[var(--border-color)] bg-blue-100 rounded-[40px]"
              >
            </div>
              <img
                alt="Pradeep Portrait"
                className="w-[105%] h-[105%] object-cover"
                src="/Final/psdhero.png"
              />
              <img
                alt="Pradeep Portrait"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCNZy8xNCByxfG6jYGopgyBzrIVWeZdngzOEpvvLmJAthhVxUK_93hOcTUkc7cnqFGFMtS4tFiyC_q3lTg6b0ZkRGwVvS_Dchlk-0fP6mWklXOUckkARwIJ0-g4-rC9jNiPLwFm5NQjtmVq5ncJT7n8yQVCb9VflhR0m5fFGqXQ9b_vFFCn6lma58xZVKXKzOcBg9AoF95RAVH0upPSiMuzuuG6wsUf91GULFUkma_cWpHkDtHZsSlbhFD0z3MEseMIsg6yF9MIQ"
              />
            </div>
          </div>*/}
      </div>
    </section>
  );
};

export default Hero;
