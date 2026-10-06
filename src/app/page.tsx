import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import CompareSlider from "@/components/CompareSlider";
import Icon from "@/components/Icon";
import LeadForm from "@/components/LeadForm";
import Process from "@/components/Process";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";
import { AREAS } from "@/lib/areas";
import { SERVICES, img } from "@/lib/services";
import { SITE, telHref } from "@/lib/site";
import { TESTIMONIALS } from "@/data/testimonials";

export const metadata: Metadata = {
  title: { absolute: "Invisible Grills Installation in Chennai | Safety Nets & Balcony Grills" },
  alternates: { canonical: "/" },
  openGraph: { title: "Invisible Grills Installation in Chennai", url: "/" },
};

const WHY: [string, string, string, string][] = [
  ["eye", "Unblocked view", "Thin cables almost disappear from a distance. Your balcony still feels open.", "#0f766e"],
  ["wind", "Better air & light", "No heavy bars, so sea breeze and sunlight come straight in.", "#2563eb"],
  ["spark", "No rust stains", "Stainless steel handles Chennai's humid, salty air far better than painted iron.", "#7c3aed"],
  ["child", "Child & pet safe", "Close cable spacing stops little ones from slipping through or climbing.", "#e11d48"],
  ["building", "Building-friendly", "Many apartment associations allow invisible grills where iron grills change the facade. (Always check your association's rules.)", "#16a34a"],
  ["shield", "Low maintenance", "No painting, no welding, nothing to repaint every monsoon.", "#ea580c"],
];

const TRUST = [
  "Free site visit & measurement",
  "Rust-resistant stainless steel",
  "Clean, same-day installation for most homes",
  ...(SITE.warranty ? [`Warranty: ${SITE.warranty}`] : []),
];

const imageId = (url: string) => url.split("/").pop()!.split("?")[0];

export default function Home() {
  const loop = [...AREAS, ...AREAS];
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#e9f6f8] via-white to-white">
        <div aria-hidden className="absolute -left-24 top-10 -z-10 h-80 w-80 animate-blob rounded-full bg-cyan/25 blur-3xl" />
        <div aria-hidden className="absolute -right-24 top-40 -z-10 h-96 w-96 animate-blob rounded-full bg-saffron/25 blur-3xl [animation-delay:-6s]" />
        <div aria-hidden className="dots absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(180deg,#000,transparent_75%)]" />
        <div className="container-x grid items-center gap-12 py-12 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-teal/15 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-teal shadow-soft">
              <span className="h-2 w-2 animate-pulse rounded-full bg-saffron" />
              Invisible Grills &amp; Safety Nets · Chennai
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.06] sm:text-6xl">
              Invisible Grills Installation in Chennai for <span className="text-gradient">Safer Balconies &amp; Windows</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Protect your children, elders and pets without blocking your view or breeze. Rust-resistant stainless steel invisible grills, safety nets and mesh, fitted neatly by our own team in apartments and houses across Chennai.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={telHref} className="btn-cta">
                <span aria-hidden className="absolute inset-y-0 left-0 w-1/3 animate-shine bg-white/40 blur-md" />
                <span className="relative z-10 inline-flex items-center gap-2"><Icon name="phone" size={18} /> Call {SITE.phoneDisplay}</span>
              </a>
              <a href="#quote" className="btn-outline">Get a Free Site Visit</a>
            </div>
            <ul className="mt-9 grid gap-2.5 text-sm font-medium sm:grid-cols-2">
              {TRUST.map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal text-[11px] text-white">✔</span>{t}
                </li>
              ))}
            </ul>
          </div>

          {/* Photo collage: floats and tilts on every device, no hover needed */}
          <div className="relative mx-auto w-full max-w-xl [perspective:1400px]">
            <div className="animate-float-slow">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border-[6px] border-white shadow-[0_40px_80px_-24px_rgba(11,37,48,.5)] [transform:rotateY(-8deg)_rotateX(3deg)] sm:aspect-[5/5]">
                <Image
                  src={img("photo-1764996915324-91919cee14d3", 1400)}
                  alt="Modern Chennai apartment tower with balconies surrounded by trees"
                  fill priority sizes="(min-width:1024px) 45vw, 100vw"
                  className="parallax animate-kenburns object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-teal-dark/35 via-transparent to-transparent" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-3 w-40 animate-float overflow-hidden rounded-2xl border-4 border-white shadow-soft sm:-left-10 sm:w-52">
              <div className="relative aspect-[4/3]">
                <Image src={img("photo-1687960650778-35ab8f1a797e", 600)} alt="Bright balcony with potted plants" fill sizes="220px" className="object-cover" />
              </div>
            </div>
            <div className="absolute -right-2 top-8 animate-float rounded-2xl bg-white px-4 py-3 shadow-soft [animation-delay:-2s] sm:-right-8">
              <p className="text-xs font-semibold text-muted">Kids &amp; pets</p>
              <p className="font-heading text-base font-extrabold text-teal">Safe &amp; secure</p>
            </div>
            <div className="absolute right-6 top-[58%] animate-float rounded-2xl bg-teal px-4 py-3 text-white shadow-soft [animation-delay:-4s] sm:-right-10">
              <p className="text-xs font-semibold text-white/70">Site visit</p>
              <p className="font-heading text-base font-extrabold">100% free</p>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS MARQUEE */}
      <section aria-label="Areas we serve" className="border-y border-slate-200 bg-white py-5">
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <ul className="flex w-max animate-marquee gap-3 pr-3">
            {loop.map((a, i) => (
              <li key={i} aria-hidden={i >= AREAS.length} className="whitespace-nowrap rounded-full bg-mist px-5 py-2 text-sm font-medium text-teal">{a}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container-x">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-saffron-dark">Our services</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold sm:text-5xl">Everything your balcony needs, from one team</h2>
          <p className="mt-4 max-w-2xl text-muted">From high-rise flats on OMR to independent houses in Anna Nagar, we make balconies, windows and terraces safer, cleaner and more usable.</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 110} className="h-full">
                <Tilt className="h-full overflow-hidden">
                  <Link href={s.path} className="flex h-full flex-col">
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Image
                        src={img(imageId(s.image), 800)}
                        alt={s.imageAlt}
                        fill loading="lazy" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full font-heading text-sm font-extrabold text-white shadow-soft" style={{ background: s.accent }}>{i + 1}</span>
                    </div>
                    <div className="relative flex flex-1 flex-col p-6">
                      <span aria-hidden className="absolute inset-x-0 top-0 h-1" style={{ background: s.accent }} />
                      <h3 className="text-xl font-extrabold">{s.name}</h3>
                      <p className="mt-2 flex-1 text-muted">{s.cardText}</p>
                      <span className="mt-5 inline-flex items-center gap-2 font-bold" style={{ color: s.accent }}>
                        View details <span className="transition-transform group-hover:translate-x-1.5">→</span>
                      </span>
                    </div>
                  </Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="section bg-mist">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-saffron-dark">See the difference</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">Same safety. <span className="text-gradient">A completely open view.</span></h2>
            <p className="mt-4 text-muted">Heavy iron bars cut up your view and trap heat and dust. Slim stainless steel cables give you the same protection while the sky, the trees and the breeze stay in your home.</p>
            <a href="#quote" className="btn-teal mt-7">Get a Free Site Visit</a>
          </div>
          <Reveal><CompareSlider /></Reveal>
        </div>
      </section>

      {/* WHY */}
      <section className="section">
        <div className="container-x">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-saffron-dark">Why invisible grills?</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold sm:text-5xl">
            Why Chennai families are switching from <span className="text-gradient-warm">iron grills</span>
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map(([icon, t, d, c], i) => (
              <Reveal key={t} delay={(i % 3) * 110} className="h-full">
                <Tilt className="h-full overflow-hidden p-7">
                  <div aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-15" style={{ background: c }} />
                  <span
                    className="relative flex h-14 w-14 animate-float-slow items-center justify-center rounded-2xl text-white"
                    style={{ background: `linear-gradient(135deg, ${c}, color-mix(in srgb, ${c} 60%, #fff))`, boxShadow: `0 14px 28px -8px ${c}` }}
                  >
                    <Icon name={icon as never} size={26} />
                  </span>
                  <h3 className="relative mt-5 text-xl font-bold">{t}</h3>
                  <p className="relative mt-2 text-muted">{d}</p>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />

      {/* AREAS */}
      <section className="section">
        <div className="container-x">
          <h2 className="text-3xl font-extrabold sm:text-5xl">Serving homes across Chennai</h2>
          <ul className="mt-8 flex flex-wrap gap-2">
            {AREAS.map((a) => <li key={a} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm">{a}</li>)}
          </ul>
          <p className="mt-6 text-muted">Don&apos;t see your area? Call us. We cover all of Chennai and nearby suburbs.</p>
        </div>
      </section>

      {TESTIMONIALS.length > 0 && (
        <section className="section bg-mist">
          <div className="container-x">
            <h2 className="text-3xl font-extrabold sm:text-5xl">What our customers say</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <Tilt key={t.name} className="p-6">
                  <blockquote>
                    <p>&ldquo;{t.text}&rdquo;</p>
                    <footer className="mt-4 text-sm font-bold text-teal">{t.name}, {t.area}</footer>
                  </blockquote>
                </Tilt>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
      <section className="section pt-0">
        <div className="container-x max-w-3xl"><LeadForm /></div>
      </section>
    </>
  );
}
