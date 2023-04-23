import { NextApiRequest, NextApiResponse } from "next";
import webpush, { PushSubscription } from "web-push";
import { SubscriptionClass } from "../Services/Subscription";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query;

  if (username && typeof username === "string") {
    const userSub = SubscriptionClass.getInstance().find(username);

    if (userSub) {
      res.status(200).json({ msg: "found user " + username, err: false });
      return;
    }
    res.status(400).json({ msg: "no user " + username, err: true });
  }

  res.status(400);
}
