import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { SITE, telHref, waHref } from "@/lib/site";

export default function Footer() {
  const a = SITE.address;
  return (
    <footer className="bg-ink pb-24 text-white/80 lg:pb-0">
      <div className="container-x grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="font-heading text-xl font-extrabold text-white">{SITE.name}</p>
          <p className="mt-3 text-sm">{SITE.description}</p>
        </div>
        <div>
          <p className="font-semibold text-white">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICES.map((s) => <li key={s.slug}><Link href={s.path} className="hover:text-saffron">{s.name}</Link></li>)}
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">Visit / contact</p>
          <ul className="mt-3 space-y-2">
            <li>📍 {a.street}, {a.locality}{a.postalCode ? ` ${a.postalCode}` : ""}</li>
            <li>📞 <a href={telHref} className="hover:text-saffron">{SITE.phoneDisplay}</a></li>
            <li>💬 <a href={waHref()} className="hover:text-saffron" target="_blank" rel="noopener">WhatsApp</a></li>
            {SITE.email && <li>✉️ <a href={`mailto:${SITE.email}`} className="hover:text-saffron">{SITE.email}</a></li>}
            <li>🕗 {SITE.hours}</li>
          </ul>
          <iframe
            title={`Map of ${SITE.name} office`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-4 h-40 w-full rounded-xl border-0"
          />
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">
        © 2026 {SITE.name}. All rights reserved. · <Link href="/privacy/" className="underline">Privacy Policy</Link>
      </div>
    </footer>
  );
}
