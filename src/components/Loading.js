import React, { useRef } from "react";
import { extend, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });
function Loading() {
  const cube = useRef();
  useFrame(() => {
    cube.current.rotation.y += 0.01;
    cube.current.rotation.x += 0.01;
    cube.current.rotation.z += 0.01;
  });

  return (
        <group rotation={[ 45, -35.3, 0]}>
          <mesh  ref={cube}>
          <boxBufferGeometry
            attach="geometry"
            args={[1, 1, 1]}
          ></boxBufferGeometry>

          <meshBasicMaterial
            wireframe
            attach="material"
            color="white"
          ></meshBasicMaterial>
        </mesh>
        </group>
  );
}

export default Loading;
