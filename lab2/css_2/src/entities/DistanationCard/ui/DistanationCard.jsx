import styles from "./DistanationCard.module.scss";

export default function DestinationCard({ image, title, description, price }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={title} />

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{description}</p>

        <div className={styles.price}>от ${price}</div>
      </div>
    </div>
  );
}
