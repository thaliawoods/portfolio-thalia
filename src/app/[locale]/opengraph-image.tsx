import { ImageResponse } from "next/og";
import type { Locale } from "@/data/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Thalia Woods | Développeuse Web & Creative Tech";

export default async function OpengraphImage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const fr = locale === "fr";

  const role = fr
    ? "Développeuse Web & Creative Tech"
    : "Web Developer & Creative Tech";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          color: "#111111",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            color: "#8a8a8a",
          }}
        >
          PORTFOLIO
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 118, fontWeight: 600, lineHeight: 1 }}>
            Thalia Woods
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 42,
              color: "#555555",
              marginTop: 26,
            }}
          >
            {role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#8a8a8a",
          }}
        >
          <div style={{ display: "flex" }}>thalia-woods.vercel.app</div>
          <div style={{ display: "flex", width: 120, height: 4, background: "#111111" }} />
        </div>
      </div>
    ),
    size,
  );
}
