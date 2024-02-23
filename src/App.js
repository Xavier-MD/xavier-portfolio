import { Html, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import LandingTextAnimation from './components/landingTextAnimation';

export default function App() {
  return (
    <div className='App'>
      <div className='w-screen h-screen bg-xWhite2 overflow-hidden p-5'>
        <div className='w-full h-full bg-xBlack rounded-md'>
          <Canvas dpr={[1, 2]} shadows={true}>
            <perspectiveCamera
              makeDefault={true}
              resolution={1024}
              fov={75}
              position={[0, 0, 10]}
              near={0.1}
              far={1000}
            />
            <ambientLight intensity={0.5} />
            <Html center={true}>
              <LandingTextAnimation />
            </Html>
            <OrbitControls />
          </Canvas>
        </div>
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
