import AppIcon from "@/app/_icons/app-icon";
import { siteConfig } from "@/lib/site-config";
import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const deviceWidth = searchParams.get("deviceWidth");
    const deviceHeight = searchParams.get("deviceHeight");
    const devicePixelRatio = searchParams.get("devicePixelRatio");
    const orientation = searchParams.get("orientation");

    if (!deviceWidth || !deviceHeight || !devicePixelRatio || !orientation) {
      throw new Error("Missing device parameters");
    }

    return new ImageResponse(
      (
        <div
          tw={`flex items-center justify-center w-full h-full bg-[${siteConfig.themeColor}] text-[${siteConfig.textColor}]`}
        >
          <div tw={"flex h-full max-h-96 max-w-96"}>
            <AppIcon />
          </div>
          <div tw="ml-2 text-4xl">{siteConfig.name}</div>
        </div>
      ),
      {
        width: orientation === "portrait" ? +deviceWidth : +deviceHeight,
        height: orientation === "portrait" ? +deviceHeight : +deviceWidth,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
