import Card from "@/app/componentes/Card/Card";
import styles from "./HomeProyecto.module.css";
import Link from "next/link";

export default function HomeProyecto({ content }) {
  const ultimosProyectos = content.slice(0, 8);
  const otrosProyectos = content.slice(3);

  return (
    <section>
      <div className={`wrapper flow ${styles.proyectoWrapper}`}>
        <h2 className={styles.h2}>Últimos proyectos</h2>
        <div className={styles.cardsContainer}>
          {ultimosProyectos.map((proyecto) => (
            <Card
              key={proyecto.url}
              content={proyecto}
              type="conImg"
            />
          ))}
        </div>
        <h2 className={styles.h2}>Otros proyectos</h2>
        <div className={styles.cardSinImg}>
          {otrosProyectos.map((proyecto) => (
            <Card
              key={proyecto.url}
              content={proyecto}
              type="sinImg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
