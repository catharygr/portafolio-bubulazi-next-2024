import styles from "./ProyectosMain.module.css";
import Image from "next/image";

export default function ProyectosMain({ content }) {
  const { bloqueUno, bloqueDos, bloqueTres, bloqueCuatro, bloqueCinco } =
    content;
  return (
    <main className={`wrapper  ${styles.proyectosMainWrapper}`}>
      <div className={styles.gridContainer}>
        <div className={`flow ${styles.bloqueUno}`}>
          <h3 className={styles.h3}>{bloqueUno.title}</h3>
          {bloqueUno.content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className={`flow ${styles.bloqueDos}`}>
          <h3 className={styles.h3}>{bloqueDos.title}</h3>
          {bloqueDos.content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className={styles.bloqueTres}>
          <picture>
            <source
              media="(max-width: 54.999rem)"
              srcSet={bloqueTres.imgDos.src}
            />
            <source
              media="(min-width: 55rem)"
              srcSet={bloqueTres.imgUno.src}
            />
            <Image
              src={bloqueTres.imgDos}
              alt="Imágenes del formulario de múltiples pasos"
            />
          </picture>
        </div>
        <div className={`flow ${styles.bloqueCuatro}`}>
          <h3 className={styles.h3}>{bloqueCuatro.title}</h3>
          {bloqueCuatro.content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className={styles.bloqueCinco}>
          <Image
            src={bloqueCinco.imgTres}
            alt="Imágenes del formulario de múltiples pasos"
          />
        </div>
      </div>
    </main>
  );
}
