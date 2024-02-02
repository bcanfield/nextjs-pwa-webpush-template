export type {};

declare const self: ServiceWorkerGlobalScope;

self.addEventListener("push", (event) => {
  console.log("PUSH", { event });
  const data = JSON.parse(event?.data?.json() || {});
  event?.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "/icon512_rounded.png",
    })
  );
});
