import Image from "next/image";
import Emoji from "@/app/imagen/Hero/caty-emoji.png";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section>
      <div className={`wrapper  ${styles.heroContainer}`}>
        <div
          className={`${styles.rotateCenter} ${styles.heroEmoji} fondo-acento-claro`}
        >
          <Image src={Emoji} alt="emoji de mi" />
        </div>
        <h1 className="fs-hero f-str-75 f-wei-600 lh-small color-oscuro">
          Cathy, desarrolladora FrontEnd y algo más...
        </h1>
      </div>
    </section>
  );
}
