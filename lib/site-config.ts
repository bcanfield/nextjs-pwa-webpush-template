import { Metadata, MetadataRoute } from "next";

export const siteConfig: SiteConfig = {
  name: "Next.js PWA WebPush Template",
  shortName: "PWA Template",
  themeColor: "#18181b", // status or title bar color
  backgroundColor: "#18181b", // background color before stylesheets have loaded
  textColor: "#000000", // text color for opengraph images and splash screens
  description: "Example Next.js App Showcasing PWA and WebPush Notifications",
  authors: [{ name: "Brandin Canfield", url: "https://github.com/bcanfield" }],
  creator: "Brandin Canfield",
  url: new URL(
    process.env.NODE_ENV === "development"
      ? "https://localhost:3000"
      : "https://nextjs-pwa-webpush-template-git-webpush-bcanfield.vercel.app"
  ),
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

interface SiteConfig {
  name: string;
  shortName: MetadataRoute.Manifest["short_name"];
  themeColor: MetadataRoute.Manifest["theme_color"];
  backgroundColor: MetadataRoute.Manifest["background_color"];
  textColor: string;
  description?: MetadataRoute.Manifest["description"];
  authors: Metadata["authors"];
  creator: Metadata["creator"];
  url: Metadata["metadataBase"];
  keywords: Metadata["keywords"];
}
