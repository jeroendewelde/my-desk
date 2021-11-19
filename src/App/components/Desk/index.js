import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import deskGlb from "./assets/desk4.glb";

const Desk = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF(deskGlb, true)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.72, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials['metallic white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_1.geometry}
          material={materials['Wood-TextureDarker']}
        />
      </group>
    </group>
  )
}

export default Desk;


