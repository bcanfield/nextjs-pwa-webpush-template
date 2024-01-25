self.addEventListener("push", async (event) => {
  console.log("PUSH", { event });

  console.log("in here 1");
  if (event.data) {
    console.log("in here 2");

    // const eventData = await event.data.json();
    const eventData = await event.data.json();
    console.log("in here 3", { eventData });

    showLocalNotification(eventData.title, eventData.body, self.registration);
    navigator.setAppBadge(1);
  }
});

const showLocalNotification = (title, body, swRegistration) => {
  console.log("show local notification", { title, body, swRegistration });
  swRegistration.showNotification(title, {
    body,
    icon: "/icon.png",
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
