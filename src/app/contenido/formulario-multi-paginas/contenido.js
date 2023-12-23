import paginaCorta from "@/app/contenido/formulario-multi-paginas/imagenes/pagina-corta.png";
import paginaLarga from "@/app/contenido/formulario-multi-paginas/imagenes/pagina-larga.png";
import paginaPrimeraMovil from "@/app/contenido/formulario-multi-paginas/imagenes/pagina-primera-movil.png";
import paginaLargaAbajo from "@/app/contenido/formulario-multi-paginas/imagenes/pagina-larga-abajo.png";
import paginaMovilAbajo from "@/app/contenido/formulario-multi-paginas/imagenes/pagina-movil-abajo.png";

export const contenidoDePagina = {
  id: "015",
  hero: {
    about: "Proyecto:",
    title: "Formulario Web de Multi-Páginas",
  },
  subHero: {
    titleSuperior: "Introducción:",
    contentSuperior:
      "Esta aplicación sirve como un proyecto de ejercicio con el propósito de construir un formulario de varias páginas con autenticación en Firebase, almacenamiento y la integración de una base de datos como infraestructura backend. Básicamente, simula el proceso de solicitud para una oferta de trabajo.",
    titleInferior: ["Tipo", "Herramientas", "En vivo"],
    contentInferior: {
      colUno: ["Web App", "Diseño responsive"],
      colDos: [
        "CSS & HTML",
        "Javascript ES6",
        "React",
        "Firebase",
        "Git & GitHub",
        "Netlifly",
      ],

      colTres: ["https://multipage-form-caty.netlify.app/"],
    },
  },
  main: {
    bloqueUno: {
      title: "Propósito del proyecto",
      content: [
        "El proyecto Formulario de Ofertas de Trabajo Ficticia para Meteorólogos tiene como objetivo simular un flujo de trabajo realista para la creación de ofertas de trabajo dirigidas a meteorólogos. Esta aplicación se construyó utilizando Vite y React, junto con Firebase Authentication, Realtime Database y Storage, para brindar una experiencia completa y segura.",
        "El formulario se divide en pasos para una entrada de datos estructurada y una mejor experiencia de usuario.Emplea Firebase Authentication para permitir el acceso solo a usuarios autenticados, lo que brinda seguridad y privacidad.",
        "Los datos del formulario se almacenan en Firebase Realtime Database en tiempo real, facilitando el acceso y la gestión de la información.",
        "Permite a los usuarios cargar archivos relevantes junto con la oferta de trabajo, como detalles adicionales o formularios de solicitud. Utiliza componentes reutilizables de React para mantener un código limpio y organizado.",
      ],
    },
    bloqueDos: {
      title: "Mi papel en el proyecto",
      content: [
        "En el proyecto trabajamos dos.",
        "Este proyecto me proporcionó una valiosa experiencia en el desarrollo frontend utilizando tecnologías modernas como Vite y React. Además, aprendí a integrar Firebase para autenticación y almacenamiento de datos, lo que mejora la interacción en tiempo real y la seguridad del usuario.",
        "La creación de formularios con pasos progresivos también mejoró mi comprensión de la arquitectura de la interfaz de usuario.Participé activamente en este proyecto como aprendiz y asistente de desarrollo.",
        "Mi contribución incluyó la implementación de componentes de React, la configuración de Firebase, la realización de pruebas y la solución de desafíos técnicos bajo la guía del desarrollador principal.",
      ],
    },
    bloqueTres: {
      imgUno: paginaCorta,
      imgDos: paginaLarga,
    },
    bloqueCuatro: {
      title: "Web stack y su explicación",
      content: [
        "Vite: Entorno de desarrollo rápido para aplicaciones web.",

        "React: Biblioteca de JavaScript para construir interfaces de usuario.",

        "Firebase Authentication: Ofrece autenticación segura y gestión de usuarios.",

        "Firebase Realtime Database: Almacena datos en tiempo real para el formulario.",

        "Firebase Storage: Permite la carga y descarga de archivos relacionados con ofertas.",

        "React-feather: Una librería que proporciona una colección de iconos SVG. Esta librería se utiliza para mejorar la estética de la aplicación y facilitar la inclusión de iconos en diferentes partes de la interfaz de usuario.",

        "Git y GitHub: Uso continuo de git con varias ramas main/desarrollo y con pull request via GitHub.",

        "Netlify: Conexión y deploy vía GitHub. ",
      ],
    },
    bloqueCinco: {
      imgTres: paginaPrimeraMovil,
    },
  },
  aside: {
    bloqueUno: {
      title: "Problemas y soluciones",
      content: [
        "Diseñar un formulario de múltiples pasos para una entrada de datos organizada. La solución fue crear componentes separados para cada paso y administrar el flujo utilizando el estado de React.",
        "Manejar la lógica y el estado del formulario en múltiples pasos. La solución fue utilizar hooks de React como useState y useEffect para mantener un estado coherente en todo el proceso.",
        "Este proyecto es un testimonio de nuestra habilidad para desarrollar aplicaciones frontend completas y funcionales, utilizando tecnologías actuales y resolviendo desafíos para brindar soluciones efectivas y eficientes.",
      ],
    },
    bloqueDos: {
      imgUno: paginaLargaAbajo,
      imgDos: paginaMovilAbajo,
    },
    bloqueTres: {
      title: "Lecciones aprendidas",
      content: [
        "En el proyecto trabajamos dos.",
        "Aprendí cómo integrar correctamente Firebase en la aplicación bajo la dirección del desarrollador principal, superando obstáculos de configuración y seguridad.",
        "Contribuí a la creación de componentes reutilizables de React para construir el formulario de múltiples pasos de manera efectiva.",
        "Reforzamiento de conocimientos en el uso de los hooks más comunes de React para gestionar el estado y la lógica de la aplicación",
      ],
    },
  },
};
