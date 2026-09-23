import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

const site = "https://site-paty-lilac.vercel.app";

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          background: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 44px",
            background: "#ffffff",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src={`${site}/favicon.svg?v=3`}
              width="42"
              height="42"
              style={{ objectFit: "contain" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
              <div style={{ fontSize: 30, fontWeight: 900, color: "#111111", letterSpacing: "-1px" }}>
                FAST
              </div>
              <div style={{ display: "flex", flexDirection: "column", fontSize: 13, fontWeight: 800, color: "#d71920", lineHeight: 1.05 }}>
                <span>Drywall &amp;</span>
                <span>Steel Frame</span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "34px", fontSize: 16, fontWeight: 700, color: "#111111" }}>
            <span>Sobre</span>
            <span>Soluções</span>
            <span>Steel Frame</span>
            <span>Avaliações</span>
            <span>Localização</span>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            width: "1200px",
            height: "558px",
            display: "flex",
            overflow: "hidden",
            background: "#111111",
          }}
        >
          <img
            src={`${site}/hero-primeira-dobra.png?v=4`}
            width="1200"
            height="675"
            style={{
              width: "1200px",
              height: "675px",
              objectFit: "cover",
              objectPosition: "top center",
              transform: "translateY(-18px)",
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=31536000, immutable",
      },
    },
  );
}
