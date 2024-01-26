import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import useUserAgent from "./useUserAgent";

const useServiceWorker = ({ vapidPublicKey }: { vapidPublicKey?: string }) => {
  const { isMobile, isStandalone } = useUserAgent();
  const [notificationsEnabled, setNotificationsEnabled] =
    useState<boolean>(false);

  const [notificationsSupported, setNotificationsSupported] = useState(false);

  useEffect(() => {
    setNotificationsSupported(
      typeof window !== "undefined" &&
        "Notification" in window &&
        "serviceWorker" in navigator &&
        "PushManager" in window
    );
  }, []);

  const subscribeToPush = async (reg: ServiceWorkerRegistration) => {
    try {
      const options = {
        applicationServerKey: vapidPublicKey,
        userVisibleOnly: true,
      };
      return await reg.pushManager.subscribe(options).then(
        async (sub: PushSubscription) => {
          // Save to your database here
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
    if (!notificationsSupported) {
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

  const [userSubscription, setUserSubscription] = useLocalStorage(
    "user-subscription",
    ""
  );

  return {
    userSubscription,
    notificationsEnabled,
    isMobile,
    isStandalone,
    notificationsSupported,
    subscribe,
  };
};

export default useServiceWorker;
