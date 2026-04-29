import { MessageCircle } from "lucide-react";
import { MenuCard } from "@/components/menu/MenuCard";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import type { MenuCategory } from "@/data/menu";
import { buildWhatsAppLink } from "@/utils/whatsapp";

type MenuCategorySectionProps = {
  category: MenuCategory;
};

export function MenuCategorySection({ category }: MenuCategorySectionProps) {
  if (category.layout === "feature") {
    const [featured, ...others] = category.items;

    return (
      <section id={category.id} className="section-anchor bg-surface-container-low py-24">
        <div className="page-section">
          <div className="page-container">
            <Header title={category.title} description={category.description} />
            <div className="grid gap-6 md:h-[600px] md:grid-cols-4 md:grid-rows-2">
              <Reveal className="flex flex-col rounded-[1.75rem] bg-surface-container-lowest p-6 md:col-span-2 md:row-span-2">
                <div className="mb-6 flex-1 overflow-hidden rounded-2xl">
                  <SmartImage
                    src={featured.image}
                    alt={featured.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-headline text-2xl font-extrabold text-primary">
                      {featured.name}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-on-surface-variant">
                      {featured.description}
                    </p>
                    <span className="mt-4 block text-2xl font-bold text-secondary">
                      {featured.price}
                    </span>
                  </div>
                  <a
                    href={buildWhatsAppLink(`Hello I want to order ${featured.name} from Lagos Kinetic`)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary text-on-primary shadow-lg shadow-primary/20 transition-colors hover:bg-primary-container"
                    aria-label={`Order ${featured.name} on WhatsApp`}
                  >
                    <MessageCircle size={22} />
                  </a>
                </div>
              </Reveal>

              {others.map((item) => (
                <Reveal
                  key={item.name}
                  className="group flex overflow-hidden rounded-[1.75rem] bg-surface-container-lowest transition-all hover:shadow-2xl hover:shadow-primary/5"
                >
                  <div className="w-2/5 overflow-hidden">
                    <SmartImage
                      src={item.image}
                      alt={item.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex w-3/5 flex-col justify-between p-6">
                    <div>
                      <div className="mb-2 flex items-start justify-between gap-4">
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <span className="whitespace-nowrap font-bold text-secondary">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm leading-6 text-on-surface-variant">{item.description}</p>
                    </div>
                    <a
                      href={buildWhatsAppLink(`Hello I want to order ${item.name} from Lagos Kinetic`)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                    >
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (category.layout === "split") {
    return (
      <section id={category.id} className="section-anchor px-5 py-24 sm:px-6 lg:px-8">
        <div className="page-container">
          <Header title={category.title} description={category.description} />
          <div className="grid gap-8 md:grid-cols-2">
            {category.items.map((item) => (
              <Reveal
                key={item.name}
                className="group flex overflow-hidden rounded-[1.75rem] bg-surface-container-lowest transition-all hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="w-2/5 overflow-hidden">
                  <SmartImage
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex w-3/5 flex-col justify-between p-6">
                  <div>
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <span className="font-bold text-secondary">{item.price}</span>
                    </div>
                    <p className="text-sm leading-6 text-on-surface-variant">{item.description}</p>
                  </div>
                  <a
                    href={buildWhatsAppLink(`Hello I want to customize and order ${item.name} from Lagos Kinetic`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-secondary-container px-4 py-2.5 text-sm font-bold text-on-secondary-container transition-opacity hover:opacity-90"
                  >
                    <MessageCircle size={18} />
                    <span>Customize Swallow</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const isCompact = category.layout === "compact";

  return (
    <section id={category.id} className="section-anchor px-5 py-24 sm:px-6 lg:px-8">
      <div className="page-container">
        <Header title={category.title} description={category.description} />
        <div
          className={[
            "grid gap-6",
            isCompact ? "grid-cols-2 md:grid-cols-4" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          ].join(" ")}
        >
          {category.items.map((item) => (
            <Reveal key={item.name}>
              <MenuCard item={item} compact={isCompact} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Header({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <div>
        <h2 className="font-headline text-3xl font-black uppercase tracking-tight text-on-surface">
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-on-surface-variant">{description}</p>
      </div>
      <div className="hidden h-px flex-grow bg-outline-variant/30 sm:block" />
    </div>
  );
}
