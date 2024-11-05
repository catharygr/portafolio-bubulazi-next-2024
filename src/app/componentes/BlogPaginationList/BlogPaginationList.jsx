import BlogCard from "../BlogCard";

export default function BlogPaginationList({ blogs }) {
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
