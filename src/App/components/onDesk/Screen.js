import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import screenGlb from "./assets/screen.glb";

const Screen = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF(screenGlb, true)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Scherm-houder'].geometry}
        material={nodes['Scherm-houder'].material}
        position={[-0.17, 0.79, -0.74]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={nodes.Cylinder002.material}
          position={[1.08, -0.79, 0.76]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={nodes.Cylinder011.material}
          position={[0.45, 0.35, -0.06]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={nodes.Cylinder009.material}
        position={[-0.62, 1.13, -0.73]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <group position={[-0.84, 1.24, -0.65]} rotation={[1.23, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane038.geometry}
          material={nodes.Plane038.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane038_1.geometry}
          material={nodes.Plane038_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane038_2.geometry}
          material={nodes.Plane038_2.material}
        />
      </group>
      <group position={[0.49, 1.24, -0.65]} rotation={[1.23, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane038.geometry}
          material={nodes.Plane038.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane038_1.geometry}
          material={nodes.Plane038_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane038_2.geometry}
          material={nodes.Plane038_2.material}
        />
      </group>
    </group>
  )
}

export default Screen