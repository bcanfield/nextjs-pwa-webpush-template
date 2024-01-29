import Image from "next/image";
import { NotificationManager } from "./_components/notification-manager";
import { GithubIcon } from "./_icons/other-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-auto flex-col items-center pt-24">
      <Link
        className="flex flex-col gap-2 items-center"
        href="https://github.com/bcanfield/nextjs-pwa-webpush-template"
      >
        <Image
          src="/icon/icon_xl"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
        <div className="flex gap-2 justify-center items-center w-full">
          <GithubIcon />
          <span className="text-zinc-400 text-xs">
            Next.js PWA Webpush Template
          </span>
        </div>
      </Link>
      <NotificationManager vapidPublicKey={process.env.VAPID_PUBLIC_KEY} />
    </main>
  );
}
