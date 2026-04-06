import styles from "./Title.module.scss";

function Title({ children, className, ...props }) {
  const combinedClassName = `${styles.title} ${className || ""}`.trim();
  return (
    <h1 className={combinedClassName} {...props}>
      {children}
    </h1>
  );
}

export default Title;
