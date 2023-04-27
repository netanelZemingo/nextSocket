import { NextApiRequest, NextApiResponse } from "next";
import webpush, { PushSubscription } from "web-push";
import { SubscriptionClass } from "./Services/Subscription";
import { io } from "socket.io-client";
import { Messages } from "./Services/MessagesClass";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { msg, username } = req.body;
    Messages.getInstance().addMessage(msg);

    // get all other subspritions and not the senders !
    SubscriptionClass.getInstance().notifyEveryoneButUser(msg.username, {
      title: `Message from ${username}`,
      message: msg,
    });
    res.json("updated users");
  }
  res.json("failed");
}
