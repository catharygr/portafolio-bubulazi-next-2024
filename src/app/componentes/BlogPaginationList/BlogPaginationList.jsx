"use client";
import { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import styles from "./BlogPagination.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BlogPaginationList({ blogs }) {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;
  const router = useRouter();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const page = query.get("page");
    if (page) {
      setCurrentPage(Number(page));
    }
  }, [router.asPath]);

  // Calcular los blogs a mostrar en la página actual
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Cambiar de página
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    router.push(`?page=${pageNumber}`);
  };

  return (
    <>
      {currentBlogs.map((blog) => (
        <BlogCard
          key={blog.slug}
          {...blog}
        />
      ))}
      <div className={styles.pagination}>
        {Array.from(
          { length: Math.ceil(blogs.length / blogsPerPage) },
          (_, i) => (
            <Link
              href={`?page=${i + 1}`}
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={currentPage === i + 1 ? styles.active : ""}
            >
              {i + 1}
            </Link>
          )
        )}
      </div>
    </>
  );
}
