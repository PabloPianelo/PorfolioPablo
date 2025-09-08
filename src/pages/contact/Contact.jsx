import { Mail, Linkedin, Github } from 'lucide-react';
import './Contact.css';
import { toast, Toaster } from 'sonner';
const Contact = () => {

   const handleCopyEmail = async (email) => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success('Correo electrónico copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar el texto: ', err);
      toast.error('No se pudo copiar el correo electrónico');
    }
  };
  const contactMethods = [
    {
      icon: <Mail className="icon" />,
      label: 'Email',
       href: '#contact',
      value: 'pablopianeloxd@gmail.com',
      description: 'Contactame por correo directo',
    },
    {
      icon: <Linkedin className="icon" />,
      label: 'LinkedIn',
      value: 'Pablo Pianelo',
      href: 'https://www.linkedin.com/in/pablopianeloalonso/',
      description: 'Conectemos profesionalmente',
    },
    {
      icon: <Github className="icon" />,
      label: 'GitHub',
      value: 'pablo-pianelo',
      href: 'https://github.com/PabloPianelo',
      description: 'Explora mis repositorios',
    },
  ];

  return (
    <section id="contact" className="footer">
      <div className="container">
        <div className="header">
          <h2>Hablemos</h2>
          <p>
            ¿Estas buscando un desarrollador de software con pasión? ¡No dudes en contactarme!
          </p>
        </div>

          <Toaster  position="bottom-right" richColors/>
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
               onClick={method.label === 'Email' ? () => handleCopyEmail(method.value) : null}
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
