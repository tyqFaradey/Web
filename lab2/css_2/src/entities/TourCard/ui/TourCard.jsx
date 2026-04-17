import { Button } from "@/shared/ui/Button";

import styles from "./TourCard.module.scss";

export default function DestinationCard({ image, title, description, price }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={title} />

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{description}</p>
      </div>
      <footer className={styles.footer}>
        <div className={styles.price}>${price}</div>
        <Button className={styles.button}>Забранировать</Button>
      </footer>
    </div>
  );
}
