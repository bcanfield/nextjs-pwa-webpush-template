import Image from "next/image";
import { ServiceWorkerManager } from "./_components/service-worker-manager";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 items-center bg-gradient-to-b from-zinc-800 to-zinc-900 text-zinc-300">
      <ServiceWorkerManager vapidPublicKey={process.env.VAPID_PUBLIC_KEY} />
    </main>
  );
}
