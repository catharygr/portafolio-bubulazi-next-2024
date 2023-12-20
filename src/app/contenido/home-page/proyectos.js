import formularioMultiPaginas from "@/app/contenido/home-page/imagenes/multipagina-tarjeta.png";
import bubulaziPortafolio from "@/app/contenido/home-page/imagenes/bubulazi-tarjeta.jpg";
import recordatorios from "@/app/contenido/home-page/imagenes/recordatorio-tarjeta.jpeg";
import chatGTP from "@/app/contenido/home-page/imagenes/chat-tarjeta.png";
import sarajevoTours from "@/app/contenido/home-page/imagenes/sarajevo-tours-tarjeta.png";
import blancondet from "@/app/contenido/home-page/imagenes/blancodent-tarjeta.jpg";
import pacMan from "@/app/contenido/home-page/imagenes/pac-man-tarjeta.png";

export const PROYECTOS = [
  {
    title: "Portafolio Blog Personal",
    description:
      "Desarrollado y diseñado por mi, utilizando React.js 18, Next.js, Vanilla CSS, frame-motion, next-mdx-remote. El objetivo principal de este proyecto es mostrar mis habilidades de desarrollo web y diseño de interfaces de usuario.",
    url: "/",
    linkTexto: "Ver proyecto",
    imageURL: bubulaziPortafolio,
  },
  {
    title: "Formulario Multi-Páginas",
    description:
      "Página web con diseño resposive desarrodada Con React, Hooks más usados, firebase Auth, Storage y RealTime Database como Back-end.",
    url: "/proyectos/formulario-multi-paginas",
    linkTexto: "Ver proyecto",
    imageURL: formularioMultiPaginas,
  },
  {
    title: "Recordatorio",
    description:
      "Aplicación desarrollada para móviles con tecnologías más modernas como son: React 18, React Router-6, Firebase Auth, Firestore como Back-end",
    url: "/",
    linkTexto: "Ver proyecto",
    imageURL: recordatorios,
  },
  {
    title: "ChatGTP - Chat App",
    description:
      "Conexión con la API de OpenAI para crear un chatbot. Firebase RealTime Database para Back-end y Auth. Netlify env variable para ocultar API key. Netlify función para conectar con OpeAI y obtener las respuestas.",
    url: "/",
    linkTexto: "Ver proyecto",
    imageURL: chatGTP,
  },
  {
    title: "Sarajevo Tours",
    description:
      "Mi primer proyecto desarrollado con JavaScript, práctica React-18, React-Router 6, Firebase Auth, irestore como Back-end y los Hook más usados.",
    url: "/",
    linkTexto: "Ver proyecto",
    imageURL: sarajevoTours,
  },
  {
    title: "Clínica Dental Blancodent",
    description:
      "La página web de una clínica dental (cliente comercial) desarrollada con CSS, HTML y un poco de JS. La web original estaba en Squarespace y la he transferido a Netlify respectando el diseño original.",
    url: "/",
    linkTexto: "Ver proyecto",
    imageURL: blancondet,
  },
  {
    title: "Pac-Man",
    description:
      "Mi primer proyecto desarrollado con JavaScript, CSS y HTML. Inspirada en el juego de Pac-Man.Para jugar tiene que ser desde un ordenador porque está hecho para teclado =>",
    url: "/",
    linkTexto: "Ver proyecto",
    imageURL: pacMan,
  },
];
