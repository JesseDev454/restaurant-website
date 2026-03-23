import { FeaturedDishesSection } from "@/components/sections/FeaturedDishesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustSignalsSection } from "@/components/sections/TrustSignalsSection";
import { VisitSection } from "@/components/sections/VisitSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSignalsSection />
      <FeaturedDishesSection />
      <TestimonialsSection />
      <VisitSection />
    </>
  );
}
