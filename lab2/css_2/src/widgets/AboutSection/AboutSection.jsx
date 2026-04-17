import { Section } from "@/shared/ui/Section";
import { Button } from "@/shared/ui/Button";

import styles from "./AboutSection.module.scss";

export default function AboutSection({ className, ...props }) {
  const combinedClassName = `${styles.content} ${className || ""}`.trim();
  return (
    <Section title="О нашем агентстве" id="about-section">
      <div className={combinedClassName} {...props}>
        <div className={styles.leftPart}>
          <h3 className={styles.title}>Мы создаем не забываемые впечатления</h3>
          <p className={styles.text}>
            <div className={styles.textPart}>
              TravelWorld это команда профессиональных путешественников, которая
              уже более 15 лет помогает людям открывать для себя новые страны и
              культуры. Мы тщательно отбираем каждый тур и направление, чтобы
              обеспечить вам максимальный комфорт и безопасность во время
              путешествия.
            </div>
            <div>
              Наша философия индивидуальный подход к каждому клиенту. Мы не
              просто продаем туры, мы создаем уникальные маршруты, которые
              соответствуют вашим интересам, бюджету и предпочтениям.
            </div>
          </p>
          <Button>Связаться с нами</Button>
        </div>
        <img className={styles.image} src="/assets/section2/image.png" />
      </div>
    </Section>
  );
}
