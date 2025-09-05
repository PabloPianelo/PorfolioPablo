import MuseoCamisetaGif from '../assets/museo-camisetas.gif';
import FicharGif from '../assets/fichar.gif';
import MedicamentosGif from '../assets/medicamentos.gif';
import MoodayGif from '../assets/Mooday.gif';


export const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', icon: 'https://cdn.svglogos.dev/logos/html-5.svg' },
      { name: 'CSS', icon: 'https://cdn.svglogos.dev/logos/css-3.svg' },
      { name: 'JavaScript', icon: 'https://cdn.svglogos.dev/logos/javascript.svg' },
      { name: 'React', icon: 'https://cdn.svglogos.dev/logos/react.svg' },
      { name: 'Java', icon: 'https://cdn.svglogos.dev/logos/java.svg' },
      { name: 'Tailwindcss', icon: 'https://cdn.svglogos.dev/logos/tailwindcss-icon.svg' },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.svglogos.dev/logos/nodejs-icon.svg' },
      { name: 'Express', icon: 'https://cdn.svglogos.dev/logos/express.svg' },
      { name: 'PHP', icon: 'https://cdn.svglogos.dev/logos/php.svg' },
      { name: 'C#', icon: 'https://cdn.svglogos.dev/logos/c-sharp.svg' },

      
    ]
  },
  {
    category: 'Base de Datos',
    skills: [
      { name: 'MongoDB', icon: 'https://cdn.svglogos.dev/logos/mongodb-icon.svg' },
      { name: 'MySQL', icon: 'https://cdn.svglogos.dev/logos/mysql.svg' }
    ]
  },
  {
    category: 'Herramientas',
    skills: [
      { name: 'Git', icon: 'https://cdn.svglogos.dev/logos/git.svg' },
      { name: 'GitHub', icon: 'https://cdn.svglogos.dev/logos/github-icon.svg' },
      { name: 'Postman', icon: 'https://cdn.svglogos.dev/logos/postman-icon.svg' },
      { name: 'Socket.IO', icon: 'https://cdn.svglogos.dev/logos/socket.io.svg' },
      { name: 'VS Code', icon: 'https://cdn.svglogos.dev/logos/visual-studio-code.svg' },
      { name: 'VS', icon: 'https://cdn.svglogos.dev/logos/visual-studio.svg' }

      
    ]
  }
];



export const educationData= [
  {
    id: 'master-nuclio',
    title: 'Máster en Full Stack Development',
    institution: 'Nuclio Digital School',
    period: '2025',
    description: 'Formación avanzada en desarrollo web full-stack con enfoque en tecnologías modernas y metodologías ágiles.',
    technologies: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'Soket.IO']
  },
  {
    id: 'daw-joseplanes',
    title: 'Grado Superior Desarrollo de Aplicaciones Web',
    institution: 'IES José Planes (Murcia)',
    period: '2023',
    description: 'Formación especializada en desarrollo web con énfasis en frontend y backend, bases de datos y arquitectura web.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
  },
  {
    id: 'dam-alfonso',
    title: 'Grado Superior Desarrollo de Aplicaciones Multiplataforma',
    institution: 'IES Alfonso X El Sabio (Murcia)',
    period: '2022',
    description: 'Fundamentos del desarrollo de software multiplataforma con programación orientada a objetos y gestión de bases de datos.',
    technologies: ['Java', 'MySQL', 'Android', 'PHP']
  }
];

export const experienceData = [
  {
    id: 'imas-2024',
    title: 'Programador Web',
    institution: 'IMAS (Instituto Murciano de Acción Social)',
    period: '2024',
    description: 'Desarrollo de proyectos web internos utilizando tecnologías web clásicas y bases de datos relacionales.',
    technologies: ['PHP', 'HTML', 'CSS', 'MySQL']
  },
  {
    id: 'minderest-2023',
    title: 'Desarrollador de Software',
    institution: 'Minderest',
    period: '2023',
    description: 'Investigación y desarrollo de proyectos de web scraping y gestión de versiones en repositorios colaborativos.',
    technologies: ['Java', 'Git', 'GitHub', 'Web Scraping']
  }
];

export const projectsData= [
  {
    id: 'Mooday',
    priority: true,
    title: 'Mooday',
    description: 'Mooday es una aplicación en la que podrás encontrar tu libro ideal según tus preferencias y compartir tus recomendaciones con otros usuarios.',
    image: MoodayGif,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.IO', 'Tailwindcss'],
    team:['Pablo Pianelo','Nuria Pérez Uclés','Maria Paula Castro'],
    video:'',
    codeUrl: 'https://github.com/PabloPianelo/TFM-backend-amarillo',
    codeUrl2: 'https://github.com/PabloPianelo/TFM-frontend-amarillo',
    demoUrl: 'https://demo.com',
    linkedinURl:'https://www.linkedin.com/feed/update/urn:li:activity:7353719106916827136/'
  },
  {
    id: 'Fichar',
    priority: true,
    title: 'FicharApp',
    description: 'Es una aplicación web enfocada en el control de entrada y salida de usuarios asociados a una empresa.',
    image: FicharGif,
    technologies: ['HTML', 'CSS', 'Java Scritp', 'PHP', 'MySQL'],
    team:['Pablo Pianelo'],
    video:'',
    codeUrl: 'https://github.com/PabloPianelo/Fichar',
    demoUrl: 'https://demo.com',
    linkedinURl:'https://www.linkedin.com/feed/update/urn:li:activity:7361335756864319488/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7361335756864319488%29'

  },
  {
    id: 'Farmacia',
    priority: true,
    title: 'FarmaciaApp',
    description: 'Es una aplicación de gestión de medicamentos y pacientes.',
    image: MedicamentosGif,
    technologies: ['HTML', 'CSS', 'Java Scritp', 'PHP', 'MySQL','Thee.js'],
    team:['Pablo Pianelo'],
    video:'',
    codeUrl: 'https://github.com/PabloPianelo/ProyectoFinDAW_Farmacia',
    demoUrl: 'https://demo.com',
    linkedinURl:'https://www.linkedin.com/feed/update/urn:li:activity:7358799046624317440/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7358799046624317440%29'

  },{
    id: 'Museo de las camisetas',
    priority: false,
    title: 'Museo de las camisetas',
    description: 'Es una aplicación de escritorio que permite al usuario subir una imagen y verla impresa en distintos modelos de camiseta.',
    image:MuseoCamisetaGif ,
    technologies: ['WPF', 'XAML', 'C#', '.NET','MySQL'],
    team:['Pablo Pianelo'],
    video:'',
    codeUrl: 'https://github.com/PabloPianelo/ProyectoFinDAM_Escaparate_Camisetas',
    demoUrl: 'https://demo.com',
    linkedinURl:'https://www.linkedin.com/feed/update/urn:li:activity:7356262290184142848/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7356262290184142848%29'

  }
];

