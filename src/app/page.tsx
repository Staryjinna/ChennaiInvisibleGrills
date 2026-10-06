import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Hero3D from "@/components/Hero3D";
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
  ["eye", "Unblocked view", "Thin cables almost disappear from a distance. Your balcony still feels open.", "#ffc857"],
  ["wind", "Better air & light", "No heavy bars, so sea breeze and sunlight come straight in.", "#4fd1e8"],
  ["spark", "No rust stains", "Stainless steel handles Chennai's humid, salty air far better than painted iron.", "#a78bfa"],
  ["child", "Child & pet safe", "Close cable spacing stops little ones from slipping through or climbing.", "#fb7185"],
  ["building", "Building-friendly", "Many apartment associations allow invisible grills where iron grills change the facade. (Always check your association's rules.)", "#3ddc97"],
  ["shield", "Low maintenance", "No painting, no welding, nothing to repaint every monsoon.", "#fb923c"],
];

const TRUST = [
  "Free site visit & measurement",
  "Rust-resistant stainless steel",
  "Clean, same-day installation for most homes",
  ...(SITE.warranty ? [`Warranty: ${SITE.warranty}`] : []),
];

// Bento layout on large screens
const SPAN = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-2",
  "",
  "",
  "lg:col-span-2",
  "lg:col-span-2",
];

const imageId = (url: string) => url.split("/").pop()!.split("?")[0];

export default function Home() {
  const loop = [...AREAS, ...AREAS];
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src={img("photo-1712061644903-6ececf90c18e", 1920)}
          alt="Balcony with a railing and an open view of the river and city"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-20 bg-[linear-gradient(100deg,#04121a_8%,rgba(4,18,26,.86)_45%,rgba(4,18,26,.35)_100%)]" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-20 h-40 bg-gradient-to-t from-[#04121a] to-transparent" />
        <Hero3D className="absolute inset-0 -z-10" />
        <div className="container-x relative py-20 sm:py-32 lg:py-40">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_#ffc857]" />
            Invisible Grills &amp; Safety Nets · Chennai
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:max-w-[40rem]">
            Invisible Grills Installation in Chennai for <span className="text-gradient-gold">Safer Balconies &amp; Windows</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Protect your children, elders and pets without blocking your view or breeze. Rust-resistant stainless steel invisible grills, safety nets and mesh, fitted neatly by our own team in apartments and houses across Chennai.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={telHref} className="btn-cta"><Icon name="phone" size={18} /> Call {SITE.phoneDisplay}</a>
            <a href="#quote" className="btn-outline">Get a Free Site Visit</a>
          </div>
          <ul className="mt-10 flex max-w-2xl flex-wrap gap-2.5 text-sm text-white/85">
            {TRUST.map((t) => (
              <li key={t} className="rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 backdrop-blur">
                <span className="mr-1.5 text-gold">✔</span>{t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AREAS MARQUEE */}
      <section aria-label="Areas we serve" className="border-y border-white/10 bg-white/[0.02] py-5">
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <ul className="flex w-max animate-marquee gap-3 pr-3">
            {loop.map((a, i) => (
              <li key={i} aria-hidden={i >= AREAS.length} className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80">{a}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES: bento */}
      <section className="section">
        <div className="container-x">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Our services</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold text-white sm:text-5xl">Everything your balcony needs, from one team</h2>
          <p className="mt-4 max-w-2xl text-muted">From high-rise flats on OMR to independent houses in Anna Nagar, we make balconies, windows and terraces safer, cleaner and more usable.</p>
          <div className="mt-12 grid auto-rows-[minmax(250px,auto)] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} className={SPAN[i]}>
                <Tilt className="h-full overflow-hidden" style={{ ["--accent" as string]: s.accent }}>
                  <Link href={s.path} className="relative flex h-full min-h-[270px] flex-col justify-end p-6">
                    <Image
                      src={img(imageId(s.image), i === 0 ? 1200 : 800)}
                      alt={s.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(min-width:1024px) 50vw, (min-width:640px) 50vw, 100vw"
                      className="-z-20 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#04121a] via-[#04121a]/70 to-[#04121a]/10" />
                    <div aria-hidden className="absolute inset-0 -z-10 opacity-40 mix-blend-overlay" style={{ background: `linear-gradient(135deg, ${s.accent}, transparent 55%)` }} />
                    <span className="absolute left-6 top-6 font-heading text-sm font-bold tracking-widest" style={{ color: s.accent }}>0{i + 1}</span>
                    <h3 className={`font-extrabold text-white ${i === 0 ? "text-3xl" : "text-xl"}`}>{s.name}</h3>
                    <p className={`mt-2 text-white/75 ${i === 0 ? "max-w-md" : "text-sm"}`}>{s.cardText}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: s.accent }}>
                      View details <span className="transition-transform group-hover:translate-x-1.5">→</span>
                    </span>
                  </Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section relative">
        <div className="container-x">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Why invisible grills?</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold text-white sm:text-5xl">
            Why Chennai families are switching from <span className="text-gradient-cool">iron grills</span>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map(([icon, t, d, c]) => (
              <Reveal key={t} className="h-full">
                <Tilt className="h-full p-7" style={{ ["--accent" as string]: c }}>
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-[#04121a] shadow-[0_0_36px_-4px_var(--c)]"
                    style={{ background: `linear-gradient(135deg, ${c}, ${c}99)`, ["--c" as string]: c }}
                  >
                    <Icon name={icon as never} size={26} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-white">{t}</h3>
                  <p className="mt-2 text-muted">{d}</p>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />

      {/* AREAS */}
      <section className="section pt-0">
        <div className="container-x">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">Serving homes across Chennai</h2>
          <ul className="mt-8 flex flex-wrap gap-2">
            {AREAS.map((a) => <li key={a} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">{a}</li>)}
          </ul>
          <p className="mt-6 text-muted">Don&apos;t see your area? Call us. We cover all of Chennai and nearby suburbs.</p>
        </div>
      </section>

      {TESTIMONIALS.length > 0 && (
        <section className="section">
          <div className="container-x">
            <h2 className="text-3xl font-extrabold text-white sm:text-5xl">What our customers say</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <Tilt key={t.name} className="p-6">
                  <blockquote>
                    <p className="text-white/90">&ldquo;{t.text}&rdquo;</p>
                    <footer className="mt-4 text-sm font-semibold text-gold">{t.name}, {t.area}</footer>
                  </blockquote>
                </Tilt>
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
