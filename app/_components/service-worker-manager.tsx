"use client";

import { useMemo, useState } from "react";
import useUserAgent from "../_hooks/useUserAgent";
import useLocalStorage from "../_hooks/useLocalStorage";
import sendPushNotification from "../_actions/send-push-notification";

const notificationsSupported = () =>
  "Notification" in window &&
  "serviceWorker" in navigator &&
  "PushManager" in window;

export const ServiceWorkerManager = ({
  vapidPublicKey,
}: {
  vapidPublicKey?: string;
}) => {
  const [isLoadingSubscribe, setIsLoadingSubscribe] = useState(false);

  // Storing subscription in localstorage for demo purposes
  const [userSubscription, setUserSubscription] = useLocalStorage(
    "user-subscription",
    ""
  );

  const { userAgent, isMobile, isStandalone, isIOS } = useUserAgent();

  const [notificationsEnabled, setNotificationsEnabled] =
    useState<boolean>(false);

  const subscribeToPush = async (reg: ServiceWorkerRegistration) => {
    try {
      const options = {
        applicationServerKey: vapidPublicKey,
        userVisibleOnly: true,
      };
      // const subscription = await reg.pushManager.subscribe(options);
      return await reg.pushManager.subscribe(options).then(
        async (sub: PushSubscription) => {
          // Save to your database here
          console.log(`Saving Subscription:`, { sub });
          setUserSubscription(JSON.stringify(sub));
          setNotificationsEnabled(true);
        },
        (error) => {
          console.error("Error", error);
        }
      );
    } catch (err) {
      console.error("Error", err);
    }
  };

  const subscribe = async () => {
    console.log("subscribe");
    if (!notificationsSupported()) {
      alert("Notifications not supported in this browser");
    }

    await navigator.serviceWorker
      .register("/service-worker.js", { scope: "/" })
      .then(
        async function (reg) {
          await reg.update();

          var serviceWorker;
          if (reg.installing) {
            serviceWorker = reg.installing;
          } else if (reg.waiting) {
            serviceWorker = reg.waiting;
          } else if (reg.active) {
            serviceWorker = reg.active;
          }

          if (serviceWorker) {
            console.log("sw current state", serviceWorker.state);
            if (serviceWorker.state == "activated") {
              //If push subscription wasnt done yet have to do here
              console.log("sw already activated - Do watever needed here");
              await subscribeToPush(reg);
            }
            serviceWorker.addEventListener("statechange", async function (e) {
              const sw = e.target as ServiceWorker;
              console.log({ e });
              console.log("sw statechange : ", sw.state);
              if (sw.state == "activated") {
                // use pushManger for subscribing here.
                console.log(
                  "Just now activated. now we can subscribe for push notification"
                );
                await window?.Notification.requestPermission();
                const subscribed = await subscribeToPush(reg);
                console.log({ subscribed });
              }
            });
          }
        },
        function (err) {
          console.error(
            "unsuccessful registration with ",
            "/service-worker.js",
            err
          );
        }
      );
  };

  const isCorrectMobileSetup = useMemo(() => {
    console.log({ isMobile, notificationsEnabled });
    if (isMobile !== null) {
      return (
        notificationsEnabled === true &&
        isMobile === true &&
        isStandalone === true
      );
    }
  }, [notificationsEnabled, isMobile, isStandalone]);

  return (
    <>
      <button onClick={async (e) => await subscribe()}>Subscribe</button>
      <button
        onClick={() =>
          sendPushNotification({
            subscription: JSON.parse(userSubscription),
            title: "Success!",
            body: "You have successfully sent a web push notification!",
          })
        }
      >
        Send Test Notification
      </button>
      <div className=" w-64">
        <span>User sub: {userSubscription}</span>
      </div>
    </>
  );
};
