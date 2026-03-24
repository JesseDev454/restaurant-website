import type { LucideIcon } from "lucide-react";

type AdminSummaryCardProps = {
  title: string;
  value: number;
  description: string;
  icon: LucideIcon;
  accentClass: string;
};

export function AdminSummaryCard({
  title,
  value,
  description,
  icon: Icon,
  accentClass,
}: AdminSummaryCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        </div>
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accentClass}`}>
          <Icon size={22} />
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-500">{description}</p>
    </article>
  );
}
