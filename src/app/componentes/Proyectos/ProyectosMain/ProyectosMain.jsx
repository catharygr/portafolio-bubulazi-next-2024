import styles from "./ProyectosMain.module.css";
import Image from "next/image";
import paginaCorta from "../../../contenido/formulario-multi-paginas/imagenes/pagina-corta.png";
import paginaLarga from "../../../contenido/formulario-multi-paginas/imagenes/pagina-larga.png";

export default function ProyectosMain({ content }) {
  const { bloqueUno, bloqueDos, bloqueTres, bloqueCuatro, bloqueCinco } =
    content;
  return (
    <main className={`wrapper  ${styles.proyectosMainWrapper}`}>
      <div className={styles.gridContainer}>
        <div className={`flow ${styles.bloqueUno}`}>
          <h3 className={styles.h3}>{bloqueUno.title}</h3>
          <p>{bloqueUno.content}</p>
        </div>
        <div className={`flow ${styles.bloqueDos}`}>
          <h3 className={styles.h3}>{bloqueDos.title}</h3>
          <p>{bloqueDos.content}</p>
        </div>
        <div>
          <picture>
            <source media="(max-width: 49.999rem)" srcset={paginaCorta.src} />
            <source media="(min-width: 50rem)" srcset={paginaLarga.src} />
            <Image
              src={paginaCorta}
              alt="Imágenes del formulario de múltiples pasos"
            />
          </picture>
        </div>
      </div>
    </main>
  );
}
