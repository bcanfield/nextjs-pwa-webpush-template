import { ImageResponse } from "next/og";
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx
export const runtime = "edge";

export const alt = "lazyfasttrack";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 60,
          color: "#f6f6f6",
          background: "black",
          width: "100%",
          height: "100%",
          paddingTop: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="avatar"
          width="256"
          src={"/next.svg"}
          style={{
            borderRadius: 128,
          }}
        />

        <h1>lazyfasttrack</h1>
      </div>
    ),
    {
      ...size,
    }
  );
}
