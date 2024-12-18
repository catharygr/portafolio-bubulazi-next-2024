"use client";
import Link from "next/link";
import styles from "./Formulario.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Formulario() {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando mensaje...");

    try {
      const res = await fetch("/api/sendgrid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          sender: "cathy@bubulazi.com",
          recipient: "cathy@bubulazi.com",
        }),
      });

      if (res.status === 200) {
        setStatus("El mensaje se ha enviado correctamente.");
        setForm({
          name: "",
          email: "",
          mensaje: "",
        });
      } else {
        setStatus("Ha ocurrido un error al enviar el mensaje.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Ha ocurrido un error.");
    }
  };

  return (
    <section
      className={`${styles.container} wrapper`}
      id="contacto-form"
    >
      <div className={styles.formulario}>
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            duration: 5,
          }}
          className={`${styles.contenido} flow`}
        >
          <h2>Vamos a ver sí juntos podemos hacer que funcione...</h2>
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
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            duration: 5,
          }}
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
            name="name"
            id="name"
            placeholder="¿Cómo te gustaría que te llamara?"
            className={styles.input}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <label
            htmlFor="email"
            className={styles.label}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="¿Cuál es tu dirección de correo?"
            className={styles.input}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required={true}
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
            required={true}
          />
          <p className={styles.message}>{status}</p>
          <button className={styles.btn}>Muchas gracias</button>
        </motion.form>
      </div>
    </section>
  );
}
