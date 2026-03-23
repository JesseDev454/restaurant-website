import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/utils/whatsapp";

export function FloatingWhatsAppButton() {
  return (
    <div className="fixed bottom-24 right-5 z-40 md:bottom-8 md:right-8">
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Lagos Kinetic on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-on-primary shadow-[0_20px_40px_rgba(163,55,0,0.28)] transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
