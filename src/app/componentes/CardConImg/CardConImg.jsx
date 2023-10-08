import styles from "./CardConImg.module.css";
import Image from "next/image";

export default function CardConImg({
  imageURL,
  title,
  description,
  url,
  linkText,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image
          src={imageURL}
          alt=""
        />
      </div>
    </div>
  );
}
