import React from 'react'
import Image from 'next/image';


const ProjectHero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-end"
    >
      <div className="absolute inset-0 z-0">
        <Image
          alt="Project Hero"
          fill
          className="object-cover scale-105"
          src="/images/networkingdays.png"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative z-10 w-full pb-24 max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white leading-tight mb-8">
            College Networking <br />
            Days
          </h1>
          <div className="flex gap-8 mt-12">
            <a
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:opacity-60 transition-opacity text-white"
              href="#"
            >
              View Repository
              <span className="material-symbols-outlined !text-sm">
                arrow_outward
              </span>
            </a>
            <a
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:opacity-60 transition-opacity text-white"
              href="#"
            >
              Live Site
              <span className="material-symbols-outlined !text-sm">
                arrow_outward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectHero