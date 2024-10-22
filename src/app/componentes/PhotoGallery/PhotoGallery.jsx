import React from "react";
import Image from "next/image";
import styles from "./PhotoGallery.module.css";

export default function PhotoGallery({ children }) {
  return (
    <div className={styles.photoGallery}>
      {images.map((url, index) => (
        <Image
          key={index}
          src={url}
          alt={`Gallery image ${index + 1}`}
          className={styles.galleryImage}
        />
      ))}
    </div>
  );
}

PhotoGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
