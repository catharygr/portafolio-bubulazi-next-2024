"use client";
import styles from "./Header.module.css";
import { Sun, Moon, Rss, Menu } from "react-feather";
import Link from "next/link";
import useToggle from "../../utilidades/useToggle";
import VisuallyHidden from "../../utilidades/VisuallyHidden";
import NavMenu from "../NavMenu";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ESCRITORIO_LINK } from "@/app/utilidades/constante";
import { useState, useId, useEffect } from "react";

export default function Header() {
  const [estaMenuAbierto, toggleMenuAbierto] = useToggle(false);
  const [hoverLink, setHoverLink] = useState(null);
  const [modoClaro, setModoClaro] = useState(true);
  const pathname = usePathname();
  const id = useId();

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setModoClaro(false);
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      setModoClaro(true);
    }
  }, []);

  useEffect(() => {
    const root = document.querySelector(":root");
    if (modoClaro) {
      root.style.setProperty("--clr-primario", "137 82% 83%");
      root.style.setProperty("--clr-secundario", "37 86% 88%");
      root.style.setProperty("--clr-acentado", "349 100% 84%");
      root.style.setProperty("--clr-fondo", "178 59% 76%");
      root.style.setProperty("--clr-texto", "0 0% 0%");
    } else {
      root.style.setProperty("--clr-primario", "67 63% 32%");
      root.style.setProperty("--clr-secundario", "36 92% 54%");
      root.style.setProperty("--clr-acentado", "20 84% 48%");
      root.style.setProperty("--clr-fondo", "120 60% 16%");
      root.style.setProperty("--clr-texto", "0 0% 100%");
    }
  }, [modoClaro]);

  return (
    <header className={styles.header}>
      <div className={` ${styles.container}`}>
        <Link
          aria-label="El logo es una animación de un emoji de mi y enlace a la página inicio"
          href="/"
        >
          <video
            className={styles.video}
            playsInline
            autoPlay
            loop
            muted
          >
            <source
              src="/popo-video.mp4"
              type="video/mp4"
            />
          </video>
        </Link>
        <div className={styles.navContainer}>
          <ul
            className={styles.escritorioNav}
            onMouseLeave={() => setHoverLink(null)}
          >
            {ESCRITORIO_LINK.map(({ slug, label, href }) => (
              <li key={slug}>
                {hoverLink === slug && (
                  <motion.div
                    layoutId={id}
                    className={styles.hoverFondo}
                    initial={false}
                    animate={{ borderRadius: "var(--border-radius)" }}
                  />
                )}
                <Link
                  onMouseEnter={() => setHoverLink(slug)}
                  className={`${styles.escritorioLink} ${
                    pathname === href ? styles.escritorioLinkActivo : ""
                  }`}
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.icons}>
            <button
              id="toggle-color-modo"
              aria-label="toggle-color-modo"
              onClick={() => setModoClaro((modoClaro) => !modoClaro)}
            >
              {modoClaro ? (
                <Moon className={styles.iconSVG} />
              ) : (
                <Sun className={styles.iconSVG} />
              )}
            </button>
            {/* <Link href={"/rss.xml"}>
              <Rss className={styles.iconSVG} />
            </Link> */}
          </div>
          <nav
            role="navigation"
            aria-label="Menu principal"
          >
            <button
              aria-expanded={estaMenuAbierto}
              className={styles.botonMenu}
              onClick={toggleMenuAbierto}
            >
              <Menu
                aria-hidden="true"
                focusable="false"
                className={styles.iconMenu}
              />
              <VisuallyHidden>Abrir menú principal</VisuallyHidden>
            </button>
            {/* Etiqueta para la animación cuando se desmonta el componente */}
            <AnimatePresence>
              {estaMenuAbierto && (
                <NavMenu toggleMenuAbierto={toggleMenuAbierto} />
              )}
            </AnimatePresence>
          </nav>
        </div>
      </div>
    </header>
  );
}

// El componente Header renderiza el encabezado de la página. Tiene el  menú de navegación, un botón para cambiar entre el modo claro y oscuro, y un botón hamburguesa para abrir un menú lateral. Con el custom hook useToggle controlo el estado de apertura y cierre del menú. El aria expanded indica que el menú está expandido y su valor actual es estamenuabierto.Cuando se hace clic en el botón, se llama a la función toggleMenuAbierto, que cambia el valor de estaMenuAbierto al valor opuesto. En el Menu que es un icono que se represnta como un componente el aria-hidden indicar que el icono del menú no debe ser leído por las tecnologías de asistencia. y con focusable que el elemento no debe ser enfocado. Y el componente Visualhidden se oculta el texto para los usuario que ven pero no para el lector de pantalla.

//  El estado hoverLink se utiliza para rastrear qué enlace está actualmente siendo señalado por el mouse. Cuando el mouse se mueve sobre un enlace, setHoverLink se llama con el slug del enlace, Cuando el mouse sale del menú, setHoverLink se llama con null, lo que establece hoverLink de nuevo a null.mapeo por array ESCRITORIO_LINK y por cada objeto en el array, cojo las propiedades slug, label y href. Luego, se genera un listado <li> con una key única para cada elemento de la lista. Con esto condiciono si hoverLink es igual a slug, entonces se renderiza un componente motion.div de la biblioteca Framer Motion. Con el iD hemo creado un id único para identificar el elemento que se está animando.Cuando el mouse entra en el componente Link, se establece el estado hoverLink al valor de slug. usePathname es un hook de Next.js que se utiliza para obtener la ruta actual de la página. En este caso, se utiliza para saber qué enlace de navegación debe estar activo. href={href}: Esto establece el destino del enlace al valor de href. {label}: Esto establece el texto visible del enlace al valor de label.

// El estado modoClaro se utiliza para rastrear si el modo claro está activado o no. El hook usePathname de next/navigation se utiliza para obtener la ruta actual de la página. El hook useId se utiliza para generar un id único para el componente motion.div.
