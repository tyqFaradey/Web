import styles from "./Logo.module.scss";

function Logo({ href, className }) {
  const combinedClassName = `${styles.logo} ${className || ""}`.trim();
  return (
    <a href={href} className={combinedClassName}>
      <span className={styles.logoLeft}>Travel</span>
      <span className={styles.logoRight}>World</span>
    </a>
  );
}

export default Logo;
