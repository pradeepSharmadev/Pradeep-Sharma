import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectsFilter from "@/components/Works/ProjectsFilter";
import WorkHero from "@/components/Works/WorkHero";
import React from "react";
import Projects from './../../components/Works/Projects';
import Experiments from "@/components/Works/Experiments";
import WorkProcess from "@/components/Works/WorkProcess";
import Workconnect from "@/components/Works/Workconnect";

const page = () => {
  return (
    <>
      <Navbar />
      <main>
        <WorkHero />
        <ProjectsFilter />
        <Projects />
        <Experiments />
        <WorkProcess />
        <Workconnect />
      </main>
      <Footer />
    </>
  );
};

export default page;
