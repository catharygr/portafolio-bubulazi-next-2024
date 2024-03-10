import mainUltima from "@/app/contenido-proyectos/portafolio/imagenes/proyecto-ultima.png";
import mainEscritorio from "@/app/contenido-proyectos/portafolio/imagenes/proyecto-primera-grande.png";
import mainMovil from "@/app/contenido-proyectos/portafolio/imagenes/proyecto-primera-peque.png";
import asideEscritorio from "@/app/contenido-proyectos/portafolio/imagenes/problemas-largo.png";
import asideMovil from "@/app/contenido-proyectos/portafolio/imagenes/problemas-corto.png";

export const contenidoDePagina = {
  id: "016",
  hero: {
    about: "Proyecto:",
    title: "Portafolio Blog Personal",
  },
  subHero: {
    titleSuperior: "Introducción:",
    contentSuperior:
      "Mi Proyecto Portafolio es como mi tarjeta de presentación digital, un rincón donde puedo mostrar al mundo mis creaciones y mi viaje en el universo de la programación. Antes de esta página web, he desarrollado una con sólo HTML, CSS y JavaScript. Al terminar las enseñanzas de este último curso, he decidido construir una nueva plataforma utilizando React y Next.js. Aquí muestro con orgullo cada proyecto que he creado a lo largo de tres años de constante aprendizaje. Aunque no se recomienda incluir el propio portafolio como un proyecto, ¿por qué no desafiar un poco las normas y mostrar lo que he logrado?",
    titleInferior: ["Tipo", "Herramientas", "En vivo"],
    contentInferior: {
      colUno: ["Proyeto Portafolio Blog Personal"],
      colDos: [
        "React",
        "Next.js",
        "CSS & HTML",
        "Javascript ES6",
        "Git & GitHub",
        "Vercel",
      ],

      colTres: ["https://portafolio-bubulazi-next-2024.vercel.app"],
    },
  },
  main: {
    bloqueUno: {
      title: "Propósito del proyecto",
      content: [
        "El propósito de este proyecto ha tenido como objetivo principal crear un espacio en internet que sea completamente propio y controlado por mi.",
        " Este espacio representa una plataforma donde puedo exhibir mis habilidades y conocimientos en programación, así como expresar mis intereses a través de artículos y escritos.",
        "Mi intención es presentarme de manera adecuada ante posibles oportunidades de empleo, brindando una visión completa y auténtica de quién soy y de lo que puedo ofrecer. Además de ser un medio para destacar mis capacidades técnicas, también funcionará como un blog personal, permitiéndome compartir mis reflexiones, experiencias y descubrimientos con el mundo.",
      ],
    },
    bloqueDos: {
      title: "Mi papel en el proyecto",
      content: [
        "Utilizando Figma app he creado el diseño y UI.",
        "Con lo aprendido en el Bootcamp en Qualentum y con 'Joy of React' de Joshua Comeau, he podido incorporar algunas ideas clave en la estructura y funcionalidad del sitio.",
        "Estos curso me han proporcionado una buena base para empezar en NEXT.js y el renderizado del lado del servidor (SSR), lo que resultó fundamental para la arquitectura de mi aplicación web. ",
        "A excepción del CSS reset, todas las líneas de código han sido escritas por mí. Leer la documentación me ha ayudado a resolver los problemas por mi cuenta. A pesar de algunos errores de principiante, logré que el sitio haya funcionado correctamente y, lo más importante, he adquirido nuevos conocimientos. ",
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

        "Framework NEXT.js: Empleado como el marco de trabajo principal para el desarrollo de la aplicación web, proporcionando características como el enrutamiento simplificado y el renderizado del lado del servidor (SSR).",

        "Figma: diseño de UI y UX.",

        "React: Componentes reutilizables, props. Uso de renderizado condicional. Control de formularios con estado a través de value y onChange. useEffect para algunas otras oportunidades. useState, useRef.",

        "Next-mdx-remote: Pendiente de  implementar para el blog como el siguiente paso, la idea es que lea los archivos markdown desde el mismo servidor.",

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
        "Configurar rutas anidadas y relativas me ha resultado confuso al principio, y he tenido que revisar la documentación varias veces y realizar pruebas exhaustivas para asegurarme de que la navegación funcionara correctamente.",
        "Al intentar configurar la integración continua con Vercel a través de GitHub, me he enfrentado a problemas de compatibilidad entre las versiones de las herramientas utilizadas en mi proyecto y las requeridas por Vercel. Esto ha resultado errores durante el despliegue y en la necesidad de ajustar mi configuración para que fuera compatible.",
      ],
    },
    bloqueDos: {
      imgUno: asideEscritorio,
      imgDos: asideMovil,
    },
    bloqueTres: {
      title: "Lecciones aprendidas",
      content: [
        "Trabajar en equipo ha sido una gran enseñanza, es de mucha ventaja porque se reparte el trabajo y todo fluye de una manera organizada.",
        "Nos ha dado tiempo de refactorar y mejorar el código de una manera muy práctica. Revisando cada detalle en CSS, HTML semántico y la accecibilidad para los lectores de pantalla.",
        "El proyecto se programó para terminar en un mes y con el empeño que pusimos lo hemos terminado en 3 semanas, no es perfecto pero funciona bien y he apredido mucho a buscar y encontrar soluciones. ",
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
