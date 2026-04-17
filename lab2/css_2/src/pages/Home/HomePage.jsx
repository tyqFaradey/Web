import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";

import { MainSection } from "@/widgets/MainSection";
import { AboutSection } from "@/widgets/AboutSection";
import { CarouselSection } from "@/widgets/CarouselSection";
import { DistanationsSection } from "@/widgets/DistanationsSection";
import { ToursSection } from "@/widgets/ToursSection";
import { ReviewsSection } from "@/widgets/ReviewsSection";
import { FaqSection } from "@/widgets/FaqSection";
import { ContactsSection } from "@/widgets/ContactsSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <MainSection />
      <AboutSection />
      <CarouselSection />
      <DistanationsSection />
      <ToursSection />
      <ReviewsSection />
      <FaqSection />
      <ContactsSection />
      <Footer />
    </>
  );
}
