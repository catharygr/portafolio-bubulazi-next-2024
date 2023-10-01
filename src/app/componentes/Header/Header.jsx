"use client";
import styles from "./Header.module.css";
import { Sun, Moon, Rss, Menu } from "react-feather";
import Link from "next/link";
import useToggle from "../useToggle";
import VisuallyHidden from "../VisuallyHidden";
import NavMenu from "../NavMenu";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ESCRITORIO_LINK } from "@/app/utilis/Constante";
import { useState, useId, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [estaMenuAbierto, toggleMenuAbierto] = useToggle(false);
  const [hoverLink, setHoverLink] = useState(null);
  const [modoClaro, toggleModoClaro] = useToggle(true);
  console.log(modoClaro);
  const pathname = usePathname();
  const id = useId();

  useEffect(() => {
    const root = document.querySelector(":root");
    if (modoClaro) {
      root.style.setProperty("--clr-acento-dos", "174 89% 56%");
    } else {
      root.style.setProperty("--clr-acento-dos", " 284 81% 14%");
    }
  }, [modoClaro]);

  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.container}`}>
        <Link href={"/"} className={styles.logo}>
          {"{ this.Cathy }"}
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
