import mainUltima from "@/app/contenido-proyectos/mi-tienda/imagenes/proyecto-ultima.png";
import mainEscritorio from "@/app/contenido-proyectos/mi-tienda/imagenes/proyecto-primera-grande.png";
import mainMovil from "@/app/contenido-proyectos/mi-tienda/imagenes/proyecto-primera-peque.png";
import asideEscritorio from "@/app/contenido-proyectos/mi-tienda/imagenes/problemas-largo.png";
import asideMovil from "@/app/contenido-proyectos/mi-tienda/imagenes/problemas-corto.png";

export const contenidoDePagina = {
  id: "016",
  hero: {
    about: "Proyecto:",
    title: "E-commerce: Mi Tienda",
  },
  subHero: {
    titleSuperior: "Introducción:",
    contentSuperior:
      "¡Bienvenido a E-commerce: Mi tienda! Con formularios controlados, enrutamientos, carrito de compra y otras funcionalidades. Esta página web ofrece una experiencia de compra ficticia. Inspirado y orientado por la experiencia del profesor del bootcamp. Hemos diseñado esta página para brindar una simulación de compra en línea. ",
    titleInferior: ["Tipo", "Herramientas", "En vivo"],
    contentInferior: {
      colUno: ["Web App", "Comercio electrónico"],
      colDos: [
        "React",
        "React Router",
        "Redux, Redux Toolkit",
        "CSS & HTML",
        "Javascript ES6",
        "Axios",
        "Git & GitHub",
        "Firebase",
        "Netlify",
      ],

      colTres: ["https://qualentum-ecommerce-catary.netlify.app"],
    },
  },
  main: {
    bloqueUno: {
      title: "Propósito del proyecto",
      content: [
        "El propósito de este proyecto E-commerce ha sido combinar la dirección del profesor con mi habilidad para implementar sus enseñanzas en un entorno práctico. Desde la idea inicial hasta la implementación final, he estado enfocada en integrar los elementos esenciales de la app.",
        " Este proyecto no solo buscaba cumplir con los requisitos del bootcamp, sino también fomentar la participación activa de todos los estudiantes. Después de seguir las directrices del profesor, mediantes las tutorias impartidas, se hablaba y discutia todo lo desarrollado.  Permitiendo que cada estudiante aportara sus ideas y perspectivas.",
        "A través de este proceso colaborativo, buscamos no solo mejorar nuestras habilidades individuales, sino también enriquecer nuestra comprensión colectiva.",
      ],
    },
    bloqueDos: {
      title: "Mi papel en el proyecto",
      content: [
        "Como alumna en este proyecto E-commerce, mi papel ha sido fundamentalmente el de aprender y aplicar los conocimientos adquirido.",
        "A lo largo del sprint, mi enfoque ha sido seguir las pautas establecidas, mientras exploraba cómo implementarlas en la práctica. En cada etapa del desarrollo, he buscado la orientación del profesor para comprender mejor los conceptos y abordar los desafíos que han surgido. ",
        "Gracias a todo lo que he aprendido, he podido encontrar las soluciones adecuadas y superar los desafíos planteados. Estos conocimientos no solo me han permitido alcanzar los objetivos del proyecto, sino también consolidarlos.",
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

        "React Router: Con la función createBrowserRouter me ha permitido definir rutas y enlaces entre diferentes páginas.",

        "Axios: Para realizar solicitudes HTTP a nuestro servidor y generar un CRUD para interactuar con los datos de nuestra aplicación.",

        "Redux y Redux Toolkit: He modificado nuestra app para pasar la gestión del estado a Redux y Redux Toolkit. He utilizado métodos como createAsyncThunk y createSlice para definir acciones asíncronas y slices de estado respectivamente, simplificando la gestión del estado global de nuestra aplicación.",

        "React Hook Form: He imprementado validaciones y proporcionado feedback sobre posibles errores, como datos incorrectos en los formularios de edición de productos e inicio de sesión.",

        "JSON Server & Firebase: Se ha utilizado como servidor durante desarrollo. Luego he pasado los datos a Firebase y he compilado la app en Netlify.",

        "Git & GitHub: Commits, Branches, Merge, Restore, Push. También conexión con Netlify para despliegue continuo.",
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
        "A medida que la aplicación se iba volviendo más complicada, cambiar de React a Redux supuso enfrentarse a un gran reto.",
        "Hacer la transición requería entender bien las diferencias entre la estructura y la lógica de ambas herramientas, lo que hacía que el proceso fuera bastante complicado",
        "Esta estrategia me ha ayudado a lidiar con lo detallado que ha sido el cambio, sin afectar mucho cómo funcionaba la aplicación ya establecida. También hizo que fuera más fácil ir integrando Redux gradualmente en todo el proyecto",
      ],
    },
    bloqueDos: {
      imgUno: asideEscritorio,
      imgDos: asideMovil,
    },
    bloqueTres: {
      title: "Lecciones aprendidas",
      content: [
        "Durante el tiempo que estuve trabajando en la app, he aprendido muchas cosas que me serviran en el futuro en el desarrollo de software. El cambio de React a Redux me ha dejado claro lo esencial que es planificar con cuidado y hacer la transición de forma gradual.",
        "Todo este aprendizaje ha hecho que mis habilidades técnicas se fortalezcan, que mejore mi capacidad para trabajar en equipo, y me sienta más preparada para enfrentar los retos que se presenten a partir de ahora en adelante.",
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
