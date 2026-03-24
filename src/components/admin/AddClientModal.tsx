import type { FormEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";
import type { AddClientFormValues } from "@/types/admin";

type AddClientModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: AddClientFormValues) => void;
};

const initialFormValues: AddClientFormValues = {
  businessName: "",
  contactName: "",
  whatsapp: "",
  phone: "",
  email: "",
  setupFeeAmount: 80000,
  monthlyFeeAmount: 15000,
  notes: "",
};

export function AddClientModal({ isOpen, onClose, onSubmit }: AddClientModalProps) {
  const [formValues, setFormValues] = useState<AddClientFormValues>(initialFormValues);

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

  useEffect(() => {
    if (isOpen) {
      setFormValues(initialFormValues);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  function updateField<K extends keyof AddClientFormValues>(
    field: K,
    value: AddClientFormValues[K],
  ) {
    setFormValues((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload: AddClientFormValues = {
      businessName: formValues.businessName.trim(),
      contactName: formValues.contactName.trim(),
      whatsapp: formValues.whatsapp.trim(),
      phone: formValues.phone.trim(),
      email: formValues.email.trim(),
      setupFeeAmount: Number(formValues.setupFeeAmount),
      monthlyFeeAmount: Number(formValues.monthlyFeeAmount),
      notes: formValues.notes.trim(),
    };

    onSubmit(payload);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Close add client modal"
      />

      <div className="relative z-10 w-full max-w-3xl rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-950/15">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Add Client
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              Create a new client record
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              This version stores the new client only in local dashboard state.
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
            <Field label="Business name" required>
              <input
                type="text"
                required
                value={formValues.businessName}
                onChange={(event) => updateField("businessName", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
                placeholder="Example: Mainland Spice Kitchen"
              />
            </Field>

            <Field label="Contact name" required>
              <input
                type="text"
                required
                value={formValues.contactName}
                onChange={(event) => updateField("contactName", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
                placeholder="Example: Adaeze Okafor"
              />
            </Field>

            <Field label="WhatsApp number" required>
              <input
                type="text"
                required
                value={formValues.whatsapp}
                onChange={(event) => updateField("whatsapp", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
                placeholder="+234 800 000 0000"
              />
            </Field>

            <Field label="Phone number">
              <input
                type="text"
                value={formValues.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
                placeholder="Optional"
              />
            </Field>

            <Field label="Email">
              <input
                type="email"
                value={formValues.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
                placeholder="Optional"
              />
            </Field>

            <Field label="Setup fee amount">
              <input
                type="number"
                min="0"
                value={formValues.setupFeeAmount}
                onChange={(event) => updateField("setupFeeAmount", Number(event.target.value))}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
              />
            </Field>

            <Field label="Monthly fee amount">
              <input
                type="number"
                min="0"
                value={formValues.monthlyFeeAmount}
                onChange={(event) => updateField("monthlyFeeAmount", Number(event.target.value))}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
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
                placeholder="Optional internal notes about the client"
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
              <Plus size={18} />
              <span>Create Client</span>
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
