import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: "#030504",
    background_color: "#030504",
    icons: [
      {
        purpose: "maskable",
        sizes: "512x512",
        src: "/icon/icon_maskable",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "48x48",
        src: "/icon/icon",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "512x512",
        src: "/icon/icon_medium",
        type: "image/png",
      },
    ],
    orientation: "portrait",
    display: "standalone",
    dir: "auto",
    lang: "en-US",
    name: "Next.js PWA WebPush Template",
    short_name: "Next.js PWA WebPush Template",
    start_url: "/",
    scope: "/",
  };
}
