import proyectoRecordatorio from "@/app/contenido/recordatorios/imagenes/proyecto-recordatorio.jpeg";
import recordatorioAbajo from "@/app/contenido/recordatorios/imagenes/recordatorio-abajo.jpeg";
import recordatorioGrande from "@/app/contenido/recordatorios/imagenes/recordatorio-grande.jpg";
import recordatorioMovilAbajo from "@/app/contenido/recordatorios/imagenes/recordatorio-movil-abajo.png";
import recordatorioPeque from "@/app/contenido/recordatorios/imagenes/recordatorio-peque.jpg";

export const contenidoDePagina = {
  id: "015",
  hero: {
    about: "Proyecto:",
    title: "App Recordatorio para móvil",
  },
  subHero: {
    titleSuperior: "Introducción:",
    contentSuperior:
      'Esta es una aplicación de recordatorio para móvil construida con React, React Router y Vite. Utiliza Firebase Auth para la autenticación de usuarios y Firebase Realtime Database para almacenar los recordatorios y Storage. Además, se emplean varios hooks populares de React, como useState, useEffect, useId, useRef, useContext y useParams. La librería "react-feather" se usa para integrar iconos en la aplicación. Multiusuario.',
    titleInferior: ["Tipo", "Herramientas", "En vivo"],
    contentInferior: {
      colUno: ["Web App optimizada para móviles"],
      colDos: [
        "CSS & HTML",
        "Javascript ES6",
        "React",
        "React Router",
        "Firebase",
        "Git & GitHub",
        "Netlifly",
      ],

      colTres: ["https://recordatorios-react-cathy.netlify.app"],
    },
  },
  main: {
    bloqueUno: {
      title: "Propósito del proyecto",
      content: [
        "Permitir a los usuarios organizar y administrar sus tareas diarias, eventos y recordatorios en un solo lugar, lo que les ayuda a mejorar su productividad y eficiencia.Proporcionar una forma sencilla de establecer recordatorios con opciones personalizables para fechas, horas y frecuencia de repetición, permitiendo a los usuarios adaptar los recordatorios a sus necesidades específicas.",
        "Ofrecer una interfaz de usuario amigable e intuitiva que facilite la creación, edición y eliminación de recordatorios sin complicaciones.Ofrecer opciones de personalización para los usuarios, como elegir temas, colores o tipos de recordatorios, para que se sientan cómodos usando la aplicación de acuerdo con sus preferencias.",
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
  infoLink: {
    titulo: "Vamos a trabajar juntos",
    contenido:
      "Si estás buscando a un desarrollador junior con quién te gustaría trabajar o simplemente deseas conectarte o hacer una pregunta, no dudes en escribirme.",
    url: "/#contacto-form",
    linkText: "Contáctame ",
  },
};
