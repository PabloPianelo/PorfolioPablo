
import Skills from './pages/skills/Skills'
import Start from './pages/start/Start'
import Timeline from './utils/TimeLine'
import { educationData,experienceData } from './data/portfolioData';
import Navigation from './pages/navigation/Navigation'
import Footer from './pages/footer/Foot';
import Contact from './pages/contact/Contact'; 
import Projects from './pages/projects/Projects';
import { useEffect } from 'react';
function Home() {
 useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
     <div className="app">
      <Navigation />

      <main className="app-main">
        <section id="hero" className="section section-hero">
          <Start />
        </section>

        <section id="skills" className="section section-skills">
          <Skills />
        </section>

        <section id="education" className="section section-education">
         <Timeline  items={educationData} 
            title="Formación" 
            bgColor="white"/>
        </section>

        <section id="experience" className="section section-experience">
         <Timeline  items={experienceData} 
            title="Experiencia" 
            bgColor="gray"/>
        </section>

        <section id="projects" className="section section-projects">
        <Projects />
        </section>

        <section id="contact" className="section section-contact">
        
         <Contact/>
        </section>
      </main>

      <footer className="footer">
       {/* <Footer /> */}
      </footer>
    </div>
    </>
  )
}

export default Home
