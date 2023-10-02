import Image from "next/image";
import Emoji from "@/app/imagen/Hero/caty-emoji.png";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section>
      <div className="wrapper">
        <div className={styles.rotateCenter}>
          <Image className={styles.heroEmoji} src={Emoji} alt="emoji" />
        </div>
        <h1 className="fs-hero f-str-75 f-wei-600 lh-small color-oscuro">
          Cathy, desarrolladora FrontEnd y algo más...
        </h1>
      </div>
    </section>
  );
}
