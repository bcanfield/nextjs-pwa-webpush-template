import Image from "next/image";
import { NotificationManager } from "./_components/notification-manager";
import { GithubIcon } from "./_icons/other-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-20 items-center bg-gradient-to-b from-zinc-800 to-zinc-900 text-zinc-300">
      <div className="flex flex-col items-center flex-auto">
        <Image
          src="/icon/icon_xl"
          alt="Vercel Logo"
          width={200}
          height={24}
          priority
        />
        <NotificationManager vapidPublicKey={process.env.VAPID_PUBLIC_KEY} />
      </div>
      <footer className="h-24 flex flex-col w-full justify-center">
        <a
          href="https://github.com/bcanfield/nextjs-pwa-webpush-template"
          className="flex gap-2 justify-center items-center"
        >
          <GithubIcon />
          <span className="text-zinc-400 text-sm">
            Next.js PWA Webpush Template
          </span>
        </a>
      </footer>
    </main>
  );
}
