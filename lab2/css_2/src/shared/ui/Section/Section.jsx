import styles from "./Section.module.scss";

function Section({ children, className, ...props }) {
  const combinedClassName = `${styles.section} ${className || ""}`.trim();

  return (
    <section className={combinedClassName} {...props}>
      {children}
    </section>
  );
}

export default Section;
