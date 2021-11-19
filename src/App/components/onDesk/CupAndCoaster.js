import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import cupAndCoasterGlb from './assets/cupAndCoaster.glb';

const CupAndCoaster = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF(cupAndCoasterGlb, true)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials['metallic green']}
        position={[0, 0.06, -0.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials.Cognac}
        position={[0, -0.02, -0.39]}
      />
    </group>
  )
}

export default CupAndCoaster;