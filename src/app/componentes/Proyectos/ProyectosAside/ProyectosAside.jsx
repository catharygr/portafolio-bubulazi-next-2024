import styles from "./ProyectosAside.module.css";
import Image from "next/image";

export default function ProyectosAside({ content }) {
  const { bloqueUno, bloqueDos, bloqueTres } = content;
  return (
    <aside className={`wrapper ${styles.wrapperContainer}`}>
      <div className={styles.flexContainer}>
        <div className={`flow ${styles.bloqueUno}`}>
          <h3 className={styles.h3}>{bloqueUno.title}</h3>
          {bloqueUno.content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className={styles.bloqueDos}>
          <Image
            src={bloqueDos.imgUno}
            alt="Imágenes del formulario de múltiples pasos"
          />
        </div>
        <div className={`flow ${styles.bloqueTres}`}>
          <h3 className={styles.h3}>{bloqueTres.title}</h3>
          {bloqueTres.content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </aside>
  );
}
