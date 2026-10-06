import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import LeadForm from "@/components/LeadForm";
import Process from "@/components/Process";
import Reveal from "@/components/Reveal";
import { AREAS } from "@/lib/areas";
import { SERVICES, img } from "@/lib/services";
import { SITE, telHref } from "@/lib/site";
import { TESTIMONIALS } from "@/data/testimonials";

export const metadata: Metadata = {
  title: { absolute: "Invisible Grills Installation in Chennai | Safety Nets & Balcony Grills" },
  alternates: { canonical: "/" },
  openGraph: { title: "Invisible Grills Installation in Chennai", url: "/" },
};

const WHY = [
  ["Unblocked view.", "Thin cables almost disappear from a distance. Your balcony still feels open."],
  ["Better air & light.", "No heavy bars, so sea breeze and sunlight come straight in."],
  ["No rust stains.", "Stainless steel handles Chennai's humid, salty air far better than painted iron."],
  ["Child & pet safe.", "Close cable spacing stops little ones from slipping through or climbing."],
  ["Building-friendly.", "Many apartment associations allow invisible grills where iron grills change the facade. (Always check your association's rules.)"],
  ["Low maintenance.", "No painting, no welding, nothing to repaint every monsoon."],
];

const TRUST = [
  "Free site visit & measurement",
  "Rust-resistant stainless steel",
  "Clean, same-day installation for most homes",
  ...(SITE.warranty ? [`Warranty: ${SITE.warranty}`] : []),
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-teal-dark text-white">
        <Image
          src={img("photo-1764996915324-91919cee14d3")}
          alt="Chennai apartment buildings with balconies"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-35"
        />
        <div className="container-x py-16 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-wider text-saffron">Invisible Grills &amp; Safety Nets · Chennai</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Invisible Grills Installation in Chennai for Safer Balconies &amp; Windows
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            Protect your children, elders and pets without blocking your view or breeze. Rust-resistant stainless steel invisible grills, safety nets and mesh, fitted neatly by our own team in apartments and houses across Chennai.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={telHref} className="btn-cta">Call {SITE.phoneDisplay}</a>
            <a href="#quote" className="btn-outline">Get a Free Site Visit</a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
            {TRUST.map((t) => <li key={t}>✔ {t}</li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-teal sm:text-4xl">Everything your balcony needs, from one team</h2>
          <p className="mt-3 max-w-2xl text-muted">From high-rise flats on OMR to independent houses in Anna Nagar, we make balconies, windows and terraces safer, cleaner and more usable.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Reveal key={s.slug}>
                <Link href={s.path} className="card group flex h-full flex-col overflow-hidden transition hover:-translate-y-1">
                  <div className="relative aspect-[16/10]">
                    <Image src={img(s.image.split("/").pop()!.split("?")[0], 800)} alt={s.imageAlt} fill loading="lazy" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-xl font-bold text-teal">{s.name}</h3>
                    <p className="mt-2 flex-1 text-muted">{s.cardText}</p>
                    <span className="mt-4 font-semibold text-teal group-hover:underline">View details →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-teal-soft">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-teal sm:text-4xl">Why Chennai families are switching from iron grills</h2>
            <ul className="mt-6 space-y-4">
              {WHY.map(([t, d]) => (
                <li key={t}><strong>{t}</strong> <span className="text-muted">{d}</span></li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] shadow-soft">
            <Image src={img("photo-1764151604216-72059c4aa369", 1000)} alt="Child at an apartment balcony" fill loading="lazy" sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <Process />

      <section className="section">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-teal sm:text-4xl">Serving homes across Chennai</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {AREAS.map((a) => <li key={a} className="rounded-full bg-white px-4 py-2 text-sm shadow-soft">{a}</li>)}
          </ul>
          <p className="mt-5 text-muted">Don&apos;t see your area? Call us. We cover all of Chennai and nearby suburbs.</p>
        </div>
      </section>

      {TESTIMONIALS.length > 0 && (
        <section className="section bg-teal-soft">
          <div className="container-x">
            <h2 className="text-3xl font-bold text-teal sm:text-4xl">What our customers say</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <blockquote key={t.name} className="card p-6">
                  <p>&ldquo;{t.text}&rdquo;</p>
                  <footer className="mt-4 text-sm font-semibold text-teal">{t.name}, {t.area}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
      <section className="section">
        <div className="container-x max-w-3xl"><LeadForm /></div>
      </section>
    </>
  );
}
