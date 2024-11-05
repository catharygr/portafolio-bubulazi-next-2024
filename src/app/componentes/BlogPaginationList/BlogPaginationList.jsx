"use client";
import BlogCard from "../BlogCard";
import styles from "./BlogPaginationList.module.css";
import { useState } from "react";

export default function BlogPaginationList({ blogs }) {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      {blogs.map((blog) => (
        <BlogCard
          key={blog.slug}
          {...blog}
        />
      ))}
    </>
  );
}
