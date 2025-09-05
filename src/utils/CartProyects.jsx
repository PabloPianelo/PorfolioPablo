import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import "../pages/projects/Projects.css";
import ReactPaginate from "react-paginate";
import Pagination from "./Pagination";
const Cartprojects = ({ Data }) => {
  // Configuración de paginación
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  // Manejar el cambio de página
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  // Filtrado de tareas y cálculo de paginación
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  // Seleccionar solo las tareas de la página actual
  const currentProjects = Data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  return (
    <>
    <div className="projects-grid">
      {currentProjects.map((project, index) => (
        // !project.priority && priorityActive ||
        <div
          key={project.id}
          className="project-card"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="project-image">
            <img src={project.image} alt={project.title} />
            <div className="project-overlay"></div>
          </div>

          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-technologies">
              {project.technologies.map((tech) => (
                <span key={tech} className="project-tech">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-link-github"
              >
                <Github size={18} />
                Código
              </a>
              {project.codeUrl2 && (
                <a
                  href={project.codeUrl2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link-github"
                >
                  {" "}
                  <Github size={18} />
                  Código
                </a>
              )}
              {/* boton que me lleve a saber mas sobre el proyecto */}
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-link-demo"
              >
                <ExternalLink size={18} />
                Ver más
              </a>
            </div>
          </div>
        </div>
      ))}
      
    </div>
    <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </> 
    );
};

export default Cartprojects;
