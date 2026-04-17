import { Section } from "@/shared/ui/Section";
import { Carousel } from "@/features/Carousel";

import styles from "./CarouselSection.module.scss";

export default function CarouselSection({ className, ...props }) {
  const combinedClassName = `${styles.content} ${className || ""}`.trim();

  const slides = [
    {
      image: "/assets/section3/Edinburgh.png",
      text: "Эдинбург, Шотландия",
      caption:
        "Столица шотландии не оставит равнодушными любителей средневековья",
    },
    {
      image: "/assets/section3/NewYork.png",
      text: "21212121212",
      caption: "Свваыапывпрапрневековья",
    },
  ];

  return (
    <Section className={styles.section} title="Наши лучшие предложения">
      <div className={combinedClassName} {...props}>
        <Carousel slides={slides} className={styles.carousel} />
      </div>
    </Section>
  );
}
