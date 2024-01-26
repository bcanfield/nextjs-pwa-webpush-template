// import { siteConfig } from "@/lib/site-config";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Next.js PWA WebPush Template";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const imageData = (await fetch(
    new URL("./custom-icon.png", import.meta.url)
  ).then((res) => res.arrayBuffer())) as string;
  return new ImageResponse(
    (
      <div
        // tw={`flex p-8 items-center justify-center w-full h-full bg-[${siteConfig.themeColor}] text-[${siteConfig.textColor}]`}
        tw={`flex p-8 items-center justify-center w-full h-full bg-[black] text-[black]`}
      >
        <div tw={`flex`}>
          <img tw={"h-full max-h-96 max-w-96"} src={imageData} />
        </div>
        <div tw="ml-2 text-4xl flex-auto flex items-center text-center justify-center ">
          Test
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
