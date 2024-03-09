import HomeProyecto from "@/app/componentes/HomeProyecto";
import { PROYECTOS } from "@/app/contenido/home-page/proyectos";

export default function PageProyectos() {
  return (
    <>
      <HomeProyecto
        content={PROYECTOS}
        type="full"
      />
    </>
  );
}
