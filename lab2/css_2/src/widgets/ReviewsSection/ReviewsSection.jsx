import { Section } from "@/shared/ui/Section";
import { List } from "@/shared/ui/List";

import { ReviewCard } from "@/entities/ReviewCard";

import styles from "./ReviewsSection.module.scss";

export default function ReviewsSection({ className, ...props }) {
  const combinedClassName = `${styles.content} ${className || ""}`.trim();

  const data = [
    {
      avatar: "/assets/section4/Budapest.jpg",
      name: "Галина Алексеевна",
      subtitle: "Тур по италии, май 2025",
      text: "Это было самое потрясающее путешествие в моей жизни! Все было организовано на высшем уровне - трансферы, экскурсии, отели. Особенно понравился гид в Риме, который показал нам город с неожиданной стороны.",
    },
    {
      avatar: "/assets/section4/Budapest.jpg",
      name: "Галина Алексеевна",
      subtitle: "Тур по италии, май 2025",
      text: "Это было самое потрясающее путешествие в моей жизни! Все было организовано на высшем уровне - трансферы, экскурсии, отели. Особенно понравился гид в Риме, который показал нам город с неожиданной стороны.",
    },
    {
      avatar: "/assets/section4/Budapest.jpg",
      name: "Галина Алексеевна",
      subtitle: "Тур по италии, май 2025",
      text: "Это было самое потрясающее путешествие в моей жизни! Все было организовано на высшем уровне - трансферы, экскурсии, отели. Особенно понравился гид в Риме, который показал нам город с неожиданной стороны.",
    },
  ];

  return (
    <Section title="Отзывы наших клиентов" id="reviews-section">
      <div className={combinedClassName} {...props}>
        <List items={data} render_item={(item) => <ReviewCard {...item} />} />
      </div>
    </Section>
  );
}
