import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} handles the details you share with us.`,
  alternates: { canonical: "/privacy/" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container-x max-w-3xl space-y-4">
        <h1 className="text-4xl font-extrabold text-ink">Privacy Policy</h1>
        <p className="text-muted">Last updated: October 2026</p>
        <h2 className="pt-4 text-2xl font-bold">What we collect</h2>
        <p>When you use our &ldquo;Get Free Site Visit&rdquo; form, the details you enter (name, mobile number, area, service, floor/tower and message) are placed into a WhatsApp message that <em>you</em> choose to send to us. This website has no server or database and does not store those details.</p>
        <h2 className="pt-4 text-2xl font-bold">How we use it</h2>
        <p>We use the details you send on WhatsApp or by phone only to arrange a site visit, give you a quote and provide after-care. We do not sell your details.</p>
        <h2 className="pt-4 text-2xl font-bold">Third parties</h2>
        <p>WhatsApp (Meta) handles messages you send under its own privacy policy. Pages may load images from Unsplash and maps from Google, which may receive your IP address as part of loading those resources.</p>
        <h2 className="pt-4 text-2xl font-bold">Contact</h2>
        <p>To ask us to delete details you have shared, call or WhatsApp {SITE.phoneDisplay}.</p>
      </div>
    </section>
  );
}
