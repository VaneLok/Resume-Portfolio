import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const decalScale = props.scale || 1;

  return (
    <Float speed={5} rotationIntensity={2} floatIntensity={1}>
      <ambientLight intensity={0.03} />
      <directionalLight position={[0, 0, 0.1]} />
      <mesh castShadow receiveShadow scale={2.55}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff"
          polygonOffset
          polygonOffsetFactor={5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={decalScale}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, scale }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 1]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} scale={scale} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
