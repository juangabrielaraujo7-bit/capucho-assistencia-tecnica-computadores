"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ParticleField } from "@/components/three/ParticleField";

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

export function HeroCanvas() {
  const [enabled] = useState(canAnimate);

  if (!enabled) return null;

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 5], fov: 45 }}
      className="!absolute !inset-0"
    >
      <ParticleField />
    </Canvas>
  );
}
