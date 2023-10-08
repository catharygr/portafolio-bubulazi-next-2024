import Link from "next/link";
import styles from "./CardConImg.module.css";
import Image from "next/image";

export default function CardConImg({ content }) {
  const { imageURL, title, description, url, linkTexto } = content;
  console.log(imageURL);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image
          src={imageURL}
          alt=""
        />
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={url}>{linkTexto}</Link>
      </div>
    </div>
  );
}
