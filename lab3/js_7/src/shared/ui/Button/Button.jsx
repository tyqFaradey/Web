

import styles from "./Button.module.scss";

export default function Button({
  className,
  outlined = false,
  children,
  ...props
}) {
  const combinedClassName =
    `${styles.button} ${outlined ? styles.outlined : ""} ${className || ""}`.trim();
  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
