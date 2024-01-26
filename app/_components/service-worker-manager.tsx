"use client";

import { useMemo, useState } from "react";
import useUserAgent from "../_hooks/useUserAgent";
import useLocalStorage from "../_hooks/useLocalStorage";
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
    <div className="flex flex-col gap-2 border border-red-500">
      <span>Mobile Device: {isMobile ? "yes" : "no"} </span>
      <span>App Installed: {isStandalone ? "yes" : "no"} </span>
      <span>
        Notifications Supported: {notificationsSupported ? "yes" : "no"}
      </span>
      <span>
        Device Notifications Enabled: {notificationsEnabled ? "yes" : "no"}{" "}
      </span>
      <span>User subscribed: {userSubscription ? "yes" : "no"} </span>

      <button onClick={async (e) => await subscribe()}>Subscribe</button>
    </div>
  );
};
