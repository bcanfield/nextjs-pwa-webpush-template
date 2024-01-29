"use client";

import { useState } from "react";
import sendPushNotification from "../_actions/send-push-notification";
import useServiceWorker from "../_hooks/useServiceWorker";
import { NotificationIcon, SendIcon } from "../_icons/other-icons";

export const NotificationManager = ({
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
    isLoadingSubscription,
    subscribe,
  } = useServiceWorker({ vapidPublicKey });

  const [isLoadingSendNotification, setIsLoadingSendNotification] =
    useState(false);
  return (
    <div className="flex flex-col gap-8 items-center w-96 p-4">
      <div className="flex flex-col gap-2 bg-zinc-800 p-2 rounded-md text-sm w-full font-semibold">
        <span className="text-lg text-zinc-100">Device Requirements</span>
        <div className="flex justify-between">
          <span>Mobile Device: </span>
          {isMobile ? <span>yes</span> : <span>no</span>}
        </div>
        <div className="flex justify-between">
          <span>App Installed: </span>
          {isStandalone ? <span>yes</span> : <span>no</span>}
        </div>
        <div className="flex justify-between">
          <span>Notifications Supported:</span>
          {notificationsSupported ? <span>yes</span> : <span>no</span>}
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <button
          disabled={isLoadingSubscription}
          className={`bg-[#f79e5d] text-zinc-800 font-semibold py-2 px-4 rounded grid grid-cols-3 gap-2 ${
            isLoadingSubscription ? "animate-pulse" : ""
          }`}
          onClick={async (e) => {
            if (!isMobile || !isStandalone || !notificationsSupported) {
              alert(
                "To enable notifications, you must be on a mobile device and have the app installed."
              );
            } else {
              try {
                await subscribe();
              } catch (err) {
                alert("There was an error enabling notifications.");
              }
            }
          }}
        >
          <div className=" col-span-1 flex justify-end">
            <NotificationIcon />
          </div>
          <span className=" col-span-2  text-start">Enable Notifications</span>
        </button>
        <button
          className={`bg-[#f79e5d] text-zinc-800 font-semibold py-2 px-4 rounded grid grid-cols-3 gap-2  ${
            isLoadingSendNotification ? "animate-pulse" : ""
          }`}
          disabled={isLoadingSendNotification}
          onClick={async (e) => {
            if (!userSubscription) {
              alert("Please enable notifications.");
            } else {
              setIsLoadingSendNotification(true);
              await sendPushNotification({
                title: "Hello There!",
                body: "This is a push notification.",
                subscription: JSON.parse(userSubscription),
              });
              setIsLoadingSendNotification(false);
            }
          }}
        >
          <div className=" col-span-1 flex justify-end ">
            <SendIcon />
          </div>
          <span className=" col-span-2  text-start ">
            Send Test Notification
          </span>
        </button>
      </div>

      <div className="flex flex-col gap-2 bg-zinc-800 p-2 rounded-md text-sm w-full font-semibold">
        <span className="text-lg text-zinc-100">Notification Status</span>
        <div
          className={`flex justify-between items-center ${
            isLoadingSubscription ? "animate-pulse" : ""
          }`}
        >
          <span>Notifications Enabled:</span>
          {notificationsEnabled ? <span>yes</span> : <span>no</span>}
        </div>
        <div className="flex justify-between">
          <span>User Subscribed Successfully:</span>
          {userSubscription ? <span>yes</span> : <span>no</span>}
        </div>
      </div>
    </div>
  );
};
