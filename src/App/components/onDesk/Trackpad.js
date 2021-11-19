import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import trackpadGlb from "./assets/trackpad.glb";

const Trackpad = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF(trackpadGlb, true)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.32, 0.79, 0.43]} rotation={[0, -0.23, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033.geometry}
          material={materials['metallic grey']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033_1.geometry}
          material={materials['metallic white.002']}
        />
      </group>
    </group>
  )
}
export default Trackpad