
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/models/background.glb')
  console.log(nodes)
  console.log(materials)
  return (
    <group ref={group} {...props} dispose={null} scale={[0.1,0.1,0.1]}>
      <group rotation={[-Math.PI / 2, 2.527, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group  position={[6, 20,-85]} rotation={[-0.23, 0.23555, 2.573]} >
            <mesh material={materials.black} geometry={nodes.Plane_black_0.geometry} />
            <mesh material={materials.floor} geometry={nodes.Plane_floor_0.geometry} />
          </group>
          <group position={[40, -74, -250]} rotation={[5.6, 6, 2.673]}>
            <mesh material={materials.mountain} geometry={nodes.mountain001_mountain_0.geometry} />
            <mesh material={materials.blue_emission} geometry={nodes.mountain001_blue_emission_0.geometry} />
          </group>
          <group position={[-120, 40, -250]} rotation={[0.6,1.3,2.3]} >
            <mesh material={materials.mountain} geometry={nodes.mountain_mountain_0.geometry} />
            <mesh material={materials.blue_emission} geometry={nodes.mountain_blue_emission_0.geometry} />
          </group>
        </group>
      </group>
    </group>
  )
}
