"use server";
import webpush from "web-push";
import { unstable_noStore as noStore } from "next/cache"; //https://nextjs.org/docs/app/api-reference/functions/unstable_noStore

if (process.env.VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY) {
  webpush.setVapidDetails(
    "https://nextjs-pwa-webpush-template.vercel.app/",
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
  );
}

export default async function sendPushNotification({
  subscription,
  title,
  body,
}: {
  subscription: webpush.PushSubscription;
  title: string;
  body: string;
}) {
  noStore();

  console.log({ subscription });
  return await webpush.sendNotification(
    subscription,
    JSON.stringify({
      title,
      body,
    }),
    {
      urgency: "high",
      TTL: 86400,
    }
  );
}
