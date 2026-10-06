import Reveal from "./Reveal";
import Tilt from "./Tilt";

const STEPS = [
  ["Call or WhatsApp us", "Tell us your area and what you need."],
  ["Free site visit", "We measure, suggest the right product and give a clear written quote."],
  ["Installation", "Our trained team installs neatly, usually within a day, and cleans up after."],
  ["After-care", "Warranty support and re-tightening if ever needed."],
];

export default function Process({ title = "From call to installed in 4 simple steps" }: { title?: string }) {
  return (
    <section className="section">
      <div className="container-x">
        <h2 className="max-w-2xl text-3xl font-extrabold text-white sm:text-5xl">{title}</h2>
        <ol className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div aria-hidden className="absolute left-0 right-0 top-[34px] hidden h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent lg:block" />
          {STEPS.map(([t, d], i) => (
            <li key={t}>
              <Reveal className="h-full">
                <Tilt className="h-full p-6 pt-9">
                  <span className="absolute -top-0 left-6 flex h-[68px] w-[68px] -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#ffd27a] to-[#f4a300] font-heading text-2xl font-extrabold text-[#1a1200] shadow-[0_0_40px_rgba(244,163,0,.55)]">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-white">{t}</h3>
                  <p className="mt-2 text-muted">{d}</p>
                </Tilt>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
