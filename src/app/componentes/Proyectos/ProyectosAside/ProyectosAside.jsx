import styles from "./ProyectosAside.module.css";
import Image from "next/image";

export default function ProyectosAside({ content }) {
  const { bloqueUno, bloqueDos, bloqueTres } = content;
  return (
    <aside className={styles.asideContainer}>
      <div className={`wrapper ${styles.flexContainer}`}>
        <div className={`flow ${styles.bloqueUno}`}>
          <h3 className={styles.h3}>{bloqueUno.title}</h3>
          {bloqueUno.content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className={styles.bloqueDos}>
          <picture>
            <source
              media="(max-width: 54.999rem)"
              srcSet={bloqueDos.imgDos.src}
            />
            <source media="(min-width: 55rem)" srcSet={bloqueDos.imgUno.src} />
            <Image
              src={bloqueDos.imgDos}
              alt="Imágenes del formulario de múltiples pasos"
            />
          </picture>
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
