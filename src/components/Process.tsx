import Reveal from "./Reveal";

const STEPS = [
  ["Call or WhatsApp us", "Tell us your area and what you need."],
  ["Free site visit", "We measure, suggest the right product and give a clear written quote."],
  ["Installation", "Our trained team installs neatly, usually within a day, and cleans up after."],
  ["After-care", "Warranty support and re-tightening if ever needed."],
];

export default function Process({ title = "From call to installed in 4 simple steps" }: { title?: string }) {
  return (
    <section className="section bg-mist">
      <div className="container-x">
        <h2 className="max-w-2xl text-3xl font-extrabold sm:text-5xl">{title}</h2>
        <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div aria-hidden className="absolute left-[12%] right-[12%] top-8 hidden border-t-2 border-dashed border-teal/30 lg:block" />
          {STEPS.map(([t, d], i) => (
            <li key={t}>
              <Reveal delay={i * 120} className="h-full">
                <div className="card relative h-full p-6 pt-12">
                  <span className="absolute left-6 top-0 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-teal to-cyan font-heading text-2xl font-extrabold text-white shadow-[0_12px_28px_-6px_rgba(20,184,196,.7)]">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold">{t}</h3>
                  <p className="mt-2 text-muted">{d}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
