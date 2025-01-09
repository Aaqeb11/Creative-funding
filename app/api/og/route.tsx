import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "linear-gradient(to bottom, #1a365d, #2d3748)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div style={{ color: "white", marginBottom: "20px" }}>
          Creative Funding
        </div>
        <div
          style={{ color: "#9ca3af", fontSize: "32px", textAlign: "center" }}
        >
          Flexible & Reliable Loan Solutions
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
