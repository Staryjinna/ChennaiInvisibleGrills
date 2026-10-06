import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import { GALLERY } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery: Invisible Grills & Safety Nets Installations in Chennai",
  description: "Photos of invisible grills, safety nets, mosquito mesh, cloth hangers and bird spikes installed in Chennai homes.",
  alternates: { canonical: "/gallery/" },
};

const SLOTS = ["Before / after: same spot", "Close-up of cables & track", "View from inside looking out", "Team installing, in uniform", "Building exterior"];

export default function GalleryPage() {
  return (
    <>
      <section className="section">
        <div className="container-x">
          <h1 className="text-4xl font-extrabold text-teal">Our work across Chennai</h1>
          <p className="mt-3 max-w-2xl text-muted">Real installations in apartments and houses around the city.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.length > 0
              ? GALLERY.map((p) => (
                  <figure key={p.src} className="card overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <Image src={p.src} alt={p.alt} fill loading="lazy" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
                    </div>
                    <figcaption className="p-3 text-sm text-muted">{p.service}</figcaption>
                  </figure>
                ))
              : SLOTS.map((label) => (
                  // PLACEHOLDER: replace by adding photos to /public/gallery/ and listing them in src/data/gallery.ts
                  <div key={label} className="flex aspect-[4/3] flex-col items-center justify-center gap-1 rounded-[16px] border-2 border-dashed border-teal/40 bg-teal-soft text-center text-teal">
                    <span className="font-heading text-lg font-bold">YOUR PHOTO</span>
                    <span className="text-sm">{label}</span>
                  </div>
                ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
