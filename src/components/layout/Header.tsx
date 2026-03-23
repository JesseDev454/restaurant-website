import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { siteConfig } from "@/data/site";
import { buildWhatsAppLink } from "@/utils/whatsapp";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/5 kinetic-glass shadow-sm shadow-orange-900/5">
      <div className="page-section">
        <div className="page-container flex items-center justify-between gap-4 py-4">
          <NavLink
            to="/"
            className="font-headline text-2xl font-black italic tracking-tighter text-orange-900"
            aria-label={siteConfig.brand.name}
          >
            {siteConfig.brand.logoText}
          </NavLink>

          <nav className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  [
                    "border-b-2 pb-1 text-sm font-bold tracking-tight transition-transform duration-300 hover:scale-105",
                    isActive
                      ? "border-yellow-600 text-orange-800"
                      : "border-transparent text-stone-600 hover:text-orange-700",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-primary ring-1 ring-primary/10 transition-colors hover:bg-orange-50"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-on-primary transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Order Now
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary ring-1 ring-primary/10 md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        className={[
          "overflow-hidden border-t border-primary/5 bg-surface-container-low transition-all duration-300 md:hidden",
          isOpen ? "max-h-96 py-3" : "max-h-0 py-0",
        ].join(" ")}
      >
        <div className="page-section">
          <div className="page-container flex flex-col gap-2">
            {siteConfig.nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  [
                    "rounded-2xl px-4 py-3 text-sm font-bold transition-colors",
                    isActive ? "bg-orange-200 text-orange-900" : "text-stone-700 hover:bg-white",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-3">
              <a
                href={siteConfig.contact.phoneHref}
                className="rounded-full bg-white px-4 py-3 text-center text-sm font-bold text-primary ring-1 ring-primary/10"
              >
                Call Now
              </a>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-4 py-3 text-center text-sm font-bold text-on-primary"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
