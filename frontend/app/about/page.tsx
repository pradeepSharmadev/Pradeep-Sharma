import AboutHero from "@/components/about/AboutHero";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import CareerJourney from "@/components/about/CareerJourney";
import Connect from "@/components/about/Connect";
import Education from "@/components/about/Education";
import TechnicalExpertise from "@/components/about/TechnicalExpertise";
import WorkingProcess from "@/components/about/WorkingProcess";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-40">
        <AboutHero />
        <AboutPhilosophy />
        <TechnicalExpertise />
        <CareerJourney />
        <WorkingProcess />
        <Education />
      </main>
      <Connect />
      <Footer />
    </>
  );
};

export default page;
