import { Hero } from "@/components/Hero";
import { StatsCounter } from "@/components/StatsCounter";
import { SectionDivider } from "@/components/SectionDivider";
import { ServicesPreview } from "@/components/ServicesPreview";
import { ValuesSection } from "@/components/ValuesSection";
import { TeamPreview } from "@/components/TeamPreview";
import { WhyUs } from "@/components/WhyUs";
import { ContactBanner } from "@/components/ContactBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <SectionDivider />
      <ServicesPreview />
      <SectionDivider />
      <ValuesSection />
      <SectionDivider />
      <TeamPreview />
      <WhyUs />
      <ContactBanner />
    </>
  );
}
