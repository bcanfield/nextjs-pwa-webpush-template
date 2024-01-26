import { siteConfig } from "@/lib/site-config";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default async function Icon() {
  try {
    const imageData = (await fetch(
      new URL("./custom-icon.png", import.meta.url)
    ).then((res) => res.arrayBuffer())) as string;
    return new ImageResponse(
      (
        <div
          tw={`flex items-center justify-center w-full h-full bg-[${siteConfig.themeColor}]`}
        >
          <div tw={`flex items-center justify-center`}>
            <img tw={"h-full"} src={imageData} />
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
