import Image from "next/image";
import { NotificationManager } from "./_components/notification-manager";
import { GithubIcon } from "./_icons/other-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 pt-4 items-center bg-gradient-to-b from-zinc-800 to-zinc-900 text-zinc-300">
      <div className="flex flex-col items-center">
        <Image
          src="/icon/icon_xl"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
      </div>
      <div className="flex flex-col w-full justify-center">
        <a
          href="https://github.com/bcanfield/nextjs-pwa-webpush-template"
          className="flex gap-2 justify-center items-center"
        >
          <GithubIcon />
          <span className="text-zinc-400 text-xs">
            Next.js PWA Webpush Template
          </span>
        </a>
      </div>
      <div>
        <NotificationManager vapidPublicKey={process.env.VAPID_PUBLIC_KEY} />
      </div>
    </main>
  );
}
