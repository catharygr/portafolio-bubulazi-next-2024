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
          aria-label="El logo es una animación de un emoji de mi"
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
            aria-hidden="true"
            className={styles.escritorioNav}
            onMouseLeave={() => setHoverLink(null)}
          >
            {ESCRITORIO_LINK.map(({ slug, label, href }) => (
              <li
                key={slug}
                style={{ zIndex: hoverLink === "slug" ? 1 : 2 }}
              >
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
