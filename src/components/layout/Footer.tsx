import { Link } from "react-router-dom";
import { siteConfig } from "@/data/site";
import { iconMap } from "@/utils/icons";

export function Footer() {
  return (
    <footer className="bg-stone-100 px-5 py-12 pb-32 sm:px-6 lg:px-8 lg:pb-12">
      <div className="page-container">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="font-headline text-lg font-bold text-orange-900">
              {siteConfig.brand.name}
            </span>
            <p className="text-sm leading-relaxed text-stone-500">
              Bringing the heat and rhythm of Lagos to your doorstep, one meal at a time.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-orange-900">Visit Us</h4>
            <p className="text-sm leading-relaxed text-stone-500">
              {siteConfig.contact.address}
            </p>
            <p className="text-sm leading-relaxed text-stone-500">
              {siteConfig.contact.hours}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-orange-900">Quick Links</h4>
            {siteConfig.footerLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-stone-500 transition-colors hover:text-orange-700"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-orange-900">Connect</h4>
            {siteConfig.socialLinks.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-stone-500 transition-colors hover:text-orange-700"
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-12 border-t border-stone-200 pt-8">
          <p className="text-center text-sm text-stone-500">
            (c) 2024 {siteConfig.brand.name} Hospitality. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
