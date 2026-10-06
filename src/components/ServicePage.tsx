import Image from "next/image";
import type { Service } from "@/lib/services";
import { SITE, telHref } from "@/lib/site";
import CtaBand from "./CtaBand";
import FaqBlock from "./Faq";
import JsonLd from "./JsonLd";
import LeadForm from "./LeadForm";
import Process from "./Process";
import Reveal from "./Reveal";
import Hero3D from "./Hero3D";
import Tilt from "./Tilt";

export default function ServicePage({ s }: { s: Service }) {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Image src={s.image} alt={s.imageAlt} fill priority sizes="100vw" className="-z-30 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-20 bg-[linear-gradient(100deg,#04121a_10%,rgba(4,18,26,.88)_50%,rgba(4,18,26,.45)_100%)]" />
        <div aria-hidden className="absolute -left-20 top-10 -z-20 h-72 w-72 rounded-full blur-3xl" style={{ background: s.accent, opacity: 0.18 }} />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-20 h-32 bg-gradient-to-t from-[#04121a] to-transparent" />
        <Hero3D className="absolute inset-0 -z-10" />
        <div className="container-x relative py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: s.accent }}>{s.name} · Chennai</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-6xl">{s.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{s.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
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
            <Reveal key={title as string} className="h-full"><Tilt className="h-full p-7" style={{ ["--accent" as string]: s.accent }}>
              <h2 className="text-xl font-bold text-white">{title as string}</h2>
              <ul className="mt-4 space-y-2">
                {(items as string[]).map((i) => (
                  <li key={i} className="flex gap-2"><span style={{ color: s.accent }}>✔</span><span>{i}</span></li>
                ))}
              </ul>
            </Tilt></Reveal>
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
