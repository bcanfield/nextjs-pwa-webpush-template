// Listens for new push notifications
self.addEventListener("push", async (event) => {
  if (event.data) {
    const eventData = await event.data.json();
    showLocalNotification(eventData.title, eventData.body, self.registration);
    navigator.setAppBadge(1); // Set the app badge number
  }
});

const showLocalNotification = (title, body, swRegistration) => {
  console.log("show local notification", { title, body, swRegistration });
  swRegistration.showNotification(title, {
    body,
    icon: "/icon/icon_2xl",
  });
};

self.addEventListener("install", (event) => {
  console.log("service worker installed");
});

self.addEventListener("activate", (event) => {
  console.log("service worker activated");
});

self.addEventListener("pushsubscriptionchange", function (event) {
  console.log("push subscription change", { event });
});
