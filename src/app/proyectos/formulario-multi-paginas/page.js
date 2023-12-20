import Hero from "@/app/componentes/Hero";
import SubHero from "@/app/componentes/SubHero";
import { contenidoDePagina } from "@/app/contenido/formulario-multi-paginas/contenido";

export default function Page() {
  const { hero, subHero } = contenidoDePagina;
  return (
    <>
      <Hero type="sin-imagen" about={hero.about} title={hero.title} />
      <SubHero type="doble-tres-listas" content={subHero} />
    </>
  );
}
