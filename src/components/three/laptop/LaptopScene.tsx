"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import type * as THREE from "three";
import { laptopParts } from "./parts";
import { AssemblingPart } from "./AssemblingPart";
import { Screen } from "./Screen";

interface LaptopSceneProps {
  isAssembled: boolean;
  autoRotate: boolean;
}

export function LaptopScene({ isAssembled, autoRotate }: LaptopSceneProps) {
  const rigRef = useRef<THREE.Group>(null);
  const lid = laptopParts.find((part) => part.key === "lid")!;
  const otherParts = laptopParts.filter((part) => part.key !== "lid");

  useFrame((_state, delta) => {
    if (autoRotate && rigRef.current) {
      rigRef.current.rotation.y += delta * 0.22;
    }
  });

  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 3]} intensity={1.1} />
      <pointLight position={[-2, 1.5, 2]} intensity={0.6} color="#3d6bff" />

      <group ref={rigRef} position={[0, -0.15, 0]}>
        <AssemblingPart part={lid} isAssembled={isAssembled}>
          <Screen isAssembled={isAssembled} width={lid.size[0] * 0.86} height={lid.size[2] * 0.78} />
        </AssemblingPart>

        {otherParts.map((part) => (
          <AssemblingPart key={part.key} part={part} isAssembled={isAssembled} />
        ))}
      </group>

      <ContactShadows position={[0, -0.9, 0]} opacity={0.4} scale={6} blur={2.4} far={2} />
    </>
  );
}
