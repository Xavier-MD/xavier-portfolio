import { Center, OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette
} from '@react-three/postprocessing';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Model({ modelPath }) {
  const gltf = useLoader(GLTFLoader, modelPath);
  return <primitive object={gltf.scene} scale={1} />;
}

export default function App() {
  return (
    <div className='App'>
      <div className='w-screen h-screen bg-xWhite overflow-hidden'>
        <Canvas
          dpr={[1, 2]}
          shadows={true}
          eventSource={document.getElementById('root')}
        >
          <perspectiveCamera
            makeDefault={true}
            resolution={1024}
            fov={75}
            position={[0, 1, -5]}
            near={0.1}
            far={1000}
          >
            <Suspense fallback={null}>
              <Center>
                <Model modelPath={'/assets/models/walkman/scene.gltf'} />
              </Center>
            </Suspense>
          </perspectiveCamera>
          <ambientLight intensity={4} />
          <OrbitControls />
          {/* <EffectComposer>
            <DepthOfField
              focusDistance={0}
              focalLength={0.02}
              bokehScale={2}
              height={480}
            />
            <Bloom
              luminanceThreshold={0}
              luminanceSmoothing={0.9}
              height={300}
            />
            <Noise opacity={0.02} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer> */}
        </Canvas>
      </div>
    </div>
  );
}

{
  /* <fog attach='fog' args={['#1A181B', 0, 10]} />
            <group position={[0, -0.8, 0]}>
              <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[50, 50]} />
                <MeshReflectorMaterial
                  blur={[800, 800]}
                  resolution={2048}
                  mixBlur={1}
                  mixStrength={20}
                  roughness={1}
                  depthScale={1.2}
                  minDepthThreshold={0.5}
                  maxDepthThreshold={1.4}
                  color='#050505'
                  metalness={0.7}
                />
              </mesh>
            </group>
            <Environment preset='city' />  */
}
