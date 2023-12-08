"use client";
import Image from "next/image";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";

// Tipo con imagen y tipo sin imagen
export default function Hero({ type, image, alt, title, about }) {
  if (type === "con-imagen") {
    return (
      <section>
        <div className={`wrapper  ${styles.containerTipoImagen}`}>
          <motion.div
            className={styles.marcoCircularImagen}
            initial={{ scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 8,
              duration: 0.8,
            }}
          >
            <Image
              src={image}
              alt={alt}
            />
          </motion.div>
          <h1 className={styles.h1}>{title}</h1>
        </div>
      </section>
    );
  }
  if (type === "sin-imagen") {
    return (
    
    );
  }
}
