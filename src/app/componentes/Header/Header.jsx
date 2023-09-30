"use client";
import styles from "./Header.module.css";
import { Sun, Moon, Rss, Menu } from "react-feather";
import Link from "next/link";
import useToggle from "../useToggle";
import VisuallyHidden from "../VisuallyHidden";
import NavMenu from "../NavMenu";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [estaMenuAbierto, toggleMenuAbierto] = useToggle(false);
  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.container}`}>
        <Link href={"/"} className={styles.logo}>
          {"{ this.Cathy }"}
        </Link>
        <div className={styles.navContainer}>
          <ul aria-hidden="true" className={styles.escritorioLink}>
            <li>
              <Link href={"/"}>Inicio</Link>
            </li>
            <li>
              <Link href={"/"}>CV</Link>
            </li>
            <li>
              <Link href={"/"}>Proyectos</Link>
            </li>
          </ul>
          <div className={styles.icons}>
            <button>
              <Moon className={styles.iconSVG} />
            </button>
            <Link href={"/rss.xml"}>
              <Rss className={styles.iconSVG} />
            </Link>
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
                <NavMenu toggleMenuAbierto={toggleMenuAbierto}>
                  <ul>
                    <li>
                      <Link href={"/"}>Sobre mi</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Contactos</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Blog</Link>
                    </li>
                  </ul>
                </NavMenu>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </div>
    </header>
  );
}
