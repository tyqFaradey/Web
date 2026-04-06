import styles from "./SectionTitle.module.scss";

function SctionTitle({ children, className, ...props }) {
  const combinedClassName = `${styles.title} ${className || ""}`.trim();
  return (
    <h1 className={combinedClassName} {...props}>
      {children}
    </h1>
  );
}

export default SctionTitle;
