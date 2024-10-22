import React from "react";
import styles from "./PhotoGallery.module.css";
import PropTypes from "prop-types";

export default function PhotoGallery({ children }) {
  return (
    <div className={styles.gridContainer}>
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className={styles.photoContainer}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

PhotoGallery.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
};
