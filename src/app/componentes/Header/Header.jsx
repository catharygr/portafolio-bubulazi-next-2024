"use client";
import styles from "./Header.module.css";
import { Sun, Moon, Rss, Menu } from "react-feather";
import Link from "next/link";
import useToggle from "../../utilidades/useToggle";
import VisuallyHidden from "../../utilidades/VisuallyHidden";
import NavMenu from "../NavMenu";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ESCRITORIO_LINK } from "@/app/utilidades/constante";
import { useState, useId, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [estaMenuAbierto, toggleMenuAbierto] = useToggle(false);
  const [hoverLink, setHoverLink] = useState(null);
  const [modoClaro, toggleModoClaro] = useToggle(true);
  const pathname = usePathname();
  const id = useId();

  /* Colores */
  //  --clr-uno: 284 81% 14%; /* violeta fuerte */
  //  --clr-acento-uno: 50 100% 50%; /* amarillo dorado */
  //  --clr-acento-dos: 313 35% 80%; /* lavanda rosa */
  //  --clr-negro: 0 0% 50%;
  //  --clr-blanco: 0 0% 100%;

  useEffect(() => {
    const root = document.querySelector(":root");
    if (modoClaro) {
      // Color morado fuerte
      root.style.setProperty("--clr-uno", "284 81% 14%");
      // Color amarillo
      root.style.setProperty("--clr-acento-uno", "50 100% 50%");
      // Color rosado
      root.style.setProperty("--clr-acento-dos", "313 35% 80%");
      // // Color Negro
      root.style.setProperty("--clr-negro", "0 0% 0%");
      // Color Blanco
      root.style.setProperty("--clr-blanco", "0 0% 100%");
    } else {
      // Color morado fuerte
      root.style.setProperty("--clr-uno", "274 37% 76%");
      // Color morado claro
      root.style.setProperty("--clr-acento-uno", "296 45% 33%");
      // Color lila
      root.style.setProperty("--clr-acento-dos", "263 61% 63%");
      // Color blanco
      root.style.setProperty("--clr-negro", "0 0% 100%");
      // Color lila claro
      root.style.setProperty("--clr-blanco", "300, 66%, 12%");
    }
  }, [modoClaro]);

  return (
    <header className={styles.header}>
      <div className={` ${styles.container}`}>
        <Link href="/">
          <video className={styles.video} playsInline autoPlay loop muted>
            <source src="/popo-video.mp4" type="video/mp4" />
          </video>
        </Link>
        <div className={styles.navContainer}>
          <ul
            aria-hidden="true"
            className={styles.escritorioNav}
            onMouseLeave={() => setHoverLink(null)}
          >
            {ESCRITORIO_LINK.map(({ slug, label, href }) => (
              <li key={slug} style={{ zIndex: hoverLink === "slug" ? 1 : 2 }}>
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
            <button onClick={toggleModoClaro}>
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
          <nav role="navigation" aria-label="Menu principal">
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
