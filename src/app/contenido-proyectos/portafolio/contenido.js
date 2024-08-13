import mainUltima from "@/app/contenido-proyectos/portafolio/imagenes/proyecto-ultima.png";
import mainEscritorio from "@/app/contenido-proyectos/portafolio/imagenes/proyecto-primera-grande.png";
import mainMovil from "@/app/contenido-proyectos/portafolio/imagenes/proyecto-primera-peque.png";
import asideEscritorio from "@/app/contenido-proyectos/portafolio/imagenes/problemas-largo.png";
import asideMovil from "@/app/contenido-proyectos/portafolio/imagenes/problemas-corto.png";

export const contenidoDePagina = {
  id: "017",
  hero: {
    about: "Proyecto:",
    title: "Portafolio Blog Personal",
  },
  subHero: {
    titleSuperior: "Introducción:",
    contentSuperior:
      "Mi Proyecto Portafolio es como mi tarjeta de presentación digital, un rincón donde puedo mostrar al mundo mis creaciones y mi viaje en el universo de la programación. Antes de esta página web, habia desarrollado otra con HTML, CSS y JavaScript. Al terminar las enseñanzas de este último bootcamp, he decidido construir una nueva plataforma utilizando React y Next.js. Aquí muestro con orgullo cada proyecto que he creado a lo largo de tres años de constante aprendizaje. Aunque no se recomienda incluir el propio portafolio como un proyecto, ¿Por qué no desafiar un poco las normas y mostrar lo que he logrado?",
    titleInferior: ["Tipo", "Herramientas", "En vivo"],
    contentInferior: {
      colUno: ["Proyeto Portafolio Blog Personal"],
      colDos: [
        "React",
        "Next.js",
        "CSS & HTML",
        "Javascript ES6",
        "Figma",
        "Git & GitHub",
        "Vercel",
      ],

      colTres: ["https://bubulazi.com"],
    },
  },
  main: {
    bloqueUno: {
      title: "Propósito del proyecto",
      content: [
        "El propósito de este proyecto ha tenido como objetivo principal crear un espacio en internet que sea completamente propio y controlado por mi.",
        " Este espacio representa una plataforma donde puedo exhibir mis habilidades y conocimientos en programación, así como expresar mis intereses a través de artículos y escritos.",
        "Mi intención es presentarme de manera formal ante posibles oportunidades de empleo, brindando una visión completa y auténtica de quién soy y de lo que puedo ofrecer. Además de ser un medio para destacar mis capacidades técnicas, también funcionará como un blog personal, permitiéndome compartir mis reflexiones, experiencias y descubrimientos con el mundo.",
      ],
    },
    bloqueDos: {
      title: "Mi papel en el proyecto",
      content: [
        "Utilizando Figma app he creado el diseño y UI.",
        "Con lo aprendido en el Bootcamp de Qualentum y con 'Joy of React' de Joshua Comeau, he podido incorporar algunas ideas clave en la estructura y funcionalidad del sitio.",
        "Estos bootcamps me han proporcionado una buena base para empezar en Next.js y el renderizado del lado del servidor (SSR), lo que ha resultado fundamental para la arquitectura de mi aplicación web. ",
        "A excepción del CSS reset, todas las líneas de código han sido escritas por mí. Leer la documentación me ha ayudado a resolver los problemas por mi cuenta. A pesar de algunos errores de principiante, he logrado que el sitio haya funcionado correctamente y, lo más importante, he adquirido nuevos conocimientos. ",
      ],
    },
    bloqueTres: {
      imgUno: mainEscritorio,
      imgDos: mainMovil,
    },
    bloqueCuatro: {
      title: "Web stack y su explicación",
      content: [
        "Visual Studio Code: Utilizado como el principal entorno de desarrollo para escribir y organizar el código de la aplicación.",

        "Framework Nextjs: Empleado como el marco de trabajo principal para el desarrollo de la aplicación web, proporcionando características como el enrutamiento simplificado y el renderizado del lado del servidor (SSR).",

        "Figma: diseño de UI y UX.",

        "React: Componentes reutilizables, props. Uso de renderizado condicional. Control de formularios con estado a través de value y onChange. useEffect para uso secundario como el tema de los colores. El hook useState para el manejo de estado.",

        "CSS Modules: Utilizados para el encapsulamiento de estilos CSS dentro de componentes individuales, facilitando el mantenimiento y la reutilización del código",

        "Next-mdx-remote: Pendiente de  implementar para el blog como la siguiente versión, la idea es que lea los archivos markdown desde el mismo servidor.",

        "Vercel: Integrado con GitHub para la implementación continua de la aplicación, permitiendo desplegar cambios de manera rápida y sencilla.",

        "Recursos Adicionales: Incorporación de Framer Motion para animaciones dinámicas y React-Icons para la integración de iconos, mejorando la experiencia visual del usuario. ",

        "Git & GitHub: Commits, Branches, Merge, Restore, Push.",
      ],
    },
    bloqueCinco: {
      imgTres: mainUltima,
    },
  },
  aside: {
    bloqueUno: {
      title: "Problemas y soluciones",
      content: [
        "Al intentar configurar la integración continua con Vercel a través de GitHub, me he enfrentado a problemas de compatibilidad entre las versiones de las herramientas utilizadas en mi proyecto y las requeridas por Vercel.",
        "Esto ha resultado errores durante el despliegue y en la necesidad de ajustar mi configuración para que fuera compatible.",
        "Para dar solución a este problema he actualizado las versiones de las herramientas utilizadas en mi proyecto para que fueran compatibles con los requisitos de Vercel.",
        "He ajustado la configuración de GitHub Actions para garantizar una implementación continua sin problemas.",
      ],
    },
    bloqueDos: {
      imgUno: asideEscritorio,
      imgDos: asideMovil,
    },
    bloqueTres: {
      title: "Lecciones aprendidas",
      content: [
        "Durante el desarrollo de este proyecto, he aprendido a manejar la complejidad de CSS modules y las rutas en Nextjs.",
        "Dividir componentes en React me ha facilitado el desarrollo y el mantenimiento del código",
        " La investigación previa y la práctica fueron clave para integrar nuevas tecnologías como Next-mdx-remote y Vercel. ",
        "Estas experiencias me han enseñado la importancia de la perseverancia y la preparación para superar los desafíos técnicos.",
      ],
    },
  },
  infoLink: {
    titulo: "Vamos a trabajar juntos",
    contenido:
      "Si estás buscando a un desarrollador junior con quién te gustaría trabajar o simplemente deseas conectarte o hacer una pregunta, no dudes en escribirme.",
    url: "/#contacto-form",
    linkText: "Contáctame ",
  },
};
