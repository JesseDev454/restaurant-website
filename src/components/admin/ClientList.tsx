import {
  CalendarDays,
  BadgeCheck,
  Copy,
  Clock3,
  ExternalLink,
  Globe,
  Mail,
  MessageCircle,
  Phone,
  Receipt,
  Rocket,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import type {
  ClientRecord,
  ClientStatus,
  PaymentMethod,
  PaymentStatus,
  PaymentType,
} from "@/types/admin";

type ClientListProps = {
  clients: ClientRecord[];
  onRecordPayment: (client: ClientRecord) => void;
  onMarkLaunched: (client: ClientRecord) => void;
};

const statusStyles: Record<ClientStatus, string> = {
  awaiting_setup_payment: "bg-amber-100 text-amber-800",
  setup_paid: "bg-sky-100 text-sky-800",
  active: "bg-emerald-100 text-emerald-800",
  due_soon: "bg-orange-100 text-orange-800",
  overdue: "bg-rose-100 text-rose-800",
  paused: "bg-slate-200 text-slate-700",
};

const statusLabels: Record<ClientStatus, string> = {
  awaiting_setup_payment: "Awaiting Setup Payment",
  setup_paid: "Setup Paid",
  active: "Active",
  due_soon: "Due Soon",
  overdue: "Overdue",
  paused: "Paused",
};

const paymentStatusStyles: Record<PaymentStatus, string> = {
  paid: "bg-emerald-100 text-emerald-800",
  pending: "bg-amber-100 text-amber-800",
  due_soon: "bg-orange-100 text-orange-800",
  overdue: "bg-rose-100 text-rose-800",
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDate(value: string | null) {
  if (!value) return "Not set";

  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function getSetupPaymentStatus(client: ClientRecord): PaymentStatus {
  return client.setupFeePaid ? "paid" : "pending";
}

function formatReminderDate(value: string | null) {
  if (!value) return "Not set";

  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

function buildMonthlyReminder(client: ClientRecord) {
  return `Hi ${client.contactName}, just a quick reminder that your website maintenance payment of ${formatCurrency(client.monthlyFeeAmount)} is due on ${formatReminderDate(client.nextMonthlyDueDate)}. Let me know once payment is made. Thanks.`;
}

function buildDomainReminder(client: ClientRecord) {
  return `Hi ${client.contactName}, your domain renewal for ${client.domainName || "your domain"} is due on ${formatReminderDate(client.domainRenewalDate)}. Renewal cost is ${formatCurrency(client.monthlyFeeAmount)}. Let me know once payment is made so I can keep the website live without interruption.`;
}

const paymentTypeLabels: Record<PaymentType, string> = {
  setup_fee: "Setup Fee",
  monthly_maintenance: "Monthly Maintenance",
  domain_renewal: "Domain Renewal",
  custom: "Custom",
};

const paymentMethodLabels: Record<PaymentMethod, string> = {
  bank_transfer: "Bank Transfer",
  cash: "Cash",
  card: "Card",
  pos: "POS",
  mobile_money: "Mobile Money",
  other: "Other",
};

export function ClientList({
  clients,
  onRecordPayment,
  onMarkLaunched,
}: ClientListProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  async function handleCopy(message: string, key: string) {
    await navigator.clipboard.writeText(message);
    setCopiedKey(key);
    window.setTimeout(() => {
      setCopiedKey((current) => (current === key ? null : current));
    }, 1800);
  }

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
      <div className="flex flex-col gap-3 border-b border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-slate-950">Client List</h2>
          <p className="mt-1 text-sm text-slate-500">
            Current restaurant website clients, billing status, and launch details.
          </p>
        </div>
        <span className="inline-flex w-fit items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
          {clients.length} total records
        </span>
      </div>

      <div className="grid gap-4 p-4 lg:hidden">
        {clients.map((client) => {
          const setupPaymentStatus = getSetupPaymentStatus(client);

          return (
            <article
              key={client.id}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{client.businessName}</h3>
                  <p className="text-sm text-slate-500">{client.contactName}</p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[client.status]}`}
                >
                  {statusLabels[client.status]}
                </span>
              </div>

              <div className="mt-5 grid gap-3 text-sm text-slate-600">
                <InfoRow icon={Wallet} label="Setup Fee" value={formatCurrency(client.setupFeeAmount)} />
                <InfoRow
                  icon={Wallet}
                  label="Monthly Fee"
                  value={`${formatCurrency(client.monthlyFeeAmount)} / month`}
                />
                <InfoRow icon={CalendarDays} label="Launch Date" value={formatDate(client.launchDate)} />
                <InfoRow icon={Clock3} label="Next Due" value={formatDate(client.nextMonthlyDueDate)} />
                <InfoRow icon={Globe} label="Domain Renewal" value={formatDate(client.domainRenewalDate)} />
                <InfoRow
                  icon={Globe}
                  label="Domain"
                  value={client.domainName || "Domain not added"}
                />
                <InfoRow
                  icon={ExternalLink}
                  label="Website"
                  value={client.websiteUrl || "Website not launched yet"}
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge
                  className={paymentStatusStyles[setupPaymentStatus]}
                  label={`Setup ${setupPaymentStatus}`}
                />
                <Badge
                  className="bg-slate-200 text-slate-700"
                  label={client.domainName || "Domain not added"}
                />
              </div>

              <div className="mt-5 grid gap-2 text-sm text-slate-600">
                <ContactLink
                  icon={MessageCircle}
                  href={`https://wa.me/${client.whatsapp.replace(/\D/g, "")}`}
                  label={client.whatsapp}
                  external
                />
                {client.phone ? (
                  <ContactLink
                    icon={Phone}
                    href={`tel:${client.phone.replace(/\s+/g, "")}`}
                    label={client.phone}
                  />
                ) : (
                  <PlaceholderText icon={Phone} label="No phone number yet" />
                )}
                {client.email ? (
                  <ContactLink icon={Mail} href={`mailto:${client.email}`} label={client.email} />
                ) : (
                  <PlaceholderText icon={Mail} label="No email yet" />
                )}
                {client.websiteUrl ? (
                  <ContactLink
                    icon={ExternalLink}
                    href={client.websiteUrl}
                    label={client.websiteUrl}
                    external
                  />
                ) : (
                  <PlaceholderText icon={Globe} label="Website not launched yet" />
                )}
              </div>

              <p className="mt-4 rounded-2xl bg-white px-4 py-3 text-sm leading-6 text-slate-500">
                {client.notes || "No internal notes yet."}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                  onClick={() => onRecordPayment(client)}
                >
                  <Receipt size={16} />
                  <span>Record Payment</span>
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
                  onClick={() => onMarkLaunched(client)}
                >
                  <Rocket size={16} />
                  <span>Mark as Launched</span>
                </button>
                <CopyReminderButton
                  label={copiedKey === `${client.id}-monthly` ? "Copied Monthly" : "Copy Monthly Reminder"}
                  onClick={() => handleCopy(buildMonthlyReminder(client), `${client.id}-monthly`)}
                />
                <CopyReminderButton
                  label={copiedKey === `${client.id}-domain` ? "Copied Domain" : "Copy Domain Reminder"}
                  onClick={() => handleCopy(buildDomainReminder(client), `${client.id}-domain`)}
                />
              </div>

              <PaymentHistorySection client={client} />
            </article>
          );
        })}
      </div>

      <div className="hidden overflow-x-auto lg:block">
        <table className="min-w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-[0.16em] text-slate-500">
              <th className="px-6 py-4 font-semibold">Client</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Billing</th>
              <th className="px-6 py-4 font-semibold">Next Due</th>
              <th className="px-6 py-4 font-semibold">Channels</th>
              <th className="px-6 py-4 font-semibold">Notes & Payments</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => {
              const setupPaymentStatus = getSetupPaymentStatus(client);

              return (
                <tr key={client.id} className="border-b border-slate-200 align-top">
                  <td className="px-6 py-5">
                    <div className="min-w-[220px]">
                      <p className="font-semibold text-slate-950">{client.businessName}</p>
                      <p className="mt-1 text-sm text-slate-500">{client.contactName}</p>
                      <div className="mt-3 space-y-1 text-sm text-slate-500">
                        <p>{client.domainName || "Domain not added"}</p>
                        {client.websiteUrl ? (
                          <a
                            href={client.websiteUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-950"
                          >
                            <span>{client.websiteUrl.replace(/^https?:\/\//, "")}</span>
                            <ExternalLink size={14} />
                          </a>
                        ) : (
                          <p className="text-slate-400">Website not launched yet</p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex min-w-[160px] flex-col gap-2">
                      <Badge className={statusStyles[client.status]} label={statusLabels[client.status]} />
                      <Badge
                        className={paymentStatusStyles[setupPaymentStatus]}
                        label={`Setup ${setupPaymentStatus}`}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="min-w-[180px] space-y-2 text-sm text-slate-600">
                      <p>
                        <span className="font-medium text-slate-900">Setup:</span>{" "}
                        {formatCurrency(client.setupFeeAmount)}
                      </p>
                      <p>
                        <span className="font-medium text-slate-900">Monthly:</span>{" "}
                        {formatCurrency(client.monthlyFeeAmount)}
                      </p>
                      <p>
                        <span className="font-medium text-slate-900">Launch:</span>{" "}
                        {formatDate(client.launchDate)}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="min-w-[160px] space-y-2 text-sm text-slate-600">
                      <p>{formatDate(client.nextMonthlyDueDate)}</p>
                      <p className="text-slate-500">Domain: {formatDate(client.domainRenewalDate)}</p>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="min-w-[220px] space-y-2 text-sm text-slate-600">
                      <ContactLink
                        icon={MessageCircle}
                        href={`https://wa.me/${client.whatsapp.replace(/\D/g, "")}`}
                        label={client.whatsapp}
                        external
                      />
                      {client.phone ? (
                        <ContactLink
                          icon={Phone}
                          href={`tel:${client.phone.replace(/\s+/g, "")}`}
                          label={client.phone}
                        />
                      ) : (
                        <PlaceholderText icon={Phone} label="No phone number yet" />
                      )}
                      {client.email ? (
                        <ContactLink icon={Mail} href={`mailto:${client.email}`} label={client.email} />
                      ) : (
                        <PlaceholderText icon={Mail} label="No email yet" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="min-w-[320px]">
                      <p className="max-w-xs text-sm leading-6 text-slate-500">
                        {client.notes || "No internal notes yet."}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-3">
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                          onClick={() => onRecordPayment(client)}
                        >
                          <Receipt size={16} />
                          <span>Record Payment</span>
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
                          onClick={() => onMarkLaunched(client)}
                        >
                          <Rocket size={16} />
                          <span>Mark as Launched</span>
                        </button>
                        <CopyReminderButton
                          label={copiedKey === `${client.id}-monthly` ? "Copied Monthly" : "Copy Monthly Reminder"}
                          onClick={() => handleCopy(buildMonthlyReminder(client), `${client.id}-monthly`)}
                        />
                        <CopyReminderButton
                          label={copiedKey === `${client.id}-domain` ? "Copied Domain" : "Copy Domain Reminder"}
                          onClick={() => handleCopy(buildDomainReminder(client), `${client.id}-domain`)}
                        />
                      </div>

                      <PaymentHistorySection client={client} compact />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Badge({ className, label }: { className: string; label: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${className}`}>{label}</span>;
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-500">
        <Icon size={16} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{label}</p>
        <p className="font-medium text-slate-700">{value}</p>
      </div>
    </div>
  );
}

function ContactLink({
  icon: Icon,
  href,
  label,
  external = false,
}: {
  icon: LucideIcon;
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex items-center gap-2 text-slate-700 transition-colors hover:text-slate-950"
    >
      <Icon size={15} />
      <span>{label}</span>
    </a>
  );
}

function PlaceholderText({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 text-slate-400">
      <Icon size={15} />
      <span>{label}</span>
    </div>
  );
}

function CopyReminderButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
      onClick={onClick}
    >
      <Copy size={16} />
      <span>{label}</span>
    </button>
  );
}

function PaymentHistorySection({
  client,
  compact = false,
}: {
  client: ClientRecord;
  compact?: boolean;
}) {
  return (
    <div className={`mt-5 rounded-2xl bg-white ${compact ? "border border-slate-200 p-4" : "p-4"}`}>
      <div className="flex items-center gap-2">
        <CalendarDays size={16} className="text-slate-500" />
        <h4 className="text-sm font-semibold text-slate-900">Payment History</h4>
      </div>

      {client.paymentHistory.length === 0 ? (
        <p className="mt-3 text-sm text-slate-400">No payments recorded yet.</p>
      ) : (
        <div className="mt-3 space-y-3">
          {client.paymentHistory
            .slice()
            .sort((a, b) => new Date(b.paymentDate).getTime() - new Date(a.paymentDate).getTime())
            .map((payment) => (
              <div
                key={payment.id}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {paymentTypeLabels[payment.type]}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">
                      {paymentMethodLabels[payment.paymentMethod]}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-950">
                      {formatCurrency(payment.amount)}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {formatDate(payment.paymentDate)}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                  <span className="rounded-full bg-white px-2.5 py-1">
                    Ref: {payment.reference || "No reference"}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {payment.notes || "No payment note added."}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
