import React, { useRef,useEffect, useMemo } from 'react'
import { useGLTF,useAnimations } from '@react-three/drei'
import chairGlb from "./assets/chair2.glb";
import { AnimationMixer } from 'three';
import { useFrame } from '@react-three/fiber';

const Chair = (props) => {
    const group = useRef()
    const { nodes, materials, animations, scene } = useGLTF(chairGlb, true);
    const { actions } = useAnimations(animations, group)

    const mixer = useMemo(() => new AnimationMixer(), []);

    useEffect(() => {
      if(group.current) {
        mixer.clipAction(animations[0], group.current).play();
      }
    }, [animations, mixer]);

    useFrame((state, delta) => {
      mixer.update(delta);
    });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Chair"
        castShadow
        receiveShadow
        geometry={nodes.Chair.geometry}
        material={nodes.Chair.material}
        position={[0.32, 0.48, 0.89]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Onderstuk.geometry}
          material={nodes.Onderstuk.material}
          position={[0.01, -0.14, -0.12]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.As.geometry}
            material={nodes.As.material}
            position={[0, 0.07, 0]}>
            <group position={[0.49, -0.36, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle.geometry}
                material={nodes.Circle.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle_1.geometry}
                material={nodes.Circle_1.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={nodes.Cylinder.material}
              />
            </group>
            <group position={[-0.39, -0.36, -0.29]} rotation={[-Math.PI, 0.66, -Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle_2.geometry}
                material={nodes.Circle_2.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle_3.geometry}
                material={nodes.Circle_3.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001.geometry}
                material={nodes.Cylinder001.material}
              />
            </group>
            <group position={[-0.39, -0.36, 0.28]} rotation={[Math.PI, -0.57, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle_4.geometry}
                material={nodes.Circle_4.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle_5.geometry}
                material={nodes.Circle_5.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder003_1.geometry}
                material={nodes.Cylinder003_1.material}
              />
            </group>
            <group position={[0.15, -0.36, 0.47]} rotation={[0, -1.25, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle_6.geometry}
                material={nodes.Circle_6.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle_7.geometry}
                material={nodes.Circle_7.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder004_1.geometry}
                material={nodes.Cylinder004_1.material}
              />
            </group>
            <group position={[0.15, -0.36, -0.46]} rotation={[0, 1.14, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle_8.geometry}
                material={nodes.Circle_8.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle_9.geometry}
                material={nodes.Circle_9.material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder005_1.geometry}
                material={nodes.Cylinder005_1.material}
              />
            </group>
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Buis.geometry}
            material={materials['metallic darkgrey']}
            position={[0, 0.03, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Pomp.geometry}
              material={materials['metallic grey']}
              position={[0, 0.1, 0]}
            />
          </mesh>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Zitvlak.geometry}
          material={nodes.Zitvlak.material}
          position={[0.02, 0.14, -0.15]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Armsteun_links.geometry}
            material={nodes.Armsteun_links.material}
            position={[-0.02, -0.32, 0.15]}
            rotation={[Math.PI, 0, Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Armrest002.geometry}
              material={nodes.Armrest002.material}
              position={[0.26, 0.4, 0.01]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Armsteun_rechts.geometry}
            material={nodes.Armsteun_rechts.material}
            position={[0.02, -0.33, 0.02]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Armrest.geometry}
              material={nodes.Armrest.material}
              position={[1, 0.46, -0.02]}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={nodes.Cube006.material}
            position={[0, -0.04, 0.02]}
            scale={[0.05, 0, 0.05]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={nodes.Cube008.material}
            position={[0, -0.31, 0.02]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rugsteun001.geometry}
            material={nodes.Rugsteun001.material}
            position={[0, -0.33, 0.02]}
          />
        </mesh>
      </mesh>
    </group>
  )
}

export default Chair;
