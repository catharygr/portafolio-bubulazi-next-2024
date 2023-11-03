import { HAMBURGUER_LINK } from "@/app/Utiles/Constante";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} wrapper`}>
        <div className={styles.izquierda}>
          <div>
            <ul>
              {HAMBURGUER_LINK.map((link) => (
                <li key={link.slug}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.centro}>
          <div>
            <p>
              Desarrollado y diseñado por Cathy utilizando React.js 18 y Next.js{" "}
            </p>
            <p>Vanilla CSS, frame-motion, next-mdx-remote</p>
            <p>Social: </p>
            <ul>
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
          </div>
        </div>
        <div className={styles.derecha}>
          <p>Desarrollado en Canarias ©2020 - {year}</p>
        </div>
      </div>
    </footer>
  );
}
