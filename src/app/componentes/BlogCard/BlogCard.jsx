import styles from "./BlogCard.module.css";
import { formatDate } from "@/app/utilidades/varias-utilidades";
import Link from "next/link";

export default function BlogCard({
  slug,
  title,
  lastEdited,
  abstract,
  language,
}) {
  return (
    <section>
      <Link
        aria-label={slug}
        href={`/blog/${slug}`}
      >
        <h2
          lang={language}
          className={styles.title}
        >
          {title}
        </h2>
      </Link>
      <p className={styles.date}>{formatDate(lastEdited, language)}</p>
      <p
        lang={language}
        className={styles.abstract}
      >
        {abstract}
      </p>
    </section>
  );
}
