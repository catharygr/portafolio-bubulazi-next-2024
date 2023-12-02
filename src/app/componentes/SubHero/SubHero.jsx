import Link from "next/link";
import styles from "./SubHero.module.css";

//Type: single, single-link, doble-una-lista, doble-tres-listas
export default function SubHero({ type, content }) {
  const { titleSuperior, titleInferior, contentSuperior, contentInferior } =
    content;
  return (
    <>
      <section className={styles.sectionSuperior}>
        <div className={`wrapper ${styles.wrapperSuperior}`}>
          <h2 className={styles.h2}>{titleSuperior}</h2>
          <div className={styles.contenidoSuperior}>
            <p>{contentSuperior}</p>
            {type === "single-link" && (
              <Link
                href={"/"}
                className={styles.singleLink}
              >
                Link de prueba
              </Link>
            )}
          </div>
        </div>
      </section>
      {/* La siguiente seccion renderizar si el type === doble-una-lista */}
      {type === "doble-una-lista" && (
        <section className={styles.sectionInferior}>
          <div className={`wrapper ${styles.wrapperInferior}`}>
            <h2 className={styles.h2}>{titleInferior}</h2>
            <ul className={styles.unaListaUl}>
              {contentInferior.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
      {/* La siguiente seccion renderizar si el type === doble-tres-listas */}
      {type === "doble-tres-listas" && (
        <section className={styles.sectionInferiorTresListas}>
          <div className={`wrapper ${styles.wrapperInferiorTresListas}`}>
            <div>
              <h2 className={styles.tresListasH2}>Tipo:</h2>
              <ul className={styles.tresListasUl}>
                <li>Web App</li>
                <li>Diseño resposive</li>
              </ul>
            </div>
            <div>
              <h2 className={styles.tresListasH2}>Herramientas:</h2>
              <ul className={styles.tresListasUl}>
                <li>CSS & HTML</li>
                <li>Javascript ES6</li>
                <li>React</li>
                <li>React Router</li>
                <li>Firebase</li>
                <li>Git & GitHub</li>
                <li>Netlifly</li>
              </ul>
            </div>
            <div>
              <h2 className={styles.tresListasH2}>En vivo:</h2>
              <ul className={styles.tresListasUl}>
                <li></li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
