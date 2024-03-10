import Hero from "@/app/componentes/Hero";
import SubHero from "@/app/componentes/SubHero";
import { contenidoDePagina } from "@/app/contenido-proyectos/sarajevo-tours/contenido";
import ProyectosMain from "@/app/componentes/Proyectos/ProyectosMain";
import ProyectosAside from "@/app/componentes/Proyectos/ProyectosAside/ProyectosAside";
import OtrosProyectos from "@/app/componentes/Proyectos/OtrosProyectos";
import { PROYECTOS } from "@/app/contenido-proyectos/home-page/proyectos";
import InfoLink from "@/app/componentes/InfoLink";

export default function Page() {
  const { id, hero, subHero, main, aside, infoLink } = contenidoDePagina;

  return (
    <>
      <Hero
        type="sin-imagen"
        about={hero.about}
        title={hero.title}
      />
      <SubHero
        type="doble-tres-listas"
        content={subHero}
      />
      <ProyectosMain content={main} />
      <ProyectosAside content={aside} />
      <OtrosProyectos
        proyectos={PROYECTOS}
        id={id}
      />
      <InfoLink
        type="single-link"
        content={infoLink}
      />
    </>
  );
}
