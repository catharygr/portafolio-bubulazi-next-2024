import { HAMBURGUER_LINK } from "@/app/utilidades/constante";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import emoji from "@/app/assets/imagen/generales/emoji-2.png";
import { GitHub } from "react-feather";
import { Linkedin } from "react-feather";
import { Twitter } from "react-feather";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} wrapper`}>
        <div className={styles.izquierda}>
          <div className="flow">
            <h3 className={styles.h3}>Menú</h3>
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
          <div className={`${styles.centroInterno} flow`}>
            <h3 className={styles.h3}>Desarrollo</h3>
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
          <h3 className={styles.h3}>Redes</h3>
          <ul className={`${styles.emojiFeather} flow`}>
            <li>
              <Link
                aria-label="LindekIn"
                target="_blank"
                href={"https://www.linkedin.com/in/hyuik"}
              >
                <Linkedin />
              </Link>
            </li>
            <li>
              <Link
                aria-label="GitHub"
                target="_blank"
                href={"https://github.com/catharygr"}
              >
                {" "}
                <GitHub />
              </Link>
            </li>
            <li>
              <Link
                aria-label="Twitter"
                target="_blank"
                href={"https://twitter.com/catharygr"}
              >
                <Twitter />
              </Link>
            </li>
          </ul>
          <p>
            Desarrollado en España <br /> ©2020 - {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
