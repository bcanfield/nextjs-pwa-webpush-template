export const siteConfig = {
  name: "Next.js PWA WebPush Template",
  themeColor: "#fcd7a6",
  description: "Example Next.js App Showcasing PWA and WebPush Notifications",
  authors: [{ name: "Brandin Canfield", url: "https://github.com/bcanfield" }],
  creator: "Brandin Canfield",
  url:
    process.env.NODE_ENV === "development"
      ? "https://localhost:3000"
      : "https://nextjs-pwa-webpush-template-git-webpush-bcanfield.vercel.app",
  keywords: [
    "nextjs",
    "pwa",
    "webpush",
    "notifications",
    "template",
    "example",
    "progressive",
    "web",
    "app",
  ],
};
