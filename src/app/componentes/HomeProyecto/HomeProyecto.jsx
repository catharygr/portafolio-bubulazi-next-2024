import CardConImg from "../CardConImg";
import styles from "./HomeProyecto.module.css";

export default function HomeProyecto({ content }) {
  const ultimosProyectos = content.slice(0, 3);

  return (
    <section>
      <div className={`wrapper ${styles.proyectoWrapper}`}>
        <h2 className={styles.h2}>Últimos proyectos</h2>
        <div className={styles.cardConImg}>
          <CardConImg
            ultimosProyectos={ultimosProyectos.map((proyecto) => (
              <CardConImg
                key={proyecto.url}
                content={proyecto}
              />
            ))}
          />
        </div>
        <h2 className={styles.h2}>Otros proyectos</h2>
        <div className={styles.cardSinImg}></div>
      </div>
    </section>
  );
}
