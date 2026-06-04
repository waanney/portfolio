"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticlesProps {
  count?: number;
}

const Particles = ({ count = 80 }: ParticlesProps) => {
  const mesh = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const pastelColors: [number, number, number][] = [
      [0.655, 0.545, 0.98],
      [0.976, 0.66, 0.831],
      [0.404, 0.91, 0.976],
      [0.525, 0.937, 0.675],
      [0.984, 0.749, 0.141],
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const color =
        pastelColors[Math.floor(Math.random() * pastelColors.length)];
      colors[i * 3] = color[0];
      colors[i * 3 + 1] = color[1];
      colors[i * 3 + 2] = color[2];
    }

    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      const t = state.clock.getElapsedTime();
      const posArray = mesh.current.geometry.attributes.position
        .array as Float32Array;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        posArray[i3 + 1] += Math.sin(t * 0.3 + i * 0.5) * 0.002;
        posArray[i3] += Math.cos(t * 0.2 + i * 0.3) * 0.001;
      }

      mesh.current.geometry.attributes.position.needsUpdate = true;
      mesh.current.rotation.y = t * 0.02;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default Particles;
