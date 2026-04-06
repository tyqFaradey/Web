import Section from "@/shared/ui/Section";
import SectionTitle from "@/shared/ui/SectionTitle";


import PhotoCarousel from "@/shared/ui/PhotoCarousel";

function Section3() {
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
    <Section>
      <SectionTitle>Наши лучшие предложения</SectionTitle>

      <PhotoCarousel slides={slides} />
    </Section>
  );
}

export default Section3;
