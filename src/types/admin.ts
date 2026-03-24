export type ClientStatus =
  | "awaiting_setup_payment"
  | "setup_paid"
  | "active"
  | "due_soon"
  | "overdue"
  | "paused";

export type PaymentStatus = "paid" | "pending" | "due_soon" | "overdue";

export type PaymentType =
  | "setup_fee"
  | "monthly_maintenance"
  | "domain_renewal"
  | "custom";

export type PaymentMethod =
  | "bank_transfer"
  | "cash"
  | "card"
  | "pos"
  | "mobile_money"
  | "other";

export type ClientRecord = {
  id: string;
  businessName: string;
  contactName: string;
  whatsapp: string;
  phone: string;
  email: string;
  setupFeeAmount: number;
  monthlyFeeAmount: number;
  setupFeePaid: boolean;
  websiteUrl: string | null;
  domainName: string | null;
  launchDate: string | null;
  nextMonthlyDueDate: string | null;
  domainRenewalDate: string | null;
  status: ClientStatus;
  notes: string;
  paymentHistory: PaymentRecord[];
};

export type ClientPaymentSnapshot = {
  type: PaymentType;
  amount: number;
  status: PaymentStatus;
  dueDate?: string;
};

export type AddClientFormValues = {
  businessName: string;
  contactName: string;
  whatsapp: string;
  phone: string;
  email: string;
  setupFeeAmount: number;
  monthlyFeeAmount: number;
  notes: string;
};

export type PaymentRecord = {
  id: string;
  type: PaymentType;
  amount: number;
  paymentDate: string;
  paymentMethod: PaymentMethod;
  reference: string;
  notes: string;
};

export type RecordPaymentFormValues = {
  type: PaymentType;
  amount: number;
  paymentDate: string;
  paymentMethod: PaymentMethod;
  reference: string;
  notes: string;
};

export type MarkLaunchedFormValues = {
  websiteUrl: string;
  domainName: string;
  launchDate: string;
  domainRenewalDate: string;
};
