"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Laptop3D = dynamic(() => import("@/components/three/Laptop3D").then((mod) => mod.Laptop3D), {
  ssr: false,
});

interface LazyLaptop3DProps {
  className?: string;
}

/** Mounts the 3D laptop scene only while its container is near the viewport. */
export function LazyLaptop3D({ className }: LazyLaptop3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "150px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {inView ? <Laptop3D /> : null}
    </div>
  );
}
