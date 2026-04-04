import Logo from "@/shared/ui/Logo/Logo";

import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Logo link="#" />
      <nav className={styles.navigation}>
        <a className={styles.navigationLink} href="#">
          О нас
        </a>
        <a className={styles.navigationLink} href="#">
          Направления
        </a>
        <a className={styles.navigationLink} href="#">
          Туры
        </a>
        <a className={styles.navigationLink} href="#">
          Отзывы
        </a>
        <a className={styles.navigationLink} href="#">
          Контакты
        </a>
      </nav>
    </header>
  );
}

export default Header;
