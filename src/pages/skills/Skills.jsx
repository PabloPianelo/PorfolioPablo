import React from 'react';
import { skillsData } from '../../data/portfolioData';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-title">
          < h2>Mis Habilidades</h2>
          <div className="underline"></div>
        </div>
        <div className="skills-grid">
          {skillsData.map((category, idx) => (
            <div
              key={category.category}
              className="skill-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map(skill => (
                  <div key={skill.name} className="skill-item">
                    <span className="skill-icon"><img src="" alt="" />{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
