"use client";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.6} color="#f0edff" />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        color="#ffffff"
        castShadow
      />
      <pointLight position={[-3, 3, -2]} intensity={0.5} color="#f9a8d4" />
      <pointLight position={[3, 2, -4]} intensity={0.4} color="#67e8f9" />
      <pointLight position={[0, -2, 3]} intensity={0.2} color="#a78bfa" />
    </>
  );
};

export default Lights;
