import Hero from "@/app/componentes/Hero";
import HomeProyecto from "@/app/componentes/HomeProyecto";
import { PROYECTOS } from "@/app/contenido/home-page/proyectos";

export default function PageProyectos() {
  return (
    <>
      <Hero
        type="sin-imagen"
        about="Mis proyectos personales"
        title="Todos los proyectos"
      />
      <HomeProyecto content={PROYECTOS} type="full" />
    </>
  );
}
