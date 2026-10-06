import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { bySlug } from "@/lib/services";

const s = bySlug("cloth-hangers-chennai");

export const metadata: Metadata = {
  title: { absolute: s.seoTitle },
  description: s.metaDescription,
  alternates: { canonical: s.path },
  openGraph: { title: s.seoTitle, description: s.metaDescription, url: s.path },
};

export default function Page() {
  return <ServicePage s={s} />;
}
