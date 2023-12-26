import Link from "next/link";
import styles from "./InfoLink.module.css";
export default function InfoLink({ content, type }) {
  const { titulo, contenido, url, linkText } = content;
  return (
    <section className={styles.sectionSuperior}>
      <div className={`wrapper ${styles.wrapperSuperior}`}>
        <h2 className={styles.h2}>{titulo}</h2>
        <div className={styles.contenido}>
          <p>{contenido}</p>
          {type === "single-link" && (
            <Link href={"/"} className={styles.singleLink}>
              link
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
