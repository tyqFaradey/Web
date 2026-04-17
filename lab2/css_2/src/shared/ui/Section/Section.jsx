import { Children } from "react";
import styles from "./Section.module.scss";

export default function Section(props) {
  const { title, children, background, className, ...rest } = props;
  const combinedClassName = `${styles.section} ${className || ""}`.trim();
  return (
    <section
      className={combinedClassName}
      style={{ "--bg": `url(${background})` }}
      {...rest}
    >
      {"background" in props && <div className={styles.overlay} />}

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
    </section>
  );
}
