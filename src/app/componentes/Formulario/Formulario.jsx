"use client";
import Link from "next/link";
import styles from "./Formulario.module.css";
import { useState } from "react";

export default function Formulario() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    formMessage: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const toSend = {
      name: form.name,
      email: form.email,
      mensaje: form.mensaje,
    };

    fetch("https://formsubmit.co/ajax/39ffe87ad3d3e541a774b20e20d025a2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(toSend),
    })
      .then((response) => response.json())
      .then(
        setForm({
          name: "",
          email: "",
          mensaje: "",
          formMessage: "Mensaje enviado, gracias",
        })
      )
      .catch(
        setForm({
          ...form,
          formMessage: "Ha ocurido un error...",
        })
      );
  }
  return (
    <section
      className={styles.container}
      id="contacto-form"
    >
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
            <Link
              target="_blank"
              href="https://www.linkedin.com/"
            >
              LinkedIn
            </Link>{" "}
            | {""}
            <Link
              target="_blank"
              href="https://github.com/catharygr"
            >
              GitHub
            </Link>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <label
            htmlFor="name"
            className={styles.label}
          >
            Nombre:
          </label>
          <input
            type="text"
            name="Nombre"
            id="name"
            placeholder="¿Cómo te gustaría que te llamara?"
            className={styles.input}
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
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
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <label
            htmlFor="mensaje"
            className={styles.label}
          >
            Mensaje:
          </label>
          <input
            type="text"
            name="_honey"
            style={{ display: "none" }}
          ></input>
          <textarea
            name="mensaje"
            id="mensaje"
            cols="30"
            rows="6"
            placeholder="Escribe aquí tu mensaje..."
            className={styles.input}
            value={form.mensaje}
            onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          />
          <p className={styles.message}>{form.formMessage}</p>
          <button className={styles.btn}>Muchas gracias</button>
        </form>
      </div>
    </section>
  );
}
