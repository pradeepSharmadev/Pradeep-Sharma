import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";
import Philosophy from './../components/home/Philosophy';
import Expertise from "@/components/home/Expertise";
import Works from "@/components/home/Works";
import Testimonial from "@/components/home/Testimonial";
import Contact from "@/components/home/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Expertise />
        <Works />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
