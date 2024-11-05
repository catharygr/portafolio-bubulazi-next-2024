import styles from "./page.module.css";
import { getBlogPostList } from "../utilidades/node-helpers/node-fs-helpers";
import BlogCard from "../componentes/BlogCard/BlogCard";
import { useState } from "react";

export default async function ListadoDeBlog() {
  const [page, setPage] = useState(1);
  const [blogPostList, setBlogPostList] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const limit = 5;

  useEffect(() => {}, [page]);

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
