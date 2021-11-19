import React, { useRef } from 'react'
import { useGLTF, useNormalTexture } from '@react-three/drei'
import roomGlb from "./assets/room2.glb";

const Room = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF(roomGlb, true)
    return (
      <group ref={group} {...props} dispose={null}>
        <group position={[0, 0, 3.04]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_1.geometry}
            material={materials.Material}
          />
        </group>
      </group>
    )
  }
export default Room;
