import styles from "./CardConImg.module.css";
import Image from "next/image";

export default function CardConImg({ content }) {
  const { imageURL, title, description, url, linkText } = content;
  console.log(imageURL);
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
