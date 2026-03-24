import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Plus,
  Users,
} from "lucide-react";
import { AddClientModal } from "@/components/admin/AddClientModal";
import { MarkLaunchedModal } from "@/components/admin/MarkLaunchedModal";
import { RecordPaymentModal } from "@/components/admin/RecordPaymentModal";
import { AdminSummaryCard } from "@/components/admin/AdminSummaryCard";
import { ClientList } from "@/components/admin/ClientList";
import { mockClients } from "@/data/admin/clients";
import type {
  AddClientFormValues,
  ClientRecord,
  MarkLaunchedFormValues,
  PaymentRecord,
  RecordPaymentFormValues,
} from "@/types/admin";

function addMonths(dateValue: string | null, months: number, fallbackDate: string) {
  const baseDate = new Date(dateValue ?? fallbackDate);
  baseDate.setMonth(baseDate.getMonth() + months);
  return baseDate.toISOString().slice(0, 10);
}

function addYears(dateValue: string | null, years: number, fallbackDate: string) {
  const baseDate = new Date(dateValue ?? fallbackDate);
  baseDate.setFullYear(baseDate.getFullYear() + years);
  return baseDate.toISOString().slice(0, 10);
}

export function AdminDashboardPage() {
  const [clients, setClients] = useState<ClientRecord[]>(mockClients);
  const [isAddClientOpen, setIsAddClientOpen] = useState(false);
  const [paymentClient, setPaymentClient] = useState<ClientRecord | null>(null);
  const [launchClient, setLaunchClient] = useState<ClientRecord | null>(null);

  const summary = useMemo(
    () => ({
      totalClients: clients.length,
      activeClients: clients.filter((client) => client.status === "active").length,
      dueSoon: clients.filter((client) => client.status === "due_soon").length,
      overdue: clients.filter((client) => client.status === "overdue").length,
    }),
    [clients],
  );

  function handleAddClient(values: AddClientFormValues) {
    const uniqueId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? `client-${crypto.randomUUID()}`
        : `client-${Date.now()}`;

    const newClient: ClientRecord = {
      id: uniqueId,
      businessName: values.businessName,
      contactName: values.contactName,
      whatsapp: values.whatsapp,
      phone: values.phone,
      email: values.email,
      setupFeeAmount: values.setupFeeAmount,
      monthlyFeeAmount: values.monthlyFeeAmount,
      setupFeePaid: false,
      websiteUrl: null,
      domainName: null,
      launchDate: null,
      nextMonthlyDueDate: null,
      domainRenewalDate: null,
      status: "awaiting_setup_payment",
      notes: values.notes,
      paymentHistory: [],
    };

    setClients((current) => [newClient, ...current]);
  }

  function handleRecordPayment(clientId: string, values: RecordPaymentFormValues) {
    const paymentRecord: PaymentRecord = {
      id:
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? `payment-${crypto.randomUUID()}`
          : `payment-${Date.now()}`,
      type: values.type,
      amount: values.amount,
      paymentDate: values.paymentDate,
      paymentMethod: values.paymentMethod,
      reference: values.reference,
      notes: values.notes,
    };

    setClients((current) =>
      current.map((client) => {
        if (client.id !== clientId) return client;

        let nextStatus = client.status;
        let nextSetupFeePaid = client.setupFeePaid;
        let nextMonthlyDueDate = client.nextMonthlyDueDate;
        let nextDomainRenewalDate = client.domainRenewalDate;

        if (values.type === "setup_fee") {
          nextSetupFeePaid = true;
          nextStatus = "setup_paid";
        }

        if (values.type === "monthly_maintenance") {
          nextMonthlyDueDate = addMonths(client.nextMonthlyDueDate, 1, values.paymentDate);
          nextStatus = "active";
        }

        if (values.type === "domain_renewal") {
          nextDomainRenewalDate = addYears(client.domainRenewalDate, 1, values.paymentDate);
        }

        return {
          ...client,
          setupFeePaid: nextSetupFeePaid,
          status: nextStatus,
          nextMonthlyDueDate,
          domainRenewalDate: nextDomainRenewalDate,
          paymentHistory: [paymentRecord, ...client.paymentHistory],
        };
      }),
    );
  }

  function handleMarkLaunched(clientId: string, values: MarkLaunchedFormValues) {
    setClients((current) =>
      current.map((client) => {
        if (client.id !== clientId) return client;

        return {
          ...client,
          websiteUrl: values.websiteUrl,
          domainName: values.domainName,
          launchDate: values.launchDate,
          domainRenewalDate: values.domainRenewalDate,
          nextMonthlyDueDate: addMonths(values.launchDate, 1, values.launchDate),
          status: "active",
        };
      }),
    );
  }

  return (
    <>
      <div className="space-y-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Version 1
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Restaurant website client dashboard
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                This internal dashboard tracks client setup, monthly billing, renewal dates, and
                current account status. It is intentionally separate from the public restaurant site
                and currently runs on local mock TypeScript data.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              onClick={() => setIsAddClientOpen(true)}
            >
              <Plus size={18} />
              <span>Add Client</span>
            </button>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <AdminSummaryCard
            title="Total Clients"
            value={summary.totalClients}
            description="All client records currently loaded into the internal dashboard."
            icon={Users}
            accentClass="bg-slate-900 text-white"
          />
          <AdminSummaryCard
            title="Active Clients"
            value={summary.activeClients}
            description="Live clients currently on active monthly website management."
            icon={CheckCircle2}
            accentClass="bg-emerald-100 text-emerald-700"
          />
          <AdminSummaryCard
            title="Due Soon"
            value={summary.dueSoon}
            description="Clients whose status has been flagged for an upcoming payment."
            icon={Clock3}
            accentClass="bg-orange-100 text-orange-700"
          />
          <AdminSummaryCard
            title="Overdue"
            value={summary.overdue}
            description="Clients requiring billing follow-up before service continues."
            icon={AlertTriangle}
            accentClass="bg-rose-100 text-rose-700"
          />
        </section>

        <ClientList
          clients={clients}
          onRecordPayment={setPaymentClient}
          onMarkLaunched={setLaunchClient}
        />
      </div>

      <AddClientModal
        isOpen={isAddClientOpen}
        onClose={() => setIsAddClientOpen(false)}
        onSubmit={handleAddClient}
      />
      <RecordPaymentModal
        client={paymentClient}
        isOpen={paymentClient !== null}
        onClose={() => setPaymentClient(null)}
        onSubmit={handleRecordPayment}
      />
      <MarkLaunchedModal
        client={launchClient}
        isOpen={launchClient !== null}
        onClose={() => setLaunchClient(null)}
        onSubmit={handleMarkLaunched}
      />
    </>
  );
}
