import { ImageResponse } from "next/og";
import AppIcon from "./custom-icon";

export const runtime = "edge";

export function generateImageMetadata() {
  return [
    {
      contentType: "image/png",
      size: { width: 48, height: 48 },
      id: "icon_small",
    },
    {
      contentType: "image/png",
      size: { width: 256, height: 256 },
      id: "icon_medium",
    },
    {
      contentType: "image/x-icon",
      size: { width: 16, height: 16 },
      id: "favicon",
    },
    {
      contentType: "image/png",
      size: { width: 512, height: 512 },
      id: "icon_maskable",
    },
  ];
}

export default function Icon({
  id,
}: // size,
{
  id: string;
  // size: { width: number; height: number };
}) {
  // console.log({ size });
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 88,
          background: "#000",
          color: "#fafafa",
        }}
      >
        <AppIcon />
      </div>
    ),
    {
      width: 512,
      height: 512,
    }
  );
}
