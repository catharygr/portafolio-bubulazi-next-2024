import Link from "next/link";
import styles from "./Card.module.css";
import Image from "next/image";

export default function Card({ content, type }) {
  const { imageURL, title, description, url, linkTexto } = content;
  if (type === "conImg") {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <Image
            src={imageURL}
            alt=""
          />
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link href={url}>{linkTexto}</Link>
          </div>
        </div>
      </div>
    );
  }

  if (type === "sinImg") {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h3>{title}</h3>
          <p>{description}</p>
          <Link href={url}>{linkTexto}</Link>
        </div>
      </div>
    );
  }
}
