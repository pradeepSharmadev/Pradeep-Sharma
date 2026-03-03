import React from "react";
import Image from "next/image";
const AboutHero = () => {
  return (
    <section className="max-w-5xl mx-auto px-8 mb-32">
      <div className="max-w-3xl">
        <h1 className="serif-title text-[clamp(4rem,10vw,8rem)] leading-[0.9] mb-12 italic font-light tracking-tight">
          About.
        </h1>
        <p className="text-2xl md:text-3xl editorial-line text-[var(--text-main)] font-light mb-16">
          Based in Bangalore, I am a full-stack developer and designer dedicated
          to the pursuit of{" "}
          <span className="italic serif-font">essential beauty</span> and
          functional clarity in digital spaces.
        </p>
      </div>
      <div className="relative w-full aspect-[16/9] mb-24 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
        <Image
          alt="Atmospheric Studio Portrait"
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
