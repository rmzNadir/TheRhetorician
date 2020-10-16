import React, { useRef } from "react";
import * as THREE from "three"
import { useLoader, useFrame, extend, useThree } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

export default function Model() {
  const Controls = () => {
    const controls = useRef();
    const { camera, gl } = useThree();
    useFrame(() => {
      controls.current.update();
    });
    return (
      <orbitControls
        ref={controls}
        // autoRotate
        args={[camera, gl.domElement]}
      ></orbitControls>
    );
  };
  const dudeHimself = useRef();
  const firstBand = useRef();
  const secondBand = useRef();
  const thirdBand = useRef();
  const clock = new THREE.Clock();
  let time = 0;
  let delta = 0;
  useFrame(() => {
    firstBand.current.rotation.z += 0.003;
    secondBand.current.rotation.z += 0.004;
    thirdBand.current.rotation.z += 0.005;
    delta = clock.getDelta();
    time += delta;
    dudeHimself.current.position.y = 0.2 + Math.abs(Math.sin(time * 3.5)) * 0.8;
    //dudeHimself.current.position.z = -2 + Math.cos(time) * 5;
  });
  const { nodes, materials } = useLoader(GLTFLoader, "/models/scene.glb");

  return (
    <group dispose={null} scale={[1, 1, 1]} ref={dudeHimself}>
      <group rotation={[-Math.PI / 2, 0, -0.1]}>
        <group position={[-0.27, 0.12, -1.9]}>
          <mesh
            geometry={nodes.mentor_roman_retopo_0.geometry}
          >
            {/* <Controls /> */}
            <meshStandardMaterial
              wireframe
              attach="material"
              color="white"
              roughness={0.3}
              metalness={0.3}
            />
          </mesh>
        </group>
        <group
          position={[0.16, -0.17, 1.35]}
          rotation={[-0.1, 0.3, 0]}
          scale={[0.89, 0.89, 0.89]}
        >
          <mesh
            ref={firstBand}
            material={materials.Crown}
            geometry={nodes.nimbus002_0.geometry}
          />
          <mesh
            ref={secondBand}
            material={materials.Crown}
            geometry={nodes.nimbus001_0.geometry}
          />
          <mesh
            ref={thirdBand}
            material={materials.Crown}
            geometry={nodes.nimbus003_0.geometry}
          />
        </group>
      </group>
    </group>
  );
}
