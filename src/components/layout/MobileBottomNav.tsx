import { NavLink, useLocation } from "react-router-dom";
import { siteConfig } from "@/data/site";
import { iconMap } from "@/utils/icons";

export function MobileBottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-yellow-600/20 bg-orange-50/95 px-4 pb-6 pt-3 shadow-[0_-10px_30px_rgba(163,55,0,0.1)] backdrop-blur-lg md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-around rounded-t-3xl">
        {siteConfig.mobileNav.map((item) => {
          const Icon = iconMap[item.icon];
          const isExternal = item.href.startsWith("tel:") || item.href.startsWith("https://");
          const isActive = !isExternal && location.pathname === item.href;

          const className = [
            "flex min-w-[68px] flex-col items-center justify-center rounded-xl px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300",
            isActive ? "scale-110 bg-orange-200 text-orange-900" : "text-stone-500",
          ].join(" ");

          if (isExternal) {
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("https://") ? "_blank" : undefined}
                rel={item.href.startsWith("https://") ? "noreferrer" : undefined}
                className={className}
              >
                <Icon size={18} />
                <span className="mt-1">{item.label}</span>
              </a>
            );
          }

          return (
            <NavLink key={item.label} to={item.href} className={className}>
              <Icon size={18} />
              <span className="mt-1">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
