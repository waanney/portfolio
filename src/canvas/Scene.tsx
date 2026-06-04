"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import ChickenModel from "./ChickenModel";
import Lights from "./Lights";
import Particles from "./Particles";

interface SceneProps {
  interactive?: boolean;
}

const Scene = ({ interactive = false }: SceneProps) => {
  return (
    <div className={`canvas-container ${interactive ? "interactive" : ""}`}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 1.5, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Lights />
          <ChickenModel />
          <Particles />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
