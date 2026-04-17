import React, { useState } from "react";

import { Button } from "@/shared/ui/Button";

import styles from "./Carousel.module.scss";

export default function Carousel({ slides, className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={`${styles.carusel} ${className}`}>
      <div className={styles.controls}>
        <Button
          className={`${styles.button} ${styles.prev}`}
          onClick={prevSlide}
        >
          ⇠
        </Button>

        <Button
          className={`${styles.button} ${styles.next}`}
          onClick={nextSlide}
        >
          ⇢
        </Button>
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
}
