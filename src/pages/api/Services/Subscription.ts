import path from "path";
import fs from "fs";
import webpush, { PushSubscription } from "web-push";
import { Msg } from "./MessagesClass";

export class SubscriptionClass {
  private static instance: SubscriptionClass;

  static getInstance(): SubscriptionClass {
    if (!(globalThis as any).subscription) {
      (globalThis as any).subscription = new SubscriptionClass();
    }
    return (globalThis as any).subscription;
  }
  constructor() {}

  subsrciptions: { [username: string]: { pushSubscription: PushSubscription } } = {};

  add(username: string, pushSubscription: PushSubscription) {
    this.subsrciptions[username] = { pushSubscription: pushSubscription };
  }

  find(username: string) {
    return this.subsrciptions[username];
  }

  notifyEveryoneButUser(usernameNotToSend: string, payload: Payload) {
    console.log(usernameNotToSend);
    
    const userSub = this.subsrciptions[usernameNotToSend];
    console.log(usernameNotToSend);
    console.log(userSub, "usersub");
    if (!userSub) return;
    const usernames = Object.keys(this.subsrciptions);
    for (const username of usernames) {
      if (username == usernameNotToSend) continue;
      this.notify(username, payload);
    }
  }

  notifyEveryone(payload: Payload) {
    const usernames = Object.keys(this.subsrciptions);
    for (const username of usernames) {
      this.notify(username, payload);
    }
  }

  private notify(username: string, payload: Payload) {
    const subsription = this.subsrciptions[username]?.pushSubscription;
    webpush
      .sendNotification(subsription, JSON.stringify(payload))
      .catch((err) => console.error(err));
  }
}

interface Payload {
  title: string;
  message: string;
}
