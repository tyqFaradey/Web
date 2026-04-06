import Button from "@/shared/ui/Button";
import SectionTitle from "@/shared/ui/SectionTitle";

import styles from "./Section2.module.scss";

import image from "@/assets/section2_img.png";

function Section2() {
  return (
    <section className={styles.section}>
      <SectionTitle>О нашем агентсве</SectionTitle>
      <div className={styles.content}>
        <h4>Мы создаем не забываемые впечатления</h4>
        <p>
          TravelWorld это команда профессиональных путешественников, которая уже
          более 15 лет помогает людям открывать для себя новые страны и
          культуры. Мы тщательно отбираем каждый тур и направление, чтобы
          обеспечить вам максимальный комфорт и безопасность во время
          путешествия. Наша философия индивидуальный подход к каждому клиенту.
          Мы не просто продаем туры, мы создаем уникальные маршруты, которые
          соответствуют вашим интересам, бюджету и предпочтениям.
        </p>
        <Button>Связаться с нами</Button>

        <img src={image} alt="img" className={styles.img} />
      </div>
    </section>
  );
}

export default Section2;
