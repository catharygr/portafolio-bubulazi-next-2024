import Link from "next/link";
import styles from "./SubHero.module.css";

//Type:  single, single-btn, doble-una-lista, doble-tres-listas
export default function SubHero({ type, color, children }) {
  return (
    <>
      <section className={styles.sectionSuperior}>
        <div className={`wrapper ${styles.wrapperSuperior}`}>
          <h2 className={styles.h2}>Sobre mi</h2>
          <div>
            <p>
              ¡Hola! Iniciada en el mundo de la programación como junior, con
              muchas ganas de llevar a cabo todo lo aprendido en diferentes
              cursos, como en{" "}
              <Link href="https://freecodecamp.org">FreeCodeCamp</Link>,{" "}
              <Link href="https://platzi.com">Platzi</Link> y{" "}
              <Link href="https://scrimba.com">Scrimba</Link> de CSS, HTML,
              JavaScript, React 18 y React Router 6. Con mucha disposición,
              determinación y voluntad para seguir aprendiendo. Espero a que os
              animéis a contactarme. Gracias de antemano.
            </p>
            {type === "single-btn" && <button>Boton de prueba</button>}
          </div>
        </div>
      </section>
      {/* La siguiente seccion renderizar si el type === doble-una-lista */}
      {type === "doble-una-lista" && (
        <section className={styles.sectionInferior}>
          <div className={`wrapper ${styles.wrapperInferior}`}>
            <h2 className={styles.h2}>Mis habilidades</h2>
            <ul className={styles.unaListaUl}>
              <li>JavaScript ES6</li>
              <li>React 18</li>
              <li>React Router 6</li>
              <li>Git & GitHub</li>
              <li>CSS & HTML</li>
              <li>Firebase</li>
            </ul>
          </div>
        </section>
      )}
      {/* La siguiente seccion renderizar si el type === doble-tres-listas */}
      <section className="fondo-asento-claro">
        <div className="container proyecto-detalles flex color-oscuro">
          <div className="flow">
            <h2 className="fs-800 f-str-75 f-wei-600">Tipo:</h2>
            <ul className="ul-detalles fs-400 f-wei-600">
              <li>Web App optimizada para móviles</li>
            </ul>
          </div>
          <div className="flow">
            <h2 className="fs-800 f-str-75 f-wei-600">Herramientas:</h2>
            <ul className="ul-detalles fs-400 f-wei-600">
              <li>CSS & HTML</li>
              <li>Javascript ES6</li>
              <li>React</li>
              <li>React Router</li>
              <li>Firebase</li>
              <li>Git & GitHub</li>
              <li>Netlifly</li>
            </ul>
          </div>
          <div className="flow">
            <h2 className="fs-800 f-str-75 f-wei-600">En vivo:</h2>
            <ul className="ul-detalles fs-400 f-wei-600">
              <li>
                <a
                  target="_blank"
                  href="https://recordatorios-react-cathy.netlify.app"
                >
                  Visitar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
