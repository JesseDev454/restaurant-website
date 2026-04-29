import type { ClientRecord } from "@/types/admin";

const ADMIN_CLIENTS_STORAGE_KEY = "lagos-kinetic-admin-clients-v1";

function isClientRecord(value: unknown): value is ClientRecord {
  if (!value || typeof value !== "object") return false;

  const candidate = value as Partial<ClientRecord>;

  return (
    typeof candidate.id === "string" &&
    typeof candidate.businessName === "string" &&
    typeof candidate.contactName === "string" &&
    typeof candidate.whatsapp === "string" &&
    typeof candidate.phone === "string" &&
    typeof candidate.email === "string" &&
    typeof candidate.setupFeeAmount === "number" &&
    typeof candidate.monthlyFeeAmount === "number" &&
    typeof candidate.setupFeePaid === "boolean" &&
    typeof candidate.status === "string" &&
    typeof candidate.notes === "string" &&
    Array.isArray(candidate.paymentHistory)
  );
}

function cloneSeedData(seedClients: ClientRecord[]) {
  return JSON.parse(JSON.stringify(seedClients)) as ClientRecord[];
}

export function loadAdminClients(seedClients: ClientRecord[]) {
  if (typeof window === "undefined") {
    return cloneSeedData(seedClients);
  }

  try {
    const rawValue = window.localStorage.getItem(ADMIN_CLIENTS_STORAGE_KEY);

    if (!rawValue) {
      return cloneSeedData(seedClients);
    }

    const parsedValue = JSON.parse(rawValue) as unknown;

    if (!Array.isArray(parsedValue) || !parsedValue.every(isClientRecord)) {
      return cloneSeedData(seedClients);
    }

    return parsedValue;
  } catch {
    return cloneSeedData(seedClients);
  }
}

export function saveAdminClients(clients: ClientRecord[]) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(ADMIN_CLIENTS_STORAGE_KEY, JSON.stringify(clients));
}
