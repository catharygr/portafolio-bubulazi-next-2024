import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import styles from "./PhotoGallery.module.css";

export default function PhotoGallery({ images }) {
  return (
    <div className={styles.photoDallery}>
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
