"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BlogCard from "../BlogCard";
import styles from "./BlogPagination.module.css";
import Link from "next/link";

const BlogPaginationList = ({ blogs }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  useEffect(() => {
    if (router.isReady) {
      const { page } = router.query;
      if (page) {
        setCurrentPage(parseInt(page, 10));
      }
    }
  }, [router.isReady, router.query]);

  // Calcular los blogs a mostrar en la página actual
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              href={`/blog?page=${i + 1}`}
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
};

export default BlogPaginationList;
