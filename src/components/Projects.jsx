import React from "react";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import ProjectsCard from "./ProjectsCard";
const Projects = () => {
  return (
    <section className="py-20 mx-auto max-w-7xl px-8 " id="projects">
      <SectionTitle text="My Web Creations" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
