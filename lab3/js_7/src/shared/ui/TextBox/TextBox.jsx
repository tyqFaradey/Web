import styles from "./TextBox.module.scss";

export default function TextBox({
  className,
  value,
  onChange,
  placeholder,
  ...props
}) {
  const combinedClassName = `${styles.textBox} ${className || ""}`.trim();
  return (
    <input
      type="text"
      className={combinedClassName}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
}
TextBox;
