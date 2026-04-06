import styles from "./Logo.module.scss";

function Logo({ className, ...props }) {
  const combinedClassName = `${styles.logo} ${className || ""}`.trim();
  return (
    <a className={combinedClassName} {...props}>
      <span className={styles.logoLeft}>Travel</span>
      <span className={styles.logoRight}>World</span>
    </a>
  );
}

export default Logo;
