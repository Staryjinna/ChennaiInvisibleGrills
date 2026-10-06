import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { SITE, telHref } from "@/lib/site";

const Logo = () => (
  <Link href="/" className="flex items-center gap-2.5">
    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal shadow-[0_8px_20px_-6px_rgba(15,76,92,.6)]">
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="#ffc83d" strokeWidth="2" strokeLinecap="round"><path d="M6 4v16M11 4v16M16 4v16M21 4v16" /></svg>
    </span>
    <span className="font-heading text-lg font-extrabold tracking-tight text-teal">{SITE.name}</span>
  </Link>
);

const dd = "rounded-2xl border border-slate-200 bg-white p-2 shadow-soft";
const item = "block rounded-xl px-3 py-2 text-ink hover:bg-mist hover:text-teal";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm font-semibold text-ink lg:flex">
          <details className="group relative">
            <summary className="cursor-pointer list-none hover:text-teal">Services ▾</summary>
            <div className={`absolute left-0 top-full mt-3 w-60 ${dd}`}>
              {SERVICES.map((s) => <Link key={s.slug} href={s.path} className={item}>{s.name}</Link>)}
            </div>
          </details>
          <Link href="/gallery/" className="hover:text-teal">Gallery</Link>
          <Link href="/contact/" className="hover:text-teal">Contact</Link>
          <a href={telHref} className="btn-cta !min-h-10 !px-5 !py-2">Call {SITE.phoneDisplay}</a>
        </nav>
        <details className="relative lg:hidden">
          <summary className="btn-teal !min-h-10 cursor-pointer list-none !py-2" aria-label="Open menu">Menu</summary>
          <div className={`absolute right-0 top-full mt-3 w-64 ${dd}`}>
            {SERVICES.map((s) => <Link key={s.slug} href={s.path} className={item}>{s.name}</Link>)}
            <hr className="my-1 border-slate-200" />
            <Link href="/gallery/" className={item}>Gallery</Link>
            <Link href="/contact/" className={item}>Contact</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
