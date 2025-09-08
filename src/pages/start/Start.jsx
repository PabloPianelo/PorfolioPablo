import "./Start.css";
import { Download, Mail, ArrowDown } from "lucide-react";
import pabloImg from "../../assets/pablo_P.png";
import pabloCV from "../../assets/CVPabloPianeloAlonso.pdf";
function Start() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNext = () => {
    const skillsSection = document.getElementById("skills");
    skillsSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__grid">
          <div className="hero__left">
            <div>
              <h1 className="hero__title">Pablo Pianelo Alonso</h1>
              <h2 className="hero__subtitle">
                Soy un desarrollador de software con pasión por el aprendizaje
                continuo y la resolución de problemas. Me especializo en crear
                soluciones digitales prácticas y eficientes que generen un
                impacto real. Cuento con movilidad geográfica total para
                trabajar desde cualquier lugar.
                <div class="status-row">
                  {/* disponible */}
                  <div class="status-indicator">
                    <div class="status-circle online"/>
                    <div class="tooltip">Disponible</div>
                    {/* ocupado */}
                     {/* <div class="status-circle offline"/>
                    <div class="tooltip offline">Ocupado</div> */}
                  </div>
                </div>
              </h2>
            </div>

            <div className="hero__actions">
              <button onClick={scrollToContact} className="btn btn--contact">
                <Mail size={20} /> Contactar
              </button>
              <a
                className="btn btn--download"
                href={pabloCV}
                download="CV_Pablo_Pianelo.pdf"
              >
                <Download size={20} /> Descargar CV
              </a>
            </div>
          </div>
          <div className="hero__image-wrapper">
            <div className="hero__profile">
              <img src={pabloImg} alt="Pablo Pianelo" />
              <div className="hero__status">
                <div className="hero__status-indicator"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={scrollToNext} className="hero__scroll">
        <ArrowDown size={24} />
      </button>
    </section>
  );
}

export default Start;
