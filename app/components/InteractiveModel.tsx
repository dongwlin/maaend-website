"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const ArchitectureModel = () => {
  const count = 4000;
  const mesh = useRef<THREE.Points>(null);

  // Generate a structural, "Endfield-like" industrial spire
  // Using useMemo to cache random values - only computed once on mount
  const _particles = useMemo(() => {
    /* eslint-disable react-hooks/purity */
    // Math.random() is safe here as it's memoized and only runs once on mount
    const temp = [];

    // 1. Main Core Pillar (Hexagonal Prism)
    for (let i = 0; i < count * 0.4; i++) {
      const y = (Math.random() - 0.5) * 6;
      const angle = (Math.floor(Math.random() * 6) / 6) * Math.PI * 2; // Hexagon corners
      const radius = 0.5 + Math.random() * 0.1;

      // Add noise to make it look like structure points
      const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.1;
      const z = Math.sin(angle) * radius + (Math.random() - 0.5) * 0.1;

      temp.push(x, y, z);
    }

    // 2. Floating Data Rings (Horizontal)
    const rings = 5;
    for (let r = 0; r < rings; r++) {
      const yLevel = (r - 2) * 1.2;
      for (let i = 0; i < count * 0.1; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 1.5 + Math.random() * 0.2;
        const y = yLevel + (Math.random() - 0.5) * 0.1;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        temp.push(x, y, z);
      }
    }

    // 3. Suspended Geometric Fragments (Floating blocks)
    for (let i = 0; i < count * 0.2; i++) {
      const clusterX = (Math.random() > 0.5 ? 1 : -1) * (1.5 + Math.random());
      const clusterY = (Math.random() - 0.5) * 4;
      const clusterZ = (Math.random() - 0.5) * 2;

      const x = clusterX + (Math.random() - 0.5) * 0.5;
      const y = clusterY + (Math.random() - 0.5) * 0.5;
      const z = clusterZ + (Math.random() - 0.5) * 0.5;

      temp.push(x, y, z);
    }

    return new Float32Array(temp);
    /* eslint-enable react-hooks/purity */
  }, []);

  useFrame(() => {
    if (!mesh.current) return;
    // Technical rotation
    mesh.current.rotation.y -= 0.002;
  });

  return (
    <points
      ref={mesh}
      geometry={new THREE.BufferGeometry().setAttribute(
        "position",
        new THREE.BufferAttribute(_particles, 3)
      )}
    >
      <pointsMaterial
        size={0.04}
        color="#FFD000" // Changed to Industrial Yellow
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const HoloField = () => {
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={ref}>
      {/* Vertical Scanning Plane */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[2.5, 2.5, 6, 6, 1, true]} />
        <meshBasicMaterial
          color="#00F0FF"
          wireframe
          opacity={0.05}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default function InteractiveModel() {
  return (
    <div className="group relative h-full w-full cursor-crosshair">
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
        <PerspectiveCamera makeDefault position={[4, 2, 6]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          autoRotate
          autoRotateSpeed={1.5}
        />

        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <ArchitectureModel />
          <HoloField />
        </Float>

        {/* Dramatic Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00F0FF" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#FFD000" />
      </Canvas>

      {/* HUD Overlays (HTML Layer) */}
      <div className="pointer-events-none absolute inset-0">
        {/* Corner Brackets */}
        <div className="absolute top-4 left-4 h-8 w-8 border-t border-l border-[#FFD000]/50" />
        <div className="absolute top-4 right-4 h-8 w-8 border-t border-r border-[#FFD000]/50" />
        <div className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-[#FFD000]/50" />
        <div className="absolute right-4 bottom-4 h-8 w-8 border-r border-b border-[#FFD000]/50" />

        {/* Center Focus Ring */}
        <div className="absolute top-1/2 left-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite] rounded-full border border-[#00F0FF]/10" />
      </div>
    </div>
  );
}
