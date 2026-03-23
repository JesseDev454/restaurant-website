import { ContactSection } from "@/components/sections/ContactSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { StorySection } from "@/components/sections/StorySection";

export function AboutContactPage() {
  return (
    <>
      <div className="pt-6" />
      <StorySection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
