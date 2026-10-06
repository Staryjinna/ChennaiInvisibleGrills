"use client";
import { useState, type FormEvent } from "react";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

const normalisePhone = (v: string) => v.replace(/[\s-]/g, "").replace(/^(\+91|91|0)(?=\d{10}$)/, "");
export const isValidIndianMobile = (v: string) => /^[6-9]\d{9}$/.test(normalisePhone(v));

export default function LeadForm({ defaultService = "", id = "quote" }: { defaultService?: string; id?: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const name = get("name"), phone = get("phone"), area = get("area"), service = get("service");
    const floor = get("floor"), message = get("message");

    const errs: Record<string, string> = {};
    if (!name) errs.name = "Please enter your name";
    if (!isValidIndianMobile(phone)) errs.phone = "Enter a valid 10-digit Indian mobile number";
    if (!area) errs.area = "Please tell us your area in Chennai";
    if (!service) errs.service = "Please choose a service";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    let text = `Hi, I'm ${name} from ${area}. I need a quote for ${service}. Please call me on ${normalisePhone(phone)}.`;
    if (floor) text += ` Floor/tower: ${floor}.`;
    if (message) text += ` ${message}`;
    window.open(`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  const err = (k: string) => errors[k] && <p role="alert" className="mt-1 text-sm text-red-600">{errors[k]}</p>;

  return (
    <form id={id} onSubmit={onSubmit} noValidate className="card grid gap-4 p-5 sm:p-8 sm:grid-cols-2 scroll-mt-24">
      <div className="sm:col-span-2">
        <h2 className="text-2xl font-bold text-ink">Get Free Site Visit</h2>
        <p className="mt-1 text-muted">Fill this in and we&apos;ll open WhatsApp with your details, ready to send.</p>
      </div>
      <label className="block">
        <span className="mb-1 block text-sm font-medium">Name *</span>
        <input name="name" autoComplete="name" className="field" aria-invalid={!!errors.name} />
        {err("name")}
      </label>
      <label className="block">
        <span className="mb-1 block text-sm font-medium">Mobile number *</span>
        <input name="phone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="10-digit mobile" className="field" aria-invalid={!!errors.phone} />
        {err("phone")}
      </label>
      <label className="block">
        <span className="mb-1 block text-sm font-medium">Area / locality in Chennai *</span>
        <input name="area" placeholder="e.g. Velachery" className="field" aria-invalid={!!errors.area} />
        {err("area")}
      </label>
      <label className="block">
        <span className="mb-1 block text-sm font-medium">Service needed *</span>
        <select name="service" defaultValue={defaultService} className="field" aria-invalid={!!errors.service}>
          <option value="">Select a service</option>
          {SERVICES.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
        </select>
        {err("service")}
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-1 block text-sm font-medium">Floor / tower (optional)</span>
        <input name="floor" className="field" />
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-1 block text-sm font-medium">Message (optional)</span>
        <textarea name="message" rows={3} className="field" />
      </label>
      <button type="submit" className="btn-cta sm:col-span-2">Send on WhatsApp</button>
    </form>
  );
}
