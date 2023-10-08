import styles from "./HomeProyecto.module.css";
import Image from "next/image";

export default function HomeProyecto({ content }) {
  return (
    <section>
      <div className="wrapper">
        <h1 className={styles.h2}>Últimos proyectos</h1>
      </div>
    </section>
  );
}
