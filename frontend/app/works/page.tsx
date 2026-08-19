import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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
