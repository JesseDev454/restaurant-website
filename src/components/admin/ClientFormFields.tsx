import type { ReactNode } from "react";
import type { AddClientFormValues } from "@/types/admin";

type ClientFormFieldsProps = {
  formValues: AddClientFormValues;
  onFieldChange: <K extends keyof AddClientFormValues>(
    field: K,
    value: AddClientFormValues[K],
  ) => void;
};

export function ClientFormFields({ formValues, onFieldChange }: ClientFormFieldsProps) {
  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Business name" required>
          <input
            type="text"
            required
            value={formValues.businessName}
            onChange={(event) => onFieldChange("businessName", event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
            placeholder="Example: Mainland Spice Kitchen"
          />
        </Field>

        <Field label="Contact name" required>
          <input
            type="text"
            required
            value={formValues.contactName}
            onChange={(event) => onFieldChange("contactName", event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
            placeholder="Example: Adaeze Okafor"
          />
        </Field>

        <Field label="WhatsApp number" required>
          <input
            type="text"
            required
            value={formValues.whatsapp}
            onChange={(event) => onFieldChange("whatsapp", event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
            placeholder="+234 800 000 0000"
          />
        </Field>

        <Field label="Phone number">
          <input
            type="text"
            value={formValues.phone}
            onChange={(event) => onFieldChange("phone", event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
            placeholder="Optional"
          />
        </Field>

        <Field label="Email">
          <input
            type="email"
            value={formValues.email}
            onChange={(event) => onFieldChange("email", event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
            placeholder="Optional"
          />
        </Field>

        <Field label="Setup fee amount">
          <input
            type="number"
            min="0"
            value={formValues.setupFeeAmount}
            onChange={(event) => onFieldChange("setupFeeAmount", Number(event.target.value))}
            title="Setup fee amount"
            placeholder="0"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
          />
        </Field>

        <Field label="Monthly fee amount">
          <input
            type="number"
            min="0"
            value={formValues.monthlyFeeAmount}
            onChange={(event) => onFieldChange("monthlyFeeAmount", Number(event.target.value))}
            title="Monthly fee amount"
            placeholder="0"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Notes">
          <textarea
            rows={4}
            value={formValues.notes}
            onChange={(event) => onFieldChange("notes", event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
            placeholder="Optional internal notes about the client"
          />
        </Field>
      </div>
    </>
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
