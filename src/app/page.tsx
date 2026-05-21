import Navbar from "@/components/layout/Navbar";

import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}