import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import SplashScreens from "@/lib/splash-screens";

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
