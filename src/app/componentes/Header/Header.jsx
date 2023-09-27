import styles from "./Header.module.css";
import { Sun, Moon, Menu, Rss } from "react-feather";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.container}`}>
        <p className={styles.logo}>{"{this.cataryGarciaRivas}"}</p>
        <div className={styles.navContainer}>
          <ul className={styles.escritorioLink}>
            <li>
              <Link href={"/"}>Inicio</Link>
            </li>
            <li>
              <Link href={"/"}>Inicio</Link>
            </li>
            <li>
              <Link href={"/"}>Inicio</Link>
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
            <Menu />
          </nav>
        </div>
      </div>
    </header>
  );
}
