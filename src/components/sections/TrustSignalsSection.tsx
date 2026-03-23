import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";
import { iconMap } from "@/utils/icons";

export function TrustSignalsSection() {
  return (
    <section className="bg-surface-container px-5 py-16 sm:px-6 lg:px-8">
      <div className="page-container flex flex-wrap justify-between gap-6">
        {siteConfig.trustSignals.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <Reveal
              key={item.title}
              className="group flex min-w-[220px] flex-1 items-center gap-4 rounded-3xl bg-surface-container-lowest p-5"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-container text-primary transition-transform group-hover:scale-110">
                <Icon size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-on-surface-variant">{item.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
