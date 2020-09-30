import React, { useRef } from "react";
import { extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });
function Loading() {
  const Controls = () => {
    const controls = useRef();

    const { camera, gl } = useThree();

    useFrame(() => {
      controls.current.update();
    });

    return (
      <orbitControls
        ref={controls}
        autoRotate
        args={[camera, gl.domElement]}
      ></orbitControls>
    );
  };

  return (
        <group rotation={[ 0, 50, 50]}>
          <mesh> 
          <Controls />

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
