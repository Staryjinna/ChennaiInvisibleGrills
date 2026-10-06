import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { SITE, telHref, waHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us for Invisible Grills & Safety Nets in Chennai",
  description: `Call, WhatsApp or fill the form for a free site visit anywhere in Chennai. ${SITE.phoneDisplay}.`,
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  const a = SITE.address;
  return (
    <section className="section">
      <div className="container-x grid gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold text-ink">Contact Us for Invisible Grills &amp; Safety Nets in Chennai</h1>
          <p className="mt-4 text-muted">Call, WhatsApp or fill the form. We&apos;ll call back to fix a free site visit at a time that suits you.</p>
          <ul className="mt-6 space-y-3 text-lg">
            <li>📞 <a href={telHref} className="font-semibold text-teal underline">{SITE.phoneDisplay}</a></li>
            <li>💬 WhatsApp: <a href={waHref()} target="_blank" rel="noopener" className="font-semibold text-teal underline">{SITE.phoneDisplay}</a></li>
            <li>📍 Office: {a.street}, {a.locality}{a.postalCode ? ` ${a.postalCode}` : ""}</li>
            <li>🕗 {SITE.hours}</li>
            {SITE.email && <li>✉️ <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a></li>}
          </ul>
          <iframe
            title={`Map of ${SITE.name} office`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-6 h-72 w-full rounded-[16px] border-0"
          />
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
