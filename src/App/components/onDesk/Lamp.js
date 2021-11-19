import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import lampGlb from "./assets/lamp2.glb";

const Lamp = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF(lampGlb, true)
  return (
    <group ref={group} {...props} dispose={null} scale={[2,2,2]} >
    {/* <group ref={group} {...props} dispose={null} > */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamp.geometry}
        material={nodes.Lamp.material}
        // position={[-1.79, 0.78, -0.57]}>
        position={[-0.895, 0.39, -0.285]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={nodes.Cylinder010.material}
          position={[0.14, 0.3, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lampenkap.geometry}
          material={nodes.lampenkap.material}
          position={[0.19, 0.24, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lampenkaphouder.geometry}
            material={nodes.lampenkaphouder.material}
            position={[-0.02, 0.06, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere001.geometry}
            material={nodes.Sphere001.material}
            position={[-0.03, 0.09, 0]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve.geometry}
          material={nodes.BezierCurve.material}
          position={[0.11, 0.32, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve001.geometry}
          material={nodes.BezierCurve001.material}
          position={[-0.03, 0.21, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={nodes.Cylinder006_1.material}
          position={[-0.04, 0.12, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={nodes.Cylinder007.material}
          position={[0.04, 0.26, 0]}
          rotation={[0, 0, 2.07]}
        />
      </mesh>
    </group>
  )
}

export default Lamp;