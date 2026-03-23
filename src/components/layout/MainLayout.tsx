import type { ReactNode } from "react";
import { FloatingWhatsAppButton } from "@/components/layout/FloatingWhatsAppButton";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="page-shell">
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
      <FloatingWhatsAppButton />
      <MobileBottomNav />
    </div>
  );
}
