import Image from "next/image";
import styles from "./Hero.module.css";

// Tipo con imagen y tipo sin imagen
export default function Hero({ type, image, alt, title, about }) {
  if (type === "con-imagen") {
    return (
      <section>
        <div className={`wrapper  ${styles.containerTipoImagen}`}>
          <div
            className={`${styles.rotateCenter} ${styles.marcoCircularImagen}`}
          >
            <Image
              src={image}
              alt={alt}
            />
          </div>
          <h1 className={styles.h1}>{title}</h1>
        </div>
      </section>
    );
  }
  if (type === "sin-imagen") {
    return (
      <section>
        <div className={`wrapper  ${styles.containerTipoSinImagen}`}>
          <h1 className={styles.h1}>
            <span>{about}</span>
            {title}
          </h1>
        </div>
      </section>
    );
  }
}
