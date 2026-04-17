import styles from "./ReviewCard.module.scss";

export default function ReviewCard({ avatar, name, subtitle, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img className={styles.avatar} src={avatar} alt={name} />

        <div>
          <div className={styles.name}>{name}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
      </div>

      <p className={styles.text}>
        <i>"{text}"</i>
      </p>
    </div>
  );
}
