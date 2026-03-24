import type { FormEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import { Receipt, X } from "lucide-react";
import type {
  ClientRecord,
  PaymentMethod,
  PaymentType,
  RecordPaymentFormValues,
} from "@/types/admin";

type RecordPaymentModalProps = {
  client: ClientRecord | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (clientId: string, values: RecordPaymentFormValues) => void;
};

const paymentTypeOptions: Array<{ value: PaymentType; label: string }> = [
  { value: "setup_fee", label: "Setup Fee" },
  { value: "monthly_maintenance", label: "Monthly Maintenance" },
  { value: "domain_renewal", label: "Domain Renewal" },
  { value: "custom", label: "Custom" },
];

const paymentMethodOptions: Array<{ value: PaymentMethod; label: string }> = [
  { value: "bank_transfer", label: "Bank Transfer" },
  { value: "cash", label: "Cash" },
  { value: "card", label: "Card" },
  { value: "pos", label: "POS" },
  { value: "mobile_money", label: "Mobile Money" },
  { value: "other", label: "Other" },
];

function getTodayDateValue() {
  return new Date().toISOString().slice(0, 10);
}

function getDefaultAmount(client: ClientRecord | null, type: PaymentType) {
  if (!client) return 0;

  switch (type) {
    case "setup_fee":
      return client.setupFeeAmount;
    case "monthly_maintenance":
      return client.monthlyFeeAmount;
    case "domain_renewal":
      return 0;
    case "custom":
      return 0;
    default:
      return 0;
  }
}

export function RecordPaymentModal({
  client,
  isOpen,
  onClose,
  onSubmit,
}: RecordPaymentModalProps) {
  const [formValues, setFormValues] = useState<RecordPaymentFormValues>({
    type: "monthly_maintenance",
    amount: 0,
    paymentDate: getTodayDateValue(),
    paymentMethod: "bank_transfer",
    reference: "",
    notes: "",
  });

  useEffect(() => {
    if (!isOpen || !client) return;

    setFormValues({
      type: "monthly_maintenance",
      amount: getDefaultAmount(client, "monthly_maintenance"),
      paymentDate: getTodayDateValue(),
      paymentMethod: "bank_transfer",
      reference: "",
      notes: "",
    });
  }, [isOpen, client]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !client) return null;
  const activeClient = client;

  function updateField<K extends keyof RecordPaymentFormValues>(
    field: K,
    value: RecordPaymentFormValues[K],
  ) {
    setFormValues((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleTypeChange(type: PaymentType) {
    setFormValues((current) => ({
      ...current,
      type,
      amount:
        current.type === type && current.amount > 0
          ? current.amount
          : getDefaultAmount(activeClient, type),
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit(activeClient.id, {
      ...formValues,
      amount: Number(formValues.amount),
      reference: formValues.reference.trim(),
      notes: formValues.notes.trim(),
    });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Close record payment modal"
      />

      <div className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-950/15">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Record Payment
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              {activeClient.businessName}
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Save a payment entry and update the client billing state locally.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-800"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <form className="px-6 py-6 sm:px-8" onSubmit={handleSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Payment type" required>
              <select
                value={formValues.type}
                onChange={(event) => handleTypeChange(event.target.value as PaymentType)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
              >
                {paymentTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Amount" required>
              <input
                type="number"
                min="0"
                required
                value={formValues.amount}
                onChange={(event) => updateField("amount", Number(event.target.value))}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
              />
            </Field>

            <Field label="Payment date" required>
              <input
                type="date"
                required
                value={formValues.paymentDate}
                onChange={(event) => updateField("paymentDate", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
              />
            </Field>

            <Field label="Payment method" required>
              <select
                value={formValues.paymentMethod}
                onChange={(event) =>
                  updateField("paymentMethod", event.target.value as PaymentMethod)
                }
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
              >
                {paymentMethodOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Reference">
              <input
                type="text"
                value={formValues.reference}
                onChange={(event) => updateField("reference", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
                placeholder="Optional transaction reference"
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Notes">
              <textarea
                rows={4}
                value={formValues.notes}
                onChange={(event) => updateField("notes", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
                placeholder="Optional internal notes for this payment"
              />
            </Field>
          </div>

          <div className="mt-6 flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              <Receipt size={18} />
              <span>Save Payment</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">
        {label}
        {required ? <span className="ml-1 text-rose-500">*</span> : null}
      </span>
      {children}
    </label>
  );
}
