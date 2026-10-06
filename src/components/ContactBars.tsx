import { telHref, waHref } from "@/lib/site";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.3.4-.4.5c-.1.1-.3.3-.1.6.2.3.7 1.2 1.5 1.9 1 .9 1.9 1.2 2.2 1.3.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.6-.1 1.2Z" />
  </svg>
);

export default function ContactBars() {
  return (
    <>
      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-black/10 bg-white p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] lg:hidden">
        <a href={telHref} className="btn-teal">📞 Call Now</a>
        <a href={waHref()} target="_blank" rel="noopener" className="btn bg-[#1faa59] text-white hover:bg-[#188a49]"><WaIcon /> WhatsApp</a>
      </div>
      {/* Desktop floating WhatsApp */}
      <a
        href={waHref()}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#1faa59] text-white shadow-soft transition hover:scale-105 lg:flex"
      >
        <WaIcon />
      </a>
    </>
  );
}
