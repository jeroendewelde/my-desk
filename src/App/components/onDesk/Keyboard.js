import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import keyboardGlb from "./assets/keyboard2.glb";

const Keyboard = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF(keyboardGlb, true)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Keyboard.geometry}
        material={materials['metallic grey']}
        position={[-0.27, 0.79, 0.43]}
        rotation={[0, 0.14, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={nodes.Plane003.material}
          position={[-0.18, 0.01, -0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={nodes.Plane004.material}
          position={[-0.23, 0.01, -0.05]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={nodes.Plane005.material}
          position={[-0.18, 0.01, -0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_1.geometry}
          material={nodes.Plane006_1.material}
          position={[-0.17, 0.01, 0.02]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={nodes.Plane007.material}
          position={[-0.19, 0.01, 0.05]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={nodes.Plane008.material}
          position={[-0.19, 0.01, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={nodes.Plane009.material}
          position={[-0.12, 0.01, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={nodes.Plane010.material}
          position={[0.09, 0.01, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={nodes.Plane011.material}
          position={[0.12, 0.01, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={nodes.Plane012.material}
          position={[0.19, 0.01, 0.08]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={nodes.Plane013.material}
          position={[0.22, 0.01, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={nodes.Plane014.material}
          position={[0.22, 0, -0.08]}
          rotation={[0, 1.57, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015.geometry}
          material={nodes.Plane015.material}
          position={[-0.22, 0.01, -0.08]}
          rotation={[Math.PI, -0.01, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016.geometry}
          material={nodes.Plane016.material}
          position={[-0.23, 0, 0.08]}
          rotation={[0, -1.57, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017.geometry}
          material={nodes.Plane017.material}
          position={[-0.22, 0.01, -0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane018.geometry}
          material={nodes.Plane018.material}
          position={[0.21, 0.01, -0.05]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019.geometry}
          material={nodes.Plane019.material}
          position={[0.2, 0.01, 0.05]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020.geometry}
          material={nodes.Plane020.material}
          position={[-0.21, 0.01, 0.02]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021.geometry}
          material={nodes.Plane021.material}
          position={[-0.22, 0.01, 0.05]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane022.geometry}
          material={nodes.Plane022.material}
          position={[-0.02, 0.01, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023.geometry}
          material={nodes.Plane023.material}
          position={[0.22, 0.01, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane024.geometry}
          material={nodes.Plane024.material}
          position={[0.19, 0.01, 0.09]}
        />
      </mesh>
    </group>
  )
}
export default Keyboard