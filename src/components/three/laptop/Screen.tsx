"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

interface ScreenProps {
  isAssembled: boolean;
  width: number;
  height: number;
}

export function Screen({ isAssembled, width, height }: ScreenProps) {
  const logoTexture = useTexture("/images/logo-capucho.png");
  const displayRef = useRef<THREE.Mesh>(null);
  const logoRef = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    const smoothing = 1 - Math.exp(-delta * 3);
    const displayMat = displayRef.current?.material as THREE.MeshBasicMaterial | undefined;
    const logoMat = logoRef.current?.material as THREE.MeshBasicMaterial | undefined;
    if (displayMat) {
      displayMat.color.lerp(new THREE.Color(isAssembled ? "#ffffff" : "#0b0d10"), smoothing);
    }
    if (logoMat) {
      logoMat.opacity = THREE.MathUtils.lerp(logoMat.opacity, isAssembled ? 1 : 0, smoothing);
    }
  });

  const logoWidth = width * 0.5;
  const logoHeight = logoWidth * (112 / 392);

  return (
    <group position={[0, -0.045, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <mesh ref={displayRef}>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial color="#0b0d10" side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={logoRef} position={[0, 0, 0.001]}>
        <planeGeometry args={[logoWidth, logoHeight]} />
        <meshBasicMaterial
          map={logoTexture}
          transparent
          opacity={0}
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
