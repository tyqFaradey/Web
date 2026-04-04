import Button from "@/shared/ui/Button/Button";

import styles from "./Section1.module.scss";

import bgImage from "@/assets/Photo.png";

function Section1() {
  return (
    <section className={styles.section}>
      <img src={bgImage} alt="background" className={styles.backgroundImg} />

      <div className={styles.content}>
        <h1 className={styles.title}>Откройте мир с TravelWorld</h1>
        <p className={styles.subTitle}>
          Путешествия которые вы никогда не забудете
        </p>
        <Button className={styles.button}>Выбрать тур</Button>
      </div>
    </section>
  );
}

export default Section1;
