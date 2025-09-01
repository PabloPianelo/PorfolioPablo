import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const menuItems = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Habilidades', id: 'skills' },
    { label: 'Formación', id: 'education' },
    { label: 'Experiencia', id: 'experience' },
    { label: 'Proyectos', id: 'projects' },
    { label: 'Contacto', id: 'contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <button onClick={() => scrollToSection('hero')} className="logo-button">
          PP
        </button>

        <div className="desktop-menu">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="menu-button"
            >
              {item.label}
              <span className="underline"></span>
            </button>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="mobile-menu-item"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
