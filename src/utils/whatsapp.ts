import { siteConfig } from "@/data/site";

export function buildWhatsAppLink(message = siteConfig.whatsApp.defaultMessage) {
  return `https://wa.me/${siteConfig.contact.whatsAppNumber}?text=${encodeURIComponent(message)}`;
}
