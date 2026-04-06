import Button from "@/shared/ui/Button";
import Section from "@/shared/ui/Section";
import SectionTitle from "@/shared/ui/SectionTitle";

import Card from "@/shared/ui/Card";

import styles from "./Section6.module.scss";

function Section6() {
  const reviews = [
    {
      image: "/assets/section4/Budapest.jpg",
      name: "Будапешт, Венгрия",
      sinopsis:
        "Будапешт - это мосты, дворцы и термальные купальни, многие из которых расположились в фантастически красивых зданиях (взять хотя бы Геллерт или Сечени).",
      text: "1200",
    },
    {
      image: "/assets/section4/Budapest.jpg",
      name: "Будапешт, Венгрия",
      sinopsis:
        "Будапешт - это мосты, дворцы и термальные купальни, многие из которых расположились в фантастически красивых зданиях (взять хотя бы Геллерт или Сечени).",
      text: "1200",
    },
    {
      image: "/assets/section4/Budapest.jpg",
      name: "Будапешт, Венгрия",
      sinopsis:
        "Будапешт - это мосты, дворцы и термальные купальни, многие из которых расположились в фантастически красивых зданиях (взять хотя бы Геллерт или Сечени).",
      text: "1200",
    },
  ];
  return (
    <Section className={styles.section}>
      <SectionTitle>Отзывы наших клиентов</SectionTitle>
    </Section>
  );
}

export default Section6;
