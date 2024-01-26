import AppIcon from "@/app/custom-icon";
import { ImageResponse } from "next/og";

export const runtime = "edge";

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
          style={{
            display: "flex",
            flexDirection: orientation === "portrait" ? "column" : "row",
            fontSize: 40,
            color: "black",
            background: "white",
            width: "100%",
            height: "100%",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 40,
              color: "black",
              background: "white",
              width: 200,
              height: 200,
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AppIcon />
          </div>
          Next.js PWA WebPush Template
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
