import { useEffect, useState, useId } from "react";
import styles from "./NavMenu.module.css";
import { X as Cerrar } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { motion } from "framer-motion";
import Link from "next/link";
import { HAMBURGUER_LINK } from "@/app/utilidades/constante";
import { usePathname } from "next/navigation";

export default function NavMenu({ toggleMenuAbierto }) {
  const [hoverHamburguerLink, setHoverHamburguerLink] = useState(null);
  const pathname = usePathname();
  const id = useId();

  useEffect(() => {
    const elementoEnfocadoAntesDeAbrirlo = document.activeElement;
    return () => {
      elementoEnfocadoAntesDeAbrirlo?.focus();
    };
  }, []);

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        toggleMenuAbierto();
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [toggleMenuAbierto]);

  return (
    <FocusLock>
      <RemoveScroll>
        <div className={styles.navContainer}>
          <motion.div
            className={styles.navFondo}
            onClick={toggleMenuAbierto}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className={styles.navCajon}
            animate={{ x: "-100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.5,
            }}
            exit={{ x: "0%" }}
          >
            <div className={styles.menuEnlace}>
              <ul onMouseLeave={() => setHoverHamburguerLink(null)}>
                {HAMBURGUER_LINK.map(({ slug, label, href }) => (
                  <li key={slug}>
                    {hoverHamburguerLink === slug && (
                      <motion.div
                        layoutId={id}
                        className={styles.hoverFondo}
                        initial={false}
                        animate={{ borderRadius: "var(--border-radius)" }}
                      />
                    )}
                    <Link
                      onMouseEnter={() => setHoverHamburguerLink(slug)}
                      className={
                        pathname === href ? styles.hamburguerLinkActivos : ""
                      }
                      href={href}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>{" "}
            </div>
            <button
              className={styles.cerrarBtn}
              onClick={toggleMenuAbierto}
            >
              <Cerrar
                aria-hidden="true"
                focusable="false"
                className={styles.iconCerrar}
              />
              Cerrar menú
            </button>
          </motion.div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

// El componente NavMenu es un menú de navegación animado que se desliza desde la izquierda de la pantalla. Este menú se compone de varios enlaces definidos en el array HAMBURGUER_LINK. Cada enlace tiene un slug, label y href que se utilizan para renderizar el enlace y manejar la interacción del usuario.

// El menú utiliza el hook useState para rastrear qué enlace está actualmente siendo señalado por el ratón (hoverHamburguerLink). Cuando el ratón sale del menú, hoverHamburguerLink se establece en null.

// Cada enlace en el menú es un componente Link. Cuando el ratón entra en un Link, hoverHamburguerLink se establece en el slug de ese Link. Si el pathname actual es igual al href del Link, entonces se le asigna una clase adicional para indicar que es el enlace activo.

// Además, si hoverHamburguerLink es igual al slug de un Link, se renderiza un componente motion.div adicional con una animación que cambia el borderRadius.

// El menú también tiene un botón de cierre que, cuando se hace clic, ejecuta la función toggleMenuAbierto para cerrar el menú.

// El menú utiliza el componente RemoveScroll para eliminar el desplazamiento de la página mientras está abierto, y el componente FocusLock para atrapar el enfoque dentro del menú.

// Las animaciones del menú están controladas por los componentes motion.div de la biblioteca framer-motion. Estos componentes se animan automáticamente cuando se montan, se actualizan y se desmontan.
