import "./Start.css";
import { Download, Mail, ArrowDown } from 'lucide-react';
 import pabloImg from "../../assets/pablo_P.png";
 import pabloCV from "../../assets/CVPabloPianeloAlonso.pdf";
function Start() {

   const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = () => {
    const skillsSection = document.getElementById('skills');
    skillsSection?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    
    <section className="hero">
      <div className="hero__container">
        <div className="hero__grid">
          <div className="hero__left">
            <div>
              <h1 className="hero__title">Pablo Pianelo</h1>
              <h2 className="hero__subtitle">
                Soy desarrollador comprometido y en constante aprendizaje. Me entusiasma resolver problemas mediante código y crear soluciones digitales prácticas que aporten valor.
              </h2>
            </div>
            <div className="hero__actions">
              <button onClick={scrollToContact} className="btn btn--contact">
                <Mail size={20} /> Contactar
              </button>
              <a className="btn btn--download"href={pabloCV}
  download="CV_Pablo_Pianelo.pdf">
                <Download size={20} /> Descargar CV
              </a>
            </div>
          </div>
          <div className="hero__image-wrapper">
            <div className="hero__profile">
              <img src={pabloImg}  alt="Pablo Pianelo" />
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
};


export default Start;
