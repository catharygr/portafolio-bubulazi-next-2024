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
      "¡Bienvenido a E-commerce: Mi tienda! Este proyecto, lo he desarrollado con el framework Open Cells de BBVA, utilizando la librería LitElement y Material Design para crear una experiencia de usuario fluida y atractiva, tanto en ordenadores como en dispositivos móviles. Entre las principales características se incluyen una búsqueda integrada, un menú tipo hamburguesa para móviles, gestión de favoritos, un carrito de compras, soporte para temas de color personalizados y la opción de traducir el contenido del español al inglés. Como backend, he utilizado Firebase para datos y autenticación, y he desplegado la aplicación en Netlify para su acceso en vivo.",
    titleInferior: ["Tipo", "Herramientas", "En vivo"],
    contentInferior: {
      colUno: ["Web App", "Comercio electrónico"],
      colDos: [
        "Open Cells",
        "LitElement",
        "Material Design",
        "CSS & HTML",
        "Javascript ES6",
        "Firebase",
        "Git & GitHub",
        "Netlify",
      ],

      colTres: ["https://opencells-ecommerce-lit-caty.netlify.app"],
    },
  },
  main: {
    bloqueUno: {
      title: "Propósito del proyecto",
      content: [
        "He desarrollado este proyecto porque he tenido una oferta de trabajo que principalmente solicitaba conocimientos de Open Cells de BBVA y LitElement.",
        "He intentado desarrollar una buena experiencia de usuario mediante una interfaz intuitiva y responsiva, que se adapte tanto a dispositivos de escritorio como móviles. He incluido la navegación, búsqueda de productos y gestión de los mismos para el usuario admin.",
      ],
    },
    bloqueDos: {
      title: "Mi papel en el proyecto",
      content: [
        "Investigar y aprender sobre la tecnologías como Open Cells, LitElement y Web Components en general.",
        "Diseñar y desarrollar una aplicación utilizando Material Design y CSS personalizado.",
        "Documentar el proceso de aprendizaje y desarrollo.",
        "Resolver problemas y depurar errores durante el desarrollo.",
      ],
    },
    bloqueTres: {
      imgUno: mainEscritorio,
      imgDos: mainMovil,
    },
    bloqueCuatro: {
      title: "Web stack y su explicación",
      content: [
        "Open Cells: Es un framework de desarrollo de aplicaciones web de código abierto desarrollado por BBVA. Utiliza canales de comunicación basados en la librería RxJS, y LitElement para las páginas web. Tiene su propio router y i18n para la internacionalización.",

        "LitElement: Es una librería de desarrollo de aplicaciones web basada en Web Components. Permite crear componentes web reutilizables y personalizables con un enfoque en la simplicidad y el rendimiento.",

        "Material Design: Es un sistema de diseño desarrollado por Google que se centra en la creación de interfaces de usuario. Proporciona una serie de directrices y componentes para facilitar el diseño y desarrollo de aplicaciones web y móviles.",

        "JSON Server & Firebase: Se ha utilizado como servidor durante desarrollo. Luego he pasado los datos y la autenticación a Firebase y he publicado la app en Netlify.",

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
        "Uno de los principales desafíos que he enfrentado durante el desarrollo de la aplicación ha sido la implementación de la funcionalidad de cambio de idioma. He utilizado el paquete @open-cells/localize para gestionar la localización y traducción de la aplicación del castellano al inglés. Inicialmente, he tenido problemas con la carga dinámica de los archivos de traducción y la sincronización de los textos traducidos en los componentes. Para resolver esto, he investigado la documentación del paquete y he realiazado varias pruebas para asegurarme de que los textos se cargaran correctamente en ambos idiomas.",
      ],
    },
    bloqueDos: {
      imgUno: asideEscritorio,
      imgDos: asideMovil,
    },
    bloqueTres: {
      title: "Lecciones aprendidas",
      content: [
        "Durante el desarrollo de este proyecto, he aprendido mucho sobre el framework Open Cells, así como sobre el desarrollo de aplicaciones web con las librerías LitElement y Material Design.",
        " También he aprendido nuevas cosas en la implementación de funcionalidades clave para aplicaciones de comercio electrónico como la gestión de productos, el carrito de compras y la traducción de contenido.",
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
