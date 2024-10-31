import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "@/lib/projectsData";

const ProjectsSection = () => {
  const projectsArr = projects();
  return (
    <section className="min-h-[calc(100dvh-150px)] mt-[150px] max-w-[1300px] mx-auto grid md:grid-cols-2 gap-y-[50px] place-items-center text-center">
      {projectsArr.map((project) => (
        <ProjectCard
          key={project.id}
          url={project.url}
          projectTitle={project.projectTitle}
          role={project.role}
          description={project.description}
          liveUrl={project.liveUrl}
          techStack={project.techStack}
        />
      ))}
    </section>
  );
};

export default ProjectsSection;
