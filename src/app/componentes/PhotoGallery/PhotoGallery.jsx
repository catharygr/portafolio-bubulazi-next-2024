import React from "react";
import styles from "./PhotoGallery.module.css";

export default function PhotoGallery({ children }) {
  return (
    <div className={styles.photoGallery}>
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className={styles.galleryItem}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

PhotoGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
