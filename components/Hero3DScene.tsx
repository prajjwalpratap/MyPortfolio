"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";

function Knot({ position, scale = 1, color = "#7c6dff" }: { position: [number, number, number]; scale?: number; color?: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.35;
    ref.current.rotation.x += dt * 0.12;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusKnotGeometry args={[0.9, 0.28, 220, 32]} />
        <meshStandardMaterial color={color} roughness={0.32} metalness={0.22} flatShading={false} />
      </mesh>
    </Float>
  );
}

function Ico({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.5;
  });
  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial color="#00e5cc" roughness={0.25} metalness={0.45} wireframe={false} transparent opacity={0.9} />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 4]} intensity={1.4} />
      <pointLight position={[-4, -2, -3]} intensity={0.9} color="#7c6dff" />
      <pointLight position={[5, 2, 2]} intensity={0.6} color="#00e5cc" />
      <Knot position={[1.9, 0.2, -0.4]} scale={0.95} color="#7c6dff" />
      <Ico position={[-1.6, -0.6, 0.2]} scale={0.95} />
      <ContactShadows position={[0, -1.7, 0]} opacity={0.22} scale={10} blur={2.2} far={4} />
      <Environment preset="city" />
    </>
  );
}

export default function Hero3DScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0.15, 6.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  );
}
