import Hero from "@/app/componentes/Hero";
import SubHero from "@/app/componentes/SubHero";
import { contenidoDePagina } from "@/app/contenido/formulario-multi-paginas/contenido";
import ProyectosMain from "@/app/componentes/Proyectos/ProyectosMain";
import ProyectosAside from "@/app/componentes/Proyectos/ProyectosAside/ProyectosAside";
import OtrosProyectos from "@/app/componentes/Proyectos/OtrosProyectos";
import { PROYECTOS } from "@/app/contenido/home-page/proyectos";

export default function Page() {
  const { id, hero, subHero, main, aside } = contenidoDePagina;
  return (
    <>
      <Hero type="sin-imagen" about={hero.about} title={hero.title} />
      <SubHero type="doble-tres-listas" content={subHero} />
      <ProyectosMain content={main} />
      <ProyectosAside content={aside} />
      <OtrosProyectos proyectos={PROYECTOS} id={id} />
    </>
  );
}
