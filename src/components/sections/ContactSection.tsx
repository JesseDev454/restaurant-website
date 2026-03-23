import { Clock3, MapPinned, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";
import { buildWhatsAppLink } from "@/utils/whatsapp";

export function ContactSection() {
  return (
    <section className="px-5 pb-24 sm:px-6 lg:px-8">
      <div className="page-container grid overflow-hidden rounded-[2rem] bg-surface-container lg:grid-cols-2">
        <Reveal className="p-8 md:p-12 lg:p-16">
          <h2 className="font-headline text-4xl font-bold">Get in touch</h2>
          <div className="mt-10 space-y-8">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <MapPinned size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold">Our Location</h3>
                <p className="mt-1 text-on-surface-variant">{siteConfig.contact.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Clock3 size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold">Opening Hours</h3>
                <p className="mt-1 text-on-surface-variant">{siteConfig.contact.hours}</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold">Phone</h3>
                <a href={siteConfig.contact.phoneHref} className="mt-1 block text-on-surface-variant">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button
              href={buildWhatsAppLink(siteConfig.whatsApp.reservationMessage)}
              target="_blank"
              icon={<MessageCircle size={20} />}
              variant="whatsapp"
            >
              Chat on WhatsApp
            </Button>
            <Button href={siteConfig.contact.phoneHref} icon={<Phone size={20} />} variant="secondary">
              Call the Restaurant
            </Button>
          </div>
        </Reveal>

        <Reveal className="relative min-h-[360px] bg-surface-dim lg:min-h-full">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABryy0QlUvEq0QI90j1w4LXbjvbk3y7FPbd_kq4OQxkxzG6skyHNlxT16hi0k_PG_hufTWMk3X_lVN8B03yoRK6ZOOB_v8fcIlK7B7eu4ySXx_fk-BrrxTkZ6I5wNoHhmGNCpg2sVHe3mhKK01_FVVIm9M_AS-S90IixllEKugbrNWpLNsLnm9LISnc2CFXTnwVKgVrqc0ueNwt_hqS7pVJB-uJppgr-jmYWdXs0cIrBNY7uSMUQjhHgFfGZm9BoVV4ezih79gglg_"
            alt="Stylized map showing Victoria Island Lagos area"
            className="h-full w-full object-cover grayscale opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href="https://maps.google.com/?q=12+Adeola+Odeku+St,+Victoria+Island,+Lagos"
              target="_blank"
              rel="noreferrer"
              className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-on-primary shadow-2xl transition-transform hover:scale-110"
              aria-label="Open Lagos Kinetic in Google Maps"
            >
              <MapPinned size={34} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
