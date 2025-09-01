import "./Start.css";
import { Download, Mail, ArrowDown } from 'lucide-react';

 import pabloImg from "../../assets/pablo.png";
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
                Desarrollador Full-Stack transformando ideas en soluciones web robustas y eficientes.
              </h2>
            </div>
            <div className="hero__actions">
              <button onClick={scrollToContact} className="btn btn--contact">
                <Mail size={20} /> Contactar
              </button>
              <button className="btn btn--download">
                <Download size={20} /> Descargar CV
              </button>
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
