import Image from "next/image";
import Link from "next/link";

export default function Offline() {
  return (
    <main className="flex flex-auto flex-col items-center pt-24">
      <Link className="flex flex-col gap-2 items-center" href="/">
        <Image
          src="/icon/icon_xl"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
        <div className="flex gap-2 justify-center items-center w-full">
          Offline
        </div>
      </Link>
    </main>
  );
}
