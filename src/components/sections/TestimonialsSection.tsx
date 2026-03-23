import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-surface-container-low px-5 py-24 sm:px-6 lg:px-8">
      <div className="page-container">
        <SectionHeading
          eyebrow="Social Proof"
          title="Customers come back for a reason"
          description="Built to convert first-time visitors into repeat WhatsApp customers, walk-ins, and office lunch regulars."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Reveal
              key={item.name}
              className="rounded-[1.75rem] bg-surface-container-lowest p-6 shadow-sm shadow-primary/5"
            >
              <div className="mb-4 flex items-center gap-1 text-tertiary">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm leading-7 text-on-surface-variant">“{item.review}”</p>
              <div className="mt-6">
                <p className="font-bold text-on-surface">{item.name}</p>
                <p className="text-sm text-outline">{item.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
