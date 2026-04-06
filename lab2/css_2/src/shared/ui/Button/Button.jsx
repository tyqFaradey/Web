import styles from "./Button.module.scss";

function Button({ children, className, ...props }) {
  const combinedClassName = `${styles.button} ${className || ""}`.trim();

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

export default Button;
