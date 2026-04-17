import styles from "./List.module.scss";

export default function List({ items, render_item, class_name = "" }) {
  return (
    <div className={`${styles.list} ${class_name}`}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          {render_item(item, index)}
        </div>
      ))}
    </div>
  );
}
