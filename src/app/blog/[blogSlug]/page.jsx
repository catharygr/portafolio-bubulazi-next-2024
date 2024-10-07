import "./blog.css";
import { loadBlogPost } from "@/app/utilidades/node-helpers/node-fs-helpers.js";
import { MDXRemote } from "next-mdx-remote/rsc";
import { formatDate } from "@/app/utilidades/varias-utilidades";
import { BASE_METADATA } from "@/app/utilidades/constante";
import { Code } from "bright";
import Link from "next/link";
import { notFound } from "next/navigation";
Code.theme = "dracula-soft";
Code.lineNumbers = true;

//  Check lo de React.cache en node-helpers para no ejecutar dos veces la functión
export async function generateMetadata({ params }) {
  const draftPostData = await loadBlogPost(params.blogSlug);

  if (!draftPostData) {
    return null;
  }

  const { frontmatter } = draftPostData;

  return {
    title: `${frontmatter.title} • ${BASE_METADATA.title}`,
    description: frontmatter.abstract,
  };
}

export default async function DraftPage({ params }) {
  const draftsPostData = await loadBlogPost(params.blogSlug);

  if (!draftsPostData) {
    return notFound();
  }

  const { frontmatter, content } = draftsPostData;

  return (
    <main
      lang={frontmatter.language}
      className="wrapper drafts-styles"
    >
      <h1>{frontmatter.title}</h1>
      <div className="draft-details">
        <time>
          Última edición:{" "}
          {formatDate(frontmatter.lastEdited, frontmatter.language)}
        </time>
        <p>
          Primera edición:{" "}
          <strong>
            {formatDate(frontmatter.initialDate, frontmatter.language)}
          </strong>{" "}
          • Fase: <strong>{frontmatter.stage}</strong> • Certeza:{" "}
          <strong>{frontmatter.certainty}</strong> • Importancia:{" "}
          <strong>{frontmatter.importance}</strong>
        </p>
      </div>
      <article className="wrapper">
        <MDXRemote
          source={content}
          components={{
            pre: Code,
            a: Link,
          }}
        />
      </article>
    </main>
  );
}
