import { siteConfig } from "@/lib/site-config";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export function generateImageMetadata() {
  return [
    {
      contentType: "image/x-icon",
      size: { width: 192, height: 192 },
      id: "favicon",
    },
    {
      contentType: "image/png",
      size: { width: 16, height: 16 },
      id: "icon_xs",
    },
    {
      contentType: "image/png",
      size: { width: 32, height: 32 },
      id: "icon_sm",
    },
    {
      contentType: "image/png",
      size: { width: 64, height: 64 },
      id: "icon_md",
    },
    {
      contentType: "image/png",
      size: { width: 128, height: 128 },
      id: "icon_lg",
    },
    {
      contentType: "image/png",
      size: { width: 256, height: 256 },
      id: "icon_xl",
    },
    {
      contentType: "image/png",
      size: { width: 512, height: 512 },
      id: "icon_2xl",
    },
  ];
}

export default async function Icon({ id }: { id: string }) {
  const imageData = (await fetch(
    new URL("./custom-icon.png", import.meta.url)
  ).then((res) => res.arrayBuffer())) as string;
  return new ImageResponse(
    (
      <div
        tw={`flex items-center justify-center ${
          id === "icon_2xl" ? `bg-[${siteConfig.themeColor}]` : ""
        } w-full h-full p-4`}
      >
        <div tw={`flex`}>
          <img tw={"h-full"} alt={id} src={imageData} />
        </div>
      </div>
    ),
    {
      width: 512,
      height: 512,
      debug: true,
    }
  );
}
