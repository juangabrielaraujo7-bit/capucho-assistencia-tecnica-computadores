"use client";

import { useRef, type ReactNode } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import type { PartConfig } from "./parts";

interface AssemblingPartProps {
  part: PartConfig;
  isAssembled: boolean;
  children?: ReactNode;
}

const tmpEuler = new THREE.Euler();

export function AssemblingPart({ part, isAssembled, children }: AssemblingPartProps) {
  const groupRef = useRef<THREE.Group>(null);
  const shellRef = useRef<THREE.Mesh>(null);

  const scatteredPos = useRef(new THREE.Vector3(...part.scattered.position)).current;
  const assembledPos = useRef(new THREE.Vector3(...part.assembled.position)).current;
  const scatteredQuat = useRef(
    new THREE.Quaternion().setFromEuler(tmpEuler.set(...part.scattered.rotation))
  ).current;
  const assembledQuat = useRef(
    new THREE.Quaternion().setFromEuler(tmpEuler.set(...part.assembled.rotation))
  ).current;

  useFrame((_state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    const smoothing = 1 - Math.exp(-delta * (isAssembled ? 3.2 : 2.4));
    group.position.lerp(isAssembled ? assembledPos : scatteredPos, smoothing);
    group.quaternion.slerp(isAssembled ? assembledQuat : scatteredQuat, smoothing);

    if (part.internal && shellRef.current) {
      const material = shellRef.current.material as THREE.MeshStandardMaterial;
      const distance = group.position.distanceTo(assembledPos);
      const targetOpacity = isAssembled && distance < 0.12 ? 0 : 1;
      material.transparent = true;
      material.opacity = THREE.MathUtils.lerp(material.opacity, targetOpacity, smoothing);
    }
  });

  return (
    <group ref={groupRef} position={part.scattered.position}>
      <RoundedBox ref={shellRef} args={part.size} radius={part.radius} smoothness={4}>
        <meshStandardMaterial color={part.color} metalness={part.metalness} roughness={part.roughness} />
      </RoundedBox>
      {children}
    </group>
  );
}
