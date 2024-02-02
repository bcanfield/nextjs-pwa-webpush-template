import { siteConfig } from "@/lib/site-config";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: siteConfig.themeColor,
    background_color: siteConfig.backgroundColor,
    icons: [
      {
        sizes: "16x16",
        src: "/icon/icon_xs",
        type: "image/png",
      },
      {
        sizes: "32x32",
        src: "/icon/icon_sm",
        type: "image/png",
      },
      {
        sizes: "64x64",
        src: "/icon/icon_md",
        type: "image/png",
      },
      {
        sizes: "128x128",
        src: "/icon/icon_lg",
        type: "image/png",
      },
      {
        sizes: "256x256",
        src: "/icon/icon_xl",
        type: "image/png",
      },
      // Maskable icons must have a non-transparent background
      {
        purpose: "maskable",
        sizes: "512x512",
        src: "/icon/icon_2xl",
        type: "image/png",
      },
    ],
    orientation: "portrait",
    display: "standalone",
    dir: "auto",
    lang: "en-US",
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    start_url: "/",
    scope: "/",
  };
}
