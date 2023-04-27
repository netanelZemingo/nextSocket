import { NextApiRequest, NextApiResponse } from "next";
import webpush, { PushSubscription } from "web-push";
import { SubscriptionClass } from "./Services/Subscription";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json(SubscriptionClass.getInstance().subsrciptions);
}
