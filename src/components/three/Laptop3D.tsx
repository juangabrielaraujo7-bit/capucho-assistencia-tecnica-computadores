"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { LaptopScene } from "@/components/three/laptop/LaptopScene";
import { LaptopAssembleEffect } from "@/components/sections/LaptopAssembleEffect";

function canRenderWebgl(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

function canAnimate(): boolean {
  if (typeof window === "undefined") return false;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return !reducedMotion && canRenderWebgl();
}

export function Laptop3D() {
  const [enabled] = useState(canAnimate);
  const [isAssembled, setIsAssembled] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    let mounted = true;
    let timer: ReturnType<typeof setTimeout>;

    function cycle(assemble: boolean, delay: number) {
      timer = setTimeout(() => {
        if (!mounted) return;
        setIsAssembled(assemble);
        cycle(!assemble, assemble ? 4200 : 1500);
      }, delay);
    }

    cycle(true, 500);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [enabled]);

  // Sem WebGL ou com prefers-reduced-motion: cai pra versão em SVG (mais leve, sem canvas).
  if (!enabled) {
    return <LaptopAssembleEffect />;
  }

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0.9, 4.4], fov: 32 }}
      className="!absolute !inset-0"
    >
      <Suspense fallback={null}>
        <LaptopScene isAssembled={isAssembled} autoRotate />
      </Suspense>
    </Canvas>
  );
}
