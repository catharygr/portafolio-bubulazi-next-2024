import styles from "./Header.module.css";
im;

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.container}`}>
        <p className={styles.logo}>{"{this.cataryGarciaRivas}"}</p>
        <div className={styles.navContainer}>
          <ul className={styles.ul}>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Quienes somos</li>
          </ul>
          <nav>
            <p>Mi Nav</p>
          </nav>
        </div>
      </div>
    </header>
  );
}
