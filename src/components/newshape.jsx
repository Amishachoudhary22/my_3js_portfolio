import { useFrame } from '@react-three/fiber';
import { Float, useGLTF } from '@react-three/drei';
import { useRef } from 'react';

const NewShape = (props) => {
  const { nodes, materials } = useGLTF('models/impossible_shapes.glb');
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.x += 0.01;
    }
  });

  return (
    <Float floatIntensity={1} floatSpeed={1.5} rotationIntensity={0.2} >
      <group ref={groupRef} position={[10, 4, 0]} scale={0.0005} {...props} dispose={null}>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Material}
          position={[0, -1, 0]}
          rotation={[0, 0, 0]}
          scale={[0.2, 0.2, 0.2]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('models/impossible_shapes.glb');

export default NewShape;
