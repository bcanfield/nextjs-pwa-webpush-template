import { siteConfig } from "@/lib/site-config";
import { ImageResponse } from "next/og";
import AppIcon from "./_icons/custom-icon";

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
          tw={`flex items-center justify-center w-full h-full bg-[${siteConfig.themeColor}] p-24`}
        >
          <div tw={"flex h-full"}>
            <AppIcon />
          </div>
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
