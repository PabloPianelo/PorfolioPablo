import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { projectsData } from "../../data/portfolioData";
import "./Projects.css";
import Cartprojects from "../../utils/CartProyects";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Mis Proyectos</h2>
          <div className="underline"></div>
        </div>
        <Cartprojects Data={projectsData} />

      </div>
    </section>
  );
};

export default Projects;
