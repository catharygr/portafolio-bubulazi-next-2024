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
            <div dangerouslySetInnerHTML={{ __html: contentSuperior }} />
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
              <h2 className={styles.tresListasH2}>{titleInferior[0]}</h2>
              <ul className={styles.tresListasUl}>
                {contentInferior.colUno.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className={styles.tresListasH2}>Herramientas:</h2>
              <ul className={styles.tresListasUl}>
                {contentInferior.colDos.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className={styles.tresListasH2}>En vivo:</h2>
              <ul className={styles.tresListasUl}>
                {contentInferior.colTres.map((item, index) => (
                  <li key={index}>
                    <a
                      target="_blank"
                      href={item}
                    >
                      Visitar
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
