import { HAMBURGUER_LINK } from "@/app/Utiles/Constante";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
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
          </div>
        </div>
        <div className={styles.derecha}>
          <p>Desarrollado en Canarias/2024</p>
        </div>
      </div>
    </footer>
  );
}
