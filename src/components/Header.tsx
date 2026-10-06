import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { SITE, telHref } from "@/lib/site";

const Logo = () => (
  <Link href="/" className="flex items-center gap-2.5">
    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#ffd27a] to-[#f4a300] shadow-[0_0_24px_rgba(244,163,0,.5)]">
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="#1a1200" strokeWidth="2" strokeLinecap="round"><path d="M6 4v16M11 4v16M16 4v16M21 4v16" /></svg>
    </span>
    <span className="font-heading text-lg font-extrabold tracking-tight text-white">{SITE.name}</span>
  </Link>
);

const dd = "rounded-2xl border border-white/10 bg-[#071a22]/95 p-2 shadow-soft backdrop-blur-xl";
const item = "block rounded-xl px-3 py-2 text-white/85 hover:bg-white/10 hover:text-white";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#04121a]/60 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm font-medium text-white/80 lg:flex">
          <details className="group relative">
            <summary className="cursor-pointer list-none hover:text-white">Services ▾</summary>
            <div className={`absolute left-0 top-full mt-3 w-60 ${dd}`}>
              {SERVICES.map((s) => <Link key={s.slug} href={s.path} className={item}>{s.name}</Link>)}
            </div>
          </details>
          <Link href="/gallery/" className="hover:text-white">Gallery</Link>
          <Link href="/contact/" className="hover:text-white">Contact</Link>
          <a href={telHref} className="btn-cta !min-h-10 !px-5 !py-2">Call {SITE.phoneDisplay}</a>
        </nav>
        <details className="relative lg:hidden">
          <summary className="btn-teal !min-h-10 cursor-pointer list-none !py-2" aria-label="Open menu">Menu</summary>
          <div className={`absolute right-0 top-full mt-3 w-64 ${dd}`}>
            {SERVICES.map((s) => <Link key={s.slug} href={s.path} className={item}>{s.name}</Link>)}
            <hr className="my-1 border-white/10" />
            <Link href="/gallery/" className={item}>Gallery</Link>
            <Link href="/contact/" className={item}>Contact</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
