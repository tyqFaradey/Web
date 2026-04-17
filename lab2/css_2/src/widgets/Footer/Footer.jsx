import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>World</h2>
      <p className={styles.copyright}>
        © 2025 TravelWorld. все права защищены.
      </p>
    </footer>
  );
}
