import Image from "next/image";
import { NotificationManager } from "./_components/notification-manager";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 items-center bg-gradient-to-b from-zinc-800 to-zinc-900 text-zinc-300">
      <Image
        src="/icon/icon_xl"
        alt="Vercel Logo"
        width={200}
        height={24}
        priority
      />
      <NotificationManager vapidPublicKey={process.env.VAPID_PUBLIC_KEY} />
    </main>
  );
}
