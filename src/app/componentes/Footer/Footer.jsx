import { HAMBURGUER_LINK } from "@/app/Utiles/Constante";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import emoji from "@/app/assets/imagen/generales/emoji-2.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} wrapper`}>
        <div className={styles.izquierda}>
          <h4>Menú</h4>
          <div>
            <ul className="flow">
              {HAMBURGUER_LINK.map((link) => (
                <li key={link.slug}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.centro}>
          <h4>Desarrollo</h4>
          <div className={`${styles.centroInterno} flow`}>
            <Image
              className={styles.miEmoji}
              src={emoji}
              alt="Mi emoji"
            />
            <p>
              Desarrollado y diseñado por{" "}
              <span className={styles.oscuro}>Cathy</span> utilizando React.js
              18 y Next.js Vanilla CSS, frame-motion, next-mdx-remote
            </p>
          </div>
        </div>
        <div className={`${styles.derecha} flow`}>
          <h4>Redes</h4>
          <ul className="flow">
            <li>
              <Link href={"/"}>LinkedIn</Link>
            </li>
            <li>
              <Link href={"/"}>GitHub</Link>
            </li>
            <li>
              <Link href={"/"}>X</Link>
            </li>
          </ul>
          <p>Desarrollado en Canarias ©2020 - {year}</p>
        </div>
      </div>
    </footer>
  );
}
