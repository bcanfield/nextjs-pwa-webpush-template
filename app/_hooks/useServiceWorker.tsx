import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import useUserAgent from "./useUserAgent";

const useServiceWorker = ({ vapidPublicKey }: { vapidPublicKey?: string }) => {
  const { isMobile, isStandalone } = useUserAgent();
  const [notificationsSupported, setNotificationsSupported] = useState(false);
  const [userSubscription, setUserSubscription] = useLocalStorage(
    "user-subscription",
    ""
  );

  const [notificationsEnabled, setNotificationsEnabled] =
    useState<boolean>(false);

  useEffect(() => {
    setNotificationsSupported(
      typeof window !== "undefined" &&
        "Notification" in window &&
        "serviceWorker" in navigator &&
        "PushManager" in window
    );
  }, []);

  // This will retrieve a new subscription from the PushManager that we can tie to a user
  const subscribeToPushManager = async (reg: ServiceWorkerRegistration) => {
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

  // This is called when a user clicks a 'Subscribe' button on your site
  const subscribe = async () => {
    if (!notificationsSupported) {
      alert("Notifications not supported in this browser");
    }
    // Attempt to register the service worker when a user subscribes to notifications
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
            // If service worker was already activated, we can simply subscribe to push notifications
            if (serviceWorker.state == "activated") {
              console.log("Service worker was already activated");
              await subscribeToPushManager(reg);
            }
            // Otherwise, we will wait for the service worker to activate, request permission, and then subscribe
            serviceWorker.addEventListener("statechange", async function (e) {
              const sw = e.target as ServiceWorker;
              if (sw.state == "activated") {
                console.log("Service worker newly activated");
                await window?.Notification.requestPermission();
                await subscribeToPushManager(reg);
              }
            });
          }
        },
        function (err) {
          console.error("Unsuccessful service worker registration", err);
        }
      );
  };

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
