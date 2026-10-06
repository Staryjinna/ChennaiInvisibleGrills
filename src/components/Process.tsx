import Reveal from "./Reveal";

const STEPS = [
  ["Call or WhatsApp us", "Tell us your area and what you need."],
  ["Free site visit", "We measure, suggest the right product and give a clear written quote."],
  ["Installation", "Our trained team installs neatly, usually within a day, and cleans up after."],
  ["After-care", "Warranty support and re-tightening if ever needed."],
];

export default function Process({ title = "From call to installed in 4 simple steps" }: { title?: string }) {
  return (
    <section className="section bg-teal-soft">
      <div className="container-x">
        <h2 className="text-3xl font-bold text-teal">{title}</h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(([t, d], i) => (
            <li key={t}>
              <Reveal className="card h-full p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-saffron font-heading font-bold">{i + 1}</span>
                <h3 className="mt-4 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-muted">{d}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
