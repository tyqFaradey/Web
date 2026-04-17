import { Button } from "@/shared/ui/Button";
import { Section } from "@/shared/ui/Section";

import styles from "./MainSection.module.scss";
import bg from "/assets/section1/background.png";

export default function MainSection({ className, ...props }) {
  const combinedClassName = `${styles.content} ${className || ""}`.trim();
  return (
    <Section
      className={styles.section}
      title="Откройте мир с TravelWorld"
      background={bg}
    >
      <div className={combinedClassName} {...props}>
        <p className={styles.text}>
          Путешествия которые вы никогда не забудете
        </p>
        <Button>Выбрать тур</Button>
      </div>
    </Section>
  );
}
