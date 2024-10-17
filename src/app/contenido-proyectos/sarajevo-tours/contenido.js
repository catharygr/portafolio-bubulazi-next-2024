import mainUltima from "@/app/contenido-proyectos/sarajevo-tours/imagenes/proyecto-ultima.png";
import mainEscritorio from "@/app/contenido-proyectos/sarajevo-tours/imagenes/proyecto-primera-grande.png";
import mainMovil from "@/app/contenido-proyectos/sarajevo-tours/imagenes/proyecto-primera-peque.png";
import asideEscritorio from "@/app/contenido-proyectos/sarajevo-tours/imagenes/problemas-largo.png";
import asideMovil from "@/app/contenido-proyectos/sarajevo-tours/imagenes/problemas-corto.png";

export const contenidoDePagina = {
  id: "013",
  hero: {
    about: "Proyecto:",
    title: "Sarajevo Tours App",
  },
  subHero: {
    titleSuperior: "Introducción:",
    contentSuperior:
      "Proyecto Sarajevo Tours, página web muy divertida de una imaginaria aplicación sobre una tienda online de venta de guías a turistas. He aprendido mucho como primer proyecto utilizando react, react router, firebase auth, firestore database como backend, componentes controlados y carro de compra.",
    titleInferior: ["Tipo:", "Herramientas", "En vivo:"],
    contentInferior: {
      colUno: ["Proyecto página web ficticia"],
      colDos: [
        "CSS & HTML",
        "Javascript ES6",
        "React",
        "React Router",
        "Firebase",
        "Git & GitHub",
        "Netlifly",
      ],

      colTres: ["https://sarajevo-turismo.netlify.app/"],
    },
  },
  main: {
    bloqueUno: {
      title: "Propósito del proyecto",
      content: [
        "Primer proyecto propio hecho con React: Cuando terminamos el curso de react y react router para repasar lo aprendido, nos inspiramos en un viaje que hicimos a Sarajevo. Con este proyecto nuestro próposito ha sido usar las rutas nidadas que permitieran una navegación dinámica y aprender en mi caso, algo de backend que con firebase he adquirido conocimientos.",
        "Preparado en Figma para que todo fuera más fluido por mi compañero que tiene experiencia en esta app y beneficiándonos del trabajo en equipo.",
        "Como es una página ficticia hemos decidido hacer el carrito sin la pasarela de pago que redirecciona a la página proyecto.",
      ],
    },
    bloqueDos: {
      title: "Mi papel en el proyecto",
      content: [
        "En el proyecto trabajamos dos colaboradores.",
        "Mi papel en este proyecto ha sido entender cada paso que dábamos y aplicando todo los conocimentos aprendido.",
        "Implementé hooks populares de React, como useState, useEffect y useContext, para gestionar el estado de la aplicación y mantener la coherencia de los datos en diferentes componentes.",
        "Leyendo la documentación de React y React router he podido ayudar en cada paso que hemos dado, intentando hacer el código sin tener que copiarlo de nadie, entendiendo paso a paso todo lo aprendido. Para mi ha sido una buena experiencia ya que a no tener ningun conociemientos sobre esta materia tuve que esforzarme mucho y quemar muchas horas para que todo me quedara claro y entender cada código y decisión que íbamos tomando.",
        "He sido de mucha ayuda y estoy contenta con el trabajo que he hecho y con los errores que he cometido como principiante. Una buena experincia en este mundo de la codificación.",
      ],
    },
    bloqueTres: {
      imgUno: mainEscritorio,
      imgDos: mainMovil,
    },
    bloqueCuatro: {
      title: "Web stack y su explicación",
      content: [
        "A base del diseño que he recibido, he decidido usar las siguientes herramientas para los componentes que contienen layout:",

        "CSS: He ustilizado display grid y flex, para algunos componentes, he usado container-query que permite aplicar estilos a un elemento en función del tamaño del contenedor del elemento. Las fuentes variables la hemos usados para declaraciones de propiedades personalizadas de titulos y párrafos.",

        "React: Componentes, props, formularios con estado, useEffect, useStates, createContext, useRef, createContext. Con el uso de los componentes separamos el interfaz de usuario, reutilizándolos pasandoles props. El formulario como un componente controlado. Usos de los hook ms usados en react para una mejor renderización de la web.",

        "React router: Usando rutas nidadas, rutas relativas, Outles, Link, NavLink, parámetros de búsquedas, useLocation, redering condicional, useNavigate.",

        "Firebase Iniciación de la app, colección, getFirestore, getDocs. Autentificar, onAuthStateChanged, signInWithEmailAndPassword etc...",

        "Git y GitHub: Uso continuo de git con varias ramas main/desarrollo y con pull request via GitHub.",

        "Netlify: Envio de formulario, redirección por el pushstate en react, GitHub desplegado. ",
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
        "Poblemas surgieron muchos y soluciones más, a veces sin tener idea de como resolverlo leyendo la documentacion y mirando en google llegaba a la respuesta, fue un reto muy fuerte que cada dia me sorprendia el avance y los conociemtos que iba alcanzando y los deseo de terminar para ver como quedaba.",
        "Hemos tenido que volver a regresar mas de una vez al commit anterior y empezar de nuevo porque la solución que habíamos tomado no era la correcta pero siempre llegabámos a una solución con éxito.",
        "Como el trabajo lo hicimos en pareja fue muy dinámico siempre uno de los dos dábamos una solución y lograbámos el objetivo.",
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
