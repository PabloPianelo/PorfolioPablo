import MuseoCamisetaGif from '../assets/museo-camisetas.gif';
import FicharGif from '../assets/fichar.gif';
import MedicamentosGif from '../assets/medicamentos.gif';
import MoodayGif from '../assets/Mooday.gif';
import MoodayVideo from '../assets/Mooday.mp4';
import MuseoCamisetaVideo from '../assets/camisetas.mp4';
import FicharVideo from '../assets/fichar.mp4';
import MedicamentosVideo from '../assets/medicamento.mp4';


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
    longDescription:'Mooday es una innovadora aplicación web diseñada para los amantes de la lectura que buscan descubrir libros que se alineen perfectamente con sus gustos y preferencias. Utilizando un algoritmo avanzado, Mooday recomienda libros basados en las elecciones previas del usuario, creando una experiencia personalizada y atractiva. Además, la plataforma fomenta una comunidad activa donde los usuarios pueden compartir sus recomendaciones y opiniones sobre diferentes títulos, enriqueciendo así la experiencia de lectura colectiva. Con una interfaz intuitiva y funcionalidades interactivas, Mooday no solo facilita la búsqueda de nuevos libros, sino que también conecta a lectores con intereses similares, promoviendo el intercambio cultural y literario.',
    curiosity:['Utilización de un algoritmo para recomendar libros basado en tus preferencias','Implementación de un chat en tiempo real','Usar la API de Google Books para obtener información actualizada sobre libros'],
    image: MoodayGif,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.IO', 'Tailwindcss'],
    team:['Pablo Pianelo','Nuria Pérez Uclés','Maria Paula Castro'],
    video:MoodayVideo,
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
    longDescription:'Fichar es una aplicación web  diseñada para optimizar el control de entrada y salida de empleados en una empresa. Esta plataforma permite a los usuarios registrar sus horarios de manera eficiente, facilitando la gestión del tiempo y mejorando la productividad organizacional. Con una interfaz intuitiva, los empleados pueden fichar fácilmente al iniciar y finalizar su jornada laboral, mientras que los administradores tienen acceso a informes detallados sobre la asistencia y puntualidad del personal. Fichar no solo simplifica el proceso de registro de horas, sino que también contribuye a una mejor planificación de recursos humanos y cumplimiento de normativas laborales.',
    curiosity:['Gestión de usuarios y roles en la base de datos','Que se pueda generar un informe de asistencia y  habilitar o deshabilitar usuarios'],
    technologies: ['HTML', 'CSS', 'Java Scritp', 'PHP', 'MySQL'],
    team:['Pablo Pianelo'],
    video:FicharVideo,
    codeUrl: 'https://github.com/PabloPianelo/Fichar',
    demoUrl: 'https://demo.com',
    linkedinURl:'https://www.linkedin.com/feed/update/urn:li:activity:7361335756864319488/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7361335756864319488%29'

  },
  {
    id: 'Farmacia',
    priority: true,
    title: 'FarmaciaApp',
    longDescription:'FarmaciaApp es una aplicación web integral diseñada para optimizar la gestión de medicamentos y pacientes en una farmacia. Esta plataforma permite a los usuarios llevar un control detallado de las recetas de sus pacientes, facilitando la actualización y seguimiento de existencias en tiempo real. Además, FarmaciaApp ofrece funcionalidades para generar un pastillero personalizado para cada paciente, asegurando una administración adecuada de los medicamentos.',
    curiosity:['Importación de medicamentos de un Excel a la web','Generar un pastillero personalizado para cada paciente','Creación de un pastillero en 3D con Three.js'],
    description: 'Es una aplicación de gestión de medicamentos y pacientes.',
    image: MedicamentosGif,
    technologies: ['HTML', 'CSS', 'Java Scritp', 'PHP', 'MySQL','Thee.js'],
    team:['Pablo Pianelo','Konrad Wojcik'],
    video:MedicamentosVideo,
    codeUrl: 'https://github.com/PabloPianelo/ProyectoFinDAW_Farmacia',
    demoUrl: 'https://demo.com',
    linkedinURl:'https://www.linkedin.com/feed/update/urn:li:activity:7358799046624317440/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7358799046624317440%29'

  },{
    id: 'Museo de las camisetas',
    priority: false,
    title: 'Museo de las camisetas',
    longDescription:'Museo de las camisetas es una aplicación de escritorio diseñada para permitir a los usuarios personalizar y visualizar camisetas con imágenes de su elección. La plataforma ofrece una interfaz intuitiva donde los usuarios pueden subir sus propias imágenes y ver cómo se verían impresas en diferentes modelos de camisetas, proporcionando una experiencia interactiva y atractiva. ',
    curiosity:['Subir una imagen y verla en distintos modelos de camiseta','Guardar las camisetas favoritas en una base de datos MySQL'],
    description: 'Es una aplicación de escritorio que permite al usuario subir una imagen y verla impresa en distintos modelos de camiseta.',
    image:MuseoCamisetaGif ,
    technologies: ['WPF', 'XAML', 'C#', '.NET','MySQL'],
    team:['Pablo Pianelo'],
    video:MuseoCamisetaVideo,
    codeUrl: 'https://github.com/PabloPianelo/ProyectoFinDAM_Escaparate_Camisetas',
    demoUrl: 'https://demo.com',
    linkedinURl:'https://www.linkedin.com/feed/update/urn:li:activity:7356262290184142848/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7356262290184142848%29'

  }
];

