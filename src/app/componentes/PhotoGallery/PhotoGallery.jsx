"use client";
import React, { Children } from "react";
import styles from "./PhotoGallery.module.css";
import PropTypes from "prop-types";

export default function PhotoGallery({ children }) {
  const [activeImgIndex, setActiveImgIndex] = React.useState(null);

  function handleImageClick(index) {
    setActiveImgIndex(activeImgIndex === index ? null : index);
  }

  return (
    <div
      className={` ${styles.gridContainer} ${
        activeImgIndex !== null ? styles.expanded : ""
      }`}
    >
      {Children.map(children, (image, index) => (
        <div
          key={index}
          className={`excluir-margin ${styles.photoContainer} ${
            activeImgIndex === index ? styles.active : ""
          }`}
          onClick={() => handleImageClick(index)}
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
