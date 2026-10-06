import Image from "next/image";
import type { Service } from "@/lib/services";
import { SITE, telHref } from "@/lib/site";
import CtaBand from "./CtaBand";
import FaqBlock from "./Faq";
import JsonLd from "./JsonLd";
import LeadForm from "./LeadForm";
import Process from "./Process";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

export default function ServicePage({ s }: { s: Service }) {
  const tint = `color-mix(in srgb, ${s.accent} 12%, white)`;
  return (
    <>
      <section className="relative isolate overflow-hidden" style={{ background: `linear-gradient(180deg, ${tint}, #fff)` }}>
        <div aria-hidden className="absolute -right-24 -top-24 -z-10 h-96 w-96 animate-blob rounded-full blur-3xl" style={{ background: s.accent, opacity: 0.18 }} />
        <div aria-hidden className="dots absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(180deg,#000,transparent_70%)]" />
        <div className="container-x grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white" style={{ background: s.accent }}>
              {s.name} · Chennai
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">{s.h1}</h1>
            <p className="mt-5 max-w-xl text-lg text-muted">{s.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={telHref} className="btn-cta">Call {SITE.phoneDisplay}</a>
              <a href="#quote" className="btn-outline">Get a Free Site Visit</a>
            </div>
          </div>
          <div className="relative [perspective:1200px]">
            <div className="animate-float-slow">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border-4 border-white shadow-[0_30px_70px_-20px_rgba(11,37,48,.45)] [transform:rotateY(-7deg)_rotateX(3deg)]">
                <Image src={s.image} alt={s.imageAlt} fill priority sizes="(min-width:1024px) 45vw, 100vw" className="animate-kenburns object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-2 animate-float rounded-2xl bg-white px-4 py-3 text-sm font-bold shadow-soft sm:-left-6">
              <span style={{ color: s.accent }}>✔</span> Free site visit
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            [s.benefitsTitle, s.benefits],
            [s.whereTitle, s.where],
            [s.optionsTitle, s.options],
          ].map(([title, items], idx) => (
            <Reveal key={title as string} delay={idx * 120} className="h-full">
              <Tilt className="h-full overflow-hidden p-7">
                <span aria-hidden className="absolute inset-x-0 top-0 h-1.5" style={{ background: s.accent }} />
                <h2 className="text-xl font-bold">{title as string}</h2>
                <ul className="mt-4 space-y-2.5">
                  {(items as string[]).map((i) => (
                    <li key={i} className="flex gap-2.5"><span style={{ color: s.accent }}>✔</span><span>{i}</span></li>
                  ))}
                </ul>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      <Process />
      <FaqBlock faqs={s.faqs} />
      <CtaBand />
      <section className="section pt-0">
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
