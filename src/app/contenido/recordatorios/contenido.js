import proyectoRecordatorio from "@/app/contenido/recordatorios/imagenes/proyecto-recordatorio.jpeg";
import recordatorioAbajo from "@/app/contenido/recordatorios/imagenes/recordatorio-abajo.jpeg";
import recordatorioGrande from "@/app/contenido/recordatorios/imagenes/recordatorio-grande.jpg";
import recordatorioMovilAbajo from "@/app/contenido/recordatorios/imagenes/recordatorio-movil-abajo.png";
import recordatorioPeque from "@/app/contenido/recordatorios/imagenes/recordatorio-peque.jpg";

export const contenidoDePagina = {
  id: "014",
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

      colTres: ["https://recordatorios-react-cathy.netlify.app/loguear"],
    },
  },
  main: {
    bloqueUno: {
      title: "Propósito del proyecto",
      content: [
        "Permitir a los usuarios organizar y administrar sus tareas diarias, eventos y recordatorios en un solo lugar, lo que les ayuda a mejorar su productividad y eficiencia.Proporcionar una forma sencilla de establecer recordatorios con opciones personalizables para fechas, horas y frecuencia de repetición, permitiendo a los usuarios adaptar los recordatorios a sus necesidades específicas.",
        "Ofrecer una interfaz de usuario amigable e intuitiva que facilite la creación, edición y eliminación de recordatorios sin complicaciones.Ofrecer opciones de personalización para los usuarios, como elegir temas, colores o tipos de recordatorios, para que se sientan cómodos usando la aplicación de acuerdo con sus preferencias.",
        "Asegurar que la aplicación esté diseñada y optimizada específicamente para dispositivos móviles, brindando una experiencia de usuario fluida y receptiva.Al utilizar Firebase Realtime Database, la aplicación garantiza que los recordatorios estén sincronizados en todos los dispositivos del usuario, lo que permite acceder a ellos desde cualquier lugar.",
        "Mediante Firebase Auth, se brinda a los usuarios la posibilidad de acceder a la aplicación de manera segura y protegida, garantizando la privacidad de sus datos.Permitir a los usuarios marcar tareas completadas y realizar un seguimiento de su progreso con la finalidad de mejorar su gestión del tiempo y el cumplimiento de objetivos.",
      ],
    },
    bloqueDos: {
      title: "Mi papel en el proyecto",
      content: [
        "En el proyecto trabajamos dos colaboradores.",
        "Fui responsable de la implementación de la interfaz de usuario utilizando React y React Router. Trabajé con mi compañero para traducir los diseños en componentes funcionales y asegurar una experiencia de usuario fluida y atractiva.Configuré la integración con Firebase, implementando Firebase Auth para la autenticación de usuarios y Firebase Realtime Database para almacenar y gestionar los recordatorios de forma segura y en tiempo real.",
        "Implementé hooks populares de React, como useState, useEffect y useContext, para gestionar el estado de la aplicación y mantener la coherencia de los datos en diferentes componentes.",
        "Trabajé en la creación de características específicas de la aplicación, como la creación, edición y eliminación de recordatorios, así como la visualización detallada de un recordatorio específico.Documenté el código, funciones y componentes importantes para facilitar la comprensión y futuras actualizaciones del proyecto.",
      ],
    },
    bloqueTres: {
      imgUno: proyectoRecordatorio,
      imgDos: recordatorioAbajo,
    },
    bloqueCuatro: {
      title: "Web stack y su explicación",
      content: [
        "React: Una biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y reutilizables. React permite crear componentes que se actualizan dinámicamente en respuesta a cambios de datos, lo que facilita el desarrollo de una interfaz de usuario moderna y eficiente.",

        "React Router: Una biblioteca que facilita la implementación de enrutamiento en una aplicación de React. Con React Router, podemos establecer diferentes rutas para diferentes páginas y navegar entre ellas sin tener que recargar la página completa.",

        "Vite: Un entorno de desarrollo rápido que se centra en la velocidad y la eficiencia. Vite permite una configuración sencilla y un tiempo de compilación rápido, lo que mejora la productividad del desarrollo web.",

        "useState, useEffect, useContext: Hooks de React que facilitan la gestión del estado de la aplicación, el manejo de efectos secundarios y el manejo de datos compartidos entre componentes.",

        "useParams: Un hook de React Router que permite acceder a los parámetros de la URL en un componente. Es útil para extraer información dinámica de la ruta actual. useNavigate: Un hook de React Router que proporciona una función de navegación para cambiar la URL programáticamente en lugar de utilizar enlaces tradicionales.",

        "react-feather: Una librería que proporciona una colección de iconos SVG. Esta librería se utiliza para mejorar la estética de la aplicación y facilitar la inclusión de iconos en diferentes partes de la interfaz de usuario.",

        "Git y GitHub: Uso continuo de git con varias ramas main/desarrollo y con pull request via GitHub.",

        "Netlify: Conexión y deploy vía GitHub. ",
      ],
    },
    bloqueCinco: {
      imgTres: recordatorioGrande,
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
      imgUno: recordatorioMovilAbajo,
      imgDos: recordatorioPeque,
    },
    bloqueTres: {
      title: "Lecciones aprendidas",
      content: [
        "He aprendido la importancia de realizar una planificación y un diseño cuidadoso antes de comenzar a codificar. Tener una estructura clara y una visión general de la arquitectura del proyecto ayuda a evitar retrabajos y facilita la implementación de nuevas características.",
        "He descubierto que abordar la optimización del rendimiento desde el inicio del proyecto es fundamental. Realizar optimizaciones incrementales a medida que se agregan nuevas características ayuda a mantener el rendimiento general de la aplicación y evita problemas más difíciles de resolver en etapas posteriores.",
        "Me he dado cuenta de la importancia de probar la aplicación en diferentes navegadores y dispositivos para garantizar una experiencia uniforme para todos los usuarios. Utilizar herramientas de compatibilidad y polyfills ha dido útil para abordar problemas específicos de navegadores más antiguos. ",
        "Escuchar los comentarios de los usuarios y realizar actualizaciones regulares ayuda a mantener la aplicación relevante y en constante mejora. ",
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
