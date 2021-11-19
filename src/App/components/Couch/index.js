import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import couchGlb from "./assets/couch.glb";

const Couch = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF(couchGlb, true)
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sofa.geometry}
          material={materials.SoftBrown}
          position={[-2.84, 0, 3.6]}
          rotation={[0, 1.57, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003.geometry}
            material={nodes.Circle003.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle004.geometry}
            material={nodes.Circle004.material}
            position={[-2.39, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle005.geometry}
            material={nodes.Circle005.material}
            position={[-2.39, 0, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Feet.geometry}
            material={nodes.Feet.material}
            position={[0.04, 0, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane027.geometry}
            material={nodes.Plane027.material}
            position={[0.58, 0.35, 0.27]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane028.geometry}
            material={nodes.Plane028.material}
            position={[-0.53, 0.35, 0.27]}
          />
        </mesh>
      </group>
    )
  }
export default Couch;
