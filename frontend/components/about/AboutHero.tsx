import React from "react";
import Image from "next/image";
const AboutHero = () => {
  return (
    <section className="max-w-5xl mx-auto px-8 mb-32">
      <div className="max-w-4xl">
        <h1 className="serif-title max-w-4xl text-[clamp(4rem,10vw,8rem)] leading-[0.9] mb-12 italic font-light tracking-tight">
          {/* About. */}
          Pradeep Sharma.
        </h1>
        <h3 className="text-xl font-sans max-w-3xl md:text-2xl text-[var(--text-main)] font-light mb-16">
          I'm Pradeep Sharma, a Full Stack Developer based in New Delhi, India,
          with 1+ year of professional experience building
          <span className="italic serif-font"> Production-Ready </span> web
          applications using React, Next.js, Node.js, TypeScript and modern
          database technologies.
        </h3>
      </div>
      <div className="relative w-full aspect-[16/9] mb-24 overflow-hidden rounded-sm transition-all duration-700">
        {/* grayscale hover:grayscale-0 */}
        <Image
          alt="Pradeep Sharma | Full Stack Developer | Graduated From Sri Venkateswara College | University of Delhi | South Campus"
          fill
          className="object-center"
          src="/images/southcampus.jpg"
        />
        {/* <img
            alt="Atmospheric Studio Portrait"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCNZy8xNCByxfG6jYGopgyBzrIVWeZdngzOEpvvLmJAthhVxUK_93hOcTUkc7cnqFGFMtS4tFiyC_q3lTg6b0ZkRGwVvS_Dchlk-0fP6mWklXOUckkARwIJ0-g4-rC9jNiPLwFm5NQjtmVq5ncJT7n8yQVCb9VflhR0m5fFGqXQ9b_vFFCn6lma58xZVKXKzOcBg9AoF95RAVH0upPSiMuzuuG6wsUf91GULFUkma_cWpHkDtHZsSlbhFD0z3MEseMIsg6yF9MIQ"
          /> */}
      </div>
    </section>
  );
};

export default AboutHero;
