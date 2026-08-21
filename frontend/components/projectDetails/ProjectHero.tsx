import React from "react";
import Image from "next/image";

interface ProjectHeroProps {
  title: string;
  subtitle:string;
  heroImage: string;
  github?: string;
  liveSite?: string;
}

const ProjectHero = ({
  title,
  subtitle,
  heroImage,
  github,
  liveSite,
}: ProjectHeroProps) => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-end"
    >
      <div className="absolute inset-0 z-0">
        <Image
          alt={`${title} | Pradeep Sharma | Full Stack Developer | Project Details Hero Image`}
          fill
          className="object-cover"
          src={heroImage}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative z-10 w-full pb-24 max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-white leading-tight mb-8">
            {title}
          </h1>
          <p className="text-white tracking-wide">{subtitle}</p>
          <div className="flex gap-8 mt-12">
            <a
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:opacity-60 transition-opacity text-white"
              target="_blank"
              href={github}
            >
              View Repository
              <span className="material-symbols-outlined !text-sm">
                arrow_outward
              </span>
            </a>
            <a
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold hover:opacity-60 transition-opacity text-white"
              target="_blank"
              href={liveSite}
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
};

export default ProjectHero;
