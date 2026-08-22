import Footer from "@/components/Footer";
import Content from "@/components/projectDetails/Content";
import ProjectHero from "@/components/projectDetails/ProjectHero";
import React from "react";
import Navbar from "../../../components/projectDetails/Navbar";
import NavigateNext from "@/components/projectDetails/NavigateNext";
import { projects } from "@/data/projects";
import PageNotFound from "@/components/PageNotFound";

interface Props {
  params: Promise<{
    project_slug: string;
  }>;
}

const page = async ({ params }: Props) => {
  const { project_slug } = await params;

  const project = projects.find((project) => project.slug === project_slug);

  if (!project) {
    return <PageNotFound />;
  }
  return (
    <>
      <Navbar />
      <main>
        <ProjectHero
          title={project.title}
          subtitle={project.subtitle}
          heroImage={project.heroImage}
          github={project.github}
          liveSite={project.liveSite}
        />
        <Content
          role={project.role}
          projectType={project.projectType}
          tags={project.tags}
          year={project.year}
          techStack={project.techStack}
          overview={project.overview}
          problem={project.problem}
          solution={project.solution}
          architectureImage={project.architectureImage}
          features={project.features}
          responsibilities={project.responsibilities}
          technicalChallenges={project.technicalChallenges}
          process={project.process}
          result={project.result}
        />
        <NavigateNext nextProject={project.nextProject} />
      </main>
      <Footer />
    </>
  );
};

export default page;
