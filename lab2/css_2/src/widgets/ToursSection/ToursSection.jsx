import { Section } from "@/shared/ui/Section";
import { List } from "@/shared/ui/List";

import { TourCard } from "@/entities/TourCard";

import styles from "./ToursSection.module.scss";

export default function ToursSection({ className, ...props }) {
  const combinedClassName = `${styles.content} ${className || ""}`.trim();

  const data = [
    {
      image: "/assets/section4/Budapest.jpg",
      title: "Будапешт, Венгрия",
      description:
        "Будапешт - это мосты, дворцы и термальные купальни, многие из которых расположились в фантастически красивых зданиях (взять хотя бы Геллерт или Сечени).",
      price: "1200",
    },
    {
      image: "/assets/section4/Paris.jpg",
      title: "Париж, Франция",
      description:
        "Город любви, искусства и изысканной кухни. Эйфелева башня, Лувр и уютные кафе.",
      price: "950",
    },
    {
      image: "/assets/section4/NewYork.jpg",
      title: "Нью-Йорк, США",
      description:
        "Город, который никогда не спит. Таймс- сквер, Центральный парк и Статуя Свободы.",
      price: "1500",
    },
  ];

  return (
    <Section title="Наши туры" id="tours-section">
      <div className={combinedClassName} {...props}>
        <List items={data} render_item={(item) => <TourCard {...item} />} />
      </div>
    </Section>
  );
}
