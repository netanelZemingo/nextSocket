import { SubscriptionClass } from "@/pages/api/Services/Subscription";

export declare global {
  export interface globalThis {
    subscription: SubscriptionClass;
  }
}
