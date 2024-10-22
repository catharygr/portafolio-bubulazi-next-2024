import React from "react";
import styles from "./PhotoGallery.module.css";
import PropTypes from "prop-types";

export default function PhotoGallery({ children }) {
  return (
    <div className={styles.gridContainer}>
      {children.map((image, index) => (
        <div
          key={index}
          className={`excluir-margin ${styles.photoContainer}`}
        >
          {image}
        </div>
      ))}
    </div>
  );
}

PhotoGallery.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
};
