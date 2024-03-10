import mainUltima from "@/app/contenido-proyectos/clinica-blancodent/imagenes/proyecto-ultima.jpg";
import mainEscritorio from "@/app/contenido-proyectos/clinica-blancodent/imagenes/proyecto-primera-grande.png";
import mainMovil from "@/app/contenido-proyectos/clinica-blancodent/imagenes/proyecto-primera-peque.jpg";
import asideEscritorio from "@/app/contenido-proyectos/clinica-blancodent/imagenes/problemas-largo.png";
import asideMovil from "@/app/contenido-proyectos/clinica-blancodent/imagenes/problemas-corto.png";

export const contenidoDePagina = {
  id: "011",
  hero: {
    about: "Proyecto:",
    title: "Clínica Dental Blancodent",
  },
  subHero: {
    titleSuperior: "Introducción:",
    contentSuperior:
      "La web de la Clínica Dental Blancodent estaba publicada en squarespace con una de sus plantilla y el diseño bien modificada. El deseo del cliente era de mover la web a otra plataforma y en el proceso hacer cambios en la organización del contenido, implementar un blog con un nuevo CMS y finalmente introducir una tienda online para poder ofrecer a los clientes descuentos y venta de servicios online.",
    titleInferior: ["Tipo", "Herramientas", "En vivo"],
    contentInferior: {
      colUno: ["Página Web Cliente Comercial"],
      colDos: ["CSS & HTML", "Javascript ES6", "Git & GitHub", "Netlifly"],

      colTres: ["https://blancodent.com"],
    },
  },
  main: {
    bloqueUno: {
      title: "Propósito del proyecto",
      content: [
        "El proyecto se ha dividido en tres fases: En la primera (terminada), simplemente se ha copiado el diseño existente en Squarespace pasándolo al Netlify y haciendo un código base nuevo. En el proceso únicamente se ha añadido un nuevo segmento hero con varias ofertas.",
        "En la segunda parte (actualmente trabajando en este) se pasará el código base a Eleventy (generador de páginas estáticas), la cual ayudará con la reorganización de la web e implementación de un CMS.",
        "En la tercera (por hacer), se creará un carrito de compra y se conectará con la pasarela de pago Stripe.",
      ],
    },
    bloqueDos: {
      title: "Mi papel en el proyecto",
      content: [
        "En el proyecto trabajamos dos colaboradores.",
        "Mi papel en este proyecto ha sido encargarme de analizar el diseño actual y transferirlo al nuevo código utilizando las últimas tecnologías de CSS.",
        "Posteriormente, revisar y depurar todo el código para eliminar errores. Con esto hemos conseguido que la web mejore de una manera completa y eficiente.",
        "Colaborar con mi compañero del proyecto para elaborar diseño y la estructura para hacer que la página sea accesible y rápida ante todo.",
      ],
    },
    bloqueTres: {
      imgUno: mainEscritorio,
      imgDos: mainMovil,
    },
    bloqueCuatro: {
      title: "Web stack y su explicación",
      content: [
        "Teniendo el diseño existente en la primera fase nos hemos enfocado en lo siguiente:",

        "HTML: El uso de las etiquetas semánticas como section, main, article, nav... con la intención de hacer la página accesible desde las primeras líneas del nuevo código.",

        "CSS: utilización de Flexbox y Grid por defecto para organizar layout y transferir el diseño. Uso intensivo de variables CSS (con valores por defecto) y de las clases útiles. Nuevas seudo clases como por ejemplo :where() y :clamp().",

        "Uso de las propiedades modernas como backdrop-filter, margin-inline, aspect-ratio…",

        "JS: Implementación de la navegación tipo hamburger en pantallas pequeñas vía aria-hidden: y aria-selected: atributos para que sea accesible vía teclado. También implementación de un carrusel en la sección de hero con promociones.",

        "Git y GitHub: Uso continuo de git con varias ramas main/desarrollo y con pull request via GitHub.",

        "Netlify: Conexión y deploy vía GitHub. ",
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
        'A medida que la aplicación creció en complejidad, la gestión del estado se volvió más difícil. Para abordar este problema, decidimos implementar el patrón de "levantamiento de estados" y centralizar el estado de la aplicación en los componentes principales utilizando React Context. Esto mejoró la claridad del flujo de datos y facilitó el acceso a los datos compartidos entre componentes.',
        "En ocasiones, surgieron problemas de sincronización entre los datos en tiempo real de Firebase y la representación en la interfaz de usuario. Para solucionar esto, implementamos un sistema de escucha de eventos para refrescar automáticamente la interfaz cuando se producían cambios en la base de datos de Firebase. Además, optimizamos el código para evitar actualizaciones innecesarias en la interfaz.",
        "Garantizar que la aplicación se vea y funcione bien en diferentes tamaños de pantalla y dispositivos fue un desafío. Utilizamos CSS media queries y realizamos pruebas exhaustivas en dispositivos móviles y de escritorio para lograr un diseño totalmente responsivo.",
      ],
    },
    bloqueDos: {
      imgUno: asideEscritorio,
      imgDos: asideMovil,
    },
    bloqueTres: {
      title: "Lecciones aprendidas",
      content: [
        "La forma de trabajar de manera eficiente e inteligente, para lograr una mejor productividad y mejores resultados y mejor unión del equipo.",
        "Revisar frecuentemente, si estamos avanzando en la dirección correcta que necesitan nuestros clientes o si requiere que nos adaptemos a ellos.",
        "Aprender de cada lección es uno de los aspectos más importantes de la programación, pues así los errores y aciertos de los proyectos quedan registrados para ser usados en futuras iniciativas, y de esta manera se aprende a mejorar continuamente.",
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
