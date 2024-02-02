import { siteConfig } from "@/lib/site-config";
import { ImageResponse } from "next/og";
import AppIcon from "./_icons/custom-icon";

export const runtime = "nodejs";

export const alt = siteConfig.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  try {
    return new ImageResponse(
      (
        <div
          tw={`flex flex-col p-8 items-center justify-center w-full h-full bg-[${siteConfig.themeColor}] text-[${siteConfig.textColor}]`}
        >
          <div tw={"flex h-full max-h-96 max-w-96"}>
            <AppIcon />
          </div>
          <div tw="ml-2 text-8xl flex-auto flex items-center text-center justify-center ">
            {siteConfig.shortName}
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
