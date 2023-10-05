import styles from "./SubHero.module.css";

export default function SubHero() {
  return (
    <>
      <section className={styles.sectionSuperior}>
        <div className={`wrapper ${styles.wrapperSuperior}`}>
          <h1>SubHero</h1>
        </div>
      </section>
      <section className={styles.sectionInferior}>
        <div className={`wrapper ${styles.wrapperInferior}`}>
          <h1>SubHero</h1>
        </div>
      </section>
    </>
  );
}
