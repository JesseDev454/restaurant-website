import { MessageCircle } from "lucide-react";
import { MenuCategorySection } from "@/components/menu/MenuCategorySection";
import { Button } from "@/components/ui/Button";
import { menuCategories } from "@/data/menu";
import { siteConfig } from "@/data/site";
import { buildWhatsAppLink } from "@/utils/whatsapp";

export function MenuPage() {
  return (
    <>
      <section className="page-section mb-10 pt-8">
        <div className="page-container">
          <h1 className="font-headline text-5xl font-extrabold leading-none tracking-tighter text-primary md:text-7xl">
            THE KINETIC <br />
            <span className="text-on-surface-variant">FLAVOURS</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-medium text-outline">
            From the bustling streets of VI to the heart of your home. Explore our curated menu of modern Nigerian classics.
          </p>
          <div className="mt-6">
            <Button
              href={buildWhatsAppLink(siteConfig.whatsApp.menuMessage)}
              target="_blank"
              icon={<MessageCircle size={20} />}
              variant="whatsapp"
            >
              Order from This Menu
            </Button>
          </div>
        </div>
      </section>

      <div className="sticky top-[72px] z-30 mb-4 border-y border-outline-variant/10 bg-background/95 py-4 backdrop-blur-md">
        <div className="page-section">
          <div className="page-container flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            {menuCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="whitespace-nowrap rounded-full bg-surface-container-high px-6 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-on-primary"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {menuCategories.map((category) => (
        <MenuCategorySection key={category.id} category={category} />
      ))}
    </>
  );
}
