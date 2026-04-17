import { Section } from "@/shared/ui/Section";
import { Faq } from "@/features/Faq";

import styles from "./FaqSection.module.scss";

export default function FaqSection({ className, ...props }) {
  const combinedClassName = `${styles.content} ${className || ""}`.trim();

  const data = [
    { question: "Как забронировать тур?", answer: "" },
    {
      question: "Какие документы нужны для путешествия?",
      answer: "",
    },
    {
      question: "Есть ли у вас страховка?",
      answer: "",
    },
    {
      question: "Можно ли изменить дату поездки после бронирования?",
      answer: "",
    },
    {
      question: "Что делать, если тур отменяется?",
      answer: "",
    },
  ];

  return (
    <Section title="Часто задаваемые вопросы" id="faq-section">
      <div className={combinedClassName} {...props}>
        <Faq items={data} />
      </div>
    </Section>
  );
}
