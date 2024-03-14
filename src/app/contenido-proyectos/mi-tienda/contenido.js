import mainUltima from "@/app/contenido-proyectos/mi-tienda/imagenes/proyecto-ultima.png";
import mainEscritorio from "@/app/contenido-proyectos/mi-tienda/imagenes/proyecto-primera-grande.png";
import mainMovil from "@/app/contenido-proyectos/mi-tienda/imagenes/proyecto-primera-peque.png";
import asideEscritorio from "@/app/contenido-proyectos/mi-tienda/imagenes/problemas-largo.png";
import asideMovil from "@/app/contenido-proyectos/mi-tienda/imagenes/problemas-corto.png";

export const contenidoDePagina = {
  id: "016",
  hero: {
    about: "Proyecto:",
    title: "E-commerce Mi Tienda",
  },
  subHero: {
    titleSuperior: "Introducción:",
    contentSuperior:
      "¡Bienvenido a E-commerce: Mi tienda! Con formularios controlados, enrutamientos, carrito de compra y otras funcionalidades. Esta página web ofrece una experiencia de compra ficticia. Inspirado y orientado por la experiencia del profesor del curso. Hemos diseñado esta página para brindar una simulación de compra en línea. ",
    titleInferior: ["Tipo", "Herramientas", "En vivo"],
    contentInferior: {
      colUno: ["Web App E-commerce Mi Tienda"],
      colDos: [
        "React",
        "React Router",
        "Redux, Redux Toolkit",
        "CSS & HTML",
        "Javascript ES6",
        "Axios",
        "Git & GitHub",
        "Firebase",
        "Vercel",
      ],

      colTres: ["https://portafolio-bubulazi-next-2024.vercel.app"],
    },
  },
  main: {
    bloqueUno: {
      title: "Propósito del proyecto",
      content: [
        "El propósito de este proyecto E-commerce ha sido combinar la dirección del profesor del curso con mi habilidad para implementar sus enseñanzas en un entorno práctico. Desde la concepción hasta la realización, he trabajado orientada para incorporar los elementos esenciales de la app.",
        " Este proyecto no solo buscaba cumplir con los requisitos del bootcamp, sino también fomentar la participación activa de todos los alumnos. Después de seguir las directrices del profesor, mediantes las tutorias impartidas, se hablaba y discutia todo lo desarrollado.  Permitiendo que cada estudiante aportara sus ideas y perspectivas.",
        "A través de este proceso colaborativo, buscamos no solo mejorar nuestras habilidades individuales, sino también enriquecer nuestra comprensión colectiva.",
      ],
    },
    bloqueDos: {
      title: "Mi papel en el proyecto",
      content: [
        "Como alumna en este proyecto E-commerce, mi papel ha sido fundamentalmente el de aprender y aplicar los conocimientos adquirido..",
        "A lo largo del sprint, mi enfoque ha sido seguir las pautas establecidas, mientras exploraba  cómo implementarlas en la práctica. En cada etapa del desarrollo, he buscado la orientación del profesor para comprender mejor los conceptos y abordar los desafíos que han surgido. ",
        "Gracias a todo lo que he aprendido, he logrado encontrar las respuestas correctas y superar los desafíos planteados, llegando así a soluciones con las cuales he desarrollado habilidades para comprender los principios fundamentales de la aplicación. Estos conocimientos no solo me han permitido alcanzar los objetivos del proyecto, sino también consolidarlos.",
      ],
    },
    bloqueTres: {
      imgUno: mainEscritorio,
      imgDos: mainMovil,
    },
    bloqueCuatro: {
      title: "Web stack y su explicación",
      content: [
        "React: He utilizado componentes, props, renderizado condicional. useEffect para uso secundario como el tema de los colores. useState y useReducer para el manejo de estado. ",

        "Custom Hooks: Para extraer lógica compleja y reutilizable en la app. Esto me ha permitido mantener el código limpio y modular.",

        "React Router: Con la función createBrowserRouter me ha permitido definir rutas y enlaces entre diferentes páginas de manera fácil y eficiente.",

        "Axios: Para realizar solicitudes HTTP a nuestro servidor y generar un CRUD para interactuar con los datos de nuestra aplicación.",

        "Redux y Redux Toolkit: He modificado nuestra app para pasarla totalmente la gestión del estado a Redux y Redux Toolkit. Utilizando métodos como createAsyncThunk y createSlice para definir acciones asíncronas y slices de estado respectivamente, simplificando la gestión del estado global de nuestra aplicación.",

        "React Hook Form: He imprementado validaciones y proporcionado feedback sobre posibles errores, como datos incorrectos en los formularios de registro e inicio de sesión.",

        "He utilizado Axios para crear un CRUD y JSON Server como servidor de desarrollo. Luego he  pasado los datos a Firebase y he compilado la app en Netlify.",

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
        "Conforme la aplicación fue ganando complejidad, el cambio del contexto de React a Redux planteó desafíos importantes.",
        "La transición requería una comprensión profunda de las diferencias en la estructura y la lógica de ambas herramientas, lo que generaba complejidad en el proceso de traslado.",
        "Esta estrategia me permitió gestionar la complejidad del cambio, minimizando el impacto en la funcionalidad existente de la aplicación y facilitando la adopción progresiva de Redux en todo el proyecto.",
      ],
    },
    bloqueDos: {
      imgUno: asideEscritorio,
      imgDos: asideMovil,
    },
    bloqueTres: {
      title: "Lecciones aprendidas",
      content: [
        "Durante el desarrollo de la aplicación, he aprendido valiosas lecciones que han enriquecido mi experiencia en el desarrollo de software. La transición de React a Redux me ha enseñado la importancia de una planificación cuidadosa y una migración gradual.",
        "Para la adaptabilidad a diferentes dispositivos, he utilizado técnicas como CSS media queries. ",
        "Estas lecciones han fortalecido mis habilidades técnicas y mi capacidad para trabajar en equipo, preparándome para enfrentar futuros desafíos en el desarrollo de software.",
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
