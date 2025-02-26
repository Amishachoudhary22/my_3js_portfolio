import React from "react";
import { Decal, Float, useTexture } from "@react-three/drei";

const Ball = (props) => {
  const decal = useTexture(props.icon);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} position={props.position}>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

export default Ball;
