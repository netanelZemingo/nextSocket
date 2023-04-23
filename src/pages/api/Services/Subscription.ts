import webpush, { PushSubscription } from "web-push";

export class SubscriptionClass {
  private static instance: SubscriptionClass;

  static getInstance() {
    if (!this.instance) {
      this.instance = new SubscriptionClass();
    }
    return this.instance;
  }
  private subsrciptions: { [username: string]: { pushSubscription: PushSubscription } } = {};

  add(username: string, pushSubscription: PushSubscription) {
    this.subsrciptions[username] = { pushSubscription };
  }
  find(username: string) {
    return this.subsrciptions[username];
  }
  notifyEveryoneButUser(usernameNotToSend: string, payload: { title: string; message: string }) {
    const userSub = this.subsrciptions[usernameNotToSend];
    console.log(usernameNotToSend);

    console.log(userSub, "usersub");

    if (!userSub) return;
    const usernames = Object.keys(this.subsrciptions);
    for (const username of usernames) {
      if (username == usernameNotToSend) continue;
      const subsription = this.subsrciptions[username]?.pushSubscription;
      webpush
        .sendNotification(subsription, JSON.stringify(payload))
        .catch((err) => console.error(err));
    }
  }
}
