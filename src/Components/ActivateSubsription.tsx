import { urlBase64ToUint8Array } from "@/utills/urlBase64ToUint8Array";
import React, { useEffect, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { useRouter } from "next/router";
import { useGlobalContext } from "../../context/UsernameContext";
const publicVapidKey =
  "BEc2-0v3UehTphhFjanlWc_nQUkuodnenCdq8U1LQPE9TqSXGpABxtLc4zqhG1gJzuIjyGZjgnEP4XFt5aeiw5g";
const usernameNextChat = "usernameNextChat";
const ActivateSubsription = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscription, setSubscription] = useState<any>(null);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);
  const { setUsername, username } = useGlobalContext();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      (window as any).workbox !== undefined
    ) {
      // run only in browser
      navigator.serviceWorker.ready.then((reg: ServiceWorkerRegistration) => {
        reg.pushManager?.getSubscription().then((sub: any) => {
          if (sub && !(sub.expirationTime && Date.now() > sub.expirationTime - 5 * 60 * 1000)) {
            setSubscription(sub);
            setIsSubscribed(true);
          }
        });
        setRegistration(reg);
      });
    }
  }, []);
  const router = useRouter();

  const checkIfSubscribedAndRoute = async (username: string) => {
    try {
      const res = await fetch(`/api/getuser/${username}`);
      const data = await res.json();
      if (!data.err) {
        await router.replace("chat");
      }
    } catch (error) {}
  };

  const subscribeButtonOnClick = async (event: any) => {
    if (!username) return;
    event.preventDefault();
    const subscription = await registration?.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
    });

    localStorage.setItem(usernameNextChat, username);

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({ subscription, username }),
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(await res.json());
    setSubscription(subscription);
    setIsSubscribed(true);
    console.log("web push subscribed!");
    console.log(subscription);
    setTimeout(async () => {
      await checkIfSubscribedAndRoute(username);
    }, 3000);
  };

  useEffect(() => {
    const username = localStorage.getItem(usernameNextChat);
    // if (username) checkIfSubscribedAndRoute(username).then();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="User name"
      />
      <Button disabled={!username} onClick={subscribeButtonOnClick}>
        Subscribe
      </Button>
    </div>
  );
};

export default ActivateSubsription;
