import React, { useEffect } from "react";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  User,
  Tag,
  Linkedin,
} from "lucide-react";
import "./ProjectDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
const ProjectDetails = () => {
  const location = useLocation();
  const { project } = location.state || {};
  // Proyecto de ejemplo si no se proporciona uno
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onBack = () => {
    navigate(`/#projects`);
  };

  return (
    <div className="project-details">
      <div className="project-details-container">
        {/* Header con botón de regreso */}
        <div className="project-details-header">
          <button onClick={onBack} className="back-button">
            <ArrowLeft size={20} />
            Volver a proyectos
          </button>
        </div>

        {/* Título y metadata */}
        <div className="project-hero">
          <h1 className="project-hero-title">{project.title}</h1>
          <div className="project-meta">
            <div className="meta-item">
              <User size={16} />
              <span>{project.team.join(", ")}</span>
            </div>
          </div>
          <p className="project-hero-description">{project.description}</p>
        </div>

        {/* Imagen principal */}
        <div className="project-main-image">
          <img src={project.image} alt={project.title} />
        </div>

        {/* Enlaces de acción */}
        <div className="project-actions">
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="action-button github-button"
          >
            <Github size={20} />
            Ver Código
          </a>
          {project.codeUrl2 && (
            <a
              href={project.codeUrl2}
              target="_blank"
              rel="noopener noreferrer"
              className="action-button github-button"
            >
              <Github size={20} />
              Backend
            </a>
          )}
          <a
            href={project.linkedinURl}
            target="_blank"
            rel="noopener noreferrer"
            className="action-button demo-button"
          >
            <Linkedin size={20} />
            Linkedin
          </a>
        </div>

        {/* Contenido principal */}
        <div className="project-content-grid">
          {/* Descripción detallada */}
          <section className="content-section">
            <h2>Descripción del Proyecto</h2>
            <p className="detailed-description">{project.longDescription}</p>
          </section>

          {/* Video del proyecto */}
          <section className="content-section">
            <h2>Demo en Video</h2>
            <div className="video-container">
              <iframe
                src={project.video}
                title={`Video demo de ${project.title}`}
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </section>

          {/* Tecnologías utilizadas */}
          <section className="content-section">
            <h2>Tecnologías Utilizadas</h2>
            <div className="technologies-grid">
              {project.technologies.map((tech, index) => (
                <div key={index} className="tech-item">
                  <Tag size={16} />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Características principales */}
          <section className="content-section">
            <h2>Características Principales</h2>
            <ul className="features-list">
              {project.curiosity.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

        
        </div>

        {/* Footer con enlaces adicionales */}
        <div className="project-footer">
          <p>¿Te interesa este proyecto? ¡Échale un vistazo a más proyectos!</p>
          <div className="footer-actions">
            <a
              href="https://github.com/PabloPianelo"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Explorar más Códigos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
