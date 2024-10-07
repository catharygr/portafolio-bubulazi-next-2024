import "./page.module.css";
import { getBlogPostList } from "../utilidades/node-helpers/node-fs-helpers";
export default async function ListadoDeBlog() {
  const blogPostList = await getBlogPostList();

  return (
    <main>
      <h1>Blog</h1>
      {blogPostList.map((blog) => (
        <p key={blog.slug}>{blog.slug}</p>
      ))}
    </main>
  );
}
