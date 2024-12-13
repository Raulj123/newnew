import React from "react";
import { Info } from "./ProjectsInfo";
import "@/app/globals.scss";
export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      {Info.map((project) => (
        <div className="projectCard">
          <React.Fragment key={project.id}>
            <header>
              {project.title}
              <a href={project.link}>Link</a>
            </header>
            <p>{project.description}</p>
            <footer>{project.languages}</footer>
          </React.Fragment>
        </div>
      ))}
    </div>
  );
}
