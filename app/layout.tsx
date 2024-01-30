import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import SplashScreens from "@/lib/splash-screens";

interface MediaInfo {
  deviceWidth: number;
  deviceHeight: number;
  devicePixelRatio: number;
  orientation: string;
}

const mediaInfoArray: MediaInfo[] = [
  {
    deviceWidth: 430,
    deviceHeight: 932,
    devicePixelRatio: 3,
    orientation: "landscape",
  },
  {
    deviceWidth: 393,
    deviceHeight: 852,
    devicePixelRatio: 3,
    orientation: "landscape",
  },
  {
    deviceWidth: 428,
    deviceHeight: 926,
    devicePixelRatio: 3,
    orientation: "landscape",
  },
  {
    deviceWidth: 390,
    deviceHeight: 844,
    devicePixelRatio: 3,
    orientation: "landscape",
  },
  {
    deviceWidth: 375,
    deviceHeight: 812,
    devicePixelRatio: 3,
    orientation: "landscape",
  },
  {
    deviceWidth: 414,
    deviceHeight: 896,
    devicePixelRatio: 3,
    orientation: "landscape",
  },
  {
    deviceWidth: 414,
    deviceHeight: 896,
    devicePixelRatio: 2,
    orientation: "landscape",
  },
  {
    deviceWidth: 414,
    deviceHeight: 736,
    devicePixelRatio: 3,
    orientation: "landscape",
  },
  {
    deviceWidth: 375,
    deviceHeight: 667,
    devicePixelRatio: 2,
    orientation: "landscape",
  },
  {
    deviceWidth: 320,
    deviceHeight: 568,
    devicePixelRatio: 2,
    orientation: "landscape",
  },
  {
    deviceWidth: 1024,
    deviceHeight: 1366,
    devicePixelRatio: 2,
    orientation: "landscape",
  },
  {
    deviceWidth: 834,
    deviceHeight: 1194,
    devicePixelRatio: 2,
    orientation: "landscape",
  },
  {
    deviceWidth: 820,
    deviceHeight: 1180,
    devicePixelRatio: 2,
    orientation: "landscape",
  },
  {
    deviceWidth: 834,
    deviceHeight: 1112,
    devicePixelRatio: 2,
    orientation: "landscape",
  },
  {
    deviceWidth: 810,
    deviceHeight: 1080,
    devicePixelRatio: 2,
    orientation: "landscape",
  },
  {
    deviceWidth: 768,
    deviceHeight: 1024,
    devicePixelRatio: 2,
    orientation: "landscape",
  },
  {
    deviceWidth: 744,
    deviceHeight: 1133,
    devicePixelRatio: 2,
    orientation: "landscape",
  },
  {
    deviceWidth: 430,
    deviceHeight: 932,
    devicePixelRatio: 3,
    orientation: "portrait",
  },
  {
    deviceWidth: 393,
    deviceHeight: 852,
    devicePixelRatio: 3,
    orientation: "portrait",
  },
  {
    deviceWidth: 428,
    deviceHeight: 926,
    devicePixelRatio: 3,
    orientation: "portrait",
  },
  {
    deviceWidth: 390,
    deviceHeight: 844,
    devicePixelRatio: 3,
    orientation: "portrait",
  },
  {
    deviceWidth: 375,
    deviceHeight: 812,
    devicePixelRatio: 3,
    orientation: "portrait",
  },
  {
    deviceWidth: 414,
    deviceHeight: 896,
    devicePixelRatio: 3,
    orientation: "portrait",
  },
  {
    deviceWidth: 414,
    deviceHeight: 896,
    devicePixelRatio: 2,
    orientation: "portrait",
  },
  {
    deviceWidth: 414,
    deviceHeight: 736,
    devicePixelRatio: 3,
    orientation: "portrait",
  },
  {
    deviceWidth: 375,
    deviceHeight: 667,
    devicePixelRatio: 2,
    orientation: "portrait",
  },
  {
    deviceWidth: 320,
    deviceHeight: 568,
    devicePixelRatio: 2,
    orientation: "portrait",
  },
  {
    deviceWidth: 1024,
    deviceHeight: 1366,
    devicePixelRatio: 2,
    orientation: "portrait",
  },
  {
    deviceWidth: 834,
    deviceHeight: 1194,
    devicePixelRatio: 2,
    orientation: "portrait",
  },
  {
    deviceWidth: 820,
    deviceHeight: 1180,
    devicePixelRatio: 2,
    orientation: "portrait",
  },
  {
    deviceWidth: 834,
    deviceHeight: 1112,
    devicePixelRatio: 2,
    orientation: "portrait",
  },
  {
    deviceWidth: 810,
    deviceHeight: 1080,
    devicePixelRatio: 2,
    orientation: "portrait",
  },
  {
    deviceWidth: 768,
    deviceHeight: 1024,
    devicePixelRatio: 2,
    orientation: "portrait",
  },
  {
    deviceWidth: 744,
    deviceHeight: 1133,
    devicePixelRatio: 2,
    orientation: "portrait",
  },
];

export const metadata: Metadata = {
  metadataBase: siteConfig.url,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: siteConfig.authors,
  generator: "Next.js",
  keywords: siteConfig.keywords,
  creator: siteConfig.creator,
  publisher: "Vercel",
  robots: "index,follow",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
    startupImage: SplashScreens,
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  // Uncomment the following line to prevent zooming on mobile devices. Disallowing user scaling is not considered 'accessible', but could arguably lead to a better user experience.
  // userScalable: false,
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen max-w-[1024px] flex overscroll-none mx-auto bg-gradient-to-b from-zinc-800 to-zinc-900 text-zinc-300">
        {children}
      </body>
    </html>
  );
}
