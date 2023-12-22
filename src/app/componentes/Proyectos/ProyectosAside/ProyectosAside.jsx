import styles from "./ProyectosAside.module.css";

export default function ProyectosAside({ content }) {
  const { bloqueUno, bloqueDos, bloqueTres } = content;
  return (
    <aside className="wrapper">
      <div className={styles.gridContainer}>
        <div className={`flow ${styles.bloqueUno}`}>
          <h3 className={styles.h3}>{bloqueUno.title}</h3>
          {bloqueUno.content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </aside>
  );
}
