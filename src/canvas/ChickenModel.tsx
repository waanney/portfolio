"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const ChickenModel = () => {
  const group = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { viewport } = useThree();
  
  // Responsive values
  const isMobile = viewport.width < 5;
  const targetPosition = isMobile ? new THREE.Vector3(0, -1.5, 0) : new THREE.Vector3(1.8, -0.5, 0);
  const baseScale = isMobile ? 0.9 : 1.2;

  // Load the GLB model
  const { scene } = useGLTF("/portfolio/models/chibi-chicken.glb");

  // Idle floating animation
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime();
      
      // Lerp position for smooth responsive transition
      group.current.position.lerp(targetPosition, 0.1);
      
      // Gentle floating
      group.current.position.y += Math.sin(t * 0.8) * 0.005;
      
      // Rotation
      const rotSpeed = hovered ? 0.03 : 0.005;
      group.current.rotation.y += rotSpeed;
      
      // Scale bounce on click
      const targetScaleVal = clicked ? baseScale * 1.15 : hovered ? baseScale * 1.08 : baseScale;
      group.current.scale.lerp(
        new THREE.Vector3(targetScaleVal, targetScaleVal, targetScaleVal),
        0.1
      );
    }
  });

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <group
      ref={group}
      position={[1.8, -0.5, 0]}
      scale={[0, 0, 0]}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
      onClick={handleClick}
    >
      <primitive
        object={scene.clone()}
        rotation={[0, -Math.PI / 4, 0]}
      />
    </group>
  );
};

// Preload the model
useGLTF.preload("/portfolio/models/chibi-chicken.glb");

export default ChickenModel;
