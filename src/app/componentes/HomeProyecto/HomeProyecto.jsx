import Card from "@/app/componentes/Card/Card";
import styles from "./HomeProyecto.module.css";
import Link from "next/link";
import Hero from "@/app/componentes/Hero/Hero";

// Tipo de contenido: "full" o "reduced"
export default function HomeProyecto({ content, type }) {
  if (type === "reduced") {
    const ultimosProyectos = content.slice(0, 3);
    const otrosProyectos = content.slice(3, 7);

    return (
      <section>
        <div className={`wrapper flow ${styles.proyectoWrapper}`}>
          <h2 className={styles.h2}>Últimos Proyectos</h2>
          <div className={styles.cardsContainer}>
            {ultimosProyectos.map((proyecto) => (
              <Card
                key={proyecto.url}
                content={proyecto}
                type="conImg"
              />
            ))}
          </div>
          <h2 className={styles.h2}>Otros Proyectos</h2>
          <div className={styles.cardSinImg}>
            {otrosProyectos.map((proyecto) => (
              <Card
                key={proyecto.url}
                content={proyecto}
                type="sinImg"
              />
            ))}
          </div>
          <Link
            className="link-btn"
            href="/proyectos"
          >
            Ver todos los proyectos
          </Link>
        </div>
      </section>
    );
  }
  if (type === "full") {
    const ultimosProyectos = content.slice(0, 3);
    const otrosProyectos = content.slice(3);

    return (
      <section>
        <div className={`wrapper flow ${styles.proyectoWrapperFull}`}>
          <Hero
            type="sin-imagen"
            about="Prácticas de Desarrollo Web"
            title="Todos los Proyectos"
          />
          <h2 className={styles.h2}>Últimos Proyectos</h2>
          <div className={styles.cardsContainer}>
            {ultimosProyectos.map((proyecto) => (
              <Card
                key={proyecto.url}
                content={proyecto}
                type="conImg"
              />
            ))}
          </div>
          <h2 className={styles.h2}>Otros Proyectos</h2>
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
}
