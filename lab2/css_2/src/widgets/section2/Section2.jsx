import Button from "@/shared/ui/Button";
import Section from "@/shared/ui/Section";
import SectionTitle from "@/shared/ui/SectionTitle";
import Title from "@/shared/ui/Title";

import styles from "./Section2.module.scss";

import image from "@/assets/section2_img.png";

function Section2() {
  return (
    <Section>
      <SectionTitle>О нашем агентсве</SectionTitle>

      <div className={styles.content}>
        <div className={styles.textContainer}>
          <Title className={styles.title}>
            Мы создаем не забываемые впечатления
          </Title>
          <p className={styles.text}>
            <div className={styles.textPart}>
              TravelWorld это команда профессиональных путешественников, которая
              уже более 15 лет помогает людям открывать для себя новые страны и
              культуры. Мы тщательно отбираем каждый тур и направление, чтобы
              обеспечить вам максимальный комфорт и безопасность во время
              путешествия.
            </div>
            <div className={styles.textPart}>
              Наша философия индивидуальный подход к каждому клиенту. Мы не
              просто продаем туры, мы создаем уникальные маршруты, которые
              соответствуют вашим интересам, бюджету и предпочтениям.
            </div>
          </p>
          <Button className={styles.button}>Связаться с нами</Button>
        </div>
        <img src={image} alt="img" className={styles.img} />
      </div>
    </Section>
  );
}

export default Section2;
