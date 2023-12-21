import styles from "./ProyectosMain.module.css";

export default function ProyectosMain({ content }) {
  const { bloqueUno, bloqueDos, bloqueTres, bloqueCuatro, bloqueCinco } =
    content;
  return (
    <main className={`wrapper  ${styles.proyectosMainWrapper}`}>
      <div className={styles.gridContainer}>
        <div className={`flow ${styles.bloqueUno}`}>
          <h3 className={styles.h3}>{bloqueUno.title}</h3>
          <p>{bloqueUno.content}</p>
        </div>
        <div className={styles.bloqueDos}>
          <h3>{bloqueDos.title}</h3>
          <p>{bloqueDos.content}</p>
        </div>
      </div>
    </main>
  );
}
