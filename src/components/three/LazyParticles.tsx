"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const HeroCanvas = dynamic(
  () => import("@/components/three/HeroCanvas").then((mod) => mod.HeroCanvas),
  { ssr: false }
);

interface LazyParticlesProps {
  className?: string;
}

/**
 * Mounts the WebGL particle canvas only while its container is near the viewport.
 * Keeps at most one live Three.js context on screen at a time instead of leaving
 * every section's canvas rendering forever in the background.
 */
export function LazyParticles({ className }: LazyParticlesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "200px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} aria-hidden>
      {inView && <HeroCanvas />}
    </div>
  );
}
