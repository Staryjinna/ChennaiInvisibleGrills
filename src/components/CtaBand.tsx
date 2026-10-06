import { SITE, telHref, waHref } from "@/lib/site";
import Reveal from "./Reveal";

export default function CtaBand({
  title = "Make your balcony safe this week",
  text = "Free site visit anywhere in Chennai. Clear pricing, no hidden charges.",
}: { title?: string; text?: string }) {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-x">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[28px] bg-gradient-to-br from-teal-dark via-teal to-[#118a96] p-8 text-white shadow-soft sm:p-12">
            <div aria-hidden className="absolute inset-0 -z-10 opacity-25" style={{ background: "repeating-linear-gradient(90deg,rgba(255,255,255,.9) 0 1px,transparent 1px 26px)" }} />
            <div aria-hidden className="absolute -right-20 -top-20 -z-10 h-72 w-72 animate-blob rounded-full bg-saffron/40 blur-3xl" />
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
                <p className="mt-2 max-w-xl text-white/85">{text}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={telHref} className="btn-cta">Call {SITE.phoneDisplay}</a>
                <a href={waHref()} className="btn border-2 border-white/60 text-white hover:bg-white/10" target="_blank" rel="noopener">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
