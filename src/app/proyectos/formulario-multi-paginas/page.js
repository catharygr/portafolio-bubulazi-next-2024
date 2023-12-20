import Hero from "@/app/componentes/Hero";
import { contenido } from "@/app/contenido/formulario-multi-paginas/contenido";

export default function Page() {
  const { hero } = contenido;
  return (
    <>
      <Hero
        type="sin-imagen"
        about={hero.about}
        title={hero.title}
      />
    </>
  );
}
