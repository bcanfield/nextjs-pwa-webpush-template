"use client";

import Image from "next/image";
import sendPushNotification from "../_actions/send-push-notification";
import useServiceWorker from "../_hooks/useServiceWorker";

export const ServiceWorkerManager = ({
  vapidPublicKey,
}: {
  vapidPublicKey?: string;
}) => {
  const {
    userSubscription,
    notificationsEnabled,
    isMobile,
    isStandalone,
    notificationsSupported,
    subscribe,
  } = useServiceWorker({ vapidPublicKey });

  return (
    <div className="flex flex-col gap-8 items-center w-96 p-4">
      <Image
        src="/icon/icon_xl"
        alt="Vercel Logo"
        width={200}
        height={24}
        priority
      />
      <div className="flex flex-col gap-2 bg-zinc-800 p-2 rounded-md text-sm w-full">
        <div className="flex justify-between">
          <span>Mobile Device: </span>
          <span>{isMobile ? "yes" : "no"}</span>
        </div>
        <div className="flex justify-between">
          <span>App Installed: </span>
          <span> {isStandalone ? "yes" : "no"} </span>
        </div>
        <div className="flex justify-between">
          <span>Notifications Supported:</span>
          <span>{notificationsSupported ? "yes" : "no"}</span>
        </div>
        <div className="flex justify-between">
          <span>Device Notifications Enabled:</span>
          <span> {notificationsEnabled ? "yes" : "no"}</span>
        </div>
        <div className="flex justify-between">
          <span>User Subscribed:</span>
          <span> {userSubscription ? "yes" : "no"}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <button
          className="bg-[#f79e5d] text-zinc-800 font-semibold py-2 px-4 rounded"
          onClick={async (e) => {
            if (!isMobile || !isStandalone || !notificationsSupported) {
              alert(
                "To enable notifications, you must be on a mobile device and have the app installed."
              );
            } else {
              try {
                await subscribe();
                alert("Notifications enabled successfully.");
              } catch (err) {
                alert("There was an error enabling notifications.");
              }
            }
          }}
        >
          Enable Notifications
        </button>
        <button
          className="bg-[#f79e5d] text-zinc-800 font-semibold py-2 px-4 rounded"
          onClick={async (e) => {
            if (!userSubscription) {
              alert("Please enable notifications.");
            } else {
              await sendPushNotification({
                title: "Hello There!",
                body: "This is a push notification.",
                subscription: JSON.parse(userSubscription),
              });
            }
          }}
        >
          Send Test Notification
        </button>
      </div>
    </div>
  );
};
