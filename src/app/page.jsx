import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import CaseStudiesPreview from "@/components/CaseStudiesPreview";
import OtherProjects from "@/components/OtherProjects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <FeaturedProjects />
        <CaseStudiesPreview />
        <OtherProjects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
