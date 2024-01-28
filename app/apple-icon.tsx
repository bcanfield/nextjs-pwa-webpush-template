import { siteConfig } from "@/lib/site-config";
import { ImageResponse } from "next/og";
import { appIcon } from "./custom-icons";

export const runtime = "nodejs";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default async function Icon() {
  try {
    return new ImageResponse(
      (
        <div
          tw={`flex items-center justify-center w-full h-full bg-[${siteConfig.themeColor}] p-2`}
        >
          <div tw={"flex h-full"}>{appIcon}</div>
        </div>
      ),
      {
        width: 512,
        height: 512,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
