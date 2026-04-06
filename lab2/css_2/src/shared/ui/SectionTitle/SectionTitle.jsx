import styles from "./SectionTitle.module.scss";

function SctionTitle({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}

export default SctionTitle;
