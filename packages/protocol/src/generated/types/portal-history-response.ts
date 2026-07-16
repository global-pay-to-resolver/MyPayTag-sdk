/* eslint-disable */
// Generated from packages/protocol/schemas/portal-history-response.schema.json. Do not edit by hand.

export type HistoryItem = Question | Answer | Quote | PaymentIntent | Receipt;

export interface PortalHistoryResponse {
  schema: "mypaytag.portal.history.v1";
  user: PortalUser;
  items: HistoryItem[];
  nextCursor?: string;
}
export interface PortalUser {
  maskedDisplay?: string;
}
export interface Question {
  kind: "question";
  id: string;
  createdAt: string;
  payingDapp: DappSummary;
  paytagMaskedDisplay?: string;
  /**
   * @minItems 1
   */
  requestedPaths: [RequestedPath, ...RequestedPath[]];
  amount: {
    value: string;
    currency: string;
  };
  purpose: string;
  payingDappReference: string;
}
export interface DappSummary {
  id: string;
  displayName: string;
  appUrl?: string;
}
export interface RequestedPath {
  chain: string;
  network: string;
  asset: string;
}
export interface Answer {
  kind: "answer";
  id: string;
  questionId: string;
  createdAt: string;
  status:
    | "resolved"
    | "no_route"
    | "user_action_required"
    | "authorization_required"
    | "provider_unavailable"
    | "provider_error"
    | "invalid_identifier"
    | "invalid_request";
  selectedPayToDapp?: DappSummary;
  actionState?: "ready" | "selected_route" | "expired" | "completed";
}
export interface Quote {
  kind: "quote";
  id: string;
  questionId: string;
  createdAt: string;
  provider: string;
  from: AssetAmount;
  to: AssetAmount;
  fees: Fee[];
  expiresAt: string;
  routeSteps: RouteStep[];
  status: "available" | "selected" | "expired" | "failed";
  selectedQuote?: {
    selectedQuoteId: string;
    selectedAt: string;
    payableInstructionRef?: string;
  };
}
export interface AssetAmount {
  chain: string;
  network: string;
  asset: string;
  amount: string;
}
export interface Fee {
  label: string;
  amount: string;
  asset: string;
  chargedTo: "sender" | "recipient";
  source: string;
}
export interface RouteStep {
  label: string;
  from: AssetAmount;
  to: AssetAmount;
}
export interface PaymentIntent {
  kind: "payment_intent";
  id: string;
  questionId: string;
  createdAt: string;
  status: "ready" | "expired" | "used" | "failed";
  payToDapp: DappSummary;
  amount: AssetAmount;
  expiresAt: string;
}
export interface Receipt {
  kind: "receipt";
  id: string;
  paymentIntentId: string;
  createdAt: string;
  status: "pending" | "completed" | "failed" | "unavailable";
  transactionHash?: string;
  chain?: string;
  network?: string;
  explorerUrl?: string;
}
