import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <span className={styles.logoLeft}>Travel</span>
        <span className={styles.logoRight}>World</span>
      </a>

      <nav className={styles.navigation}>
        <a href="#about-section">О нас</a>
        <a href="#distanations-section">Направления</a>
        <a href="#tours-section">Туры</a>
        <a href="#reviews-section">Отзывы</a>
        <a href="#contacts-section">Контакты</a>
      </nav>
    </header>
  );
}
