import Link from "next/link";
import styles from "./InfoLink.module.css";
export default function InfoLink() {
  return (
    <section className={styles.sectionSuperior}>
      <div className={`wrapper ${styles.wrapperSuperior}`}>
        <h2 className={styles.h2}>{titleSuperior}</h2>
        <div className={styles.contenidoSuperior}>
          <p>{contentSuperior}</p>
          {type === "single-link" && (
            <Link href={"/"} className={styles.singleLink}>
              Link de prueba
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
