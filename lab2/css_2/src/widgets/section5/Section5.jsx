import Button from "@/shared/ui/Button";
import Section from "@/shared/ui/Section";
import SectionTitle from "@/shared/ui/SectionTitle";

import Card from "@/shared/ui/Card";

import styles from "./Section5.module.scss";

function Section5() {
  const tours = [
    {
      image: "/assets/section4/Budapest.jpg",
      title: "Будапешт, Венгрия",
      text: "Будапешт - это мосты, дворцы и термальные купальни, многие из которых расположились в фантастически красивых зданиях (взять хотя бы Геллерт или Сечени).",
      price: "1200",
    },
    {
      image: "/assets/section4/Paris.jpg",
      title: "Париж, Франция",
      text: "Город любви, искусства и изысканной кухни. Эйфелева башня, Лувр и уютные кафе.",
      price: "950",
    },
    {
      image: "/assets/section4/NewYork.jpg",
      title: "Нью-Йорк, США",
      text: "Город, который никогда не спит. Таймс- сквер, Центральный парк и Статуя Свободы.",
      price: "1500",
    },
  ];
  return (
    <Section className={styles.section}>
      <SectionTitle>Наши туры</SectionTitle>

      <div className={styles.cards}>
        {tours.map((city, index) => (
          <Card key={index} imgSrc={city.image} imgAlt={`${city.title} image`}>
            <h3 className={styles.title}>{city.title}</h3>
            <p className={styles.text}>{city.text}</p>

            <footer className={styles.footer}>
              <p className={styles.price}>{city.price}</p>
              <Button>Забронировать</Button>
            </footer>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Section5;
