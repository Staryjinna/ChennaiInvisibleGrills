import Image from "next/image";
import type { Service } from "@/lib/services";
import { SITE, telHref } from "@/lib/site";
import CtaBand from "./CtaBand";
import FaqBlock from "./Faq";
import JsonLd from "./JsonLd";
import LeadForm from "./LeadForm";
import Process from "./Process";
import Reveal from "./Reveal";

export default function ServicePage({ s }: { s: Service }) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-teal text-white">
        <Image src={s.image} alt={s.imageAlt} fill priority sizes="100vw" className="-z-10 object-cover opacity-30" />
        <div className="container-x py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-saffron">{s.name} · Chennai</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold sm:text-5xl">{s.h1}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">{s.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={telHref} className="btn-cta">Call {SITE.phoneDisplay}</a>
            <a href="#quote" className="btn-outline">Get a Free Site Visit</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            [s.benefitsTitle, s.benefits],
            [s.whereTitle, s.where],
            [s.optionsTitle, s.options],
          ].map(([title, items]) => (
            <Reveal key={title as string} className="card p-6">
              <h2 className="text-xl font-bold text-teal">{title as string}</h2>
              <ul className="mt-4 space-y-2">
                {(items as string[]).map((i) => (
                  <li key={i} className="flex gap-2"><span className="text-saffron">✔</span><span>{i}</span></li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <Process />
      <FaqBlock faqs={s.faqs} />
      <CtaBand />
      <section className="section">
        <div className="container-x max-w-3xl"><LeadForm defaultService={s.name} /></div>
      </section>

      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: s.h1,
        serviceType: s.name,
        description: s.metaDescription,
        url: `${SITE.url}${s.path}`,
        provider: { "@id": `${SITE.url}/#business` },
        areaServed: { "@type": "City", name: "Chennai" },
      }} />
    </>
  );
}
