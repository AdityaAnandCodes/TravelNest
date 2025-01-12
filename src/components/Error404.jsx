/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export function Error404(props) {
  const { nodes, materials } = useGLTF('/Error404.glb');
  const groupRef = useRef();

  // Use state to track the rotation value
  const [rotationY, setRotationY] = useState(Math.PI);

  // Update the rotation using setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      setRotationY((prevRotation) => prevRotation + 0.001); // Increment rotation
    }, 16); // Approx. 60fps (1000ms / 60fps = ~16ms per frame)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[0, rotationY, 0]}> {/* Apply dynamic rotationY */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0_1.geometry}
          material={materials.Error404}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.material_0}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/Error404.glb');
