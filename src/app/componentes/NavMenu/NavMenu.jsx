import { useEffect, useState, useId } from "react";
import styles from "./NavMenu.module.css";
import { X as Cerrar } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { motion } from "framer-motion";
import Link from "next/link";
import { HAMBURGUER_LINK } from "@/app/utilis/Constante";
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
            <div className={styles.children}>
              <ul onMouseLeave={() => setHoverHamburguerLink(null)}>
                {HAMBURGUER_LINK.map(({ slug, label, href }) => (
                  <li
                    key={slug}
                    style={{ zIndex: hoverHamburguerLink === "slug" ? 1 : 2 }}
                  >
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
                      className={`${styles.escritorioLinkssss} ${
                        pathname === href ? styles.escritorioLinkActivosss : ""
                      }`}
                      href={href}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>{" "}
            </div>
            <button className={styles.cerrarBtn} onClick={toggleMenuAbierto}>
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
