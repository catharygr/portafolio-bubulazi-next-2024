import mainUltima from "@/app/contenido-proyectos/mi-tienda/imagenes/proyecto-ultima.png";
import mainEscritorio from "@/app/contenido-proyectos/mi-tienda/imagenes/proyecto-primera-grande.png";
import mainMovil from "@/app/contenido-proyectos/mi-tienda/imagenes/proyecto-primera-peque.png";
import asideEscritorio from "@/app/contenido-proyectos/mi-tienda/imagenes/problemas-largo.png";
import asideMovil from "@/app/contenido-proyectos/mi-tienda/imagenes/problemas-corto.png";

export const contenidoDePagina = {
  id: "017",
  hero: {
    about: "Proyecto:",
    title: "E-commerce Mi Tienda",
  },
  subHero: {
    titleSuperior: "Introducción:",
    contentSuperior:
      "¡Bienvenido a nuestro E-commerce: Mi tienda. Con formularios controlados, un carrito de compra intuitivo y un amplio listado de productos, esta plataforma ofrece una experiencia de compra ficticia pero satisfactoria. Inspirados y orientado por la experiencia del profesor del curso, hemos diseñado esta página para brindar una simulación de compra en línea sin complicaciones. ¡Puedes explorar de nuestra selección y disfruta de esta experiencia virtual!",
    titleInferior: ["Tipo", "Herramientas", "En vivo"],
    contentInferior: {
      colUno: ["Proyeto E-commerce Mi Tienda"],
      colDos: [
        "React",
        "Next.js",
        "Resux, Redux Toolkit",
        "CSS & HTML",
        "Javascript ES6",
        "Axios",
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
        "El propósito de este proyecto E-commerce ha sido combinar la dirección del profesor del curso con mi habilidad para implementar sus enseñanzas en un entorno práctico. Desde la concepción hasta la realización, he trabajado en estrecha colaboración con el profesor para incorporar los elementos esenciales de la app, como formularios controlados, un carrito de compra intuitivo y un listado de productos detallado.",
        " Este proyecto no solo buscaba cumplir con los requisitos del curso, sino también fomentar la participación activa de todos los alumnos. Después de seguir las directrices del profesor, mediantes las tutoria impartida se hablaba y discutia todo lo desarrollado.  Permitiendo que cada estudiante aportara sus ideas y perspectivas únicas.",
        "A través de este proceso colaborativo, buscamos no solo mejorar nuestras habilidades individuales, sino también enriquecer nuestra comprensión colectiva.",
      ],
    },
    bloqueDos: {
      title: "Mi papel en el proyecto",
      content: [
        "Utilizando Figma app he creado el diseño y UI.",
        "Con lo aprendido en el Bootcamp en Qualentum y con 'Joy of React' de Joshua Comeau, he podido incorporar algunas ideas clave en la estructura y funcionalidad del sitio.",
        "Estos curso me han proporcionado una buena base para empezar en Next.js y el renderizado del lado del servidor (SSR), lo que ha resultado fundamental para la arquitectura de mi aplicación web. ",
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

        "Framework Nextjs: Empleado como el marco de trabajo principal para el desarrollo de la aplicación web, proporcionando características como el enrutamiento simplificado y el renderizado del lado del servidor (SSR).",

        "Figma: diseño de UI y UX.",

        "React: Componentes reutilizables, props. Uso de renderizado condicional. Control de formularios con estado a través de value y onChange. useEffect para uso secundario como el tema de los colores. useState, useRef.",

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
        "Al intentar configurar la integración continua con Vercel a través de GitHub, me he enfrentado a problemas de compatibilidad entre las versiones de las herramientas utilizadas en mi proyecto y las requeridas por Vercel. Esto ha resultado errores durante el despliegue y en la necesidad de ajustar mi configuración para que fuera compatible.",
        "Para dar solución a este problema he actualizado las versiones de las herramientas utilizadas en mi proyecto para que fueran compatibles con los requisitos de Vercel. También he ajustado mi configuración de GitHub Actions para garantizar una implementación continua sin problemas.",
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
