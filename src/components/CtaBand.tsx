import { SITE, telHref, waHref } from "@/lib/site";

export default function CtaBand({
  title = "Make your balcony safe this week",
  text = "Free site visit anywhere in Chennai. Clear pricing, no hidden charges.",
}: { title?: string; text?: string }) {
  return (
    <section className="bg-teal text-white">
      <div className="container-x flex flex-col items-start gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-2 text-white/85">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={telHref} className="btn-cta">Call {SITE.phoneDisplay}</a>
          <a href={waHref()} className="btn-outline" target="_blank" rel="noopener">WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
}
