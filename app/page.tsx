import Image from "next/image";
import { NotificationManager } from "./_components/notification-manager";
import { GithubIcon } from "./_icons/other-icons";

export default function Home() {
  return (
    <main className="flex flex-auto flex-col items-center pt-8">
      <Image
        src="/icon/icon_xl"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
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
      <NotificationManager vapidPublicKey={process.env.VAPID_PUBLIC_KEY} />
    </main>
  );
}
