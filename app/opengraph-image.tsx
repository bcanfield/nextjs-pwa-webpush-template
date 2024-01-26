import AppIcon from "@/app/custom-icon";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Next.js PWA WebPush Template";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          gap: 4,
          fontSize: 40,
          color: "#f6f6f6",
          background: "black",
          width: "100%",
          height: "100%",
          paddingTop: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 200,
            height: 200,
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
      ...size,
    }
  );
}
