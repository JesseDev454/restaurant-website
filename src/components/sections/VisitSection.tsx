import { MapPinned, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { iconMap } from "@/utils/icons";
import { buildWhatsAppLink } from "@/utils/whatsapp";

export function VisitSection() {
  return (
    <section className="px-5 py-12 pb-24 sm:px-6 lg:px-8">
      <div className="page-container overflow-hidden rounded-[2.5rem] bg-primary p-8 text-on-primary shadow-kinetic md:p-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Visit Or Order"
              title="Order directly on WhatsApp"
              description="Skip the line and chat with us directly for fast delivery, pickup, or quick questions before you walk in."
              light
            />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button
                href={buildWhatsAppLink()}
                target="_blank"
                icon={<MessageCircle size={20} />}
                variant="whatsapp"
                size="lg"
                className="!bg-white !text-primary hover:!bg-orange-50 hover:!text-primary"
              >
                Start Your Order
              </Button>
              <Button
                href={siteConfig.contact.phoneHref}
                icon={<Phone size={20} />}
                variant="ghost"
                size="lg"
                className="bg-white/10 text-white ring-0 hover:bg-white/15"
              >
                Call Now
              </Button>
              <Button
                href="https://maps.google.com/?q=12+Adeola+Odeku+St,+Victoria+Island,+Lagos"
                target="_blank"
                icon={<MapPinned size={20} />}
                variant="ghost"
                size="lg"
                className="bg-white/10 text-white ring-0 hover:bg-white/15"
              >
                Get Directions
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {siteConfig.visitHighlights.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <Reveal
                  key={item.title}
                  className="rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-orange-50/90">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
