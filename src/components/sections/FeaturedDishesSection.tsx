import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredDishes } from "@/data/menu";
import { buildWhatsAppLink } from "@/utils/whatsapp";

export function FeaturedDishesSection() {
  const mainDish = featuredDishes[0];
  const sideDish = featuredDishes[1];
  const compactDishes = featuredDishes.slice(2);

  return (
    <section className="bg-surface px-5 py-24 sm:px-6 lg:px-8">
      <div className="page-container">
        <div className="mb-12 flex items-end justify-between gap-6">
          <SectionHeading eyebrow="Our Favorites" title="Kinetic Specials" />
          <Link
            to="/menu"
            className="hidden border-b-2 border-primary-container pb-1 font-bold text-primary transition-colors hover:text-primary-dim md:block"
          >
            See Full Menu
          </Link>
        </div>

        <div className="grid gap-6 md:h-[600px] md:grid-cols-4 md:grid-rows-2">
          <Reveal className="relative overflow-hidden rounded-[1.6rem] bg-surface-container-lowest md:col-span-2 md:row-span-2">
            <img
              src={mainDish.image}
              alt={mainDish.imageAlt}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="mb-4 inline-block rounded bg-tertiary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-tertiary-fixed">
                {mainDish.badge}
              </span>
              <h3 className="font-headline text-3xl font-bold text-white">{mainDish.title}</h3>
              <p className="mt-2 max-w-sm text-sm text-stone-300">{mainDish.description}</p>
              <div className="mt-4 flex items-center gap-4">
                <span className="text-2xl font-bold text-primary-container">{mainDish.price}</span>
                <Button
                  href={buildWhatsAppLink(`Hello I want to order ${mainDish.title} from Lagos Kinetic`)}
                  target="_blank"
                  variant="whatsapp"
                  size="sm"
                >
                  Order
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal className="flex overflow-hidden rounded-[1.6rem] bg-surface-container-lowest md:col-span-2">
            <div className="w-1/2 p-6">
              <h3 className="text-xl font-bold">{sideDish.title}</h3>
              <p className="mt-2 text-xs text-on-surface-variant">{sideDish.description}</p>
              <span className="mt-4 block text-lg font-bold text-secondary">{sideDish.price}</span>
            </div>
            <div className="w-1/2 overflow-hidden">
              <img
                src={sideDish.image}
                alt={sideDish.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </Reveal>

          {compactDishes.map((dish) => (
            <Reveal
              key={dish.title}
              className="flex flex-col overflow-hidden rounded-[1.6rem] bg-surface-container-lowest"
            >
              <div className="h-1/2 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-4">
                <h3 className="text-sm font-bold">{dish.title}</h3>
                <span className="mt-3 font-bold text-primary">{dish.price}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
