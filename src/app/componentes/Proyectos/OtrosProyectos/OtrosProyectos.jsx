

import styles from "./OtrosProyectos.module.css";

export default function OtrosProyectos({ content, id }) {
  let primerProyectoID = "";
  let segundoProyectoID = "";
  let proyectosID = [];

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

    // Se guarda el id del proyecto
    proyectosID.push(content[ranDomNum].id);

    console.log(primerProyectoID, segundoProyectoID);
  }

  const primerProyecto = content.find(
    (proyecto) => proyecto.id === primerProyectoID
  );

  const segundoProyecto = content.find(
    (proyecto) => proyecto.id === segundoProyectoID
  );
    
  const proyectosSeleccionados = proyectosID.map(
    id => content.find(proyecto => proyecto.id === id)
  );

  return (
    <div className="wrapper">
      <h2 className={styles.h2}>Otros proyectos</h2>
      {proyectosSeleccionados.map((proyecto, index) => (
        <div key={index} className={index === 0 ? styles.primerProyecto : styles.segundoProyecto}>
          <h3 className={styles.h3}>{proyecto.title}</h3>
          <p>{proyecto.description}</p>
          <a href={proyecto.link}>Ver proyecto</a>
        </div>
      ))}
    </div>
  );
}





