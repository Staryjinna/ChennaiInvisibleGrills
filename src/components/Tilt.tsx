"use client";
import { useRef, type CSSProperties, type ReactNode } from "react";

/** Mouse: 3D tilt + glare. Touch: press-in feedback. */
export default function Tilt({
  children, className = "", max = 8, style,
}: { children: ReactNode; className?: string; max?: number; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max * 1.2}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };
  const leave = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <div
      ref={ref}
      onPointerMove={move}
      onPointerLeave={leave}
      style={style}
      className={`group card transition-[transform,box-shadow] duration-200 ease-out will-change-transform active:scale-[0.98] motion-reduce:!transform-none ${className}`}
    >
      {children}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(380px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,.55), transparent 45%)" }}
      />
    </div>
  );
}
