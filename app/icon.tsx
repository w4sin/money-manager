import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          backgroundColor: "#647FBC",
          background:
            "linear-gradient(154deg,rgba(100, 127, 188, 1) 44%, rgba(174, 214, 207, 1) 85%, rgba(250, 253, 214, 1) 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      >
        M
      </div>
    ),
    {
      ...size,
    }
  );
}
