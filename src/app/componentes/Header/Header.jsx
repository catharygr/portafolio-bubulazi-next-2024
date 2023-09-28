"use client";
import styles from "./Header.module.css";
import { Sun, Moon, Rss, Menu } from "react-feather";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [estaMenuAbierto, setEstaMenuAbierto] = useState(false);
  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.container}`}>
        <p className={styles.logo}>{"{this.cataryGarciaRivas}"}</p>
        <div className={styles.navContainer}>
          <ul className={styles.escritorioLink}>
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
          <div className={styles.icons}>
            {/* <Sun /> */}
            <button>
              <Moon className={styles.iconSVG} />
            </button>
            <Link href={"/rss.xml"}>
              <Rss className={styles.iconSVG} />
            </Link>
          </div>
          <nav>
            <Menu className={styles.iconSVG} />
          </nav>
        </div>
      </div>
    </header>
  );
}
