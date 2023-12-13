import Link from "next/link";
import styles from "./Formulario.module.css";

export default function Formulario() {
  return (
    <section className={styles.container}>
      <div className={`${styles.formulario} wrapper`}>
        <div className={`${styles.contenido} flow`}>
          <h2 className={styles.h2}>
            Vamos a ver sí juntos podemos hacer que funcione...
          </h2>
          <p>
            Si estás buscando a un desarrollador frontend junior con quién te
            gustaría trabajar o simplemente deseas conectarte/hacer una
            pregunta, no dudes en escribirme.
          </p>
          <div className={styles.misEnlaces}>
            <Link href="https://github.com/catharygr">LinkedIn</Link> | {""}
            <Link href="https://www.linkedin.com/in/hyuik">GitHub</Link>
          </div>
        </div>
        <form className={styles.form}>
          <input
            type="text"
            name="Nombre"
            id="name"
            placeholder="¿Cómo te gustaria que te llamara?"
            className={styles.input}
          />
          <label
            htmlFor="email"
            className={styles.label}
          >
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="¿Cuál es tu dirección de correo?"
            className={styles.input}
          />
          <label
            htmlFor="mensaje"
            className={styles.label}
          >
            Mensaje:
          </label>
          <textarea
            name="mensaje"
            id="mensaje"
            cols="30"
            rows="6"
            placeholder="Escribe aquí tu mensaje..."
            className={styles.input}
          />
          <button className={styles.btn}>Muchas gracias</button>
        </form>
      </div>
    </section>
  );
}
