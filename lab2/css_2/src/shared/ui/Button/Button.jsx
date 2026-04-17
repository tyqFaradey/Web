import styles from "./Button.module.scss";

export default function Button({
  className,
  isActive = true,
  children,
  ...props
}) {
  const combinedClassName =
    `${styles.button} ${isActive ? "" : styles.inactive} ${className || ""}`.trim();
  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
