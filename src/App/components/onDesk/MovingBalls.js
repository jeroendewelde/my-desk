import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import movingBallsGlb from "./assets/movingBalls.glb";

const MovingBalls = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF(movingBallsGlb, true)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
        material={materials.Cognac}
        position={[-1.23, 0.79, -0.21]}
        rotation={[0, 0.51, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bal_1.geometry}
          material={nodes.Bal_1.material}
          position={[0.92, -0.78, 0.21]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Touw.geometry}
            material={nodes.Touw.material}
            position={[-0.84, 0.98, -0.16]}
            rotation={[-2.81, -0.12, 1.62]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Touw2.geometry}
            material={nodes.Touw2.material}
            position={[-0.86, 0.91, 0]}
            rotation={[-0.33, 0.12, -1.52]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bal_1001.geometry}
          material={nodes.Bal_1001.material}
          position={[0.88, -0.78, 0.21]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Touw001.geometry}
            material={nodes.Touw001.material}
            position={[-0.84, 0.98, -0.16]}
            rotation={[-2.81, -0.12, 1.62]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Touw2001.geometry}
            material={nodes.Touw2001.material}
            position={[-0.86, 0.91, 0]}
            rotation={[-0.33, 0.12, -1.52]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bal_1002.geometry}
          material={nodes.Bal_1002.material}
          position={[0.84, -0.78, 0.21]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Touw002.geometry}
            material={nodes.Touw002.material}
            position={[-0.84, 0.98, -0.16]}
            rotation={[-2.81, -0.12, 1.62]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Touw2002.geometry}
            material={nodes.Touw2002.material}
            position={[-0.86, 0.91, 0]}
            rotation={[-0.33, 0.12, -1.52]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bal_1003.geometry}
          material={nodes.Bal_1003.material}
          position={[0.8, -0.78, 0.21]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Touw003.geometry}
            material={nodes.Touw003.material}
            position={[-0.84, 0.98, -0.16]}
            rotation={[-2.81, -0.12, 1.62]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Touw2003.geometry}
            material={nodes.Touw2003.material}
            position={[-0.86, 0.91, 0]}
            rotation={[-0.33, 0.12, -1.52]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve002.geometry}
          material={nodes.BezierCurve002.material}
          position={[0.92, 0.57, 0.21]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve003.geometry}
          material={nodes.BezierCurve003.material}
          position={[0.92, 0.57, 0.08]}
        />
      </mesh>
    </group>
  )
}

export default MovingBalls