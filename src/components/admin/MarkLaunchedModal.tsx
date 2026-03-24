import type { FormEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import { Rocket, X } from "lucide-react";
import type { ClientRecord, MarkLaunchedFormValues } from "@/types/admin";

type MarkLaunchedModalProps = {
  client: ClientRecord | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (clientId: string, values: MarkLaunchedFormValues) => void;
};

const emptyValues: MarkLaunchedFormValues = {
  websiteUrl: "",
  domainName: "",
  launchDate: "",
  domainRenewalDate: "",
};

export function MarkLaunchedModal({
  client,
  isOpen,
  onClose,
  onSubmit,
}: MarkLaunchedModalProps) {
  const [formValues, setFormValues] = useState<MarkLaunchedFormValues>(emptyValues);

  useEffect(() => {
    if (!isOpen || !client) return;

    setFormValues({
      websiteUrl: client.websiteUrl ?? "",
      domainName: client.domainName ?? "",
      launchDate: client.launchDate ?? "",
      domainRenewalDate: client.domainRenewalDate ?? "",
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

  function updateField<K extends keyof MarkLaunchedFormValues>(
    field: K,
    value: MarkLaunchedFormValues[K],
  ) {
    setFormValues((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit(activeClient.id, {
      websiteUrl: formValues.websiteUrl.trim(),
      domainName: formValues.domainName.trim(),
      launchDate: formValues.launchDate,
      domainRenewalDate: formValues.domainRenewalDate,
    });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Close mark as launched modal"
      />

      <div className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-950/15">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Mark as Launched
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              {activeClient.businessName}
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Save launch details, activate the client, and set the next monthly due date.
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
            <Field label="Website URL" required>
              <input
                type="url"
                required
                value={formValues.websiteUrl}
                onChange={(event) => updateField("websiteUrl", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
                placeholder="https://example.com"
              />
            </Field>

            <Field label="Domain name" required>
              <input
                type="text"
                required
                value={formValues.domainName}
                onChange={(event) => updateField("domainName", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
                placeholder="example.com"
              />
            </Field>

            <Field label="Launch date" required>
              <input
                type="date"
                required
                value={formValues.launchDate}
                onChange={(event) => updateField("launchDate", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
              />
            </Field>

            <Field label="Domain renewal date" required>
              <input
                type="date"
                required
                value={formValues.domainRenewalDate}
                onChange={(event) => updateField("domainRenewalDate", event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 focus:bg-white"
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
              <Rocket size={18} />
              <span>Save Launch Details</span>
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
