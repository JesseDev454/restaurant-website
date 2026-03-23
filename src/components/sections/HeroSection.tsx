import { MessageCircle, Phone, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { buildWhatsAppLink } from "@/utils/whatsapp";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface px-5 py-12 sm:px-6 md:py-24 lg:px-8">
      <div className="page-container grid items-center gap-12 lg:grid-cols-2">
        <div className="relative z-10">
          <h1 className="font-headline text-5xl font-extrabold leading-[1.05] tracking-tight text-on-surface sm:text-6xl md:text-7xl">
            Delicious Local <span className="text-primary italic">Meals</span>, Fast & Fresh
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
            {siteConfig.brand.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button
              href={buildWhatsAppLink(siteConfig.whatsApp.heroMessage)}
              target="_blank"
              icon={<MessageCircle size={20} />}
              variant="whatsapp"
              size="lg"
            >
              Order on WhatsApp
            </Button>
            <Button href="/menu" icon={<UtensilsCrossed size={20} />} variant="secondary" size="lg">
              View Menu
            </Button>
            <Button
              href={siteConfig.contact.phoneHref}
              icon={<Phone size={20} />}
              variant="ghost"
              size="lg"
            >
              Call Now
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -rotate-3 scale-105 rounded-[2rem] bg-primary/5" />
          <div className="relative flex flex-col gap-4">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE2GkGFI4x6nUZwmZa_bt3C3RjLn6ULxSB6feJise2gOK3oDnoUzTWTlt1SQGHvi929GoFPWeWu4VEeiFavjqt9C9v0x1xWdKAWfZjKVFNQ0Tbe2GfwAJQFr0H8W_02paLIEhshBsl2YbnxyNHKxp0FCVlwQznmY8_Bc61E_0t4i1JlAZ_sxz-fgl4oth-cKsi1gH2E6jW3OJPfA3KUfrIktqy3W7WT35a_cPC9lAWMk7TWjaXMh5DQyCcZk6ymnbNk-70ES0VaB6d"
              alt="Premium close up of smoky Nigerian jollof rice with roasted chicken"
              className="h-64 w-full rounded-3xl object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02] md:h-80"
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0HRHcvwZksNohOSnCsRxK7z_C84ba5svCqHEz7TT-apqQwaTsCNM4Gq4q2zyiHG0tHkJB2w-jxSkdii1bBGQjLOVCoDkfxciZslir19b_TwUEvcW_b4H4Ztj1eXVBIisw2OyWFdRfeurweIdy2tFGEHd0ns4q_-6Rq4i6YcIOFiOydvVgOUUyTIEAsRUxAS4focS5YyBQL90aKwHc7ClYgDvQf99N2wr70_SepcsNGcHrJnIdVIRu-2xYJmqAyKSrnDbqDCWelOlN"
                alt="Traditional Nigerian suya meat skewers with spicy yaji pepper"
                className="h-48 w-full rounded-3xl object-cover shadow-xl"
              />
              <div className="flex flex-col items-center justify-center rounded-3xl bg-tertiary-container p-6 text-center">
                <span className="font-headline text-4xl font-black text-on-tertiary-container">4.9/5</span>
                <span className="mt-2 text-xs font-bold uppercase tracking-widest text-on-tertiary-fixed-variant">
                  Customer Rating
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-2 hidden rounded-2xl bg-white p-4 shadow-lg md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-primary">
                <UtensilsCrossed size={22} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-tight text-stone-400">
                  Selling Fast
                </p>
                <p className="text-sm font-bold text-on-surface">Smokey Party Jollof</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
