"use client";
import { useEffect, useRef } from "react";

/** Interactive 3D invisible-grill: steel cables tensioned in a champagne frame. Decorative only. */
export default function Hero3D({ className = "" }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let dispose = () => {};
    let dead = false;

    (async () => {
      const THREE = await import("three");
      const { RoomEnvironment } = await import("three/examples/jsm/environments/RoomEnvironment.js");
      const el = host.current;
      if (dead || !el) return;

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      } catch {
        return; // no WebGL: CSS background remains
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      el.appendChild(renderer.domElement);
      renderer.domElement.style.cssText = "width:100%;height:100%;display:block";

      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

      const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
      camera.position.set(0, 0, 9);

      const gold = new THREE.Color(0xffc857);
      const rig = new THREE.Group();
      scene.add(rig);

      const W = 6, H = 4, N = 36;
      const champagne = new THREE.MeshStandardMaterial({ color: 0xd8b878, metalness: 1, roughness: 0.28 });
      const rail = (w: number, h: number, x: number, y: number) => {
        const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.26), champagne);
        m.position.set(x, y, 0);
        rig.add(m);
      };
      rail(W + 0.3, 0.14, 0, H / 2);
      rail(W + 0.3, 0.14, 0, -H / 2);
      rail(0.14, H + 0.14, -W / 2 - 0.08, 0);
      rail(0.14, H + 0.14, W / 2 + 0.08, 0);

      const cableGeo = new THREE.CylinderGeometry(0.014, 0.014, H, 8);
      const capGeo = new THREE.SphereGeometry(0.045, 12, 12);
      const mats: import("three").MeshStandardMaterial[] = [];
      for (let i = 0; i < N; i++) {
        const x = -W / 2 + ((i + 1) * W) / (N + 1);
        const mat = new THREE.MeshStandardMaterial({
          color: 0xdfe8ee, metalness: 1, roughness: 0.18, emissive: gold, emissiveIntensity: 0, envMapIntensity: 1.6,
        });
        mats.push(mat);
        const c = new THREE.Mesh(cableGeo, mat);
        c.position.set(x, 0, 0);
        rig.add(c);
        for (const y of [H / 2, -H / 2]) {
          const cap = new THREE.Mesh(capGeo, champagne);
          cap.position.set(x, y, 0.1);
          rig.add(cap);
        }
      }

      // Drifting gold dust
      const COUNT = 220;
      const pos = new Float32Array(COUNT * 3);
      for (let i = 0; i < COUNT; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 14;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 9;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;
      }
      const dustGeo = new THREE.BufferGeometry();
      dustGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const dust = new THREE.Points(
        dustGeo,
        new THREE.PointsMaterial({ color: 0xffd27a, size: 0.035, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false }),
      );
      scene.add(dust);

      const key = new THREE.PointLight(0xffc857, 30, 20);
      key.position.set(3, 3, 5);
      const fill = new THREE.PointLight(0x4fd1e8, 25, 20);
      fill.position.set(-4, -2, 4);
      scene.add(key, fill);

      let tx = 0, ty = 0, visible = true, w = 1, h = 1;
      const onMove = (e: PointerEvent) => {
        tx = (e.clientX / window.innerWidth - 0.5) * 2;
        ty = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("pointermove", onMove, { passive: true });

      const layout = () => {
        w = el.clientWidth; h = el.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        const wide = w / h > 1.15;
        rig.position.set(wide ? Math.min(2.5, 0.5 * (w / h) * 3.1) : 0, wide ? 0 : -0.4, 0);
        rig.scale.setScalar(wide ? 0.6 : Math.min(0.62, (w / h) * 1.05));
      };
      const ro = new ResizeObserver(layout);
      ro.observe(el);
      layout();

      const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
      io.observe(el);

      const clock = new THREE.Clock();
      let raf = 0;
      const tick = () => {
        raf = requestAnimationFrame(tick);
        if (!visible) return;
        const t = clock.getElapsedTime();
        rig.rotation.y += (-0.5 + tx * 0.3 - rig.rotation.y) * 0.05;
        rig.rotation.x += (ty * 0.14 - 0.04 - rig.rotation.x) * 0.05;
        rig.position.y += ((w / h > 1.15 ? 0 : -0.4) + Math.sin(t * 0.8) * 0.08 - rig.position.y) * 0.05;
        // gold glint sweeping across the cables
        const sweep = ((t * 0.35) % 1.6) * (W + 2) - W / 2 - 1;
        mats.forEach((m, i) => {
          const x = -W / 2 + ((i + 1) * W) / (N + 1);
          m.emissiveIntensity = Math.max(0, 1 - Math.abs(x - sweep) * 1.1) * 1.4;
        });
        key.position.x = 3 + Math.sin(t * 0.6) * 1.5;
        dust.rotation.y = t * 0.02;
        dust.position.y = Math.sin(t * 0.3) * 0.2;
        renderer.render(scene, camera);
      };
      tick();
      el.dataset.ready = "1";

      dispose = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("pointermove", onMove);
        ro.disconnect(); io.disconnect();
        scene.traverse((o) => {
          const m = o as import("three").Mesh;
          m.geometry?.dispose?.();
        });
        mats.forEach((m) => m.dispose());
        champagne.dispose(); pmrem.dispose(); renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => { dead = true; dispose(); };
  }, []);

  return <div ref={host} aria-hidden className={`pointer-events-none opacity-0 max-lg:[&_canvas]:opacity-25 transition-opacity duration-1000 data-[ready=1]:opacity-100 ${className}`} />;
}
