"use client";
import { useEffect, useState } from "react";

/** Illustrative iron-grill vs invisible-grill comparison. Drag (works on touch) or use the keyboard. */
export default function CompareSlider() {
  const [pos, setPos] = useState(50);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0; const t0 = performance.now();
    const loop = (t: number) => {
      setPos(50 + Math.sin((t - t0) / 900) * 28);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [touched]);

  const bars = (iron: boolean) => (
    <div aria-hidden className="absolute inset-0">
      {iron ? (
        <>
          <div className="absolute inset-0" style={{ background: "repeating-linear-gradient(90deg,#2b2b2b 0 13px,transparent 13px 50px)" }} />
          {[0, 33, 66, 97].map((t) => <div key={t} className="absolute inset-x-0 h-3 bg-[#2b2b2b]" style={{ top: `${t}%` }} />)}
          <div className="absolute inset-0 bg-black/10" />
        </>
      ) : (
        <>
          <div className="absolute inset-0" style={{ background: "repeating-linear-gradient(90deg,rgba(0,0,0,.28) 0 1px,rgba(255,255,255,.95) 1px 2.5px,rgba(0,0,0,.28) 2.5px 3.5px,transparent 3.5px 20px)" }} />
          {[0, 99].map((t) => <div key={t} className="absolute inset-x-0 h-1.5 bg-slate-300" style={{ top: `${t}%` }} />)}
        </>
      )}
    </div>
  );

  return (
    <div className="card overflow-hidden p-2 sm:p-3">
      <div className="relative aspect-[16/10] select-none overflow-hidden rounded-[18px]">
        {/* The view */}
        <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7cc8ff" /><stop offset=".7" stopColor="#dff3ff" /><stop offset="1" stopColor="#fff3d6" /></linearGradient>
            <radialGradient id="sun"><stop offset="0" stopColor="#fff6c9" /><stop offset="1" stopColor="#fff6c900" /></radialGradient>
          </defs>
          <rect width="800" height="500" fill="url(#sky)" />
          <circle cx="610" cy="130" r="150" fill="url(#sun)" /><circle cx="610" cy="130" r="38" fill="#fff1b8" />
          <g fill="#c6dff0">{[[40,230,60,170],[110,200,50,200],[175,250,70,150],[260,180,55,220],[330,240,80,160],[430,210,60,190],[500,260,70,140],[590,220,55,180],[660,190,60,210],[730,250,70,150]].map(([x,y,w,h],i)=><rect key={i} x={x} y={y} width={w} height={h} rx="3"/>)}</g>
          <path d="M0 360 C120 330 220 345 330 335 S560 320 800 350 V500 H0Z" fill="#7fc79a" />
          <path d="M0 400 C150 380 260 410 400 392 S650 385 800 405 V500 H0Z" fill="#4fae7b" />
          {[90,210,330,470,610,730].map((x,i)=><g key={x}><rect x={x-4} y={395-i%2*8} width="8" height="40" fill="#6b4f3a"/><circle cx={x} cy={385-i%2*8} r="30" fill="#2f9a63"/></g>)}
          <rect y="440" width="800" height="60" fill="#e9eef1" />
        </svg>
        {/* Invisible grill: full width underneath */}
        {bars(false)}
        {/* Iron grill: revealed on the left */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <div aria-hidden className="absolute inset-0 bg-[#cfe3ee]" style={{ opacity: 0 }} />
          {bars(true)}
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur">Iron grill</span>
        <span className="absolute right-3 top-3 rounded-full bg-teal px-3 py-1 text-xs font-bold text-white">Invisible grill</span>
        <div aria-hidden className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,.4)]" style={{ left: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-teal shadow-soft">⇆</span>
        </div>
        <input
          type="range" min={0} max={100} value={pos} aria-label="Compare iron grill and invisible grill"
          onChange={(e) => { setTouched(true); setPos(+e.target.value); }}
          onPointerDown={() => setTouched(true)}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 [touch-action:pan-y]"
        />
      </div>
      <p className="px-3 pb-2 pt-3 text-center text-xs text-muted">Illustration. Drag the slider to compare the view through each type of grill.</p>
    </div>
  );
}
