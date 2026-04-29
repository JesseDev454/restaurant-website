import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { Pencil, X } from "lucide-react";
import { ClientFormFields } from "@/components/admin/ClientFormFields";
import type { AddClientFormValues, ClientRecord } from "@/types/admin";

type EditClientModalProps = {
  client: ClientRecord | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (clientId: string, values: AddClientFormValues) => void;
};

const emptyFormValues: AddClientFormValues = {
  businessName: "",
  contactName: "",
  whatsapp: "",
  phone: "",
  email: "",
  setupFeeAmount: 80000,
  monthlyFeeAmount: 15000,
  notes: "",
};

function getFormValues(client: ClientRecord | null): AddClientFormValues {
  if (!client) return emptyFormValues;

  return {
    businessName: client.businessName,
    contactName: client.contactName,
    whatsapp: client.whatsapp,
    phone: client.phone,
    email: client.email,
    setupFeeAmount: client.setupFeeAmount,
    monthlyFeeAmount: client.monthlyFeeAmount,
    notes: client.notes,
  };
}

export function EditClientModal({
  client,
  isOpen,
  onClose,
  onSubmit,
}: EditClientModalProps) {
  const [formValues, setFormValues] = useState<AddClientFormValues>(emptyFormValues);

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
      setFormValues(getFormValues(client));
    }
  }, [client, isOpen]);

  if (!isOpen || !client) return null;

  const clientId = client.id;

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

    onSubmit(clientId, {
      businessName: formValues.businessName.trim(),
      contactName: formValues.contactName.trim(),
      whatsapp: formValues.whatsapp.trim(),
      phone: formValues.phone.trim(),
      email: formValues.email.trim(),
      setupFeeAmount: Number(formValues.setupFeeAmount),
      monthlyFeeAmount: Number(formValues.monthlyFeeAmount),
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
        aria-label="Close edit client modal"
      />

      <div className="relative z-10 w-full max-w-3xl rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-950/15">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Edit Client
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              Update client details
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Edit business info, contact details, pricing, and internal notes.
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
          <ClientFormFields formValues={formValues} onFieldChange={updateField} />

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
              <Pencil size={18} />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
