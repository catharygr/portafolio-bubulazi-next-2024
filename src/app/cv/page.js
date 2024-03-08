import Hero from "@/app/componentes/Hero";
import SubHero from "@/app/componentes/SubHero";
import imagenCV from "@/app/assets/imagen/generales/foto-uno.png";
import styles from "./page.module.css";

export const SOBRE_MI = {
  titleSuperior: "Sobre mí",
  contentSuperior: `
  ¡Hola! Iniciada en el mundo de la programación como junior, con muchas ganas de llevar a cabo todo lo aprendido en diferentes cursos, como en FreeCodeCamp, Platzi y Scrimba de CSS, HTML, JavaScript, React 18 y React Router 6. Con mucha disposición, determinación y voluntad para seguir aprendiendo. Espero a que os animéis a contactarme. Gracias de antemano.`,
  titleInferior: "Habilidades",
  contentInferior: [
    "Next.js",
    "React",
    "React Router",
    "JavaScript",
    "ES6",
    "CSS & HTML",
    "Git",
    "Firebase",
    "Netlify",
    "Vercel",
  ],
};

export default function CVPage() {
  return (
    <main>
      <Hero
        type="con-imagen"
        title="Curriculum Vitae: Catary García Rivas."
        image={imagenCV}
      />

      <section className="wrapper flow">
        <p>
          <span className="bold-text">Desarrolladora Web Front-End</span> junior
          con conocimientos de{" "}
          <span className="bold-text">React, Nextjs, React Router</span>,
          JavaScript, CSS, HTML, Firebase y{" "}
          <span className="bold-text">Accesibilidad</span> web.
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
      <section className={`wrapper  ${styles.containerQuery} `}>
        <div className={`${styles.flexContainer} ${styles.regularCard}`}>
          <h2 className={styles.h2}>Experiencia Laboral</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2022 - Actualidad</p>
              <p>
                Desarrollo y mantenimiento de la página web: blancodent.com.
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2022 - Actualidad</p>
              <p>Desarrollo página web: blancodent.com.</p>
            </div>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2022 - Actualidad</p>
              <p>Desarrollo página web: blancodent.com.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper  ${styles.containerQuery} `}>
        <div className={`${styles.flexContainer} ${styles.invertedCard}`}>
          <h2 className={styles.h2}>Varios Proyectos</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2022 - Actualidad</p>
              <p>
                Desarrollo y mantenimiento de la página web: blancodent.com.
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2022 - Actualidad</p>
              <p>Desarrollo página web: blancodent.com.</p>
            </div>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2022 - Actualidad</p>
              <p>Desarrollo página web: blancodent.com.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper  ${styles.containerQuery} `}>
        <div className={`${styles.flexContainer} ${styles.regularCard}`}>
          <h2 className={styles.h2}>Formación</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2022 - Actualidad</p>
              <p>
                Desarrollo y mantenimiento de la página web: blancodent.com.
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2022 - Actualidad</p>
              <p>Desarrollo página web: blancodent.com.</p>
            </div>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2022 - Actualidad</p>
              <p>Desarrollo página web: blancodent.com.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper  ${styles.containerQuery} `}>
        <div className={`${styles.flexContainer} ${styles.invertedCard}`}>
          <h2 className={styles.h2}>Datos de interes</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2022 - Actualidad</p>
              <p>
                Desarrollo y mantenimiento de la página web: blancodent.com.
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2022 - Actualidad</p>
              <p>Desarrollo página web: blancodent.com.</p>
            </div>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p>Freelance | 2022 - Actualidad</p>
              <p>Desarrollo página web: blancodent.com.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
