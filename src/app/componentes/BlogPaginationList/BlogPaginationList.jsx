"use client";
import { useState } from "react";
import BlogCard from "../BlogCard";
import styles from "./BlogPagination.module.css";

export default function BlogPaginationList({ blogs }) {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

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
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={currentPage === i + 1 ? styles.active : ""}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </>
  );
}
