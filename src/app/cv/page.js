import Hero from "@/app/componentes/Hero";
import imagenCV from "@/app/assets/imagen/generales/foto-uno.png";
import styles from "./page.module.css";
import Link from "next/link";

export default function CVPage() {
  return (
    <main className={styles.fondoImagen}>
      <Hero
        type="con-imagen"
        title="Curriculum Vitae: Catary García Rivas."
        image={imagenCV}
        alt="Foto Cv"
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
                <span className="bold-text">
                  React, Nextjs, React Router ,Open Cells, LitElement, Web
                  Components{" "}
                </span>
                , JavaScript, CSS, HTML, Firebase y{" "}
                <span className="bold-text">Accesibilidad</span> web.
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>Interés especial:</h3>
              <p>
                React | Nextjs | React Router | Open Cells | LitElement | Web
                Components | Redux | JavaScript | CSS | HTML | Firebase |
                Accesibilidad web | Git & GitHub | Agile | Figma | Jest Testing.
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>Sobre mi</h3>
              <p>
                A lo largo de mi trayectoria personal y profesional, he
                demostrado una{" "}
                <span className="bold-text">firme determinación</span> para{" "}
                <span className="bold-text">alcanzar mis objetivos, </span>
                como el de cambiar la profesión de economía a{" "}
                <span className="bold-text">desalladora web.</span>
              </p>
              <p>
                <span className="bold-text">Aprendo con rapidez</span> y estoy
                comprometida con seguir evolucionando en este campo, buscando{" "}
                <span className="bold-text">
                  oportunidades como desarrolladora
                </span>{" "}
                Front-End en una empresa que comparta mis valores y donde pueda{" "}
                <span className="bold-text">
                  continuar aprendiendo y aportando.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper  ${styles.containerQuery} `}>
        <div className={`${styles.flexContainer} ${styles.invertedCard}`}>
          <h2 className={styles.h2}>Detalles</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div className={styles.cvLinks}>
              <h3 className={styles.h3}>Datos de contactos</h3>
              <p>
                <Link href="/#contacto-form">Formulario de contacto</Link>
              </p>
              <p>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com"}
                >
                  LinkedIn
                </Link>
              </p>
              <p>
                <Link
                  target="_blank"
                  href={"https://github.com/catharygr"}
                >
                  GitHub
                </Link>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>Ubicación:</h3>
              <p>Las Palmas de Gran Canaria</p>
              <p>Disponibilidad geográfica e inmediata</p>
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
                Desarrollo y mantenimiento de la página web:{" "}
                <Link
                  target="_blank"
                  href="https://blancodent.com/"
                >
                  blancodent.com.
                </Link>
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
            <div className={styles.cvLinks}>
              <h3 className={styles.h3}>
                Enlaces directos a páginas de proyectos:
              </h3>
              <p>
                <Link
                  target="_blank"
                  href="https://opencells-ecommerce-lit-caty.netlify.app"
                >
                  E-commerce site
                </Link>
              </p>
              <p>
                <Link
                  target="_blank"
                  href="https://multipage-form-caty.netlify.app"
                >
                  Multipage form
                </Link>
              </p>
              <p>
                <Link
                  target="_blank"
                  href="https://sarajevo-turismo.netlify.app"
                >
                  Sarajevo Tours
                </Link>
              </p>
              <p>
                <Link
                  target="_blank"
                  href="https://recordatorios-react-cathy.netlify.app"
                >
                  Recordatorios
                </Link>
              </p>
              <p>
                <Link
                  target="_blank"
                  href="https://blancodent.com"
                >
                  Clínica Dental Blancodent
                </Link>
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>En mi portafolio personal:</h3>

              <p>
                <Link href={"/proyectos"}>
                  Detalles de todos los proyectos:
                </Link>
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
                Plataforma web interactiva online ”Josh W Comeau Course Platform
                - Joy of React” - Canadá. 2024 - actualidad.
              </h3>
              <p>CSS for JS Developers.</p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Universidad Internacional de La Rioja - Qualentum Bootcamp
                Front-End 2023-2024.
              </h3>
              <p>
                Desarrolladora web Front-End | React | Nextjs | JavaScript |
                HTML | CSS
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Plataforma web interactiva online ”Josh W Comeau Course Platform
                - Joy of React” - Canadá. 2022-2023.
              </h3>
              <p>
                Desarrolladora web Front-End | React | Nextjs | JavaScript |
                HTML | CSS
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Plataforma web interactiva online “Scrimba” - Noruega 2019-2023.
              </h3>
              <p>
                Desarrolladora web Front-End | React | React-router | JavaScript
                | HTML | CSS
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Plataforma web interactiva online “Platzi” - San Francisco, EEUU
                - 2020-2023.
              </h3>
              <p>
                Desarrolladora web Front-End | React | JavaScript | HTML | CSS
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Plataforma web interactiva online “FreeCodeCamp” - San
                Francisco, EEUU-2023.
              </h3>
              <p>
                Desarrolladora web Front-End | React | JavaScript | HTML | CSS
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Academia CIP, Las Palmas de G.C. con prácticas en la Asesoría
                Plaza La Feria.
              </h3>
              <p>Experto en Gestión de Salario y Seguridad Social - 2010</p>
            </div>
            <div>
              <h3 className={styles.h3}>
                Universidad Las Villas, Santa Clara.
              </h3>
              <p>Graduada en Economía - 1988-1993</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper  ${styles.containerQuery} `}>
        <div className={`${styles.flexContainer} ${styles.invertedCard}`}>
          <h2 className={styles.h2}>Idiomas</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div>
              <h3 className={styles.h3}>Castellano:</h3>
              <p>Nativo</p>
            </div>
            <div>
              <h3 className={styles.h3}>Inglés:</h3>
              <p>Nivel intermedio</p>
            </div>
          </div>
        </div>
      </section>
      <section className={`wrapper  ${styles.containerQuery} `}>
        <div className={`${styles.flexContainer} ${styles.regularCard}`}>
          <h2 className={styles.h2}>Hobbies</h2>
          <div className={`flow ${styles.jobDetails}`}>
            <div className="flow">
              <p>
                En mis tiempos libres, imparto clases particulares de baile.
                También practico varios deportes como son: El esquí alpino,
                ciclismo de touring, senderismo, running y práctica de yoga y
                meditación.
              </p>
              <p>
                Disfruto de la lectura sobre temas interesantes relacionados con
                la documentación de todo lo que estoy aprendiendo. Además, he
                desarrollado un gusto por la codificación, que se ha convertido
                en mi hobby favorito.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
