import Contact from "@/components/Contact";
// import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
// import HeroSection from "@/components/HeroSection";
// import ProjectsSection from "@/components/ProjectsSection";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-[100dvh]">
      {/* This is the beginning of my portfolio */}
      <HeroSection />
      <div id="projects">
        <div className="md:h-[150px]"></div>
        <div>
          {/* <h3 className="text-5xl text-white text-center font-bold">
            Projects
          </h3> */}
          <ProjectsSection />
          <SkillsSection />
        </div>
      </div>

      <div id="contact">
        <div className="h-[110px]"></div>
        <div>
          <h3 className="sm:text-5xl text-3xl text-white text-center font-bold">
            Contact
          </h3>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
