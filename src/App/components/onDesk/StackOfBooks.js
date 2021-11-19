import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import stackOfBooksGlb from "./assets/stackOfBooks.glb";

const StackOfBooks = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF(stackOfBooksGlb, true)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-1.67, 0.81, 0.41]} rotation={[Math.PI, -0.77, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.PaperC}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.RedBook}
        />
      </group>
      <group position={[-1.67, 0.88, 0.41]} rotation={[Math.PI, -0.95, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials['PaperC.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials.greenBook}
        />
      </group>
      <group position={[-1.67, 0.96, 0.41]} rotation={[Math.PI, -1.21, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials['PaperC.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials.blueBook}
        />
      </group>
    </group>
  )
}
export default StackOfBooks