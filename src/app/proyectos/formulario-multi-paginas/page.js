import Hero from "@/app/componentes/Hero";
import SubHero from "@/app/componentes/SubHero";
import { contenidoDePagina } from "@/app/contenido/formulario-multi-paginas/contenido";
import ProyectosMain from "@/app/componentes/Proyectos/ProyectosMain";

export default function Page() {
  const { hero, subHero, main } = contenidoDePagina;
  return (
    <>
      <Hero type="sin-imagen" about={hero.about} title={hero.title} />
      <SubHero type="doble-tres-listas" content={subHero} />
      <ProyectosMain content={main} />
    </>
  );
}
