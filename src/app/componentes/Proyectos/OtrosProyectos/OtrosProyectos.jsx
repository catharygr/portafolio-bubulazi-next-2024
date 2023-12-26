import styles from "./OtrosProyectos.module.css";
import Link from "next/link";

export default function OtrosProyectos({ proyectos, id }) {
  let primerProyectoID = "";
  let segundoProyectoID = "";
  let proyectosID = [];

  for (let i = 0; i < 2; i++) {
    const ranDomNum = Math.floor(Math.random() * proyectos.length);
    // Si el proyecto A es el mismo al que se está mostrando, se vuelve a generar un número aleatorio
    if (proyectos[ranDomNum].id === id) {
      i--;
      continue;
    }
    // Si el proyecto A es el mismo que el proyecto B, se vuelve a generar un número aleatorio
    if (primerProyectoID === proyectos[ranDomNum].id) {
      i--;
      continue;
    }
    // En la primera iteración se guarda el id del primer proyecto
    if (i === 0) {
      primerProyectoID = proyectos[ranDomNum].id;
      continue;
    }
    // En la segunda iteración se guarda el id del segundo proyecto
    segundoProyectoID = proyectos[ranDomNum].id;

    // Se guarda el id del proyecto
    proyectosID.push(proyectos[ranDomNum].id);

    console.log(primerProyectoID, segundoProyectoID);
  }

  const primerProyecto = proyectos.find(
    (proyecto) => proyecto.id === primerProyectoID
  );

  const segundoProyecto = proyectos.find(
    (proyecto) => proyecto.id === segundoProyectoID
  );

  return (
    <aside className={`wrapper ${styles.otrosAsides}`}>
      <div className={styles.container}>
        <h2 className={styles.h2}>Otros proyectos</h2>
        <div className={styles.flexContainer}>
          <div className={styles.primerProyecto}>
            <h3 className={styles.h3}>{primerProyecto.title}</h3>
            <p>{primerProyecto.description}</p>
            <Link href={primerProyecto.url}>{primerProyecto.linkTexto}</Link>
          </div>
          <div className={styles.segundoProyecto}>
            <h3 className={styles.h3}>{segundoProyecto.title}</h3>
            <p>{segundoProyecto.description}</p>
            <Link href={segundoProyecto.url}>{segundoProyecto.linkTexto}</Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
