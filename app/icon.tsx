import { ImageResponse } from "next/og";
import AppIcon from "./custom-icon";

export function generateImageMetadata() {
  return [
    {
      contentType: "image/png",
      size: { width: 48, height: 48 },
      id: "icon",
    },
    {
      contentType: "image/x-icon",
      size: { width: 16, height: 16 },
      id: "favicon",
    },
  ];
}

export default function Icon({ id }: { id: string }) {
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
        }}
      >
        <AppIcon />
      </div>
    )
  );
}
