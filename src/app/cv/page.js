import Hero from "@/app/componentes/Hero";
import imagenCV from "@/app/assets/imagen/generales/foto-uno.png";
import styles from "./page.module.css";
import Link from "next/link";

export default function CVPage() {
  return (
    <main>
      <Hero
        type="con-imagen"
        title="Curriculum Vitae: Catary García Rivas."
        image={imagenCV}
      />
      <section className={`wrapper  ${styles.containerQuery} `}>
        <div className={`${styles.flexContainer} ${styles.regularCard}`}>
          <h2 className={styles.h2}>Resumen</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Profesión</h3>
              <p>
                <span className="bold-text">Desarrolladora Web Front-End</span>{" "}
                junior con conocimientos de{" "}
                <span className="bold-text">React, Nextjs, React Router</span>,
                JavaScript, CSS, HTML, Firebase y{" "}
                <span className="bold-text">Accesibilidad</span> web.
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>Sobre mi</h3>
              <p>
                A lo largo de mi trayectoria personal y profesional, he
                demostrado una firme determinación para alcanzar mis objetivos.
                Como el de cambiar la profesión de económica a desalladora web.
                Aprendo rápidamente y estoy comprometida con seguir
                evolucionando en este campo, buscando oportunidades como
                desarrolladora Front-End en una empresa que comparta mis valores
                y donde pueda seguir aprendiendo y aportando.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper  ${styles.containerQuery} `}>
        <div className={`${styles.flexContainer} ${styles.invertedCard}`}>
          <h2 className={styles.h2}>Detalles</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Datos de contactos</h3>
              <p>
                <Link href="/#contacto-form">Formulario de contacto</Link>
              </p>
              <p>
                <a
                  target="_blank"
                  href={"https://www.linkedin.com/in/hyuik"}
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  href={"https://github.com/catharygr"}
                >
                  GitHub
                </a>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>Ubicación:</h3>
              <p>Las Palmas de Gran Canaria</p>
              <p>Disponibilidad geográfica e inmediata</p>
            </div>
            <div>
              <h3 className={styles.h3}>Conocimientos</h3>
              <p>Freelance | 2022 - Actualidad</p>
              <p>
                React, Nextjs, React Router, JavaScript, CSS, HTML, Firebase,
                Accesibilidad web, Git & GitHub, Agile, Figma.
              </p>
            </div>
          </div>
        </div>
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
              <h3 className={styles.h3}>
                Empresa de Alimentación Ecológica Finca La Sombra - 2014-2021.
              </h3>
              <p>Administración, distribución, venta.</p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Clínica Dental Blancodent - 2011-2014
              </h3>
              <p>Administrativo, Recepción y Relaciones Públicas.</p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Empresa Jupama, Las Palmas de G.C. - 2007-2011
              </h3>
              <p>Cajera Salón Recreativo.</p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Empresa Productos Lácteos, Las Palmas de G.C. - 1993-2007
              </h3>
              <p>Contabilidad, Finanzas y Salarios.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper  ${styles.containerQuery} `}>
        <div className={`${styles.flexContainer} ${styles.invertedCard}`}>
          <h2 className={styles.h2}>Varios Proyectos</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <p>
                En mi portafolio personal varios proyectos propios:{" "}
                {/* <a
                  target="_blank"
                  href={"https://portafolio-bubulazi-next-2024.vercel.app"}
                >
                  bubulazi.com
                </a> */}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper  ${styles.containerQuery} `}>
        <div className={`${styles.flexContainer} ${styles.regularCard}`}>
          <h2 className={styles.h2}>Formación</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>
                Universidad Internacional de La Rioja - Qualentum Bootcamp React
                Front-End 2023-2024.
              </h3>
              <p>Desarrolladora web Front-End React-Next-JavaScript-HTML-CSS</p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Plataforma web interactiva online ”Josh W Comeau's Course
                Platform - Joy of React”- Cánada. 2022-2023.
              </h3>
              <p>
                Desarrolladora web Front-End React-React
                router-JavaScript-HTML-CSS
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Plataforma web interactiva online “Scrimba”- Noruega 2019-2023.
              </h3>
              <p>Desarrolladora web Front-End React-JavaScript-HTML-CSS</p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Plataforma web interactiva online “Scrimba”- Noruega 2019-2023.
              </h3>
              <p>Desarrolladora web Front-End React-JavaScript-HTML-CSS</p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Plataforma web interactiva online “Scrimba”- Noruega 2019-2023.
              </h3>
              <p>Desarrolladora web Front-End React-JavaScript-HTML-CSS</p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Plataforma web interactiva online “Scrimba”- Noruega 2019-2023.
              </h3>
              <p>Desarrolladora web Front-End React-JavaScript-HTML-CSS</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper  ${styles.containerQuery} `}>
        <div className={`${styles.flexContainer} ${styles.invertedCard}`}>
          <h2 className={styles.h2}>Datos de interés</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Clinica Dental Blancodent</h3>
              <p></p>
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
