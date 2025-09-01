import { Mail, Linkedin, Github } from 'lucide-react';
import './Contact.css';
const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="icon" />,
      label: 'Email',
      value: 'pablo.pianelo@email.com',
      href: 'mailto:pablo.pianelo@email.com',
      description: 'Envíame un correo directo',
    },
    {
      icon: <Linkedin className="icon" />,
      label: 'LinkedIn',
      value: 'Pablo Pianelo',
      href: 'https://linkedin.com/in/pablo-pianelo',
      description: 'Conectemos profesionalmente',
    },
    {
      icon: <Github className="icon" />,
      label: 'GitHub',
      value: 'pablo-pianelo',
      href: 'https://github.com/pablo-pianelo',
      description: 'Explora mis repositorios',
    },
  ];

  return (
    <section id="contact" className="footer">
      <div className="container">
        <div className="header">
          <h2>Hablemos</h2>
          <p>
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre tu idea y cómo puedo ayudarte a hacerla realidad.
          </p>
        </div>

        <div className="contact-methods">
          {contactMethods.map((method, index) => (
            <div
              key={method.label}
              className="contact-method"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-container">
                <div className="icon-background">
                  {method.icon}
                </div>
              </div>
              <h3>{method.label}</h3>
              <p>{method.description}</p>
              <a
                href={method.href}
                target={method.label !== 'Email' ? '_blank' : undefined}
                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
              >
                {method.value}
              </a>
            </div>
          ))}
        </div>

        <div className="footer-button">
          <a
            href="mailto:pablo.pianelo@email.com"
            className="contact-button"
          >
            <Mail className="icon-small" />
            Enviar Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
