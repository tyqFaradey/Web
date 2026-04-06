import styles from "./Card.module.scss";

function Card({ imgSrc, imgAlt, className, children, ...props }) {
  const combinedClassName = `${styles.card} ${className || ""}`.trim();
  return (
    <article className={combinedClassName} {...props}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <div className={styles.content}>{children}</div>
    </article>
  );
}

export default Card;
