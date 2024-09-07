import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="min-h-[calc(100dvh-150px)] mt-[150px] max-w-[1300px] mx-auto grid md:grid-cols-2 gap-y-[50px] place-items-center text-center">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  );
};

export default ProjectsSection;
