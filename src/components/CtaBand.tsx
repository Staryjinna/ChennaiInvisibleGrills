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
          <div
            className="card relative isolate overflow-hidden p-8 sm:p-12"
            style={{ ["--accent" as string]: "rgba(255,200,87,.9)" }}
          >
            <div aria-hidden className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-saffron/30 blur-3xl" />
            <div aria-hidden className="absolute -bottom-32 -left-16 -z-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
                <p className="mt-2 max-w-xl text-white/75">{text}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={telHref} className="btn-cta">Call {SITE.phoneDisplay}</a>
                <a href={waHref()} className="btn-outline" target="_blank" rel="noopener">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
