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
      "¡Bienvenido a E-commerce: Mi tienda desarrollado con el framework Open Cells de BBVA, utilizando la librería LitElement y Material Design. Este proyecto está diseñado para ofrecer una experiencia de usuario fluida y atractiva tanto en dispositivos de escritorio como móviles. Entre sus funcionalidades destacan la navegación mejorada, búsqueda integrada, menú de hamburguesa para móviles, gestión de favoritos, carrito de compra, soporte para temas de color personalizados y traducción del contenido de castellano a inglés.",
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
        " El propósito de este proyecto de ecommerce es proporcionar una plataforma moderna y eficiente para la compra y venta de productos en línea. Se busca mejorar la experiencia del usuario mediante una interfaz intuitiva y responsiva, que se adapte tanto a dispositivos de escritorio como móviles. Además, se ha implementado una serie de funcionalidades clave para facilitar la navegación, búsqueda y gestión de productos, así como la personalización de la experiencia de compra a través de temas de color y soporte multilingüe.",
        "Este proyecto también sirve como un ejemplo práctico de cómo utilizar el framework Open Cells de BBVA en combinación con LitElement y Material Design para crear aplicaciones web robustas y atractivas.",
      ],
    },
    bloqueDos: {
      title: "Mi papel en el proyecto",
      content: [
        "Investigar y aprender sobre la tecnología Open Cells y LitElement",
        "Diseñar y desarrollar una aplicación utilizando Material Design y Open Cells",
        "Implementar pruebas para asegurar la funcionalidad correcta de la aplicación",
        "Documentar el proceso de aprendizaje y desarrollo",
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
        "Open Cells: Es un framework de desarrollo de aplicaciones web de código abierto desarrollado por BBVA. Proporciona una serie de componentes y herramientas para facilitar la creación de aplicaciones web modernas y atractivas.",

        "LitElement: Es una librería de desarrollo de aplicaciones web basada en Web Components. Permite crear componentes web reutilizables y personalizables con un enfoque en la simplicidad y el rendimiento.",

        "Material Design: Es un sistema de diseño desarrollado por Google que se centra en la creación de interfaces de usuario. Proporciona una serie de directrices y componentes para facilitar el diseño y desarrollo de aplicaciones web y móviles.",

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
        "Uno de los principales desafíos que enfrenté durante el desarrollo de la aplicación fue la implementación de la funcionalidad de cambio de idioma. Utilicé el paquete @open-cells/localize para gestionar la localización y traducción de la aplicación del castellano al inglés. Inicialmente, tuve problemas con la carga dinámica de los archivos de traducción y la sincronización de los textos traducidos en los componentes. Para resolver esto, investigué la documentación del paquete y realicé varias pruebas para asegurarme de que los textos se cargaran correctamente en ambos idiomas.",

        "Finalmente, cuando subí el proyecto a Netlify para su compilación, el paquete @open-cells/localize no se pudo leer correctamente, lo que resultó en que no se mostrara ningún contenido. Para solucionar este problema, tuve que condicionar el código para asegurarme de que el contenido se mostrara correctamente en el entorno de producción. Esto incluyó verificar la disponibilidad de los archivos de traducción y asegurarme de que se cargaran correctamente antes de renderizar los componentes.",
      ],
    },
    bloqueDos: {
      imgUno: asideEscritorio,
      imgDos: asideMovil,
    },
    bloqueTres: {
      title: "Lecciones aprendidas",
      content: [
        "Durante el desarrollo de este proyecto, aprendí mucho sobre el framework Open Cells, así como sobre el desarrollo de aplicaciones web con LitElement y Material Design. También adquirí experiencia en la implementación de funcionalidades clave para aplicaciones de comercio electrónico, como la navegación, búsqueda, gestión de productos y personalización de la experiencia del usuario.",
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
