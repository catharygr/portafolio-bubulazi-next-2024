import styles from "./OtrosProyectos.module.css";

export default function OtrosProyectos({ content, id }) {
  let primerProyectoID = "";
  let segundoProyectoID = "";

  for (let i = 0; i < 2; i++) {
    const ranDomNum = Math.floor(Math.random() * content.length);
    // Si el proyecto A es el mismo al que se está mostrando, se vuelve a generar un número aleatorio
    if (content[ranDomNum].id === id) {
      i--;
      continue;
    }
    // Si el proyecto A es el mismo que el proyecto B, se vuelve a generar un número aleatorio
    if (primerProyectoID === content[ranDomNum].id) {
      i--;
      continue;
    }
    // En la primera iteración se guarda el id del primer proyecto
    if (i === 0) {
      primerProyectoID = content[ranDomNum].id;
      continue;
    }
    // En la segunda iteración se guarda el id del segundo proyecto
    segundoProyectoID = content[ranDomNum].id;

    console.log(primerProyectoID, segundoProyectoID);
  }

  const primerProyecto = content.find(
    (proyecto) => proyecto.id === primerProyectoID
  );

  const segundoProyecto = content.find(
    (proyecto) => proyecto.id === segundoProyectoID
  );

  return (
    <div>
      <h1>Otros proyectos</h1>
    </div>
  );
}
