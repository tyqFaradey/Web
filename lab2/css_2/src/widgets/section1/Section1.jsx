import Button from "@/shared/ui/Button";
import Section from "@/shared/ui/Section";
import styles from "./Section1.module.scss";

import bgImage from "@/assets/section1_bg_img.png";

function Section1() {
  return (
    <Section className={styles.section}>
      <img src={bgImage} alt="background" className={styles.backgroundImg} />

      <div className={styles.content}>
        <h1 className={styles.title}>Откройте мир с TravelWorld</h1>
        <p className={styles.subTitle}>
          Путешествия которые вы никогда не забудете
        </p>
        <Button className={styles.button}>Выбрать тур</Button>
      </div>
    </Section>
  );
}

export default Section1;
