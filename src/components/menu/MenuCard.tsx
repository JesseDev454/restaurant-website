import { MessageCircle } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { buildWhatsAppLink } from "@/utils/whatsapp";

type MenuCardProps = {
  item: MenuItem;
  compact?: boolean;
};

export function MenuCard({ item, compact = false }: MenuCardProps) {
  return (
    <article className="group flex flex-col gap-4">
      <div
        className={[
          "relative overflow-hidden rounded-2xl bg-surface-dim",
          compact ? "aspect-square" : "aspect-[4/3]",
        ].join(" ")}
      >
        <img
          src={item.image}
          alt={item.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {item.badge ? (
          <span className="absolute right-4 top-4 rounded bg-tertiary px-3 py-1 text-xs font-bold uppercase tracking-widest text-on-tertiary">
            {item.badge}
          </span>
        ) : null}
      </div>

      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold leading-tight text-on-surface sm:text-xl">{item.name}</h3>
        <span className="whitespace-nowrap text-lg font-bold text-secondary">{item.price}</span>
      </div>

      <p className="text-sm leading-6 text-on-surface-variant">{item.description}</p>

      <a
        href={buildWhatsAppLink(`Hello I want to order ${item.name} from Lagos Kinetic`)}
        target="_blank"
        rel="noreferrer"
        className={[
          "mt-1 inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 active:scale-95",
          compact
            ? "bg-primary/10 px-4 py-3 text-xs text-primary hover:bg-primary hover:text-on-primary"
            : "bg-primary px-5 py-3 text-sm text-on-primary hover:bg-primary-container",
        ].join(" ")}
      >
        <MessageCircle size={18} />
        <span>{item.ctaLabel ?? "Add to WhatsApp Order"}</span>
      </a>
    </article>
  );
}
