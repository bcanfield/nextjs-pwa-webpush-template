"use client";

import { PWAInstallAttributes } from "@khmyznikov/pwa-install";
import { useEffect, useRef, useState } from "react";
import sendPushNotification from "../_actions/send-push-notification";
import useServiceWorker from "../_hooks/useServiceWorker";
import {
  InstructionsIcon,
  NotificationIcon,
  SendIcon,
} from "../_icons/other-icons";

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
  const elementRef = useRef();
  const [shownDialog, setShownDialog] = useState(false);

  const [isLoadingSendNotification, setIsLoadingSendNotification] =
    useState(false);
  useEffect(() => {
    import("@khmyznikov/pwa-install");
  }, []);
  useEffect(() => {
    if (elementRef.current && elementRef.current.showDialog) {
      elementRef.current?.showDialog();
      setShownDialog(true);
    }
  }, [elementRef, shownDialog]);

  const pwaInstallAttributes: PWAInstallAttributes = {
    "manifest-url": "/manifest.webmanifest",
    "install-description":
      "This site has app functionality. Add it to your Home Screen for extensive experience and easy access.",
  };

  return (
    <div className="flex flex-col gap-4 items-center w-96">
      <pwa-install ref={elementRef} {...pwaInstallAttributes}></pwa-install>
      <div className="flex flex-col gap-2 bg-zinc-800 p-2 rounded-md text-sm w-full font-semibold">
        <span className="text-lg text-zinc-100">Device Requirements</span>
        <div className="flex justify-between">
          <span>Mobile Device: </span>
          {isMobile ? (
            <span>yes</span>
          ) : (
            <span className="text-red-400">no</span>
          )}
        </div>
        <div className="flex justify-between">
          <span>App Installed: </span>
          {isStandalone ? (
            <span>yes</span>
          ) : (
            <span className="text-red-400">no</span>
          )}
        </div>
        <div className="flex justify-between">
          <span>Notifications Supported:</span>
          {notificationsSupported ? (
            <span>yes</span>
          ) : (
            <span className="text-red-400">no</span>
          )}
        </div>
      </div>

      <button
        className={`text-sm items-center w-full bg-[#f79e5d] text-zinc-800 font-semibold py-2 rounded flex gap-4 px-4 ${
          isLoadingSubscription ? "animate-pulse" : ""
        }`}
        onClick={() => {
          elementRef.current?.showDialog();
        }}
      >
        <InstructionsIcon />
        Installation Instructions
      </button>
      <button
        className={`text-sm items-center w-full bg-[#f79e5d] text-zinc-800 font-semibold py-2 rounded flex gap-4 px-4 ${
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
        <div className="col-span-1 flex justify-end">
          <NotificationIcon />
        </div>
        <span className=" col-span-2  text-start">Enable Notifications</span>
      </button>

      <div className="flex flex-col gap-2 bg-zinc-800 p-2 rounded-md text-sm w-full font-semibold">
        <span className="text-lg text-zinc-100">Notification Status</span>
        <div
          className={`flex justify-between items-center ${
            isLoadingSubscription ? "animate-pulse" : ""
          }`}
        >
          <span>Notifications Enabled:</span>
          {notificationsEnabled ? (
            <span>yes</span>
          ) : (
            <span className="text-red-400">no</span>
          )}
        </div>
        <div className="flex justify-between">
          <span>User Subscribed Successfully:</span>
          {userSubscription ? (
            <span>yes</span>
          ) : (
            <span className="text-red-400">no</span>
          )}
        </div>
      </div>
      <button
        className={`text-sm items-center w-full bg-[#f79e5d] text-zinc-800 font-semibold py-2 rounded flex gap-4 px-4 ${
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
        <span className=" col-span-2  text-start ">Send Test Notification</span>
      </button>
    </div>
  );
};
