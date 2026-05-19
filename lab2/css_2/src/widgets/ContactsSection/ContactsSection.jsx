import { useState } from "react";

import { Section } from "@/shared/ui/Section";
import { Button } from "@/shared/ui/Button";
import { Buttons } from "@/shared/ui/Buttons";

import { Map } from "@/shared/ui/Map";

import styles from "./ContactsSection.module.scss";

export default function ContactsSection({ className, ...props }) {
  const combinedClassName = `${styles.content} ${className || ""}`.trim();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [center, setCenter] = useState([54.526, 15.2551]);

  const names = ["Европа", "Азия", "Америка", "Африка"];
  const api_names = ["Europe", "Asia", "America", "Africa"];

  const onClick = (index, text) => {
    setCurrentIndex(index);
    console.log(index);
  };

  return (
    <Section title="Наши контакты" id="contacts-section">
      <div className={combinedClassName} {...props}>
        <div className={styles.leftPart}>
          <h3 className={styles.title}>Свяжитесь с нами</h3>
          <div className={styles.text}>
            <p>г. Москва, ул. Тверская, д. 10, офис 45</p>
            <p>+7 (495) 123-45-67</p>
            <p>info@travelworld.ru</p>
            <p>
              Пн-Пт: 10:00-20:00 <br />
              Сб-Вс: 11:00-18:00
            </p>
          </div>
          <Buttons
            buttons={names}
            onClick={onClick}
            buttonClassName={styles.button}
          />
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <Map continent={api_names[currentIndex]} />
        </div>
      </div>
    </Section>
  );
}
