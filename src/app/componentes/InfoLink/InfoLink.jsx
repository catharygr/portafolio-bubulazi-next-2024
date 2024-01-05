import Link from "next/link";
import styles from "./InfoLink.module.css";
export default function InfoLink({ content, type }) {
  const { titulo, contenido, url, linkText } = content;
  return (
    <section className={styles.section}>
      <div className={`wrapper ${styles.wrapperInfoLink}`}>
        <h2 className={styles.h2}>{titulo}</h2>
        <div className={styles.contenido}>
          <p>{contenido}</p>
        </div>
      </div>
    </section>
  );
}
