import Footer from "@/components/Footer";
import Content from "@/components/projectDetails/Content";
import ProjectHero from "@/components/projectDetails/ProjectHero";
import React from "react";
import Navbar from './../../../components/projectDetails/Navbar';
import NavigateNext from "@/components/projectDetails/NavigateNext";

interface Props {
  params: Promise<{
    project_id: string;
  }>;
}

const page = async ({ params }: Props) => {
  const { project_id } = await params;
  return (
    <>
      <Navbar />
      <main>
        <ProjectHero />
        <Content />
        <NavigateNext />
      </main>
      <Footer />
    </>
  );
};

export default page;
