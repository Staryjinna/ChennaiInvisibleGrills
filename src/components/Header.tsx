import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { SITE, telHref } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-paper/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-heading text-lg font-extrabold text-teal">{SITE.name}</Link>
        <nav aria-label="Main" className="hidden items-center gap-6 text-sm font-medium lg:flex">
          <details className="group relative">
            <summary className="cursor-pointer list-none hover:text-teal">Services ▾</summary>
            <div className="absolute left-0 top-full mt-3 w-60 rounded-2xl bg-white p-2 shadow-soft">
              {SERVICES.map((s) => (
                <Link key={s.slug} href={s.path} className="block rounded-xl px-3 py-2 hover:bg-teal-soft">{s.name}</Link>
              ))}
            </div>
          </details>
          <Link href="/gallery/" className="hover:text-teal">Gallery</Link>
          <Link href="/contact/" className="hover:text-teal">Contact</Link>
          <a href={telHref} className="btn-cta !min-h-10 !py-2">Call {SITE.phoneDisplay}</a>
        </nav>
        <details className="relative lg:hidden">
          <summary className="btn-teal !min-h-10 cursor-pointer list-none !py-2" aria-label="Open menu">Menu</summary>
          <div className="absolute right-0 top-full mt-3 w-64 rounded-2xl bg-white p-2 shadow-soft">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={s.path} className="block rounded-xl px-3 py-2 hover:bg-teal-soft">{s.name}</Link>
            ))}
            <hr className="my-1 border-black/10" />
            <Link href="/gallery/" className="block rounded-xl px-3 py-2 hover:bg-teal-soft">Gallery</Link>
            <Link href="/contact/" className="block rounded-xl px-3 py-2 hover:bg-teal-soft">Contact</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
