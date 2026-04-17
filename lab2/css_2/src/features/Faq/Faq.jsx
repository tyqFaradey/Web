import { useState } from "react";
import styles from "./Faq.module.scss";

function FaqItem({ question, answer, is_open, on_toggle }) {
  return (
    <div className={styles.item}>
      <button className={styles.question} onClick={on_toggle}>
        {question}
        <span className={styles.icon}>{is_open ? "-" : "+"}</span>
      </button>

      <div className={`${styles.answer} ${is_open ? styles.open : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function Faq({ items }) {
  const [active_index, set_active_index] = useState(null);

  const handle_toggle = (index) => {
    set_active_index(active_index === index ? null : index);
  };

  return (
    <div className={styles.faq}>
      {items.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          is_open={active_index === index}
          on_toggle={() => handle_toggle(index)}
        />
      ))}
    </div>
  );
}
