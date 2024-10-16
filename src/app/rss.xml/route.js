import RSS from "rss";

import { BASE_METADATA } from "@/app/utilidades/constante";
import { getBlogPostList } from "@/app/utilidades/node-helpers/node-fs-helpers";

export async function GET() {
  // Crear el feed usando el ayudante RSS y los metadatos
  // sobre nuestro blog.
  const feed = new RSS({
    title: BASE_METADATA.title,
    description: BASE_METADATA.description,
  });

  // Utiliza el mismo ayudante que usamos en la página principal, para reunir
  // información sobre cada publicación del blog, como un array ordenado:
  const blogPosts = await getBlogPostList();

  // Para cada publicación del blog, crea un nuevo elemento en nuestro feed RSS:
  blogPosts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.abstract,
      date: post.publishedOn,
      url: `https://bubulazy.com/blog/${post.slug}`,
    });
  });

  // Genera la cadena XML en bruto usando `feed.xml`, y luego
  // envíala al cliente. Necesitamos establecer el encabezado Content-Type
  // para que los navegadores / clientes RSS lo interpreten
  // como XML, y no como texto sin formato.
  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
