import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to my Next.js app!</h1>

      <Image
        src="/images/nextjs.png"
        alt="Next.js Logo"
        width={200}
        height={160}
      />

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.js</code>
      </p>

      <button className={styles.button}>Click me!</button>
    </main>
  );
}
