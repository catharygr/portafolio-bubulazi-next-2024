import Hero from "@/app/componentes/Hero";
import imagenCV from "@/app/assets/imagen/generales/foto-uno.png";

export default function CVPage() {
  return (
    <main>
      <Hero
        type="con-imagen"
        title="Curriculum Vitae: Desarrolladora Front End"
        image={imagenCV}
      />
      <section className="wrapper flow">
        <p>
          <span className="bold-text">Desarrolladora Web Front-End</span> junior
          con conocimientos de React, Nextjs, React Router, JavaScript, CSS,
          HTML, Firebase y Accesibilidad web.
        </p>
        <p>
          A lo largo de mi trayectoria personal y profesional, he demostrado una
          firme determinación para alcanzar mis objetivos. Como el de cambiar la
          profesión de económica a desalladora web. Aprendo rápidamente y estoy
          comprometida con seguir evolucionando en este campo, buscando
          oportunidades como desarrolladora Front-End en una empresa que
          comparta mis valores y donde pueda seguir aprendiendo y aportando.
        </p>
      </section>
      <section></section>
    </main>
  );
}
