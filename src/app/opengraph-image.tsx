import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";
export const alt = `${SITE.name}: invisible grills and safety nets in Chennai`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#0F4C5C", color: "#fff" }}>
        <div style={{ fontSize: 30, color: "#F4A300", fontWeight: 700 }}>Chennai</div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.1, marginTop: 16 }}>Invisible Grills & Safety Nets</div>
        <div style={{ fontSize: 36, marginTop: 28, opacity: 0.9 }}>{`${SITE.tagline} Free site visit.`}</div>
        <div style={{ fontSize: 40, marginTop: 48, color: "#F4A300", fontWeight: 700 }}>{SITE.phoneDisplay}</div>
      </div>
    ),
    size,
  );
}
