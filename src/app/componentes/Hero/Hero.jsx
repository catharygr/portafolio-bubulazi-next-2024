import Image from "next/image";
import EmojiCaty from "@/app/assets/imagen/generales/caty-emoji.png";
import styles from "./Hero.module.css";

// Tipo con imagen y tipo sin imagen
export default function Hero({ type }) {
  return (
    <section>
      <div className={`wrapper  ${styles.containerTipoImagen}`}>
        <div
          className={`${styles.rotateCenter} ${styles.marcoCircularImagen} fondo-acento-claro`}
        >
          <Image src={EmojiCaty} alt="emoji de mi" />
        </div>
        <h1 className={styles.h1}>
          Cathy, desarrolladora FrontEnd y algo más...
        </h1>
      </div>
    </section>
  );
}
