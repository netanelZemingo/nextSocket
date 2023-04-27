import { NextApiRequest, NextApiResponse } from "next";
import webpush, { PushSubscription } from "web-push";
import { SubscriptionClass } from "./Services/Subscription";
const publicVapidKey =
  "BEc2-0v3UehTphhFjanlWc_nQUkuodnenCdq8U1LQPE9TqSXGpABxtLc4zqhG1gJzuIjyGZjgnEP4XFt5aeiw5g";

const privateVapidKey = "lLz1YAkSM7DL6oOvlvD7yasJIVsLdnbq5hLXG7GGOFg";

webpush.setVapidDetails("mailto:noti56@gmail.com", publicVapidKey, privateVapidKey);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST") {
      const subscription: PushSubscription = req.body.subscription;
      const username: string = req.body.username;
      res.status(201);
      console.log(username, "username");

      SubscriptionClass.getInstance().add(username, subscription);

      const payload = JSON.stringify({
        title: "Push Test",
        message: "hello there welcome " + username,
      });

      webpush.sendNotification(subscription, payload).catch((err) => console.error(err));
      res.json("created sucssesfully");
      return;
    }
    res.json("failed");
  } catch (error) {
    res.json(error);
  }
}

// setInterval(() => {
//   if (subscription1) {
//     const payload = JSON.stringify({ title: "Push Test", message: "hello there" });

//     webpush.sendNotification(subscription1, payload).catch((err) => console.error(err));
//   }
// }, 3000);
