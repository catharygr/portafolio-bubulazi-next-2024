import styles from "./page.module.css";
import { getBlogPostList } from "../utilidades/node-helpers/node-fs-helpers";
import BlogCard from "../componentes/BlogCard/BlogCard";

export default async function ListadoDeBlog() {
  const blogPostList = await getBlogPostList();

  return (
    <main className={`wrapper ${styles.draftsFlow} ${styles.container}`}>
      <h1 className={styles.h1}>Cosas que a veces hago...</h1>
      {blogPostList.map((blog) => (
        <BlogCard
          key={blog.slug}
          {...blog}
        />
      ))}
    </main>
  );
}
