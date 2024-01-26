import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
  // metadataBase: new URL("https://nextjs-pwa-webpush-template.vercel.app/"),
  metadataBase: new URL("https://localhost:3000/"),

  title: {
    default: "Next.js PWA WebPush Template",
    template: "%s | Next.js PWA WebPush Template",
  },
  description: "Example Next.js App Showcasing PWA and WebPush Notifications",
  applicationName: "Next.js PWA WebPush Template",
  authors: [{ name: "Brandin Canfield", url: "https://github.com/bcanfield" }],
  generator: "Next.js",
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
  icons: [],
  creator: "Brandin Canfield",
  publisher: "Vercel",
  robots: "index,follow",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Next.js PWA WebPush Template",
    startupImage: mediaInfoArray.map(
      ({ deviceHeight, deviceWidth, devicePixelRatio, orientation }) => {
        return {
          media: `screen and (device-width: ${deviceWidth}px) and (device-height: ${deviceHeight}px) and (-webkit-device-pixel-ratio: ${devicePixelRatio}) and (orientation: ${orientation})`,
          url: `/api/splash-screen?deviceWidth=${deviceWidth}&deviceHeight=${deviceHeight}&devicePixelRatio=${devicePixelRatio}&orientation=${orientation}`,
        };
      }
    ),
  },
};

export const viewport: Viewport = {
  themeColor: "#030504",
  userScalable: false,
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
