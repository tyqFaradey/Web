import React, { useState } from "react";

import styles from "./PhotoCarousel.module.scss";

const PhotoCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.carusel}>
      <div className={styles.controls}>
        <button
          className={`${styles.button} ${styles.prev}`}
          onClick={prevSlide}
        >
          ‹
        </button>

        <button
          className={`${styles.button} ${styles.next}`}
          onClick={nextSlide}
        >
          ›
        </button>
      </div>

      <div className={styles.content}>
        <img
          className={styles.image}
          src={slides[currentIndex].image}
          alt={slides[currentIndex].text}
        />
        <div className={styles.description}>
          <p>{slides[currentIndex].text}</p>
          <p>{slides[currentIndex].caption}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoCarousel;
