import styles from './Header.module.scss'

function Header() {

  return (
    <header className={styles.header}>
      <a href='#' className={styles.logo}>
        <span className={styles.logoLeft}>Travel</span>
        <span className={styles.logoRight}>World</span>
      </a>
      <nav className={styles.navigation}>
        <a className={styles.navigationLink} href='#'>О нас</a>
        <a className={styles.navigationLink} href='#'>Направления</a>
        <a className={styles.navigationLink} href='#'>Туры</a>
        <a className={styles.navigationLink} href='#'>Отзывы</a>
        <a className={styles.navigationLink} href='#'>Контакты</a>
      </nav>
    </header>
  )
}

export default Header
