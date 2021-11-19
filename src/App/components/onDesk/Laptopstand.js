import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import laptopstandGld from "./assets/laptopstand2.glb";

const Laptopstand = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF(laptopstandGld, true)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['metallic grey']}
        position={[1.11, 0.02, -0.06]}
        rotation={[0, -0.75, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['metallic darkgrey']}
        position={[1.07, 1.05, 0.03]}
        rotation={[0, -0.75, 0]}
      />
    </group>
  )
}

export default Laptopstand;