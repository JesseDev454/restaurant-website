import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { galleryItems } from "@/data/menu";

export function GallerySection() {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="page-container grid grid-cols-2 gap-4 md:h-[500px] md:grid-cols-4">
        {galleryItems.map((item) => (
          <Reveal key={item.alt} className={`${item.span} overflow-hidden rounded-2xl`}>
            <SmartImage
              src={item.image}
              alt={item.alt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
