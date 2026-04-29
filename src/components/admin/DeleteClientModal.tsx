import { AlertTriangle, Trash2, X } from "lucide-react";
import type { ClientRecord } from "@/types/admin";

type DeleteClientModalProps = {
  client: ClientRecord | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (clientId: string) => void;
};

export function DeleteClientModal({
  client,
  isOpen,
  onClose,
  onConfirm,
}: DeleteClientModalProps) {
  if (!isOpen || !client) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Close delete client modal"
      />

      <div className="relative z-10 w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-950/15">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">
              Delete Client
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              Remove this client record?
            </h2>
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

        <div className="px-6 py-6 sm:px-8">
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-5">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-rose-600">
                <AlertTriangle size={18} />
              </div>
              <div>
                <p className="font-semibold text-slate-950">{client.businessName}</p>
                <p className="mt-1 text-sm text-slate-600">{client.contactName}</p>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  This will remove the client details and payment history from the local admin
                  dashboard on this device. This action cannot be undone.
                </p>
              </div>
            </div>
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
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-700"
              onClick={() => {
                onConfirm(client.id);
                onClose();
              }}
            >
              <Trash2 size={18} />
              <span>Delete Client</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
