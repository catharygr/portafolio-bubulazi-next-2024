import styles from "./page.module.css";
import { getBlogPostList } from "../utilidades/node-helpers/node-fs-helpers";
import BlogPaginationList from "../componentes/BlogPaginationList";

export default async function ListadoDeBlog() {
  const blogPostList = await getBlogPostList();

  return (
    <main className={`wrapper ${styles.draftsFlow} ${styles.container}`}>
      <h1 className={styles.h1}>Cosas que a veces hago...</h1>
      <BlogPaginationList blogs={blogPostList} />
    </main>
  );
}
