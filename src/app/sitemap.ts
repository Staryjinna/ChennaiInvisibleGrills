import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...SERVICES.map((s) => s.path), "/gallery/", "/contact/", "/privacy/"];
  return paths.map((p) => ({ url: `${SITE.url}${p}`, changeFrequency: "monthly", priority: p === "/" ? 1 : 0.8 }));
}
